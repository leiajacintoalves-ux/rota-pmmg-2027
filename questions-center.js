(() => {
  "use strict";

  const STORE_KEY = "pmmgQuestionCenterV1";
  const ROOT_ID = "questionCenterRoot";
  const LETTERS = ["A", "B", "C", "D", "E", "F"];

  const DEFAULT_STATE = {
    history: [],
    errors: {},
    lastConfig: {
      subject: "",
      topic: "",
      amount: 10
    }
  };

  let state = loadState();
  let bank = [];
  let session = null;
  let selectedOption = null;
  let questionAnswered = false;

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

    const appTotals = mainAppTotals();
    const centerTotals = centralTotals();
    const errors = pendingErrors();

    const recent = state.history
      .slice()
      .reverse()
      .slice(0, 5);

    root.innerHTML = `
      <header class="qc-hero">
        <div>
          <span class="eyebrow">
            TREINO INTELIGENTE
          </span>

          <h2>Central de Questões</h2>

          <p>
            Escolha uma matéria, responda,
            confira a explicação e transforme
            cada erro em revisão.
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
          <span>Treinos na Central</span>
          <strong>${state.history.length}</strong>
          <small>
            ${centerTotals.total} questões
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
            NOVO TREINO
          </span>

          <h3>Monte sua sequência</h3>

          <div class="qc-form">
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
              class="qc-availability"
              id="qcAvailability"
            ></div>

            <button
              class="primary-btn qc-start-button"
              id="qcStart"
              type="button"
            >
              Iniciar treino
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

            <h3>Últimos treinos</h3>
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
        : item.subject ||
          "Treino misto";

    return `
      <div class="qc-history-item">
        <div>
          <strong>
            ${escapeHtml(label)}
          </strong>

          <small>
            ${escapeHtml(
              item.topic ||
                (item.mode === "errors"
                  ? "Caderno de erros"
                  : "Todos os tópicos")
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

    display.innerHTML = `
      <strong>${count}</strong>
      questão${count === 1 ? "" : "ões"}
      encontrada${count === 1 ? "" : "s"}
      para este filtro.
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
          : Number(amountValue)
    };

    saveState();

    startSession({
      items: shuffle(pool).slice(
        0,
        amount
      ),
      mode: "training",
      subject,
      topic
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
      topic: ""
    });
  }

  function startSession({
    items,
    mode,
    subject,
    topic
  }) {
    session = {
      id: createId(),
      items,
      mode,
      subject,
      topic,
      index: 0,
      score: 0,
      answers: [],
      startedAt: Date.now()
    };

    selectedOption = null;
    questionAnswered = false;

    renderQuestion();
  }

  function currentQuestion() {
    return session?.items?.[
      session.index
    ];
  }

  function renderQuestion() {
    const root = getRoot();
    const item = currentQuestion();

    if (!root || !session || !item) {
      renderHome();
      return;
    }

    selectedOption = null;
    questionAnswered = false;

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

          <span>
            Questão ${number} de ${total}
          </span>
        </div>

        <div class="qc-progress">
          <i style="width:${progress}%"></i>
        </div>

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
                  class="qc-option"
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

        <div
          class="qc-feedback"
          id="qcFeedback"
          hidden
        ></div>

        <button
          class="primary-btn qc-confirm-button"
          id="qcConfirm"
          type="button"
          disabled
        >
          Confirmar resposta
        </button>
      </article>
    `;

    bindQuestionEvents();
  }

  function bindQuestionEvents() {
    document
      .querySelectorAll(
        "[data-qc-option]"
      )
      .forEach((button) => {
        button.addEventListener(
          "click",
          () => {
            if (questionAnswered) {
              return;
            }

            selectedOption = Number(
              button.dataset.qcOption
            );

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
      .getElementById("qcExit")
      ?.addEventListener(
        "click",
        () => {
          const hasAnswers =
            session?.answers?.length > 0;

          if (
            hasAnswers &&
            !confirm(
              "Sair deste treino? O resultado incompleto não será salvo."
            )
          ) {
            return;
          }

          renderHome();
        }
      );
  }

  function confirmAnswer() {
    const item = currentQuestion();

    if (
      !item ||
      selectedOption === null ||
      questionAnswered
    ) {
      return;
    }

    questionAnswered = true;

    const isCorrect =
      selectedOption === item.correct;

    if (isCorrect) {
      session.score += 1;
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

    session.answers.push({
      id: item.id,
      subject: item.subject,
      topic: item.topic,
      selected: selectedOption,
      correctIndex: item.correct,
      isCorrect
    });

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

  function finishSession() {
    if (!session) {
      renderHome();
      return;
    }

    const finished = session;
    const total =
      finished.items.length;
    const correct =
      finished.score;
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
      finished.answers.reduce(
        (result, answer) => {
          if (!result[answer.subject]) {
            result[answer.subject] = {
              total: 0,
              correct: 0
            };
          }

          result[answer.subject].total += 1;

          if (answer.isCorrect) {
            result[
              answer.subject
            ].correct += 1;
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
      total,
      correct,
      percentage,
      durationSeconds,
      breakdown,
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
    const root = getRoot();

    if (!root) {
      return;
    }

    const approved =
      result.percentage >= 70;

    root.innerHTML = `
      <article class="panel qc-result-screen">
        <span class="eyebrow">
          TREINO CONCLUÍDO
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
          Tempo total:
          ${durationText(
            result.durationSeconds
          )}
        </p>

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
            session?.mode === "errors"
          ) {
            startErrorReview();
            return;
          }

          const subject =
            session?.subject || "";
          const topic =
            session?.topic || "";

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
              session?.items?.length ||
                10
            );

          startSession({
            items:
              shuffle(pool).slice(
                0,
                amount
              ),
            mode: "training",
            subject,
            topic
          });
        }
      );
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