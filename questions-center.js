(() => {
  "use strict";

  const STORE_KEY = "pmmgQuestionCenterV1"; // mantém os dados da V1
  const ROOT_ID = "questionCenterRoot";
  const LETTERS = ["A", "B", "C", "D", "E", "F"];

  const DEFAULT_STATE = {
    history: [],
    errors: {},
    lastConfig: {
      subject: "",
      topic: "",
      amount: 10,
      mode: "training",
      timeLimit: 20
    }
  };

  let state = loadState();
  let bank = [];
  let session = null;
  let selectedOption = null;
  let questionAnswered = false;
  let timerId = null;

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function loadState() {
    try {
      const saved = JSON.parse(
        localStorage.getItem(STORE_KEY) || "null"
      );

      return {
        ...clone(DEFAULT_STATE),
        ...(saved && typeof saved === "object" ? saved : {}),
        history: Array.isArray(saved?.history)
          ? saved.history
          : [],
        errors:
          saved?.errors && typeof saved.errors === "object"
            ? saved.errors
            : {},
        lastConfig: {
          ...DEFAULT_STATE.lastConfig,
          ...(saved?.lastConfig || {})
        }
      };
    } catch (error) {
      console.warn(
        "Não foi possível ler os dados da Central de Questões.",
        error
      );

      return clone(DEFAULT_STATE);
    }
  }

  function saveState() {
    localStorage.setItem(
      STORE_KEY,
      JSON.stringify(state)
    );
  }

  function clearSessionTimer() {
    if (timerId) {
      window.clearInterval(timerId);
      timerId = null;
    }
  }

  function formatClock(totalSeconds) {
    const safe = Math.max(
      0,
      Number(totalSeconds || 0)
    );

    const minutes = String(
      Math.floor(safe / 60)
    ).padStart(2, "0");

    const seconds = String(
      safe % 60
    ).padStart(2, "0");

    return `${minutes}:${seconds}`;
  }

  function updateTimerDisplay() {
    if (
      !session ||
      session.mode !== "simulation" ||
      !session.deadline
    ) {
      return;
    }

    const remaining = Math.max(
      0,
      Math.ceil(
        (session.deadline - Date.now()) /
          1000
      )
    );

    const timer =
      document.getElementById("qcTimer");

    if (timer) {
      timer.textContent =
        formatClock(remaining);

      timer.classList.toggle(
        "urgent",
        remaining <= 60
      );
    }

    if (remaining <= 0) {
      clearSessionTimer();

      if (!session.finished) {
        finishSession({
          timedOut: true
        });
      }
    }
  }

  function startSessionTimer() {
    clearSessionTimer();

    if (
      !session ||
      session.mode !== "simulation" ||
      !session.deadline
    ) {
      return;
    }

    updateTimerDisplay();

    timerId = window.setInterval(
      updateTimerDisplay,
      1000
    );
  }

  function createId() {
    return (
      crypto.randomUUID?.() ||
      `${Date.now()}-${Math.random()
        .toString(16)
        .slice(2)}`
    );
  }

  function localDateKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(
      date.getMonth() + 1
    ).padStart(2, "0");
    const day = String(
      date.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  function shuffle(items) {
    const copy = items.slice();

    for (
      let index = copy.length - 1;
      index > 0;
      index -= 1
    ) {
      const randomIndex = Math.floor(
        Math.random() * (index + 1)
      );

      [
        copy[index],
        copy[randomIndex]
      ] = [
        copy[randomIndex],
        copy[index]
      ];
    }

    return copy;
  }

  function buildBank() {
    const lessons =
      window.PMMG_LESSONS || {};

    return Object.entries(lessons)
      .flatMap(([lessonKey, lesson]) => {
        const separator =
          lessonKey.indexOf("::");

        if (
          separator < 0 ||
          !Array.isArray(lesson?.questions)
        ) {
          return [];
        }

        const subject =
          lessonKey.slice(0, separator);
        const topic =
          lessonKey.slice(separator + 2);

        return lesson.questions
          .map((item, index) => {
            if (
              !item?.prompt ||
              !Array.isArray(item.options) ||
              !Number.isInteger(item.correct)
            ) {
              return null;
            }

            return {
              id: `${lessonKey}::${index}`,
              subject,
              topic,
              prompt: item.prompt,
              options: item.options.slice(),
              correct: item.correct,
              explanation:
                item.explanation ||
                "Revise o conteúdo da aula."
            };
          })
          .filter(Boolean);
      });
  }

  function getSubjects() {
    return [
      ...new Set(
        bank.map((item) => item.subject)
      )
    ];
  }

  function getTopics(subject) {
    return [
      ...new Set(
        bank
          .filter(
            (item) =>
              !subject ||
              item.subject === subject
          )
          .map((item) => item.topic)
      )
    ];
  }

  function getRoot() {
    return document.getElementById(ROOT_ID);
  }

  function preparePage() {
    const section =
      document.getElementById("questoes");

    if (!section) {
      return null;
    }

    if (getRoot()) {
      return getRoot();
    }

    const originalChildren = [
      ...section.children
    ];

    originalChildren.forEach((child) => {
      child.classList.add(
        "qc-legacy-content"
      );
    });

    const root =
      document.createElement("div");

    root.id = ROOT_ID;
    section.prepend(root);

    return root;
  }

  function mainAppTotals() {
    try {
      const mainState = JSON.parse(
        localStorage.getItem("pmmg2027") ||
          "{}"
      );

      const items = Array.isArray(
        mainState.questions
      )
        ? mainState.questions
        : [];

      const total = items.reduce(
        (sum, item) =>
          sum + Number(item.total || 0),
        0
      );

      const correct = items.reduce(
        (sum, item) =>
          sum + Number(item.correct || 0),
        0
      );

      return {
        total,
        correct,
        accuracy: total
          ? Math.round(
              (correct / total) * 100
            )
          : 0
      };
    } catch {
      return {
        total: 0,
        correct: 0,
        accuracy: 0
      };
    }
  }

  function centralTotals() {
    const total = state.history.reduce(
      (sum, item) =>
        sum + Number(item.total || 0),
      0
    );

    const correct = state.history.reduce(
      (sum, item) =>
        sum + Number(item.correct || 0),
      0
    );

    return {
      total,
      correct,
      accuracy: total
        ? Math.round(
            (correct / total) * 100
          )
        : 0
    };
  }

  function pendingErrors() {
    const validIds = new Set(
      bank.map((item) => item.id)
    );

    return Object.values(state.errors)
      .filter(
        (item) =>
          item &&
          validIds.has(item.id)
      );
  }

  function renderHome() {
    clearSessionTimer();

    const root = getRoot();

    if (!root) {
      return;
    }

    session = null;
    selectedOption = null;
    questionAnswered = false;

    const subjects = getSubjects();
    const configuredSubject =
      subjects.includes(
        state.lastConfig.subject
      )
        ? state.lastConfig.subject
        : "";

    const topics =
      getTopics(configuredSubject);

    const configuredTopic =
      topics.includes(
        state.lastConfig.topic
      )
        ? state.lastConfig.topic
        : "";

    const configuredMode =
      ["training", "simulation"]
        .includes(
          state.lastConfig.mode
        )
        ? state.lastConfig.mode
        : "training";

    const configuredTime =
      [0, 10, 20, 30, 60]
        .includes(
          Number(
            state.lastConfig.timeLimit
          )
        )
        ? Number(
            state.lastConfig.timeLimit
          )
        : 20;

    const appTotals = mainAppTotals();
    const centerTotals = centralTotals();
    const errors = pendingErrors();

    const simulationCount =
      state.history.filter(
        (item) =>
          item.mode === "simulation"
      ).length;

    const recent = state.history
      .slice()
      .reverse()
      .slice(0, 5);

    root.innerHTML = `
      <header class="qc-hero">
        <div>
          <span class="eyebrow">
            TREINO E SIMULADO
          </span>

          <h2>Central de Questões</h2>

          <p>
            Treine com correção imediata
            ou enfrente um simulado
            cronometrado com resultado e
            revisão somente no final.
          </p>
        </div>

        <div class="qc-bank-count">
          <strong>${bank.length}</strong>
          <span>questões disponíveis</span>
        </div>
      </header>

      <div class="qc-stats">
        <article class="qc-stat-card">
          <span>Questões registradas</span>
          <strong>${appTotals.total}</strong>
          <small>Histórico geral do app</small>
        </article>

        <article class="qc-stat-card">
          <span>Taxa geral</span>
          <strong>${appTotals.accuracy}%</strong>
          <small>
            ${appTotals.correct} acertos
          </small>
        </article>

        <article class="qc-stat-card">
          <span>Simulados concluídos</span>
          <strong>${simulationCount}</strong>
          <small>
            ${state.history.length}
            atividades na Central
          </small>
        </article>

        <article class="qc-stat-card">
          <span>Erros pendentes</span>
          <strong>${errors.length}</strong>
          <small>Para revisar novamente</small>
        </article>
      </div>

      <div class="qc-main-grid">
        <article class="panel qc-config-card">
          <span class="eyebrow">
            NOVA ATIVIDADE
          </span>

          <h3>Configure sua sequência</h3>

          <div class="qc-form">
            <div>
              <span class="qc-field-label">
                Modo
              </span>

              <div class="qc-mode-selector">
                <button
                  class="qc-mode-button ${
                    configuredMode ===
                    "training"
                      ? "active"
                      : ""
                  }"
                  type="button"
                  data-qc-mode="training"
                >
                  <span>🎯</span>
                  <strong>Treino</strong>
                  <small>
                    Correção após cada questão
                  </small>
                </button>

                <button
                  class="qc-mode-button ${
                    configuredMode ===
                    "simulation"
                      ? "active"
                      : ""
                  }"
                  type="button"
                  data-qc-mode="simulation"
                >
                  <span>⏱️</span>
                  <strong>Simulado</strong>
                  <small>
                    Correção somente no final
                  </small>
                </button>
              </div>
            </div>

            <label>
              Disciplina

              <select id="qcSubject">
                <option value="">
                  Todas as disciplinas
                </option>

                ${subjects
                  .map(
                    (subject) => `
                      <option
                        value="${escapeHtml(subject)}"
                        ${
                          subject ===
                          configuredSubject
                            ? "selected"
                            : ""
                        }
                      >
                        ${escapeHtml(subject)}
                      </option>
                    `
                  )
                  .join("")}
              </select>
            </label>

            <label>
              Tópico

              <select id="qcTopic">
                <option value="">
                  Todos os tópicos
                </option>

                ${topics
                  .map(
                    (topic) => `
                      <option
                        value="${escapeHtml(topic)}"
                        ${
                          topic ===
                          configuredTopic
                            ? "selected"
                            : ""
                        }
                      >
                        ${escapeHtml(topic)}
                      </option>
                    `
                  )
                  .join("")}
              </select>
            </label>

            <div>
              <span class="qc-field-label">
                Quantidade
              </span>

              <div class="qc-amounts">
                ${[5, 10, 20, "all"]
                  .map((amount) => {
                    const value =
                      amount === "all"
                        ? "all"
                        : String(amount);

                    const selected =
                      String(
                        state.lastConfig.amount
                      ) === value;

                    return `
                      <button
                        class="qc-amount ${
                          selected
                            ? "active"
                            : ""
                        }"
                        type="button"
                        data-qc-amount="${value}"
                      >
                        ${
                          amount === "all"
                            ? "Todas"
                            : amount
                        }
                      </button>
                    `;
                  })
                  .join("")}
              </div>
            </div>

            <div
              class="qc-timer-config ${
                configuredMode ===
                "simulation"
                  ? ""
                  : "qc-hidden"
              }"
              id="qcTimerConfig"
            >
              <span class="qc-field-label">
                Tempo do simulado
              </span>

              <div class="qc-time-options">
                ${[10, 20, 30, 60, 0]
                  .map((minutes) => `
                    <button
                      class="qc-time-button ${
                        configuredTime ===
                        minutes
                          ? "active"
                          : ""
                      }"
                      type="button"
                      data-qc-time="${minutes}"
                    >
                      ${
                        minutes
                          ? `${minutes} min`
                          : "Sem limite"
                      }
                    </button>
                  `)
                  .join("")}
              </div>
            </div>

            <div
              class="qc-availability"
              id="qcAvailability"
            ></div>

            <button
              class="primary-btn qc-start-button"
              id="qcStart"
              type="button"
            >
              ${
                configuredMode ===
                "simulation"
                  ? "Iniciar simulado"
                  : "Iniciar treino"
              }
            </button>
          </div>
        </article>

        <article class="panel qc-errors-card">
          <div class="qc-card-heading">
            <div>
              <span class="eyebrow">
                CADERNO DE ERROS
              </span>

              <h3>Reforce seus pontos fracos</h3>
            </div>

            <span class="qc-error-badge">
              ${errors.length}
            </span>
          </div>

          ${
            errors.length
              ? renderErrorGroups(errors)
              : `
                <div class="qc-empty">
                  <span>✅</span>
                  <strong>
                    Nenhum erro pendente
                  </strong>
                  <p>
                    As questões erradas
                    aparecerão aqui para
                    serem refeitas.
                  </p>
                </div>
              `
          }

          <button
            class="ghost-btn qc-review-button"
            id="qcReviewErrors"
            type="button"
            ${errors.length ? "" : "disabled"}
          >
            Revisar questões erradas
          </button>
        </article>
      </div>

      <article class="panel qc-history-card">
        <div class="qc-card-heading">
          <div>
            <span class="eyebrow">
              HISTÓRICO
            </span>

            <h3>Últimas atividades</h3>
          </div>
        </div>

        ${
          recent.length
            ? `
              <div class="qc-history-list">
                ${recent
                  .map(renderHistoryItem)
                  .join("")}
              </div>
            `
            : `
              <div class="qc-empty compact">
                <p>
                  Seu primeiro resultado
                  aparecerá aqui.
                </p>
              </div>
            `
        }
      </article>
    `;

    bindHomeEvents();
    updateModeUi();
    updateAvailability();
  }

  function renderErrorGroups(errors) {
    const groups = errors.reduce(
      (result, item) => {
        result[item.subject] =
          (result[item.subject] || 0) + 1;

        return result;
      },
      {}
    );

    return `
      <div class="qc-error-groups">
        ${Object.entries(groups)
          .sort(
            (a, b) => b[1] - a[1]
          )
          .map(
            ([subject, count]) => `
              <div class="qc-error-row">
                <span>
                  ${escapeHtml(subject)}
                </span>

                <strong>${count}</strong>
              </div>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderHistoryItem(item) {
    const date = new Date(item.createdAt);

    const label =
      item.mode === "errors"
        ? "Revisão de erros"
        : item.mode === "simulation"
          ? "Simulado"
          : item.subject ||
            "Treino misto";

    return `
      <div class="qc-history-item">
        <div class="qc-history-copy">
          <strong>
            ${escapeHtml(label)}
          </strong>

          <small>
            ${escapeHtml(
              item.topic ||
                (item.mode === "errors"
                  ? "Caderno de erros"
                  : item.subject ||
                    "Todas as disciplinas")
            )}
            •
            ${Number(item.correct || 0)}/${
              Number(item.total || 0)
            }
            •
            ${date.toLocaleDateString(
              "pt-BR"
            )}
          </small>
        </div>

        <div class="qc-history-actions">
          ${
            Array.isArray(item.answers) &&
            item.answers.length
              ? `
                <button
                  class="text-btn"
                  type="button"
                  data-qc-history-review="${escapeHtml(
                    item.id
                  )}"
                >
                  Revisar
                </button>
              `
              : ""
          }

          <span
            class="qc-score-tag ${
              Number(item.percentage || 0) >= 70
                ? "good"
                : "review"
            }"
          >
            ${Number(item.percentage || 0)}%
          </span>
        </div>
      </div>
    `;
  }

  function bindHomeEvents() {
    const subject =
      document.getElementById("qcSubject");

    const topic =
      document.getElementById("qcTopic");

    subject?.addEventListener(
      "change",
      () => {
        const topics =
          getTopics(subject.value);

        topic.innerHTML = `
          <option value="">
            Todos os tópicos
          </option>

          ${topics
            .map(
              (item) => `
                <option value="${escapeHtml(
                  item
                )}">
                  ${escapeHtml(item)}
                </option>
              `
            )
            .join("")}
        `;

        updateAvailability();
      }
    );

    topic?.addEventListener(
      "change",
      updateAvailability
    );

    document
      .querySelectorAll(
        "[data-qc-mode]"
      )
      .forEach((button) => {
        button.addEventListener(
          "click",
          () => {
            document
              .querySelectorAll(
                "[data-qc-mode]"
              )
              .forEach((item) =>
                item.classList.remove(
                  "active"
                )
              );

            button.classList.add(
              "active"
            );

            updateModeUi();
          }
        );
      });

    document
      .querySelectorAll(
        "[data-qc-amount]"
      )
      .forEach((button) => {
        button.addEventListener(
          "click",
          () => {
            document
              .querySelectorAll(
                "[data-qc-amount]"
              )
              .forEach((item) =>
                item.classList.remove(
                  "active"
                )
              );

            button.classList.add(
              "active"
            );

            updateAvailability();
          }
        );
      });

    document
      .querySelectorAll(
        "[data-qc-time]"
      )
      .forEach((button) => {
        button.addEventListener(
          "click",
          () => {
            document
              .querySelectorAll(
                "[data-qc-time]"
              )
              .forEach((item) =>
                item.classList.remove(
                  "active"
                )
              );

            button.classList.add(
              "active"
            );
          }
        );
      });

    document
      .getElementById("qcStart")
      ?.addEventListener(
        "click",
        startConfiguredTraining
      );

    document
      .getElementById("qcReviewErrors")
      ?.addEventListener(
        "click",
        startErrorReview
      );

    document
      .querySelectorAll(
        "[data-qc-history-review]"
      )
      .forEach((button) => {
        button.addEventListener(
          "click",
          () => {
            const result =
              state.history.find(
                (item) =>
                  String(item.id) ===
                  button.dataset
                    .qcHistoryReview
              );

            if (result) {
              renderAnswerReview(
                result,
                () => renderHome()
              );
            }
          }
        );
      });
  }

  function selectedMode() {
    return (
      document.querySelector(
        "[data-qc-mode].active"
      )?.dataset.qcMode ||
      "training"
    );
  }

  function selectedAmount() {
    const button =
      document.querySelector(
        "[data-qc-amount].active"
      );

    return (
      button?.dataset.qcAmount ||
      "10"
    );
  }

  function selectedTimeLimit() {
    return Number(
      document.querySelector(
        "[data-qc-time].active"
      )?.dataset.qcTime || 20
    );
  }

  function updateModeUi() {
    const mode = selectedMode();

    document
      .getElementById("qcTimerConfig")
      ?.classList.toggle(
        "qc-hidden",
        mode !== "simulation"
      );

    const start =
      document.getElementById("qcStart");

    if (start) {
      start.textContent =
        mode === "simulation"
          ? "Iniciar simulado"
          : "Iniciar treino";
    }
  }

  function configuredPool() {
    const subject =
      document.getElementById(
        "qcSubject"
      )?.value || "";

    const topic =
      document.getElementById(
        "qcTopic"
      )?.value || "";

    return bank.filter(
      (item) =>
        (!subject ||
          item.subject === subject) &&
        (!topic ||
          item.topic === topic)
    );
  }

  function updateAvailability() {
    const display =
      document.getElementById(
        "qcAvailability"
      );

    if (!display) {
      return;
    }

    const count =
      configuredPool().length;
    const mode = selectedMode();

    display.innerHTML = `
      <strong>${count}</strong>
      questão${count === 1 ? "" : "ões"}
      encontrada${count === 1 ? "" : "s"}.
      ${
        mode === "simulation"
          ? "As respostas serão corrigidas somente ao finalizar."
          : "Cada resposta será corrigida imediatamente."
      }
    `;

    const start =
      document.getElementById("qcStart");

    if (start) {
      start.disabled = count === 0;
    }
  }

  function startConfiguredTraining() {
    const pool = configuredPool();

    if (!pool.length) {
      alert(
        "Nenhuma questão foi encontrada para esse filtro."
      );

      return;
    }

    const subject =
      document.getElementById(
        "qcSubject"
      )?.value || "";

    const topic =
      document.getElementById(
        "qcTopic"
      )?.value || "";

    const mode = selectedMode();
    const timeLimit =
      mode === "simulation"
        ? selectedTimeLimit()
        : 0;

    const amountValue =
      selectedAmount();

    const amount =
      amountValue === "all"
        ? pool.length
        : Math.min(
            pool.length,
            Number(amountValue || 10)
          );

    state.lastConfig = {
      subject,
      topic,
      amount:
        amountValue === "all"
          ? "all"
          : Number(amountValue),
      mode,
      timeLimit
    };

    saveState();

    startSession({
      items: shuffle(pool).slice(
        0,
        amount
      ),
      mode,
      subject,
      topic,
      timeLimit
    });
  }

  function startErrorReview() {
    const errorIds = new Set(
      pendingErrors().map(
        (item) => item.id
      )
    );

    const pool = bank.filter(
      (item) => errorIds.has(item.id)
    );

    if (!pool.length) {
      alert(
        "Seu caderno de erros está vazio."
      );

      return;
    }

    startSession({
      items: shuffle(pool),
      mode: "errors",
      subject: "",
      topic: "",
      timeLimit: 0
    });
  }

  function startSession({
    items,
    mode,
    subject,
    topic,
    timeLimit = 0
  }) {
    clearSessionTimer();

    const limitSeconds =
      mode === "simulation" &&
      Number(timeLimit) > 0
        ? Number(timeLimit) * 60
        : 0;

    session = {
      id: createId(),
      items,
      mode,
      subject,
      topic,
      timeLimit:
        Number(timeLimit || 0),
      index: 0,
      answers:
        new Array(items.length)
          .fill(null),
      selections:
        new Array(items.length)
          .fill(null),
      startedAt: Date.now(),
      deadline: limitSeconds
        ? Date.now() +
          limitSeconds * 1000
        : null,
      finished: false
    };

    selectedOption = null;
    questionAnswered = false;

    renderQuestion();
    startSessionTimer();
  }

  function currentQuestion() {
    return session?.items?.[
      session.index
    ];
  }

  function answeredCount() {
    return session?.selections
      ?.filter(
        (value) =>
          value !== null &&
          value !== undefined
      ).length || 0;
  }

  function renderSimulationNavigator() {
    if (
      !session ||
      session.mode !== "simulation"
    ) {
      return "";
    }

    return `
      <div class="qc-sim-navigator">
        ${session.items
          .map((_, index) => `
            <button
              class="qc-nav-number ${
                index === session.index
                  ? "current"
                  : ""
              } ${
                session.selections[index] !==
                  null &&
                session.selections[index] !==
                  undefined
                  ? "answered"
                  : ""
              }"
              type="button"
              data-qc-jump="${index}"
              aria-label="Ir para a questão ${
                index + 1
              }"
            >
              ${index + 1}
            </button>
          `)
          .join("")}
      </div>
    `;
  }

  function renderQuestion() {
    const root = getRoot();
    const item = currentQuestion();

    if (!root || !session || !item) {
      renderHome();
      return;
    }

    const isSimulation =
      session.mode === "simulation";

    selectedOption =
      session.selections[
        session.index
      ];

    questionAnswered =
      !isSimulation &&
      Boolean(
        session.answers[
          session.index
        ]
      );

    const number =
      session.index + 1;

    const total =
      session.items.length;

    const progress =
      Math.round(
        ((number - 1) / total) * 100
      );

    root.innerHTML = `
      <article class="panel qc-question-screen">
        <div class="qc-question-top">
          <button
            class="ghost-btn qc-exit-button"
            id="qcExit"
            type="button"
          >
            ← Sair
          </button>

          <div class="qc-question-status">
            ${
              isSimulation
                ? `
                  <span
                    class="qc-live-timer"
                    id="qcTimer"
                  >
                    ${
                      session.deadline
                        ? "--:--"
                        : "Sem limite"
                    }
                  </span>
                `
                : ""
            }

            <span>
              Questão ${number} de ${total}
            </span>
          </div>
        </div>

        <div class="qc-progress">
          <i style="width:${progress}%"></i>
        </div>

        ${
          isSimulation
            ? `
              <div class="qc-sim-summary">
                <span>
                  Respondidas:
                  <strong>
                    ${answeredCount()}/${total}
                  </strong>
                </span>

                <button
                  class="text-btn"
                  id="qcFinishNow"
                  type="button"
                >
                  Finalizar simulado
                </button>
              </div>

              ${renderSimulationNavigator()}
            `
            : ""
        }

        <div class="qc-question-meta">
          <span class="tag">
            ${escapeHtml(item.subject)}
          </span>

          <span class="tag secondary">
            ${escapeHtml(item.topic)}
          </span>
        </div>

        <h2 class="qc-prompt">
          ${escapeHtml(item.prompt)}
        </h2>

        <div
          class="qc-options"
          id="qcOptions"
        >
          ${item.options
            .map(
              (option, index) => `
                <button
                  class="qc-option ${
                    selectedOption === index
                      ? "selected"
                      : ""
                  }"
                  type="button"
                  data-qc-option="${index}"
                >
                  <span class="qc-option-letter">
                    ${
                      LETTERS[index] ||
                      index + 1
                    }
                  </span>

                  <span>
                    ${escapeHtml(option)}
                  </span>
                </button>
              `
            )
            .join("")}
        </div>

        ${
          isSimulation
            ? `
              <div class="qc-sim-actions">
                <button
                  class="ghost-btn"
                  id="qcPrevious"
                  type="button"
                  ${
                    session.index === 0
                      ? "disabled"
                      : ""
                  }
                >
                  Anterior
                </button>

                <button
                  class="primary-btn"
                  id="qcNext"
                  type="button"
                >
                  ${
                    session.index ===
                    total - 1
                      ? "Revisar e finalizar"
                      : "Próxima"
                  }
                </button>
              </div>
            `
            : `
              <div
                class="qc-feedback"
                id="qcFeedback"
                hidden
              ></div>

              <button
                class="primary-btn qc-confirm-button"
                id="qcConfirm"
                type="button"
                ${
                  selectedOption === null ||
                  selectedOption ===
                    undefined
                    ? "disabled"
                    : ""
                }
              >
                Confirmar resposta
              </button>
            `
        }
      </article>
    `;

    bindQuestionEvents();
    updateTimerDisplay();
  }

  function bindQuestionEvents() {
    const isSimulation =
      session?.mode === "simulation";

    document
      .querySelectorAll(
        "[data-qc-option]"
      )
      .forEach((button) => {
        button.addEventListener(
          "click",
          () => {
            if (
              !isSimulation &&
              questionAnswered
            ) {
              return;
            }

            selectedOption = Number(
              button.dataset.qcOption
            );

            session.selections[
              session.index
            ] = selectedOption;

            document
              .querySelectorAll(
                "[data-qc-option]"
              )
              .forEach((item) =>
                item.classList.remove(
                  "selected"
                )
              );

            button.classList.add(
              "selected"
            );

            if (isSimulation) {
              document
                .querySelector(
                  `[data-qc-jump="${
                    session.index
                  }"]`
                )
                ?.classList.add(
                  "answered"
                );

              const count =
                document.querySelector(
                  ".qc-sim-summary strong"
                );

              if (count) {
                count.textContent =
                  `${answeredCount()}/${
                    session.items.length
                  }`;
              }

              return;
            }

            const confirm =
              document.getElementById(
                "qcConfirm"
              );

            if (confirm) {
              confirm.disabled = false;
            }
          }
        );
      });

    document
      .getElementById("qcConfirm")
      ?.addEventListener(
        "click",
        () => {
          if (questionAnswered) {
            goNext();
          } else {
            confirmAnswer();
          }
        }
      );

    document
      .getElementById("qcPrevious")
      ?.addEventListener(
        "click",
        () => {
          if (
            session &&
            session.index > 0
          ) {
            session.index -= 1;
            renderQuestion();
          }
        }
      );

    document
      .getElementById("qcNext")
      ?.addEventListener(
        "click",
        () => {
          if (!session) {
            return;
          }

          if (
            session.index >=
            session.items.length - 1
          ) {
            requestFinishSimulation();
            return;
          }

          session.index += 1;
          renderQuestion();

          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }
      );

    document
      .getElementById("qcFinishNow")
      ?.addEventListener(
        "click",
        requestFinishSimulation
      );

    document
      .querySelectorAll(
        "[data-qc-jump]"
      )
      .forEach((button) => {
        button.addEventListener(
          "click",
          () => {
            if (!session) {
              return;
            }

            session.index = Number(
              button.dataset.qcJump
            );

            renderQuestion();
          }
        );
      });

    document
      .getElementById("qcExit")
      ?.addEventListener(
        "click",
        () => {
          const hasAnswers =
            answeredCount() > 0;

          const activity =
            session?.mode ===
            "simulation"
              ? "simulado"
              : "treino";

          if (
            hasAnswers &&
            !confirm(
              `Sair deste ${activity}? O resultado incompleto não será salvo.`
            )
          ) {
            return;
          }

          renderHome();
        }
      );
  }

  function requestFinishSimulation() {
    if (
      !session ||
      session.mode !== "simulation"
    ) {
      return;
    }

    const unanswered =
      session.selections.filter(
        (value) =>
          value === null ||
          value === undefined
      ).length;

    const message = unanswered
      ? `Você deixou ${unanswered} questão${
          unanswered === 1 ? "" : "ões"
        } em branco. Finalizar mesmo assim?`
      : "Finalizar o simulado e corrigir todas as respostas?";

    if (!confirm(message)) {
      return;
    }

    finishSession({
      timedOut: false
    });
  }

  function confirmAnswer() {
    const item = currentQuestion();

    if (
      !item ||
      selectedOption === null ||
      selectedOption === undefined ||
      questionAnswered
    ) {
      return;
    }

    questionAnswered = true;

    const isCorrect =
      selectedOption === item.correct;

    if (isCorrect) {
      delete state.errors[item.id];
    } else {
      const previous =
        state.errors[item.id];

      state.errors[item.id] = {
        id: item.id,
        subject: item.subject,
        topic: item.topic,
        attempts:
          Number(previous?.attempts || 0) +
          1,
        lastAt:
          new Date().toISOString()
      };
    }

    session.answers[
      session.index
    ] = createAnswerSnapshot(
      item,
      selectedOption
    );

    saveState();

    document
      .querySelectorAll(
        "[data-qc-option]"
      )
      .forEach((button) => {
        const index = Number(
          button.dataset.qcOption
        );

        button.disabled = true;
        button.classList.remove(
          "selected"
        );

        if (index === item.correct) {
          button.classList.add(
            "correct"
          );
        } else if (
          index === selectedOption
        ) {
          button.classList.add(
            "wrong"
          );
        } else {
          button.classList.add(
            "muted"
          );
        }
      });

    const feedback =
      document.getElementById(
        "qcFeedback"
      );

    if (feedback) {
      feedback.hidden = false;
      feedback.className =
        `qc-feedback ${
          isCorrect
            ? "correct"
            : "wrong"
        }`;

      feedback.innerHTML = `
        <strong>
          ${
            isCorrect
              ? "Resposta correta! ✅"
              : "Resposta incorreta"
          }
        </strong>

        ${
          isCorrect
            ? ""
            : `
              <p>
                Correta:
                <strong>
                  ${escapeHtml(
                    item.options[
                      item.correct
                    ]
                  )}
                </strong>
              </p>
            `
        }

        <p>
          ${escapeHtml(
            item.explanation
          )}
        </p>
      `;
    }

    const confirmButton =
      document.getElementById(
        "qcConfirm"
      );

    if (confirmButton) {
      confirmButton.disabled = false;
      confirmButton.textContent =
        session.index ===
        session.items.length - 1
          ? "Ver resultado"
          : "Próxima questão";
    }
  }

  function createAnswerSnapshot(
    item,
    selected
  ) {
    const hasSelection =
      selected !== null &&
      selected !== undefined;

    return {
      id: item.id,
      subject: item.subject,
      topic: item.topic,
      prompt: item.prompt,
      options: item.options.slice(),
      selected:
        hasSelection
          ? Number(selected)
          : null,
      correctIndex: item.correct,
      isCorrect:
        hasSelection &&
        Number(selected) ===
          item.correct,
      explanation:
        item.explanation ||
        "Revise o conteúdo da aula."
    };
  }

  function goNext() {
    if (!session) {
      renderHome();
      return;
    }

    if (
      session.index >=
      session.items.length - 1
    ) {
      finishSession();
      return;
    }

    session.index += 1;
    renderQuestion();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function finishSession({
    timedOut = false
  } = {}) {
    if (
      !session ||
      session.finished
    ) {
      return;
    }

    session.finished = true;
    clearSessionTimer();

    const finished = session;

    const answers =
      finished.items.map(
        (item, index) => {
          return (
            finished.answers[index] ||
            createAnswerSnapshot(
              item,
              finished.selections[index]
            )
          );
        }
      );

    if (
      finished.mode === "simulation"
    ) {
      answers.forEach((answer) => {
        if (answer.isCorrect) {
          delete state.errors[
            answer.id
          ];

          return;
        }

        const previous =
          state.errors[answer.id];

        state.errors[answer.id] = {
          id: answer.id,
          subject: answer.subject,
          topic: answer.topic,
          attempts:
            Number(
              previous?.attempts || 0
            ) + 1,
          lastAt:
            new Date().toISOString()
        };
      });
    }

    const total =
      answers.length;

    const correct =
      answers.filter(
        (answer) => answer.isCorrect
      ).length;

    const unanswered =
      answers.filter(
        (answer) =>
          answer.selected === null
      ).length;

    const wrong =
      total - correct - unanswered;

    const percentage =
      total
        ? Math.round(
            (correct / total) * 100
          )
        : 0;

    const durationSeconds =
      Math.max(
        1,
        Math.round(
          (Date.now() -
            finished.startedAt) /
            1000
        )
      );

    const breakdown =
      answers.reduce(
        (result, answer) => {
          if (!result[answer.subject]) {
            result[answer.subject] = {
              total: 0,
              correct: 0,
              unanswered: 0
            };
          }

          result[answer.subject].total += 1;

          if (answer.isCorrect) {
            result[
              answer.subject
            ].correct += 1;
          }

          if (
            answer.selected === null
          ) {
            result[
              answer.subject
            ].unanswered += 1;
          }

          return result;
        },
        {}
      );

    const historyItem = {
      id: finished.id,
      mode: finished.mode,
      subject: finished.subject,
      topic: finished.topic,
      timeLimit:
        finished.timeLimit || 0,
      total,
      correct,
      wrong,
      unanswered,
      percentage,
      durationSeconds,
      timedOut:
        Boolean(timedOut),
      breakdown,
      answers,
      createdAt:
        new Date().toISOString(),
      dateKey: localDateKey()
    };

    state.history.push(historyItem);
    state.history =
      state.history.slice(-100);

    saveState();
    recordInMainApp(breakdown);
    renderResult(historyItem);
  }

  function recordInMainApp(breakdown) {
    const form =
      document.getElementById(
        "questionForm"
      );

    const subject =
      document.getElementById(
        "questionSubject"
      );

    const total =
      document.getElementById(
        "questionTotal"
      );

    const correct =
      document.getElementById(
        "questionCorrect"
      );

    if (
      !form ||
      !subject ||
      !total ||
      !correct
    ) {
      console.warn(
        "O resultado foi salvo na Central, mas o formulário principal não foi encontrado."
      );

      return;
    }

    Object.entries(breakdown)
      .forEach(
        ([
          subjectName,
          values
        ]) => {
          const hasOption = [
            ...subject.options
          ].some(
            (option) =>
              option.value ===
              subjectName
          );

          if (!hasOption) {
            return;
          }

          subject.value =
            subjectName;
          total.value =
            String(values.total);
          correct.value =
            String(values.correct);

          form.dispatchEvent(
            new Event(
              "submit",
              {
                bubbles: true,
                cancelable: true
              }
            )
          );
        }
      );
  }

  function durationText(seconds) {
    const minutes =
      Math.floor(seconds / 60);
    const remaining =
      seconds % 60;

    if (!minutes) {
      return `${remaining}s`;
    }

    return `${minutes}min ${String(
      remaining
    ).padStart(2, "0")}s`;
  }

  function renderResult(result) {
    clearSessionTimer();

    const root = getRoot();

    if (!root) {
      return;
    }

    const approved =
      result.percentage >= 70;

    const title =
      result.mode === "simulation"
        ? result.timedOut
          ? "TEMPO ENCERRADO"
          : "SIMULADO CONCLUÍDO"
        : result.mode === "errors"
          ? "REVISÃO CONCLUÍDA"
          : "TREINO CONCLUÍDO";

    root.innerHTML = `
      <article class="panel qc-result-screen">
        <span class="eyebrow">
          ${title}
        </span>

        <div
          class="qc-result-ring ${
            approved
              ? "approved"
              : "review"
          }"
        >
          <strong>
            ${result.percentage}%
          </strong>

          <span>aproveitamento</span>
        </div>

        <h2>
          ${result.correct} de
          ${result.total} acertos
        </h2>

        <p class="muted">
          Tempo utilizado:
          ${durationText(
            result.durationSeconds
          )}
        </p>

        <div class="qc-result-metrics">
          <div>
            <span>✅</span>
            <strong>${result.correct}</strong>
            <small>Corretas</small>
          </div>

          <div>
            <span>❌</span>
            <strong>${result.wrong || 0}</strong>
            <small>Incorretas</small>
          </div>

          <div>
            <span>○</span>
            <strong>${result.unanswered || 0}</strong>
            <small>Em branco</small>
          </div>
        </div>

        <div class="qc-result-breakdown">
          ${Object.entries(
            result.breakdown
          )
            .map(
              ([
                subject,
                values
              ]) => {
                const percentage =
                  Math.round(
                    (values.correct /
                      values.total) *
                      100
                  );

                return `
                  <div class="qc-result-row">
                    <div>
                      <strong>
                        ${escapeHtml(
                          subject
                        )}
                      </strong>

                      <small>
                        ${values.correct}/${
                          values.total
                        } acertos
                        ${
                          values.unanswered
                            ? ` • ${values.unanswered} em branco`
                            : ""
                        }
                      </small>
                    </div>

                    <span>
                      ${percentage}%
                    </span>
                  </div>
                `;
              }
            )
            .join("")}
        </div>

        <div class="qc-result-actions">
          <button
            class="primary-btn"
            id="qcReviewAnswers"
            type="button"
          >
            Revisar respostas
          </button>

          <button
            class="ghost-btn"
            id="qcRepeat"
            type="button"
          >
            Fazer novamente
          </button>

          <button
            class="ghost-btn"
            id="qcResultHome"
            type="button"
          >
            Voltar à Central
          </button>

          ${
            pendingErrors().length
              ? `
                <button
                  class="ghost-btn"
                  id="qcResultErrors"
                  type="button"
                >
                  Revisar erros
                </button>
              `
              : ""
          }
        </div>
      </article>
    `;

    document
      .getElementById(
        "qcReviewAnswers"
      )
      ?.addEventListener(
        "click",
        () =>
          renderAnswerReview(
            result,
            () => renderResult(result)
          )
      );

    document
      .getElementById("qcResultHome")
      ?.addEventListener(
        "click",
        renderHome
      );

    document
      .getElementById("qcResultErrors")
      ?.addEventListener(
        "click",
        startErrorReview
      );

    document
      .getElementById("qcRepeat")
      ?.addEventListener(
        "click",
        () => {
          if (
            result.mode === "errors"
          ) {
            startErrorReview();
            return;
          }

          const subject =
            result.subject || "";
          const topic =
            result.topic || "";

          const pool = bank.filter(
            (item) =>
              (!subject ||
                item.subject ===
                  subject) &&
              (!topic ||
                item.topic === topic)
          );

          const amount =
            Math.min(
              pool.length,
              result.total || 10
            );

          startSession({
            items:
              shuffle(pool).slice(
                0,
                amount
              ),
            mode:
              result.mode ===
              "simulation"
                ? "simulation"
                : "training",
            subject,
            topic,
            timeLimit:
              result.timeLimit || 0
          });
        }
      );
  }

  function renderAnswerReview(
    result,
    onBack
  ) {
    const root = getRoot();

    if (
      !root ||
      !Array.isArray(result.answers)
    ) {
      return;
    }

    root.innerHTML = `
      <article class="panel qc-review-screen">
        <div class="qc-review-head">
          <div>
            <span class="eyebrow">
              REVISÃO DAS RESPOSTAS
            </span>

            <h2>
              ${result.correct}/${
                result.total
              } acertos
            </h2>
          </div>

          <button
            class="ghost-btn"
            id="qcReviewBack"
            type="button"
          >
            ← Voltar
          </button>
        </div>

        <div class="qc-review-list">
          ${result.answers
            .map(
              (answer, index) => {
                const status =
                  answer.selected === null
                    ? "blank"
                    : answer.isCorrect
                      ? "correct"
                      : "wrong";

                const selectedText =
                  answer.selected === null
                    ? "Não respondida"
                    : answer.options[
                        answer.selected
                      ];

                const correctText =
                  answer.options[
                    answer.correctIndex
                  ];

                return `
                  <section
                    class="qc-review-question ${status}"
                  >
                    <div class="qc-review-number">
                      Questão ${index + 1}
                      •
                      ${escapeHtml(
                        answer.subject
                      )}
                    </div>

                    <h3>
                      ${escapeHtml(
                        answer.prompt
                      )}
                    </h3>

                    <div class="qc-review-answer">
                      <span>
                        Sua resposta
                      </span>

                      <strong>
                        ${escapeHtml(
                          selectedText
                        )}
                      </strong>
                    </div>

                    ${
                      !answer.isCorrect
                        ? `
                          <div class="qc-review-answer correct-answer">
                            <span>
                              Resposta correta
                            </span>

                            <strong>
                              ${escapeHtml(
                                correctText
                              )}
                            </strong>
                          </div>
                        `
                        : ""
                    }

                    <p>
                      ${escapeHtml(
                        answer.explanation
                      )}
                    </p>
                  </section>
                `;
              }
            )
            .join("")}
        </div>

        <button
          class="primary-btn qc-review-bottom"
          id="qcReviewBottom"
          type="button"
        >
          Voltar ao resultado
        </button>
      </article>
    `;

    const goBack = () => {
      if (typeof onBack === "function") {
        onBack();
      } else {
        renderHome();
      }
    };

    document
      .getElementById("qcReviewBack")
      ?.addEventListener(
        "click",
        goBack
      );

    document
      .getElementById("qcReviewBottom")
      ?.addEventListener(
        "click",
        goBack
      );

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function initialize() {
    bank = buildBank();

    const root = preparePage();

    if (!root) {
      return;
    }

    if (!bank.length) {
      root.innerHTML = `
        <article class="panel">
          <span class="eyebrow">
            CENTRAL DE QUESTÕES
          </span>

          <h2>
            Banco de questões indisponível
          </h2>

          <p class="muted">
            Atualize a página e confirme
            se os arquivos das aulas estão
            carregando antes deste módulo.
          </p>
        </article>
      `;

      return;
    }

    renderHome();
  }

  if (
    document.readyState === "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      initialize,
      {
        once: true
      }
    );
  } else {
    window.setTimeout(
      initialize,
      0
    );
  }
})();