const screenEl = document.getElementById("screen");
const screens = FORM_CONFIG.screens;

const state = JSON.parse(localStorage.getItem("seaFormState")) || {
  step: 0,
  answers: {},
  truthOpen: {},
  user: { name: "", email: "", whatsapp: "" }
};

function save() {
  localStorage.setItem("seaFormState", JSON.stringify(state));
}

function render() {
  const currentScreen = screens[state.step];

  updateProgress();
  screenEl.innerHTML = "";

  if (currentScreen.type === "intro") renderIntro();
  if (currentScreen.type === "userData") renderUserData();
  if (currentScreen.type === "question") renderQuestion(currentScreen);
  if (currentScreen.type === "summary") renderSummary();
  if (currentScreen.type === "result") renderResult();
  if (currentScreen.type === "pause") renderPause();
  if (currentScreen.type === "final") renderFinal();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateProgress() {
  const percent = (state.step / (screens.length - 1)) * 100;
  document.getElementById("progressBar").style.width = `${percent}%`;
}

function backButton() {
  if (state.step === 0) return "";
  return `<button class="back" onclick="goBack()"><span>←</span> ${FORM_CONFIG.labels.back}</button>`;
}

function nextButton(text = FORM_CONFIG.buttons.defaultNext) {
  return `<button id="nextBtn" class="btn" onclick="goNext()">${text} <span>→</span></button><div id="error" class="error"></div>`;
}

function renderIntro() {
  screenEl.innerHTML = `
    <h1>${FORM_CONFIG.introScreen.title}</h1>
    ${FORM_CONFIG.introScreen.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}
    ${nextButton(FORM_CONFIG.buttons.intro)}
  `;
}

function renderUserData() {
  screenEl.innerHTML = `
    ${backButton()}
    <h2>${FORM_CONFIG.userDataScreen.title}</h2>
    <p>${FORM_CONFIG.userDataScreen.subtitle}</p>

    <div class="field">
      <label>${FORM_CONFIG.labels.name}<span class="required">${FORM_CONFIG.labels.requiredSymbol}</span></label>
      <input id="name" value="${state.user.name || ""}">
    </div>

    <div class="field">
      <label>${FORM_CONFIG.labels.email}<span class="required">${FORM_CONFIG.labels.requiredSymbol}</span></label>
      <input id="email" value="${state.user.email || ""}">
    </div>

    <div class="field">
      <label>${FORM_CONFIG.labels.whatsapp}</label>
      <input id="whatsapp" value="${state.user.whatsapp || ""}">
    </div>

    ${nextButton(FORM_CONFIG.buttons.userData)}
  `;
}

function renderQuestion(question) {
  const selected = state.answers[question.id]?.selected || [];
  const truth = state.answers[question.id]?.truth || "";
  const truthIsOpen = state.truthOpen[question.id];

  const optionHtml = question.options.map((text, index) => {
    const letter = String.fromCharCode(65 + index);
    const isSelected = selected.includes(text);

    return `
      <div class="option ${isSelected ? "selected" : ""}" onclick="toggleOption('${question.id}', ${index})">
        <span class="key">${letter}</span>
        <span>${text}</span>
      </div>
    `;
  }).join("");

  screenEl.innerHTML = `
    ${backButton()}
    <h2>${question.title} <span class="required">${FORM_CONFIG.labels.requiredSymbol}</span></h2>
    <div class="options">${optionHtml}</div>

    ${question.noTruth ? "" : `
      <div class="truth-box">
        <button class="truth-button ${truthIsOpen ? "selected" : ""}" onclick="openTruth('${question.id}')"><span class="key">E</span> ${FORM_CONFIG.labels.truthButton}</button>
        ${truthIsOpen ? `<textarea class="truth-input" id="truth-${question.id}" placeholder="${FORM_CONFIG.labels.truthPlaceholder}">${truth}</textarea>` : ""}
      </div>
    `}

    ${nextButton(question.button || FORM_CONFIG.buttons.defaultNext)}
  `;
}

function renderSummary() {
  const name = state.user.name || "";

  screenEl.innerHTML = `
    ${backButton()}
    <div class="summary">
      <h1>${FORM_CONFIG.summaryScreen.titlePrefix}<em>${name}</em></h1>
      ${FORM_CONFIG.summaryScreen.paragraphsBeforeAnswers.map(paragraph => `<p>${paragraph}</p>`).join("")}
      ${summaryItems()}
      ${FORM_CONFIG.summaryScreen.paragraphsAfterAnswers.map(paragraph => `<p>${paragraph}</p>`).join("")}
      ${nextButton(FORM_CONFIG.buttons.summary)}
    </div>
  `;
}

function summaryItems() {
  return Object.keys(FORM_CONFIG.summaryScreen.answerLabels).map(id => {
    const answer = state.answers[id] || { selected: [], truth: "" };
    const parts = [...answer.selected];

    if (answer.truth) {
      parts.push(answer.truth);
    }

    return `<p>- <span class="label">${FORM_CONFIG.summaryScreen.answerLabels[id]}:</span> <em>${parts.join(" / ")}</em></p>`;
  }).join("");
}

function renderResult() {
  const q8Answer = state.answers.q8?.selected?.[0] || "";
  const resultTitle = getResultTitle(q8Answer);

  screenEl.innerHTML = `
    ${backButton()}
    <h2>${FORM_CONFIG.resultScreen.title}</h2>
    <div class="big-result">${resultTitle}</div>
    ${FORM_CONFIG.resultScreen.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}
    ${nextButton(FORM_CONFIG.buttons.result)}
  `;
}

function getResultTitle(answer) {
  if (answer.startsWith("ESTRUCTURA")) return FORM_CONFIG.resultScreen.results.estructura;
  if (answer.startsWith("DISFRUTE")) return FORM_CONFIG.resultScreen.results.disfrute;
  if (answer.startsWith("SOBERANÍA")) return FORM_CONFIG.resultScreen.results.soberania;
  return FORM_CONFIG.resultScreen.results.calma;
}

function renderPause() {
  screenEl.innerHTML = `
    ${backButton()}
    ${FORM_CONFIG.pauseScreen.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}
    ${nextButton(FORM_CONFIG.buttons.pause)}
  `;
}

function renderFinal() {
  const finalType = getFinalType();
  const finalContent = FORM_CONFIG.finalScreens[finalType];
  const linkUrl = getFinalLinkUrl(finalContent.linkType);

  screenEl.innerHTML = `
    <h1>${finalContent.titlePrefix}${state.user.name}</h1>
    <h2>${finalContent.heading}</h2>
    <p>${finalContent.body}</p>
    <p><a class="final-link" href="${linkUrl}" target="_blank">${finalContent.linkText}</a></p>
    ${finalContent.footer ? `<br><p><strong><em>${finalContent.footer}</em></strong></p>` : ""}
    <button class="btn" onclick="restartForm()">${FORM_CONFIG.buttons.restart}</button>
  `;
}

function getFinalType() {
  const q9 = state.answers.q9?.selected?.[0] || "";
  const q10 = state.answers.q10?.selected?.[0] || "";

  const q9A = q9.startsWith("Estoy lista");
  const q9B = q9.startsWith("Siento que podría");
  const q9C = q9.startsWith("Solo quería");

  const q10A = q10.startsWith("Sí, entiendo");
  const q10B = q10.startsWith("En este momento");

  if (q9A && q10A) return FORM_CONFIG.finalLogic.q9A_q10A;
  if (q9A && q10B) return FORM_CONFIG.finalLogic.q9A_q10B;
  if (q9B && q10A) return FORM_CONFIG.finalLogic.q9B_q10A;
  if (q9B && q10B) return FORM_CONFIG.finalLogic.q9B_q10B;
  if (q9C && q10A) return FORM_CONFIG.finalLogic.q9C_q10A;
  if (q9C && q10B) return FORM_CONFIG.finalLogic.q9C_q10B;

  return FORM_CONFIG.finalLogic.fallback;
}

function getFinalLinkUrl(linkType) {
  if (linkType === "instagram") {
    return FORM_CONFIG.instagramUrl;
  }

  if (linkType === "waitlist") {
    return `https://wa.me/${FORM_CONFIG.whatsappNumber}?text=${encodeURIComponent(FORM_CONFIG.waitlistMessage)}`;
  }

  return `https://wa.me/${FORM_CONFIG.whatsappNumber}?text=${encodeURIComponent(FORM_CONFIG.whatsappMessage)}`;
}

function toggleOption(questionId, optionIndex) {
  const question = screens.find(screen => screen.id === questionId);
  const optionText = question.options[optionIndex];

  if (!state.answers[questionId]) {
    state.answers[questionId] = { selected: [], truth: "" };
  }

  if (question.multiple) {
    toggleMultipleAnswer(questionId, optionText);
  } else {
    state.answers[questionId].selected = [optionText];
  }

  save();
  renderQuestion(question);
}

function toggleMultipleAnswer(questionId, optionText) {
  const selectedAnswers = state.answers[questionId].selected;

  if (selectedAnswers.includes(optionText)) {
    state.answers[questionId].selected = selectedAnswers.filter(answer => answer !== optionText);
  } else {
    selectedAnswers.push(optionText);
  }
}

function openTruth(questionId) {
  if (!state.answers[questionId]) {
    state.answers[questionId] = { selected: [], truth: "" };
  }

  if (state.truthOpen[questionId]) {
    state.truthOpen[questionId] = false;
    state.answers[questionId].truth = "";
  } else {
    state.truthOpen[questionId] = true;
  }

  save();
  render();
}

function goBack() {
  if (state.step > 0) {
    saveCurrentInputs();
    state.step--;
    save();
    render();
  }
}

function goNext() {
  saveCurrentInputs();

  if (!validateCurrent()) {
    return;
  }

  const currentScreen = screens[state.step];
  const nextScreen = screens[state.step + 1];

  if (currentScreen.id === "q10" && nextScreen?.type === "final") {
    if (!state.submitted && !state.submitting) {
      state.submitting = true;
      state.submitted = true;
      save();

      submitForm().catch(function(error) {
        console.error("Error enviando formulario:", error);
      });
    }
  }

  if (state.step < screens.length - 1) {
    state.step++;
    save();
    render();
  }
}

function saveCurrentInputs() {
  const currentScreen = screens[state.step];

  if (currentScreen.type === "userData") {
    state.user.name = document.getElementById("name")?.value.trim() || "";
    state.user.email = document.getElementById("email")?.value.trim() || "";
    state.user.whatsapp = document.getElementById("whatsapp")?.value.trim() || "";
  }

  if (currentScreen.type === "question" && !currentScreen.noTruth && state.truthOpen[currentScreen.id]) {
    if (!state.answers[currentScreen.id]) {
      state.answers[currentScreen.id] = { selected: [], truth: "" };
    }

    state.answers[currentScreen.id].truth = document.getElementById(`truth-${currentScreen.id}`)?.value.trim() || "";
  }

  save();
}

function validateCurrent() {
  const currentScreen = screens[state.step];
  const error = document.getElementById("error");

  if (currentScreen.type === "userData") {
    return validateUserData(error);
  }

  if (currentScreen.type === "question") {
    return validateQuestion(currentScreen, error);
  }

  return true;
}

function validateUserData(error) {
  if (!state.user.name || !state.user.email) {
    error.textContent = FORM_CONFIG.validationMessages.userData;
    return false;
  }

  return true;
}

function validateQuestion(question, error) {
  const answer = state.answers[question.id] || { selected: [], truth: "" };
  const hasSelection = answer.selected.length > 0;
  const hasTruth = answer.truth && answer.truth.trim().length > 0;

  if (!hasSelection && !hasTruth) {
    error.textContent = FORM_CONFIG.validationMessages.question;
    return false;
  }

  if (state.truthOpen[question.id] && !hasTruth) {
    error.textContent = FORM_CONFIG.validationMessages.truth;
    return false;
  }

  return true;
}

async function submitForm() {
  const finalType = getFinalType();

  const payload = {
    user: state.user,
    answers: state.answers,
    finalScreen: finalType
  };

  await fetch(FORM_CONFIG.appsScriptUrl, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(payload)
  });

  state.submitting = false;
  save();
}

function restartForm() {
  localStorage.removeItem("seaFormState");
  location.reload();
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter" && !event.shiftKey) {
    const activeElement = document.activeElement.tagName.toLowerCase();

    if (activeElement !== "textarea") {
      event.preventDefault();
      goNext();
    }
  }

  if (event.key === "ArrowLeft") {
    goBack();
  }
});

render();