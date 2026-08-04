(() => {
  "use strict";

  const STORAGE_KEY = "pmmg2027";
  const LAST_SYNC_KEY = "pmmg2027LastSync";

  const SUBJECTS = [
    {
      name: "Português",
      target: 500,
      topics: [
        "Interpretação de textos",
        "Ortografia e acentuação",
        "Classes de palavras",
        "Concordância",
        "Regência e crase",
        "Pontuação e sintaxe",
        "Semântica"
      ]
    },
    {
      name: "Direito Constitucional",
      target: 400,
      topics: [
        "Princípios fundamentais",
        "Direitos e garantias",
        "Direitos sociais",
        "Nacionalidade e direitos políticos",
        "Organização do Estado",
        "Segurança Pública — art. 144",
        "Administração Pública"
      ]
    },
    {
      name: "Direito Administrativo",
      target: 300,
      topics: [
        "Administração Pública",
        "Atos administrativos",
        "Poderes administrativos",
        "Agentes públicos",
        "Licitações — noções",
        "Responsabilidade civil do Estado",
        "Processo administrativo"
      ]
    },
    {
      name: "Direito Penal",
      target: 400,
      topics: [
        "Parte geral",
        "Teoria do crime",
        "Penas",
        "Concurso de pessoas",
        "Crimes contra a pessoa",
        "Crimes contra o patrimônio",
        "Crimes contra a Administração"
      ]
    },
    {
      name: "Processo Penal",
      target: 250,
      topics: [
        "Inquérito policial",
        "Ação penal",
        "Prisões",
        "Provas",
        "Flagrante",
        "Recursos — noções"
      ]
    },
    {
      name: "Direitos Humanos",
      target: 200,
      topics: [
        "Declaração Universal",
        "Dignidade humana",
        "Tratados internacionais",
        "Igualdade",
        "Direitos da criança"
      ]
    },
    {
      name: "Matemática e Raciocínio Lógico",
      target: 600,
      topics: [
        "Operações e frações",
        "Porcentagem",
        "Razão e proporção",
        "Regra de três",
        "Equações",
        "Estatística",
        "Probabilidade",
        "Lógica"
      ]
    },
    {
      name: "Inglês",
      target: 200,
      topics: [
        "Verb to be",
        "Present simple",
        "Past simple",
        "Future",
        "Vocabulário",
        "Reading"
      ]
    },
    {
      name: "Literatura",
      target: 120,
      topics: [
        "Escolas literárias",
        "Leitura das obras do edital",
        "Autores e contexto",
        "Interpretação"
      ]
    }
  ];

  const WEEK = {
    Segunda: [
      ["Português", "1h30"],
      ["Direito Constitucional", "1h30"]
    ],
    Terça: [
      ["Matemática e Raciocínio Lógico", "1h30"],
      ["Direito Administrativo", "1h30"]
    ],
    Quarta: [
      ["Português", "1h30"],
      ["Direito Penal", "1h30"]
    ],
    Quinta: [
      ["Inglês", "1h"],
      ["Direitos Humanos", "1h"],
      ["Atualidades", "30 min"]
    ],
    Sexta: [
      ["Literatura", "1h"],
      ["Processo Penal", "1h30"],
      ["Revisão", "30 min"]
    ],
    Sábado: [
      ["Questões", "2h"],
      ["Lei seca", "1h"],
      ["Simulado", "1h"]
    ],
    Domingo: [["Descanso ou revisão leve", "Livre"]]
  };

  const DEFAULTS = {
    theme: "dark",
    completedTasks: {},
    sessions: [],
    questions: [],
    completedLessons: [],
    reviews: [],
    taf: [],
    goals: {
      hours: 18,
      questions: 250,
      taf: 4,
      date: "2027-12-31"
    },
    streak: 0,
    xp: 0,
    level: 1,
    lastStudyDate: null
  };

  const PAGE_TITLES = {
    dashboard: "Visão geral",
    plano: "Plano semanal",
    disciplinas: "Disciplinas",
    sessao: "Sessão de estudo",
    questoes: "Questões",
    revisoes: "Revisões",
    taf: "TAF",
    metas: "Metas"
  };

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];

  const clone = (value) =>
    JSON.parse(JSON.stringify(value));

  const escapeHtml = (value) =>
    String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  function localDateKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  function displayDate(value) {
    if (!value) {
      return "—";
    }

    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      return new Date(
        `${value}T00:00:00`
      ).toLocaleDateString("pt-BR");
    }

    return value;
  }

  function normalizeState(raw) {
    const source =
      raw && typeof raw === "object"
        ? raw
        : {};

    return {
      ...clone(DEFAULTS),
      ...source,
      completedTasks:
        source.completedTasks &&
        typeof source.completedTasks === "object"
          ? source.completedTasks
          : {},
      sessions: Array.isArray(source.sessions)
        ? source.sessions
        : [],
      questions: Array.isArray(source.questions)
        ? source.questions
        : [],
      completedLessons: Array.isArray(
        source.completedLessons
      )
        ? source.completedLessons
        : [],
      reviews: Array.isArray(source.reviews)
        ? source.reviews
        : [],
      taf: Array.isArray(source.taf)
        ? source.taf
        : [],
      goals: {
        ...DEFAULTS.goals,
        ...(source.goals || {})
      }
    };
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      return normalizeState(
        saved ? JSON.parse(saved) : null
      );
    } catch (error) {
      console.warn(
        "Dados locais inválidos; iniciando estado padrão.",
        error
      );

      return normalizeState(null);
    }
  }

  let state = loadState();

  let selectedMinutes = 25;
  let remainingSeconds = selectedMinutes * 60;
  let timerId = null;
  let currentPage = "dashboard";

  function persist(render = true) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );

    applyTheme();

    if (render) {
      renderAll();
    }
  }

  function todayName() {
    return [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado"
    ][new Date().getDay()];
  }

  function startOfCurrentWeek() {
    const now = new Date();
    const day = now.getDay();
    const distanceToMonday =
      day === 0 ? 6 : day - 1;

    const start = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - distanceToMonday
    );

    start.setHours(0, 0, 0, 0);

    return start;
  }

  function parseStoredDate(item) {
    if (
      item.dateKey &&
      /^\d{4}-\d{2}-\d{2}$/.test(item.dateKey)
    ) {
      return new Date(
        `${item.dateKey}T00:00:00`
      );
    }

    if (
      item.date &&
      /^\d{4}-\d{2}-\d{2}$/.test(item.date)
    ) {
      return new Date(
        `${item.date}T00:00:00`
      );
    }

    if (
      item.date &&
      /^\d{2}\/\d{2}\/\d{4}$/.test(item.date)
    ) {
      const [day, month, year] =
        item.date.split("/").map(Number);

      return new Date(
        year,
        month - 1,
        day
      );
    }

    return null;
  }

  function isCurrentWeek(item) {
    const date = parseStoredDate(item);

    return date
      ? date >= startOfCurrentWeek()
      : true;
  }

  function updateStreak() {
    const today = localDateKey();

    if (state.lastStudyDate === today) {
      return;
    }

    const yesterday = new Date();

    yesterday.setDate(
      yesterday.getDate() - 1
    );

    state.streak =
      state.lastStudyDate ===
      localDateKey(yesterday)
        ? Number(state.streak || 0) + 1
        : 1;

    state.lastStudyDate = today;
  }

  function closeMobileSheet() {
    $("#mobileSheet")?.classList.remove("open");
    document.body.style.overflow = "";
  }

  function navigate(page) {
    if (
      !PAGE_TITLES[page] ||
      !document.getElementById(page)
    ) {
      return;
    }

    currentPage = page;

    $$(".page").forEach((section) => {
      section.classList.toggle(
        "active",
        section.id === page
      );
    });

    $$("[data-page]").forEach((button) => {
      button.classList.toggle(
        "active",
        button.dataset.page === page
      );
    });

    $$("[data-mobile-page]").forEach(
      (button) => {
        button.classList.toggle(
          "active",
          button.dataset.mobilePage === page
        );
      }
    );

    const moreButton = $("#moreMenuBtn");

    moreButton?.classList.toggle(
      "active",
      [
        "disciplinas",
        "questoes",
        "revisoes",
        "metas"
      ].includes(page)
    );

    const title = $("#pageTitle");

    if (title) {
      title.textContent = PAGE_TITLES[page];
    }

    $("#sidebar")?.classList.remove("open");

    closeMobileSheet();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function fillSubjectSelects() {
    const options = SUBJECTS.map(
      (subject) =>
        `<option value="${escapeHtml(
          subject.name
        )}">${escapeHtml(
          subject.name
        )}</option>`
    ).join("");

    [
      "studySubject",
      "questionSubject",
      "reviewSubject"
    ].forEach((id) => {
      const select =
        document.getElementById(id);

      if (select) {
        select.innerHTML = options;
      }
    });
  }

  function renderWeek() {
    const grid = $("#weekGrid");

    if (!grid) {
      return;
    }

    grid.innerHTML = Object.entries(WEEK)
      .map(([day, tasks]) => {
        return `
          <article class="day-card">
            <span class="eyebrow">
              ${
                day === todayName()
                  ? "HOJE"
                  : "PLANO"
              }
            </span>

            <h3>${day}</h3>

            ${tasks
              .map(([name, time], index) => {
                const key =
                  `${day}-${index}`;

                return `
                  <label class="task-item">
                    <span class="task-left">
                      <input
                        class="task-check"
                        type="checkbox"
                        data-task="${key}"
                        ${
                          state.completedTasks[key]
                            ? "checked"
                            : ""
                        }
                      >

                      <span>
                        <strong>
                          ${escapeHtml(name)}
                        </strong>

                        <small>
                          ${escapeHtml(time)}
                        </small>
                      </span>
                    </span>
                  </label>
                `;
              })
              .join("")}
          </article>
        `;
      })
      .join("");

    $$("[data-task]", grid).forEach(
      (checkbox) => {
        checkbox.addEventListener(
          "change",
          () => {
            state.completedTasks[
              checkbox.dataset.task
            ] = checkbox.checked;

            persist();
          }
        );
      }
    );
  }

  function renderToday() {
    const container = $("#todayPlan");

    if (!container) {
      return;
    }

    const day = todayName();
    const tasks = WEEK[day] || [];

    container.innerHTML = tasks.length
      ? tasks
          .map(([name, time], index) => {
            const key =
              `${day}-${index}`;

            return `
              <label class="task-item">
                <span class="task-left">
                  <input
                    class="task-check"
                    type="checkbox"
                    data-today="${key}"
                    ${
                      state.completedTasks[key]
                        ? "checked"
                        : ""
                    }
                  >

                  <span>
                    <strong>
                      ${escapeHtml(name)}
                    </strong>

                    <small>
                      ${escapeHtml(time)}
                    </small>
                  </span>
                </span>

                <span class="tag">
                  ${day}
                </span>
              </label>
            `;
          })
          .join("")
      : `<p class="muted">
          Sem tarefas para hoje.
        </p>`;

    $$("[data-today]", container).forEach(
      (checkbox) => {
        checkbox.addEventListener(
          "change",
          () => {
            state.completedTasks[
              checkbox.dataset.today
            ] = checkbox.checked;

            persist();
          }
        );
      }
    );
  }

  function subjectStats(name) {
    const entries = state.questions.filter(
      (item) => item.subject === name
    );

    const total = entries.reduce(
      (sum, item) =>
        sum + Number(item.total || 0),
      0
    );

    const correct = entries.reduce(
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

  function renderSubjects() {
    const grid = $("#subjectsGrid");

    if (!grid) {
      return;
    }

    $("#disciplinas .section-intro")
      ?.removeAttribute("style");

    $(".study-content-test")
      ?.removeAttribute("style");

    grid.innerHTML = SUBJECTS.map(
      (subject, index) => {
        const completed =
          subject.topics.filter((topic) =>
            state.completedLessons.includes(
              `${subject.name}::${topic}`
            )
          ).length;

        const percentage = Math.round(
          (completed /
            subject.topics.length) *
            100
        );

        const stats =
          subjectStats(subject.name);

        return `
          <article class="subject-card">
            <span class="eyebrow">
              MÓDULO
              ${String(index + 1).padStart(
                2,
                "0"
              )}
            </span>

            <h3>
              ${escapeHtml(subject.name)}
            </h3>

            <div class="topics">
              ${subject.topics
                .map((topic) => {
                  const lessonId =
                    `${subject.name}::${topic}`;

                  const done =
                    state.completedLessons.includes(
                      lessonId
                    );

                  return `
                    <button
                      class="topic-card"
                      type="button"
                      data-subject="${escapeHtml(
                        subject.name
                      )}"
                      data-topic="${escapeHtml(
                        topic
                      )}"
                    >
                      <span class="topic-left">
                        <span class="topic-icon">
                          📖
                        </span>

                        <span class="topic-info">
                          <strong>
                            ${escapeHtml(topic)}
                          </strong>

                          <small>
                            ${
                              done
                                ? "🟢 Aula concluída"
                                : "⚪ Aula disponível"
                            }
                          </small>
                        </span>
                      </span>

                      <span class="topic-arrow">
                        ›
                      </span>
                    </button>
                  `;
                })
                .join("")}
            </div>

            <div class="progress-meta">
              <span>
                ${completed}/${
                  subject.topics.length
                } aulas •
                ${stats.total}/${
                  subject.target
                } questões
              </span>

              <strong>
                ${percentage}%
              </strong>
            </div>

            <div class="bar">
              <i
                style="width:${percentage}%"
              ></i>
            </div>
          </article>
        `;
      }
    ).join("");

    $$(".topic-card", grid).forEach(
      (button) => {
        button.addEventListener(
          "click",
          () => {
            openLesson(
              button.dataset.subject,
              button.dataset.topic
            );
          }
        );
      }
    );
  }

  function openLesson(subject, topic) {
    const grid = $("#subjectsGrid");

    if (!grid) {
      return;
    }

    $("#disciplinas .section-intro")
      ?.style.setProperty(
        "display",
        "none"
      );

    $(".study-content-test")
      ?.style.setProperty(
        "display",
        "none"
      );

    const lessonId =
      `${subject}::${topic}`;

    const completed =
      state.completedLessons.includes(
        lessonId
      );

    grid.innerHTML = `
      <article class="panel">
        <button
          class="ghost-btn"
          id="backToSubjects"
          type="button"
        >
          ← Voltar para disciplinas
        </button>

        <span class="eyebrow">
          ${escapeHtml(subject)}
        </span>

        <h2>
          ${escapeHtml(topic)}
        </h2>

        <div class="lesson-block">
          <h3>
            🎯 Objetivo da aula
          </h3>

          <p>
            Compreender os conceitos
            centrais de
            <strong>
              ${escapeHtml(topic)}
            </strong>,
            registrar os pontos de dúvida
            e praticar questões
            relacionadas ao assunto.
          </p>
        </div>

        <div class="lesson-block">
          <h3>
            📌 Roteiro recomendado
          </h3>

          <ul>
            <li>
              Leia a teoria e destaque
              definições, regras e
              exceções.
            </li>

            <li>
              Faça um resumo curto com
              suas próprias palavras.
            </li>

            <li>
              Resolva questões e
              registre os erros mais
              recorrentes.
            </li>

            <li>
              Agende uma revisão para
              24 horas, 7 dias ou
              30 dias.
            </li>
          </ul>
        </div>

        <div class="lesson-block">
          <h3>
            🧠 Registro de progresso
          </h3>

          <p class="muted">
            Marque a aula como concluída
            quando terminar o conteúdo
            e a prática inicial.
          </p>

          <button
            class="primary-btn"
            id="completeLesson"
            type="button"
          >
            ${
              completed
                ? "Aula concluída ✓"
                : "Marcar aula como concluída"
            }
          </button>
        </div>
      </article>
    `;

    $("#backToSubjects")
      ?.addEventListener(
        "click",
        renderSubjects
      );

    $("#completeLesson")
      ?.addEventListener(
        "click",
        () => {
          if (
            !state.completedLessons.includes(
              lessonId
            )
          ) {
            state.completedLessons.push(
              lessonId
            );

            state.xp =
              Number(state.xp || 0) + 50;

            state.level =
              Math.floor(
                state.xp / 250
              ) + 1;

            persist(false);
          }

          renderSubjects();
        }
      );

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function renderSubjectProgress() {
    const container =
      $("#subjectProgress");

    if (!container) {
      return;
    }

    const studied = SUBJECTS.map(
      (subject) => {
        return {
          name: subject.name,
          minutes: state.sessions
            .filter(
              (session) =>
                session.subject ===
                subject.name
            )
            .reduce(
              (sum, session) =>
                sum +
                Number(
                  session.minutes || 0
                ),
              0
            )
        };
      }
    )
      .sort(
        (a, b) =>
          b.minutes - a.minutes
      )
      .slice(0, 5);

    const maxMinutes = Math.max(
      60,
      ...studied.map(
        (item) => item.minutes
      )
    );

    container.innerHTML = studied
      .map((item) => {
        const percentage =
          Math.round(
            (item.minutes /
              maxMinutes) *
              100
          );

        const timeText =
          item.minutes >= 60
            ? `${(
                item.minutes / 60
              ).toFixed(1)}h`
            : `${item.minutes} min`;

        return `
          <div class="progress-line">
            <div class="progress-meta">
              <span>
                ${escapeHtml(item.name)}
              </span>

              <strong>
                ${timeText}
              </strong>
            </div>

            <div class="bar">
              <i
                style="width:${percentage}%"
              ></i>
            </div>
          </div>
        `;
      })
      .join("");
  }

  function renderQuestions() {
    const total =
      state.questions.reduce(
        (sum, item) =>
          sum + Number(item.total || 0),
        0
      );

    const correct =
      state.questions.reduce(
        (sum, item) =>
          sum +
          Number(item.correct || 0),
        0
      );

    const accuracy = total
      ? Math.round(
          (correct / total) * 100
        )
      : 0;

    if ($("#questionsStat")) {
      $("#questionsStat").textContent =
        String(total);
    }

    if ($("#accuracyStat")) {
      $("#accuracyStat").textContent =
        `${accuracy}%`;
    }

    if ($("#questionSummary")) {
      $("#questionSummary").textContent =
        `${accuracy}%`;
    }

    const bars = $("#questionBars");

    if (!bars) {
      return;
    }

    const withResults =
      SUBJECTS.filter(
        (subject) =>
          subjectStats(subject.name)
            .total > 0
      );

    bars.innerHTML =
      withResults.length
        ? withResults
            .map((subject) => {
              const stats =
                subjectStats(
                  subject.name
                );

              return `
                <div class="progress-line">
                  <div class="progress-meta">
                    <span>
                      ${escapeHtml(
                        subject.name
                      )}
                    </span>

                    <strong>
                      ${stats.correct}/${
                        stats.total
                      }
                    </strong>
                  </div>

                  <div class="bar">
                    <i
                      style="width:${
                        stats.accuracy
                      }%"
                    ></i>
                  </div>
                </div>
              `;
            })
            .join("")
        : `
          <p class="muted">
            Registre seu primeiro
            bloco de questões.
          </p>
        `;
  }

  function renderSessions() {
    const totalMinutes =
      state.sessions.reduce(
        (sum, item) =>
          sum +
          Number(item.minutes || 0),
        0
      );

    if ($("#hoursStat")) {
      $("#hoursStat").textContent =
        `${(
          totalMinutes / 60
        ).toFixed(1)}h`;
    }

    const history =
      $("#sessionHistory");

    if (!history) {
      return;
    }

    const items = state.sessions
      .slice()
      .reverse()
      .slice(0, 8);

    history.innerHTML = items.length
      ? items
          .map((item) => {
            return `
              <div class="history-item">
                <div>
                  <strong>
                    ${escapeHtml(
                      item.subject
                    )}
                  </strong>

                  <small>
                    ${escapeHtml(
                      item.topic ||
                        "Estudo geral"
                    )}
                    •
                    ${Number(
                      item.minutes || 0
                    )} min
                    •
                    ${escapeHtml(
                      displayDate(
                        item.date ||
                          item.dateKey
                      )
                    )}
                  </small>
                </div>

                <span class="tag">
                  CONCLUÍDO
                </span>
              </div>
            `;
          })
          .join("")
      : `
        <p class="muted">
          Nenhuma sessão registrada
          ainda.
        </p>
      `;
  }

  function renderReviews() {
    const list = $("#reviewList");

    if (!list) {
      return;
    }

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const sorted = state.reviews
      .slice()
      .sort(
        (a, b) =>
          new Date(a.due) -
          new Date(b.due)
      );

    list.innerHTML = sorted.length
      ? sorted
          .map((review) => {
            const due = new Date(
              `${review.due}T00:00:00`
            );

            const overdue =
              due < today &&
              !review.done;

            return `
              <div class="review-item">
                <div>
                  <strong>
                    ${escapeHtml(
                      review.topic
                    )}
                  </strong>

                  <small>
                    ${escapeHtml(
                      review.subject
                    )}
                    •
                    ${displayDate(
                      review.due
                    )}
                  </small>
                </div>

                <div>
                  <span class="tag">
                    ${
                      review.done
                        ? "FEITA"
                        : overdue
                          ? "ATRASADA"
                          : "PENDENTE"
                    }
                  </span>

                  <button
                    class="text-btn"
                    type="button"
                    data-review-id="${escapeHtml(
                      review.id
                    )}"
                  >
                    ${
                      review.done
                        ? "Reabrir"
                        : "Concluir"
                    }
                  </button>
                </div>
              </div>
            `;
          })
          .join("")
      : `
        <article class="panel">
          <p class="muted">
            Nenhuma revisão agendada.
          </p>
        </article>
      `;

    $$("[data-review-id]", list)
      .forEach((button) => {
        button.addEventListener(
          "click",
          () => {
            const review =
              state.reviews.find(
                (item) =>
                  String(item.id) ===
                  button.dataset.reviewId
              );

            if (!review) {
              return;
            }

            review.done =
              !review.done;

            persist();
          }
        );
      });
  }

  function renderTaf() {
    const history = $("#tafHistory");

    if (!history) {
      return;
    }

    const items = state.taf
      .slice()
      .reverse()
      .slice(0, 10);

    history.innerHTML = items.length
      ? items
          .map((item) => {
            return `
              <div class="history-item">
                <div>
                  <strong>
                    ${escapeHtml(
                      item.exercise
                    )}
                  </strong>

                  <small>
                    ${escapeHtml(
                      item.result
                    )}
                    •
                    ${escapeHtml(
                      displayDate(
                        item.date ||
                          item.dateKey
                      )
                    )}
                  </small>
                </div>

                <span class="tag">
                  ${escapeHtml(
                    item.effort
                  )}
                </span>
              </div>
            `;
          })
          .join("")
      : `
        <p class="muted">
          Nenhum treino registrado.
        </p>
      `;
  }

  function renderGoals() {
    if ($("#goalHours")) {
      $("#goalHours").value =
        state.goals.hours;
    }

    if ($("#goalQuestions")) {
      $("#goalQuestions").value =
        state.goals.questions;
    }

    if ($("#goalTaf")) {
      $("#goalTaf").value =
        state.goals.taf;
    }

    if ($("#goalDate")) {
      $("#goalDate").value =
        state.goals.date;
    }

    const target = new Date(
      `${state.goals.date}T23:59:59`
    );

    const days = Number.isNaN(
      target.getTime()
    )
      ? 0
      : Math.max(
          0,
          Math.ceil(
            (target - new Date()) /
              86400000
          )
        );

    if ($("#countdownDays")) {
      $("#countdownDays").textContent =
        `${days} dias`;
    }

    const completedTasks =
      Object.values(
        state.completedTasks
      ).filter(Boolean).length;

    const taskTotal =
      Object.values(WEEK).reduce(
        (sum, tasks) =>
          sum + tasks.length,
        0
      );

    const weeklyQuestions =
      state.questions
        .filter(isCurrentWeek)
        .reduce(
          (sum, item) =>
            sum +
            Number(item.total || 0),
          0
        );

    const weeklyHours =
      state.sessions
        .filter(isCurrentWeek)
        .reduce(
          (sum, item) =>
            sum +
            Number(item.minutes || 0),
          0
        ) / 60;

    const components = [
      taskTotal
        ? Math.min(
            100,
            (completedTasks /
              taskTotal) *
              100
          )
        : 0,
      Math.min(
        100,
        (weeklyQuestions /
          Math.max(
            1,
            Number(
              state.goals.questions
            )
          )) *
          100
      ),
      Math.min(
        100,
        (weeklyHours /
          Math.max(
            1,
            Number(
              state.goals.hours
            )
          )) *
          100
      )
    ];

    const overall = Math.round(
      components.reduce(
        (sum, value) =>
          sum + value,
        0
      ) / components.length
    );

    if ($("#overallProgress")) {
      $("#overallProgress").textContent =
        `${overall}%`;
    }

    $("#progressRing")
      ?.style.setProperty(
        "--p",
        overall
      );

    if ($("#streakStat")) {
      $("#streakStat").textContent =
        `${Number(
          state.streak || 0
        )} dias`;
    }
  }

  function renderDashboardOverview() {
    const now = new Date();

    const greeting =
      now.getHours() < 12
        ? "Bom dia"
        : now.getHours() < 18
          ? "Boa tarde"
          : "Boa noite";

    const weeklySessions =
      state.sessions.filter(
        isCurrentWeek
      );

    const weeklyMinutes =
      weeklySessions.reduce(
        (sum, item) =>
          sum +
          Number(item.minutes || 0),
        0
      );

    const weeklyHours =
      weeklyMinutes / 60;

    const weeklyGoal = Math.max(
      1,
      Number(
        state.goals.hours || 18
      )
    );

    const weeklyPercent =
      Math.min(
        100,
        Math.round(
          (weeklyHours /
            weeklyGoal) *
            100
        )
      );

    const todayKey =
      localDateKey();

    const todayLocale =
      new Date().toLocaleDateString(
        "pt-BR"
      );

    const todayMinutes =
      state.sessions
        .filter(
          (item) =>
            item.dateKey ===
              todayKey ||
            item.date === todayKey ||
            item.date === todayLocale
        )
        .reduce(
          (sum, item) =>
            sum +
            Number(item.minutes || 0),
          0
        );

    if ($("#dashboardDate")) {
      $("#dashboardDate").textContent =
        now
          .toLocaleDateString(
            "pt-BR",
            {
              weekday: "long",
              day: "2-digit",
              month: "long"
            }
          )
          .toUpperCase();
    }

    if ($("#dashboardGreeting")) {
      $("#dashboardGreeting").textContent =
        `${greeting}! Vamos avançar mais um pouco?`;
    }

    if ($("#todayStudyTime")) {
      $("#todayStudyTime").textContent =
        todayMinutes >= 60
          ? `${(
              todayMinutes / 60
            ).toFixed(1)}h`
          : `${todayMinutes} min`;
    }

    if ($("#welcomeStreak")) {
      $("#welcomeStreak").textContent =
        `${Number(
          state.streak || 0
        )} dias`;
    }

    if ($("#weeklyProgressText")) {
      $("#weeklyProgressText").textContent =
        `${weeklyPercent}%`;
    }

    if ($("#weeklyProgressBar")) {
      $("#weeklyProgressBar").style.width =
        `${weeklyPercent}%`;
    }

    if ($("#weeklyProgressDetail")) {
      $("#weeklyProgressDetail").textContent =
        `${weeklyHours.toFixed(
          1
        )}h de ${weeklyGoal}h concluídas`;
    }

    const message =
      $("#dashboardMessage");

    if (message) {
      message.textContent =
        weeklyPercent >= 100
          ? "Meta semanal concluída. Excelente — agora mantenha o ritmo."
          : weeklyPercent >= 60
            ? "Você já passou da metade da meta semanal. Continue firme."
            : state.sessions.length
              ? "Cada sessão registrada aproxima você da meta de 2027."
              : "Comece com uma sessão curta. Constância vale mais que pressa.";
    }

    const nextReview =
      state.reviews
        .filter(
          (item) => !item.done
        )
        .sort(
          (a, b) =>
            new Date(a.due) -
            new Date(b.due)
        )[0];

    if ($("#nextReviewTitle")) {
      $("#nextReviewTitle").textContent =
        nextReview?.topic ||
        "Nenhuma revisão";
    }

    if ($("#nextReviewDate")) {
      $("#nextReviewDate").textContent =
        nextReview
          ? `${nextReview.subject} • ${displayDate(
              nextReview.due
            )}`
          : "Adicione uma revisão para começar";
    }

    const weeklyTaf =
      state.taf.filter(
        isCurrentWeek
      ).length;

    const tafGoal = Math.max(
      1,
      Number(
        state.goals.taf || 4
      )
    );

    const remaining = Math.max(
      0,
      tafGoal - weeklyTaf
    );

    if ($("#nextTafTitle")) {
      $("#nextTafTitle").textContent =
        remaining === 0
          ? "Meta física concluída"
          : `${remaining} treino${
              remaining === 1
                ? ""
                : "s"
            } restante${
              remaining === 1
                ? ""
                : "s"
            }`;
    }

    if ($("#nextTafDetail")) {
      $("#nextTafDetail").textContent =
        `${weeklyTaf} de ${tafGoal} treinos registrados`;
    }
  }

  function renderAll() {
    renderWeek();
    renderToday();
    renderSubjects();
    renderSubjectProgress();
    renderQuestions();
    renderSessions();
    renderReviews();
    renderTaf();
    renderGoals();
    renderDashboardOverview();
  }

  function addSession({
    subject,
    topic,
    notes = "",
    minutes
  }) {
    updateStreak();

    state.sessions.push({
      subject,
      topic: topic || "Estudo geral",
      notes,
      minutes: Math.max(
        1,
        Number(minutes || 1)
      ),
      date:
        new Date().toLocaleDateString(
          "pt-BR"
        ),
      dateKey: localDateKey()
    });

    persist();
  }

  function updateTimerDisplay() {
    const minutes = String(
      Math.floor(
        remainingSeconds / 60
      )
    ).padStart(2, "0");

    const seconds = String(
      remainingSeconds % 60
    ).padStart(2, "0");

    if ($("#timerDisplay")) {
      $("#timerDisplay").textContent =
        `${minutes}:${seconds}`;
    }

    const total =
      selectedMinutes * 60;

    const elapsed =
      total - remainingSeconds;

    if ($("#timerProgress")) {
      $("#timerProgress").style.width =
        `${
          total
            ? Math.min(
                100,
                Math.max(
                  0,
                  (elapsed / total) *
                    100
                )
              )
            : 0
        }%`;
    }
  }

  function updateTimerTimes() {
    const now = new Date();

    const end = new Date(
      now.getTime() +
        remainingSeconds * 1000
    );

    const format = (date) =>
      date.toLocaleTimeString(
        "pt-BR",
        {
          hour: "2-digit",
          minute: "2-digit"
        }
      );

    if ($("#timerStartTime")) {
      $("#timerStartTime").textContent =
        format(now);
    }

    if ($("#timerEndTime")) {
      $("#timerEndTime").textContent =
        format(end);
    }
  }

  function resetTimer() {
    if (timerId) {
      clearInterval(timerId);
    }

    timerId = null;

    remainingSeconds =
      selectedMinutes * 60;

    if ($("#startTimer")) {
      $("#startTimer").textContent =
        "Iniciar";
    }

    if ($("#timerStartTime")) {
      $("#timerStartTime").textContent =
        "--:--";
    }

    if ($("#timerEndTime")) {
      $("#timerEndTime").textContent =
        "--:--";
    }

    updateTimerDisplay();
  }

  function startOrPauseTimer() {
    const button = $("#startTimer");

    if (timerId) {
      clearInterval(timerId);

      timerId = null;

      if (button) {
        button.textContent =
          "Continuar";
      }

      return;
    }

    const subject =
      $("#studySubject")?.value;

    const topic =
      $("#studyTopic")?.value.trim();

    if (!subject) {
      alert(
        "Selecione uma disciplina antes de iniciar."
      );

      return;
    }

    if (!topic) {
      alert(
        "Informe o tópico que será estudado."
      );

      return;
    }

    updateTimerTimes();

    if (button) {
      button.textContent = "Pausar";
    }

    timerId = window.setInterval(
      () => {
        remainingSeconds -= 1;

        updateTimerDisplay();

        if (
          remainingSeconds > 0
        ) {
          return;
        }

        clearInterval(timerId);

        timerId = null;

        addSession({
          subject,
          topic,
          notes:
            $("#studyNotes")?.value ||
            "",
          minutes:
            selectedMinutes
        });

        if (button) {
          button.textContent =
            "Iniciar";
        }

        alert(
          "Sessão concluída e registrada automaticamente!"
        );

        resetTimer();
      },
      1000
    );
  }

  function createBackupPayload() {
    return {
      app: "Rota PMMG 2027",
      version: 2,
      exportedAt:
        new Date().toISOString(),
      data: clone(state)
    };
  }

  async function exportBackup() {
    const backup =
      createBackupPayload();

    const fileName =
      `rota-pmmg-backup-${localDateKey()}.json`;

    const file = new File(
      [
        JSON.stringify(
          backup,
          null,
          2
        )
      ],
      fileName,
      {
        type: "application/json"
      }
    );

    try {
      if (
        navigator.share &&
        navigator.canShare?.({
          files: [file]
        })
      ) {
        await navigator.share({
          title:
            "Backup Rota PMMG 2027",
          text:
            "Backup dos meus dados de estudo.",
          files: [file]
        });

        return;
      }

      const url =
        URL.createObjectURL(file);

      const link =
        document.createElement("a");

      link.href = url;
      link.download = fileName;

      document.body.appendChild(link);

      link.click();
      link.remove();

      setTimeout(
        () =>
          URL.revokeObjectURL(url),
        1000
      );
    } catch (error) {
      if (
        error?.name !== "AbortError"
      ) {
        alert(
          "Não foi possível exportar o backup."
        );
      }
    }
  }

  function importBackupFile(file) {
    if (!file) {
      return;
    }

    const reader =
      new FileReader();

    reader.onload = () => {
      try {
        const backup = JSON.parse(
          String(reader.result)
        );

        const imported =
          backup.data || backup;

        if (
          !imported ||
          !Array.isArray(
            imported.sessions
          ) ||
          !Array.isArray(
            imported.questions
          ) ||
          !Array.isArray(
            imported.reviews
          ) ||
          !Array.isArray(
            imported.taf
          )
        ) {
          throw new Error(
            "Backup incompatível"
          );
        }

        if (
          !confirm(
            "Importar este backup substituirá os dados atuais. Continuar?"
          )
        ) {
          return;
        }

        state =
          normalizeState(imported);

        persist();

        alert(
          "Backup importado com sucesso!"
        );
      } catch (error) {
        console.error(error);

        alert(
          "Não foi possível importar. Escolha um backup válido do Rota PMMG."
        );
      }
    };

    reader.readAsText(file);
  }

  function applyTheme() {
    const isLight =
      state.theme === "light";

    document.body.classList.toggle(
      "light",
      isLight
    );

    if ($("#themeToggle")) {
      $("#themeToggle").textContent =
        isLight ? "☀" : "☾";
    }
  }

  function bindStaticEvents() {
    $$("[data-page]").forEach(
      (button) => {
        button.addEventListener(
          "click",
          () =>
            navigate(
              button.dataset.page
            )
        );
      }
    );

    $$("[data-go]").forEach(
      (button) => {
        button.addEventListener(
          "click",
          () =>
            navigate(
              button.dataset.go
            )
        );
      }
    );

    $$("[data-mobile-page]").forEach(
      (button) => {
        button.addEventListener(
          "click",
          () =>
            navigate(
              button.dataset
                .mobilePage
            )
        );
      }
    );

    $$("[data-sheet-page]").forEach(
      (button) => {
        button.addEventListener(
          "click",
          () =>
            navigate(
              button.dataset.sheetPage
            )
        );
      }
    );

    $("#menuBtn")
      ?.addEventListener(
        "click",
        () => {
          $("#sidebar")
            ?.classList.toggle(
              "open"
            );
        }
      );

    $("#moreMenuBtn")
      ?.addEventListener(
        "click",
        () => {
          $("#mobileSheet")
            ?.classList.add("open");

          document.body.style.overflow =
            "hidden";
        }
      );

    $("#closeMobileSheet")
      ?.addEventListener(
        "click",
        closeMobileSheet
      );

    $("#mobileSheet")
      ?.addEventListener(
        "click",
        (event) => {
          if (
            event.target ===
            event.currentTarget
          ) {
            closeMobileSheet();
          }
        }
      );

    $("#questionForm")
      ?.addEventListener(
        "submit",
        (event) => {
          event.preventDefault();

          const total = Number(
            $("#questionTotal")
              ?.value || 0
          );

          const correct = Number(
            $("#questionCorrect")
              ?.value || 0
          );

          if (total < 1) {
            alert(
              "Informe uma quantidade válida de questões."
            );

            return;
          }

          if (
            correct < 0 ||
            correct > total
          ) {
            alert(
              "A quantidade correta deve ficar entre zero e o total."
            );

            return;
          }

          state.questions.push({
            subject:
              $("#questionSubject")
                ?.value,
            total,
            correct,
            date:
              new Date()
                .toLocaleDateString(
                  "pt-BR"
                ),
            dateKey:
              localDateKey()
          });

          persist();

          event.target.reset();
        }
      );

    $("#studyForm")
      ?.addEventListener(
        "submit",
        (event) => {
          event.preventDefault();

          const elapsedMinutes =
            Math.max(
              1,
              Math.ceil(
                (
                  selectedMinutes *
                    60 -
                  remainingSeconds
                ) / 60
              )
            );

          addSession({
            subject:
              $("#studySubject")
                ?.value ||
              "Estudo geral",
            topic:
              $("#studyTopic")
                ?.value.trim() ||
              "Estudo geral",
            notes:
              $("#studyNotes")
                ?.value || "",
            minutes:
              elapsedMinutes
          });

          event.target.reset();

          resetTimer();
        }
      );

    $("#tafForm")
      ?.addEventListener(
        "submit",
        (event) => {
          event.preventDefault();

          state.taf.push({
            exercise:
              $("#tafExercise")
                ?.value,
            result:
              $("#tafResult")
                ?.value.trim() ||
              "Treino concluído",
            effort:
              $("#tafEffort")
                ?.value,
            date:
              new Date()
                .toLocaleDateString(
                  "pt-BR"
                ),
            dateKey:
              localDateKey()
          });

          persist();

          event.target.reset();
        }
      );

    $("#goalsForm")
      ?.addEventListener(
        "submit",
        (event) => {
          event.preventDefault();

          state.goals = {
            hours: Math.max(
              1,
              Number(
                $("#goalHours")
                  ?.value || 18
              )
            ),
            questions: Math.max(
              1,
              Number(
                $("#goalQuestions")
                  ?.value || 250
              )
            ),
            taf: Math.max(
              1,
              Number(
                $("#goalTaf")
                  ?.value || 4
              )
            ),
            date:
              $("#goalDate")
                ?.value ||
              DEFAULTS.goals.date
          };

          persist();

          alert("Metas salvas.");
        }
      );

    $("#reviewForm")
      ?.addEventListener(
        "submit",
        (event) => {
          event.preventDefault();

          const due = new Date();

          due.setDate(
            due.getDate() +
              Number(
                $("#reviewCycle")
                  ?.value || 1
              )
          );

          state.reviews.push({
            id:
              crypto.randomUUID?.() ||
              `${Date.now()}-${Math.random()}`,
            subject:
              $("#reviewSubject")
                ?.value,
            topic:
              $("#reviewTopic")
                ?.value.trim(),
            due:
              localDateKey(due),
            done: false
          });

          persist();

          event.target.reset();

          $("#reviewModal")
            ?.classList.remove(
              "open"
            );
        }
      );

    $("#addReviewBtn")
      ?.addEventListener(
        "click",
        () => {
          $("#reviewModal")
            ?.classList.add("open");
        }
      );

    $("#closeReviewModal")
      ?.addEventListener(
        "click",
        () => {
          $("#reviewModal")
            ?.classList.remove(
              "open"
            );
        }
      );

    $("#reviewModal")
      ?.addEventListener(
        "click",
        (event) => {
          if (
            event.target ===
            event.currentTarget
          ) {
            event.currentTarget
              .classList.remove(
                "open"
              );
          }
        }
      );

    $("#resetWeekBtn")
      ?.addEventListener(
        "click",
        () => {
          if (
            confirm(
              "Reiniciar todas as marcações da semana?"
            )
          ) {
            state.completedTasks = {};

            persist();
          }
        }
      );

    $("#clearDataBtn")
      ?.addEventListener(
        "click",
        () => {
          if (
            confirm(
              "Isso apagará todo o histórico salvo neste navegador. Continuar?"
            )
          ) {
            state =
              normalizeState(null);

            persist();
          }
        }
      );

    $("#themeToggle")
      ?.addEventListener(
        "click",
        () => {
          state.theme =
            state.theme === "light"
              ? "dark"
              : "light";

          persist(false);
        }
      );

    $$(".preset").forEach(
      (button) => {
        button.addEventListener(
          "click",
          () => {
            if (timerId) {
              return;
            }

            $$(".preset").forEach(
              (item) => {
                item.classList.remove(
                  "active"
                );
              }
            );

            button.classList.add(
              "active"
            );

            selectedMinutes =
              Number(
                button.dataset.minutes ||
                  25
              );

            remainingSeconds =
              selectedMinutes * 60;

            updateTimerDisplay();
          }
        );
      }
    );

    $("#startTimer")
      ?.addEventListener(
        "click",
        startOrPauseTimer
      );

    $("#resetTimer")
      ?.addEventListener(
        "click",
        resetTimer
      );

    $("#exportBackupBtn")
      ?.addEventListener(
        "click",
        exportBackup
      );

    $("#exportBackupMenu")
      ?.addEventListener(
        "click",
        exportBackup
      );

    const importInput =
      $("#importBackupFile");

    const openImport = () => {
      if (!importInput) {
        return;
      }

      importInput.value = "";
      importInput.click();
    };

    $("#importBackupBtn")
      ?.addEventListener(
        "click",
        openImport
      );

    $("#importBackupMenu")
      ?.addEventListener(
        "click",
        openImport
      );

    importInput?.addEventListener(
      "change",
      (event) => {
        importBackupFile(
          event.target.files?.[0]
        );
      }
    );
  }

  async function initializeFirebaseUi() {
    const status = $("#syncStatus");
    const lastSync =
      $("#lastSyncTime");

    const signedOut =
      $("#googleSignedOutState");

    const signedIn =
      $("#googleSignedInState");

    const login =
      $("#googleLoginButton");

    const logout =
      $("#googleLogoutButton");

    const sync =
      $("#syncNowButton");

    const restore =
      $("#restoreCloudButton");

    const setStatus = (message) => {
      if (status) {
        status.textContent = message;
      }
    };

    const setLastSync = (value) => {
      if (!lastSync) {
        return;
      }

      lastSync.textContent = value
        ? `Última sincronização: ${new Intl.DateTimeFormat(
            "pt-BR",
            {
              dateStyle: "short",
              timeStyle: "short"
            }
          ).format(new Date(value))}`
        : "Última sincronização: ainda não realizada";
    };

    setLastSync(
      localStorage.getItem(
        LAST_SYNC_KEY
      )
    );

    let attempts = 0;

    while (
      !window.firebaseSync &&
      attempts < 30
    ) {
      await new Promise(
        (resolve) =>
          setTimeout(resolve, 100)
      );

      attempts += 1;
    }

    const firebase =
      window.firebaseSync;

    if (!firebase) {
      setStatus(
        "Firebase indisponível — o aplicativo continua com dados locais."
      );

      return;
    }

    const renderUser = (user) => {
      const connected =
        Boolean(user);

      if (signedOut) {
        signedOut.hidden =
          connected;
      }

      if (signedIn) {
        signedIn.hidden =
          !connected;
      }

      if (login) {
        login.disabled =
          connected;
      }

      if (logout) {
        logout.disabled =
          !connected;
      }

      if (sync) {
        sync.disabled =
          !connected;
      }

      if (restore) {
        restore.disabled =
          !connected;
      }

      if ($("#googleUserName")) {
        $("#googleUserName").textContent =
          user?.displayName ||
          "Usuário conectado";
      }

      if ($("#googleUserEmail")) {
        $("#googleUserEmail").textContent =
          user?.email || "";
      }

      const photo =
        $("#googleUserPhoto");

      if (photo) {
        photo.src =
          user?.photoURL || "";

        photo.hidden =
          !user?.photoURL;
      }

      setStatus(
        connected
          ? "Conta conectada — dados locais"
          : "Dados locais"
      );
    };

    login?.addEventListener(
      "click",
      async () => {
        try {
          setStatus(
            "Abrindo login do Google…"
          );

          await firebase
            .loginWithGoogle();
        } catch (error) {
          console.error(error);

          setStatus(
            "Não foi possível entrar com Google."
          );
        }
      }
    );

    logout?.addEventListener(
      "click",
      async () => {
        try {
          setStatus(
            "Saindo da conta…"
          );

          await firebase
            .logoutFromGoogle();
        } catch (error) {
          console.error(error);

          setStatus(
            "Não foi possível sair da conta."
          );
        }
      }
    );

    sync?.addEventListener(
      "click",
      async () => {
        const oldText =
          sync.textContent;

        try {
          sync.disabled = true;

          sync.textContent =
            "Sincronizando…";

          setStatus(
            "Sincronizando…"
          );

          await firebase
            .saveFirebaseBackup(
              createBackupPayload()
            );

          const now =
            new Date().toISOString();

          localStorage.setItem(
            LAST_SYNC_KEY,
            now
          );

          setLastSync(now);

          setStatus(
            "Sincronização concluída."
          );
        } catch (error) {
          console.error(error);

          setStatus(
            "Erro ao sincronizar. Seus dados locais continuam seguros."
          );
        } finally {
          sync.textContent =
            oldText;

          const user =
            await firebase
              .getCurrentFirebaseUser()
              .catch(() => null);

          sync.disabled = !user;
        }
      }
    );

    restore?.addEventListener(
      "click",
      async () => {
        const oldText =
          restore.textContent;

        try {
          restore.disabled = true;

          restore.textContent =
            "Restaurando…";

          setStatus(
            "Buscando backup na nuvem…"
          );

          const backup =
            await firebase
              .loadFirebaseBackup();

          if (!backup) {
            alert(
              "Nenhum backup foi encontrado para esta conta."
            );

            return;
          }

          const restored =
            backup.data || backup;

          if (
            !confirm(
              "Restaurar o backup da nuvem substituirá os dados atuais deste aparelho. Continuar?"
            )
          ) {
            return;
          }

          state =
            normalizeState(restored);

          persist();

          setStatus(
            "Backup restaurado com sucesso."
          );
        } catch (error) {
          console.error(error);

          setStatus(
            "Não foi possível restaurar. Seus dados atuais continuam seguros."
          );
        } finally {
          restore.textContent =
            oldText;

          const user =
            await firebase
              .getCurrentFirebaseUser()
              .catch(() => null);

          restore.disabled =
            !user;
        }
      }
    );

    await firebase
      .observeFirebaseUser(
        renderUser
      )
      .catch((error) => {
        console.error(error);

        setStatus(
          "Não foi possível verificar a conta — usando dados locais."
        );
      });
  }

  function initialize() {
    fillSubjectSelects();
    bindStaticEvents();
    applyTheme();
    renderAll();
    updateTimerDisplay();
    navigate(currentPage);
    initializeFirebaseUi();

    if (
      "serviceWorker" in navigator
    ) {
      window.addEventListener(
        "load",
        () => {
          navigator.serviceWorker
            .register("./sw.js")
            .catch((error) => {
              console.warn(
                "Service worker não registrado:",
                error
              );
            });
        }
      );
    }
  }

  if (
    document.readyState ===
    "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      initialize,
      {
        once: true
      }
    );
  } else {
    initialize();
  }
})();