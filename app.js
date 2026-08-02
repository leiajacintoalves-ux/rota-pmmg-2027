const SUBJECTS = [
  { name: "Português", target: 500, topics: ["Interpretação de textos","Ortografia e acentuação","Classes de palavras","Concordância","Regência e crase","Pontuação e sintaxe","Semântica"] },
  { name: "Direito Constitucional", target: 400, topics: ["Princípios fundamentais","Direitos e garantias","Direitos sociais","Nacionalidade e direitos políticos","Organização do Estado","Segurança Pública — art. 144","Administração Pública"] },
  { name: "Direito Administrativo", target: 300, topics: ["Administração Pública","Atos administrativos","Poderes administrativos","Agentes públicos","Licitações — noções","Responsabilidade civil do Estado","Processo administrativo"] },
  { name: "Direito Penal", target: 400, topics: ["Parte geral","Teoria do crime","Penas","Concurso de pessoas","Crimes contra a pessoa","Crimes contra o patrimônio","Crimes contra a Administração"] },
  { name: "Processo Penal", target: 250, topics: ["Inquérito policial","Ação penal","Prisões","Provas","Flagrante","Recursos — noções"] },
  { name: "Direitos Humanos", target: 200, topics: ["Declaração Universal","Dignidade humana","Tratados internacionais","Igualdade","Direitos da criança"] },
  { name: "Matemática e Raciocínio Lógico", target: 600, topics: ["Operações e frações","Porcentagem","Razão e proporção","Regra de três","Equações","Estatística","Probabilidade","Lógica"] },
  { name: "Inglês", target: 200, topics: ["Verb to be","Present simple","Past simple","Future","Vocabulário","Reading"] },
  { name: "Literatura", target: 120, topics: ["Escolas literárias","Leitura das obras do edital","Autores e contexto","Interpretação"] }
];


const WEEK = {
  "Segunda": [["Português","1h30"],["Direito Constitucional","1h30"]],
  "Terça": [["Matemática e Raciocínio Lógico","1h30"],["Direito Administrativo","1h30"]],
  "Quarta": [["Português","1h30"],["Direito Penal","1h30"]],
  "Quinta": [["Inglês","1h"],["Direitos Humanos","1h"],["Atualidades","30 min"]],
  "Sexta": [["Literatura","1h"],["Processo Penal","1h30"],["Revisão","30 min"]],
  "Sábado": [["Questões","2h"],["Lei seca","1h"],["Simulado","1h"]],
  "Domingo": [["Descanso ou revisão leve","Livre"]]
};


const defaults = {
  theme: "dark",
  completedTasks: {},
  sessions: [],
  questions: [],
  reviews: [],
  taf: [],
  goals: { hours: 18, questions: 250, taf: 4, date: "2027-12-31" },
  streak: 0,
  lastStudyDate: null
};

let state = JSON.parse(localStorage.getItem("pmmg2027")) || structuredClone(defaults);
const save = () => { localStorage.setItem("pmmg2027", JSON.stringify(state)); renderAll(); };

const pageTitles = {
  dashboard: "Visão geral", plano: "Plano semanal", disciplinas: "Disciplinas",
  sessao: "Sessão de estudo", questoes: "Questões", revisoes: "Revisões",
  taf: "TAF", metas: "Metas"
};

function navigate(page) {
  document.querySelectorAll(".page").forEach(x => x.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(x => x.classList.toggle("active", x.dataset.page === page));
  document.getElementById(page).classList.add("active");
  document.getElementById("pageTitle").textContent = pageTitles[page];
  document.getElementById("sidebar").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-page]").forEach(btn => btn.onclick = () => navigate(btn.dataset.page));
document.querySelectorAll("[data-go]").forEach(btn => btn.onclick = () => navigate(btn.dataset.go));
document.getElementById("menuBtn").onclick = () => document.getElementById("sidebar").classList.toggle("open");

function fillSubjectSelects() {
  ["studySubject","questionSubject","reviewSubject"].forEach(id => {
    document.getElementById(id).innerHTML = SUBJECTS.map(s => `<option>${s.name}</option>`).join("");
  });
}

function todayName() {
  return ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"][new Date().getDay()];
}

function renderWeek() {
  const grid = document.getElementById("weekGrid");
  grid.innerHTML = Object.entries(WEEK).map(([day,tasks]) => `
    <article class="day-card">
      <span class="eyebrow">${day === todayName() ? "HOJE" : "PLANO"}</span>
      <h3>${day}</h3>
      ${tasks.map(([name,time],i) => {
        const key = `${day}-${i}`;
        return `<label class="task-item">
          <span class="task-left"><input class="task-check" type="checkbox" data-task="${key}" ${state.completedTasks[key] ? "checked" : ""}>
          <span><strong>${name}</strong><small>${time}</small></span></span>
        </label>`;
      }).join("")}
    </article>`).join("");

  document.querySelectorAll("[data-task]").forEach(el => el.onchange = e => {
    state.completedTasks[e.target.dataset.task] = e.target.checked;
    save();
  });
}

function renderToday() {
  const day = todayName();
  const tasks = WEEK[day] || [];
  document.getElementById("todayPlan").innerHTML = tasks.map(([name,time],i) => {
    const key = `${day}-${i}`;
    return `<label class="task-item">
      <span class="task-left"><input class="task-check" type="checkbox" data-today="${key}" ${state.completedTasks[key] ? "checked" : ""}>
      <span><strong>${name}</strong><small>${time}</small></span></span>
      <span class="tag">${day}</span>
    </label>`;
  }).join("") || `<p class="muted">Sem tarefas para hoje.</p>`;

  document.querySelectorAll("[data-today]").forEach(el => el.onchange = e => {
    state.completedTasks[e.target.dataset.today] = e.target.checked;
    save();
  });
}

function subjectStats(name) {
  const q = state.questions.filter(x => x.subject === name);
  const total = q.reduce((a,b) => a + b.total,0);
  const correct = q.reduce((a,b) => a + b.correct,0);
  return { total, correct, accuracy: total ? Math.round(correct/total*100) : 0 };
}

function renderSubjects() {
  document.getElementById("subjectsGrid").innerHTML = SUBJECTS.map((s,i) => {
    const st = subjectStats(s.name);
    const p = Math.min(100, Math.round(st.total/s.target*100));
    return `<article class="subject-card">
      <span class="eyebrow">MÓDULO ${String(i+1).padStart(2,"0")}</span>
      <h3>${s.name}</h3>
      <ul>${s.topics.map(t => `<li>${t}</li>`).join("")}</ul>
      <div class="progress-meta"><span>${st.total}/${s.target} questões</span><strong>${p}%</strong></div>
      <div class="bar"><i style="width:${p}%"></i></div>
    </article>`;
  }).join("");
}

function renderSubjectProgress() {
  const studiedSubjects = SUBJECTS.map(subject => {
    const minutes = state.sessions
      .filter(session => session.subject === subject.name)
      .reduce((total, session) => total + session.minutes, 0);

    return {
      name: subject.name,
      minutes
    };
  });

  const highestMinutes = Math.max(
    60,
    ...studiedSubjects.map(subject => subject.minutes)
  );

  document.getElementById("subjectProgress").innerHTML =
    studiedSubjects
      .sort((a, b) => b.minutes - a.minutes)
      .slice(0, 5)
      .map(subject => {
        const percentage = Math.round(
          (subject.minutes / highestMinutes) * 100
        );

        const timeText =
          subject.minutes >= 60
            ? `${(subject.minutes / 60).toFixed(1)}h`
            : `${subject.minutes} min`;

        return `
          <div class="progress-line">
            <div class="progress-meta">
              <span>${subject.name}</span>
              <strong>${timeText}</strong>
            </div>

            <div class="bar">
              <i style="width:${percentage}%"></i>
            </div>
          </div>
        `;
      })
      .join("");

}

function renderQuestions() {
  const total = state.questions.reduce((a,b)=>a+b.total,0);
  const correct = state.questions.reduce((a,b)=>a+b.correct,0);
  const accuracy = total ? Math.round(correct/total*100) : 0;
  document.getElementById("questionsStat").textContent = total;
  document.getElementById("accuracyStat").textContent = accuracy + "%";
  document.getElementById("questionSummary").textContent = accuracy + "%";
  document.getElementById("questionBars").innerHTML = SUBJECTS.filter(s=>subjectStats(s.name).total>0).map(s => {
    const st = subjectStats(s.name);
    return `<div class="progress-line">
      <div class="progress-meta"><span>${s.name}</span><strong>${st.correct}/${st.total}</strong></div>
      <div class="bar"><i style="width:${st.accuracy}%"></i></div>
    </div>`;
  }).join("") || `<p class="muted">Registre seu primeiro bloco de questões.</p>`;
}

function renderSessions() {
  const totalMinutes = state.sessions.reduce((a,b)=>a+b.minutes,0);
  document.getElementById("hoursStat").textContent = `${(totalMinutes/60).toFixed(1)}h`;
  document.getElementById("sessionHistory").innerHTML = state.sessions.slice().reverse().slice(0,8).map(x => `
    <div class="history-item">
      <div><strong>${x.subject}</strong><small>${x.topic || "Estudo geral"} • ${x.minutes} min • ${x.date}</small></div>
      <span class="tag">CONCLUÍDO</span>
    </div>`).join("") || `<p class="muted">Nenhuma sessão registrada ainda.</p>`;
}

function renderReviews() {
  const today = new Date(); today.setHours(0,0,0,0);
  document.getElementById("reviewList").innerHTML = state.reviews.slice().sort((a,b)=>new Date(a.due)-new Date(b.due)).map((r,i) => {
    const due = new Date(r.due + "T00:00:00");
    const overdue = due < today && !r.done;
    return `<div class="review-item">
      <div>
        <strong>${r.topic}</strong>
        <small>${r.subject} • ${new Date(r.due+"T00:00:00").toLocaleDateString("pt-BR")}</small>
      </div>
      <div>
        <span class="tag">${r.done ? "FEITA" : overdue ? "ATRASADA" : "PENDENTE"}</span>
        <button class="text-btn" data-review="${i}">${r.done ? "Reabrir" : "Concluir"}</button>
      </div>
    </div>`;
  }).join("") || `<article class="panel"><p class="muted">Nenhuma revisão agendada.</p></article>`;

  document.querySelectorAll("[data-review]").forEach(btn => btn.onclick = () => {
    const sorted = state.reviews.slice().sort((a,b)=>new Date(a.due)-new Date(b.due));
    const item = sorted[+btn.dataset.review];
    const original = state.reviews.find(x => x.id === item.id);
    original.done = !original.done;
    save();
  });
}

function renderTaf() {
  document.getElementById("tafHistory").innerHTML = state.taf.slice().reverse().slice(0,10).map(x => `
    <div class="history-item">
      <div><strong>${x.exercise}</strong><small>${x.result} • ${x.date}</small></div>
      <span class="tag">${x.effort}</span>
    </div>`).join("") || `<p class="muted">Nenhum treino registrado.</p>`;
}

function renderGoals() {
  document.getElementById("goalHours").value = state.goals.hours;
  document.getElementById("goalQuestions").value = state.goals.questions;
  document.getElementById("goalTaf").value = state.goals.taf;
  document.getElementById("goalDate").value = state.goals.date;

  const target = new Date(state.goals.date + "T23:59:59");
  const days = Math.max(0, Math.ceil((target - new Date()) / 86400000));
  document.getElementById("countdownDays").textContent = `${days} dias`;

  const doneTasks = Object.values(state.completedTasks).filter(Boolean).length;
  const taskTotal = Object.keys(WEEK).reduce((sum,d)=>sum+WEEK[d].length,0);
  const qTotal = state.questions.reduce((a,b)=>a+b.total,0);
  const studyHours = state.sessions.reduce((a,b)=>a+b.minutes,0)/60;
  const components = [
    Math.min(100,doneTasks/taskTotal*100),
    Math.min(100,qTotal/state.goals.questions*100),
    Math.min(100,studyHours/state.goals.hours*100)
  ];
  const overall = Math.round(components.reduce((a,b)=>a+b,0)/components.length);
  document.getElementById("overallProgress").textContent = overall+"%";
  document.getElementById("progressRing").style.setProperty("--p", overall);
  document.getElementById("streakStat").textContent = `${state.streak || 0} dias`;
}


function renderDashboardOverview() {
  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? "Bom dia" : hour < 18 ? "Boa tarde" : "Boa noite";
  const dayText = now.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long"
  });

  const dateEl = document.getElementById("dashboardDate");
  const greetingEl = document.getElementById("dashboardGreeting");
  const messageEl = document.getElementById("dashboardMessage");

  if (dateEl) dateEl.textContent = dayText.toUpperCase();
  if (greetingEl) greetingEl.textContent = `${greeting}! Vamos avançar mais um pouco?`;

  const totalMinutes = state.sessions.reduce((sum, item) => sum + item.minutes, 0);
  const totalHours = totalMinutes / 60;
  const today = new Date().toISOString().slice(0,10);

const todayMinutes = state.sessions
  .filter(s => s.date === today)
  .reduce((sum, s) => sum + s.minutes, 0);

const todayStudy = document.getElementById("todayStudyTime");
if (todayStudy) {
  if (todayMinutes >= 60) {
    todayStudy.textContent = (todayMinutes / 60).toFixed(1) + "h";
  } else {
    todayStudy.textContent = todayMinutes + " min";
  }
}

const welcomeStreak = document.getElementById("welcomeStreak");
if (welcomeStreak) {
  welcomeStreak.textContent = `${state.streak || 0} dias`;
}
  const weeklyGoal = Number(state.goals.hours) || 18;
  const weeklyPercent = Math.min(100, Math.round((totalHours / weeklyGoal) * 100));

  const progressText = document.getElementById("weeklyProgressText");
  const progressBar = document.getElementById("weeklyProgressBar");
  const progressDetail = document.getElementById("weeklyProgressDetail");

  if (progressText) progressText.textContent = `${weeklyPercent}%`;
  if (progressBar) progressBar.style.width = `${weeklyPercent}%`;
  if (progressDetail) {
    progressDetail.textContent = `${totalHours.toFixed(1)}h de ${weeklyGoal}h concluídas`;
  }

  if (messageEl) {
    if (weeklyPercent >= 100) {
      messageEl.textContent = "Meta semanal concluída. Excelente — agora mantenha o ritmo.";
    } else if (weeklyPercent >= 60) {
      messageEl.textContent = "Você já passou da metade da meta semanal. Continue firme.";
    } else if (state.sessions.length > 0) {
      messageEl.textContent = "Cada sessão registrada aproxima você da meta de 2027.";
    } else {
      messageEl.textContent = "Comece com uma sessão curta. Constância vale mais que pressa.";
    }
  }

  const pendingReviews = state.reviews
    .filter(item => !item.done)
    .sort((a, b) => new Date(a.due) - new Date(b.due));

  const nextReview = pendingReviews[0];
  const nextReviewTitle = document.getElementById("nextReviewTitle");
  const nextReviewDate = document.getElementById("nextReviewDate");

  if (nextReview) {
    if (nextReviewTitle) nextReviewTitle.textContent = nextReview.topic;
    if (nextReviewDate) {
      nextReviewDate.textContent = `${nextReview.subject} • ${new Date(nextReview.due + "T00:00:00").toLocaleDateString("pt-BR")}`;
    }
  } else {
    if (nextReviewTitle) nextReviewTitle.textContent = "Nenhuma revisão";
    if (nextReviewDate) nextReviewDate.textContent = "Adicione uma revisão para começar";
  }

  const tafGoal = Number(state.goals.taf) || 4;
  const tafDone = state.taf.length;
  const tafRemaining = Math.max(0, tafGoal - tafDone);
  const nextTafTitle = document.getElementById("nextTafTitle");
  const nextTafDetail = document.getElementById("nextTafDetail");

  if (tafRemaining === 0) {
    if (nextTafTitle) nextTafTitle.textContent = "Meta física concluída";
    if (nextTafDetail) nextTafDetail.textContent = `${tafDone} treinos registrados`;
  } else {
    if (nextTafTitle) nextTafTitle.textContent = `${tafRemaining} treino${tafRemaining > 1 ? "s" : ""} restante${tafRemaining > 1 ? "s" : ""}`;
    if (nextTafDetail) nextTafDetail.textContent = `${tafDone} de ${tafGoal} treinos registrados`;
  }
}

function renderAll() {
  renderWeek(); renderToday(); renderSubjects(); renderSubjectProgress();
  renderQuestions(); renderSessions(); renderReviews(); renderTaf(); renderGoals();
  renderDashboardOverview();
}

document.getElementById("questionForm").onsubmit = e => {
  e.preventDefault();
  const total = +document.getElementById("questionTotal").value;
  const correct = +document.getElementById("questionCorrect").value;
  if (correct > total) return alert("A quantidade correta não pode superar o total.");
  state.questions.push({
    subject: document.getElementById("questionSubject").value,
    total, correct, date: new Date().toLocaleDateString("pt-BR")
  });
  save(); e.target.reset();
};

let selectedMinutes = 25, remaining = 25 * 60, timerId = null;
function formatTime(date) {
  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function updateTimerTimes() {
  const startEl = document.getElementById("timerStartTime");
  const endEl = document.getElementById("timerEndTime");

  if (!startEl || !endEl) return;

  const now = new Date();
  const end = new Date(now.getTime() + remaining * 1000);

  startEl.textContent = formatTime(now);
  endEl.textContent = formatTime(end);
}
function updateTimer() {
  const m = String(Math.floor(remaining/60)).padStart(2,"0");
  const s = String(remaining%60).padStart(2,"0");
  document.getElementById("timerDisplay").textContent = `${m}:${s}`;
}function registerCompletedSession() {
  const subjectEl = document.getElementById("studySubject");
  const topicEl = document.getElementById("studyTopic");
  const notesEl = document.getElementById("studyNotes");

  state.sessions.push({
    subject: subjectEl ? subjectEl.value : "Estudo geral",
    topic: topicEl?.value || "Sessão focada",
    notes: notesEl?.value || "",
    minutes: selectedMinutes,
    date: new Date().toLocaleDateString("pt-BR")
  });

  const today = new Date().toISOString().slice(0, 10);

  if (state.lastStudyDate !== today) {
    const yesterday = new Date(Date.now() - 86400000)
      .toISOString()
      .slice(0, 10);

    state.streak =
      state.lastStudyDate === yesterday
        ? (state.streak || 0) + 1
        : 1;

    state.lastStudyDate = today;
  }

  save();
}
document.querySelectorAll(".preset").forEach(btn => btn.onclick = () => {
  if (timerId) return;
  document.querySelectorAll(".preset").forEach(x=>x.classList.remove("active"));
  btn.classList.add("active");
  selectedMinutes = +btn.dataset.minutes; remaining = selectedMinutes*60; updateTimer();
});
document.getElementById("startTimer").onclick = () => {
  const startButton = document.getElementById("startTimer");

  // Se estiver rodando, pausa
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    startButton.textContent = "Continuar";
    return;
  }

  const subject = document.getElementById("studySubject").value;
  const topic = document.getElementById("studyTopic").value.trim();

  if (!subject) {
    alert("Selecione uma disciplina antes de iniciar.");
    return;
  }

  if (!topic) {
    alert("Informe o tópico que será estudado.");
    return;
  }

  updateTimerTimes();
  startButton.textContent = "Pausar";

  timerId = setInterval(() => {
    remaining--;
    updateTimer();

    if (remaining <= 0) {
      clearInterval(timerId);
      timerId = null;
      remaining = 0;
      updateTimer();

      registerCompletedSession();

      startButton.textContent = "Iniciar";

      alert("Sessão concluída e registrada automaticamente!");
    }
  }, 1000);
};

document.getElementById("resetTimer").onclick = () => {
  clearInterval(timerId);
  timerId = null;
  remaining = selectedMinutes * 60;
  updateTimer();

  document.getElementById("startTimer").textContent = "Iniciar";

  const startEl = document.getElementById("timerStartTime");
  const endEl = document.getElementById("timerEndTime");

  if (startEl) startEl.textContent = "--:--";
  if (endEl) endEl.textContent = "--:--";
};

document.getElementById("studyForm").onsubmit = e => {
  e.preventDefault();
  state.sessions.push({
    subject: document.getElementById("studySubject").value,
    topic: document.getElementById("studyTopic").value,
    notes: document.getElementById("studyNotes").value,
    minutes: Math.max(1, selectedMinutes - Math.floor(remaining/60)),
    date: new Date().toLocaleDateString("pt-BR")
  });
  const today = new Date().toISOString().slice(0,10);
  if (state.lastStudyDate !== today) {
    const yesterday = new Date(Date.now()-86400000).toISOString().slice(0,10);
    state.streak = state.lastStudyDate === yesterday ? (state.streak||0)+1 : 1;
    state.lastStudyDate = today;
  }
  save(); e.target.reset();
};

document.getElementById("tafForm").onsubmit = e => {
  e.preventDefault();
  state.taf.push({
    exercise: document.getElementById("tafExercise").value,
    result: document.getElementById("tafResult").value || "Treino concluído",
    effort: document.getElementById("tafEffort").value,
    date: new Date().toLocaleDateString("pt-BR")
  });
  save(); e.target.reset();
};

document.getElementById("goalsForm").onsubmit = e => {
  e.preventDefault();
  state.goals = {
    hours:+document.getElementById("goalHours").value,
    questions:+document.getElementById("goalQuestions").value,
    taf:+document.getElementById("goalTaf").value,
    date:document.getElementById("goalDate").value
  };
  save();
};

document.getElementById("reviewForm").onsubmit = e => {
  e.preventDefault();
  const d = new Date();
  d.setDate(d.getDate() + +document.getElementById("reviewCycle").value);
  state.reviews.push({
    id: crypto.randomUUID(),
    subject:document.getElementById("reviewSubject").value,
    topic:document.getElementById("reviewTopic").value,
    due:d.toISOString().slice(0,10), done:false
  });
  save(); e.target.reset(); document.getElementById("reviewModal").classList.remove("open");
};
document.getElementById("addReviewBtn").onclick = () => document.getElementById("reviewModal").classList.add("open");
document.getElementById("closeReviewModal").onclick = () => document.getElementById("reviewModal").classList.remove("open");
document.getElementById("reviewModal").onclick = e => { if (e.target.id==="reviewModal") e.currentTarget.classList.remove("open"); };

document.getElementById("resetWeekBtn").onclick = () => {
  if (confirm("Reiniciar todas as marcações da semana?")) {
    state.completedTasks = {};
    save();
  }
};
const exportBackupBtn = document.getElementById("exportBackupBtn");
const importBackupBtn = document.getElementById("importBackupBtn");
const importBackupFile = document.getElementById("importBackupFile");
function createBackupPayload() {
  return {
    app: "Rota PMMG 2027",
    version: 1,
    exportedAt: new Date().toISOString(),
    data: JSON.parse(JSON.stringify(state))
  };
}
exportBackupBtn.onclick = async () => {
  const backup = createBackupPayload();

  const date = new Date().toISOString().slice(0, 10);
  const fileName = `rota-pmmg-backup-${date}.json`;

  const file = new File(
    [JSON.stringify(backup, null, 2)],
    fileName,
    { type: "application/json" }
  );

  try {
    if (
      navigator.share &&
      navigator.canShare &&
      navigator.canShare({ files: [file] })
    ) {
      await navigator.share({
        title: "Backup Rota PMMG 2027",
        text: "Backup dos meus dados de estudo.",
        files: [file]
      });

      return;
    }

    const url = URL.createObjectURL(file);
    const link = document.createElement("a");

    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);

    alert("Backup criado. Confira a pasta Downloads do navegador.");
  } catch (error) {
    if (error.name !== "AbortError") {
      alert("Não foi possível exportar o backup.");
    }
  }
};
  const backup = {
    app: "Rota PMMG 2027",
    version: 1,
    exportedAt: new Date().toISOString(),
    data: state
  };

  const file = new Blob(
    [JSON.stringify(backup, null, 2)],
    { type: "application/json" }
  );

  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);

  link.href = url;
  link.download = `rota-pmmg-backup-${date}.json`;

  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
};

importBackupBtn.onclick = () => {
  importBackupFile.value = "";
  importBackupFile.click();
};

importBackupFile.onchange = event => {
  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    try {
      const backup = JSON.parse(reader.result);
      const importedData = backup.data || backup;

      if (
        !importedData ||
        !Array.isArray(importedData.sessions) ||
        !Array.isArray(importedData.questions) ||
        !Array.isArray(importedData.reviews) ||
        !Array.isArray(importedData.taf)
      ) {
        throw new Error("Backup incompatível");
      }

      if (!confirm(
        "Importar este backup substituirá os dados atuais. Continuar?"
      )) {
        return;
      }

      state = {
        ...structuredClone(defaults),
        ...importedData,
        goals: {
          ...defaults.goals,
          ...(importedData.goals || {})
        }
      };

      save();

      alert("Backup importado com sucesso!");
    } catch (error) {
      alert("Não foi possível importar. Escolha um backup válido do Rota PMMG.");
    }
  };

  reader.readAsText(file);
};
  
 document.getElementById("resetWeekBtn").onclick = () => {
  if (confirm("Reiniciar todas as marcações da semana?")) {
    state.completedTasks = {};
    save();
  }
};
document.getElementById("clearDataBtn").onclick = () => {
  if (confirm("Isso apagará todo o histórico salvo neste navegador. Continuar?")) {
    state=structuredClone(defaults); save();
  }
};
document.getElementById("themeToggle").onclick = () => {
  state.theme = state.theme === "light" ? "dark" : "light";
  document.body.classList.toggle("light", state.theme==="light");
  document.getElementById("themeToggle").textContent = state.theme==="light" ? "☀" : "☾";
  localStorage.setItem("pmmg2027", JSON.stringify(state));
};

fillSubjectSelects();
document.body.classList.toggle("light", state.theme==="light");
document.getElementById("themeToggle").textContent = state.theme==="light" ? "☀" : "☾";
renderAll();
updateTimer();


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(err => {
      console.warn('Service worker não registrado:', err);
    });
  });
}


// ===== Versão 1.1: navegação mobile =====
const mobileSheet = document.getElementById("mobileSheet");
const moreMenuBtn = document.getElementById("moreMenuBtn");
const closeMobileSheet = document.getElementById("closeMobileSheet");

function syncMobileNav(page) {
  document.querySelectorAll("[data-mobile-page]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mobilePage === page);
  });
  if (["disciplinas", "questoes", "revisoes", "metas"].includes(page)) {
    moreMenuBtn?.classList.add("active");
  } else {
    moreMenuBtn?.classList.remove("active");
  }
}

document.querySelectorAll("[data-mobile-page]").forEach(btn => {
  btn.addEventListener("click", () => {
    const page = btn.dataset.mobilePage;
    navigate(page);
    syncMobileNav(page);
  });
});

moreMenuBtn?.addEventListener("click", () => {
  mobileSheet?.classList.add("open");
  document.body.style.overflow = "hidden";
});

closeMobileSheet?.addEventListener("click", () => {
  mobileSheet?.classList.remove("open");
  document.body.style.overflow = "";
});
document.getElementById("exportBackupMenu").onclick = () => {
  document.getElementById("exportBackupBtn").click();
  document.getElementById("mobileSheet").classList.remove("active");
};

document.getElementById("importBackupMenu").onclick = () => {
  document.getElementById("importBackupBtn").click();
  document.getElementById("mobileSheet").classList.remove("active");
};
mobileSheet?.addEventListener("click", (event) => {
  if (event.target === mobileSheet) {
    mobileSheet.classList.remove("open");
    document.body.style.overflow = "";
  }
});

document.querySelectorAll("[data-sheet-page]").forEach(btn => {
  btn.addEventListener("click", () => {
    const page = btn.dataset.sheetPage;
    navigate(page);
    syncMobileNav(page);
    mobileSheet?.classList.remove("open");
    document.body.style.overflow = "";
  });
});

// Mantém a barra inferior sincronizada também ao usar o menu lateral.
document.querySelectorAll("[data-page], [data-go]").forEach(btn => {
  btn.addEventListener("click", () => {
    const page = btn.dataset.page || btn.dataset.go;
    if (page) syncMobileNav(page);
  });
});

syncMobileNav("dashboard");


// Progresso visual do cronômetro
function updateTimerProgress() {
  const progress = document.getElementById("timerProgress");
  if (!progress) return;

  const totalSeconds = selectedMinutes * 60;
  const elapsedSeconds = totalSeconds - remaining;
  const percentage = totalSeconds > 0
    ? Math.min(100, Math.max(0, (elapsedSeconds / totalSeconds) * 100))
    : 0;

  progress.style.width = `${percentage}%`;
}

// Atualiza a barra sempre que o cronômetro muda
const originalUpdateTimer = updateTimer;

updateTimer = function () {
  originalUpdateTimer();
  updateTimerProgress();
};

updateTimerProgress();

document.addEventListener("DOMContentLoaded", async () => {
  const signedOutState = document.getElementById("googleSignedOutState");
  const signedInState = document.getElementById("googleSignedInState");

  const loginButton = document.getElementById("googleLoginButton");
  const logoutButton = document.getElementById("googleLogoutButton");
  const syncNowButton = document.getElementById("syncNowButton");

  const userName = document.getElementById("googleUserName");
  const userEmail = document.getElementById("googleUserEmail");
  const userPhoto = document.getElementById("googleUserPhoto");
  const syncStatus = document.getElementById("syncStatus");

  function setAccountStatus(message) {
    if (syncStatus) {
      syncStatus.textContent = message;
    }
  }

  function renderFirebaseUser(user) {
    const isSignedIn = Boolean(user);

    if (signedOutState) {
      signedOutState.hidden = isSignedIn;
    }

    if (signedInState) {
      signedInState.hidden = !isSignedIn;
    }

    if (loginButton) {
      loginButton.disabled = isSignedIn;
    }

    if (logoutButton) {
      logoutButton.disabled = !isSignedIn;
    }

    // A sincronização será implementada em outro commit.
    if (syncNowButton) {
      syncNowButton.disabled = true;
    }

    if (!user) {
      if (userName) {
        userName.textContent = "Usuário conectado";
      }

      if (userEmail) {
        userEmail.textContent = "";
      }

      if (userPhoto) {
        userPhoto.src = "";
        userPhoto.hidden = true;
      }

      setAccountStatus("Dados locais");
      return;
    }

    if (userName) {
      userName.textContent = user.displayName || "Usuário conectado";
    }

    if (userEmail) {
      userEmail.textContent = user.email || "";
    }

    if (userPhoto) {
      if (user.photoURL) {
        userPhoto.src = user.photoURL;
        userPhoto.hidden = false;
      } else {
        userPhoto.src = "";
        userPhoto.hidden = true;
      }
    }

    setAccountStatus("Conta conectada — dados locais");
  }

  const firebaseSync = window.firebaseSync;

  if (!firebaseSync) {
    console.error("O módulo firebase-sync.js não está disponível.");
    setAccountStatus(
      "Firebase indisponível — o aplicativo continua com dados locais."
    );
    return;
  }

  loginButton?.addEventListener("click", async () => {
    loginButton.disabled = true;
    setAccountStatus("Abrindo login do Google…");

    try {
      await firebaseSync.loginWithGoogle();
    } catch (error) {
      console.error("Erro ao entrar com Google:", error);
      setAccountStatus("Não foi possível entrar com Google.");
      loginButton.disabled = false;
    }
  });

  logoutButton?.addEventListener("click", async () => {
    logoutButton.disabled = true;
    setAccountStatus("Saindo da conta…");

    try {
      await firebaseSync.logoutFromGoogle();
    } catch (error) {
      console.error("Erro ao sair da conta Google:", error);
      setAccountStatus("Não foi possível sair da conta.");
      logoutButton.disabled = false;
    }
  });

  try {
    await firebaseSync.observeFirebaseUser(renderFirebaseUser);
  } catch (error) {
    console.error("Erro ao observar a conta Google:", error);
    setAccountStatus(
      "Não foi possível verificar a conta — usando dados locais."
    );
  }
});
