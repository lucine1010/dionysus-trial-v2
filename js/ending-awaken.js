window.addEventListener("load", () => {
  unlockGrape(5);
  startHappyEnding();
});

/* ========================================
   GRAPE MANAGEMENT
======================================== */

function getGrapes() {
  const saved = localStorage.getItem("grapes");
  return saved ? parseInt(saved, 10) : 0;
}

function setGrapes(count) {
  const maxGrapes = 5;
  const newCount = Math.min(Math.max(count, 0), maxGrapes);
  localStorage.setItem("grapes", newCount);
  updateGrapeDisplay();
  return newCount;
}

function unlockGrape(step) {
  const current = getGrapes();
  if (step > current) {
    setGrapes(step);
  }
}

function updateGrapeDisplay() {
  const count = getGrapes();
  const grapeElements = document.querySelectorAll("#grape-count");
  grapeElements.forEach((el) => {
    el.innerText = count;
  });
}

/* ========================================
   HAPPY ENDING AUDIO
======================================== */

// 改成你的真实路径
const HAPPY_ENDING_AUDIO = {
  sfx: "audio/sfx/ending/happy1.mov",
  bgm: "audio/bgm/ending/happy2.m4a"
};

let happySfx = null;
let happyBgm = null;
let happyAudioStarted = false;
let happyAudioPending = false;
let bgmStarted = false;
let sfxMonitor = null;

function stopHappyEndingAudio() {
  if (sfxMonitor) {
    clearInterval(sfxMonitor);
    sfxMonitor = null;
  }

  if (happySfx) {
    try {
      happySfx.pause();
      happySfx.currentTime = 0;
    } catch (e) {
      console.warn("Failed to stop happy SFX:", e);
    }
    happySfx = null;
  }

  if (happyBgm) {
    try {
      happyBgm.pause();
      happyBgm.currentTime = 0;
    } catch (e) {
      console.warn("Failed to stop happy BGM:", e);
    }
    happyBgm = null;
  }

  happyAudioStarted = false;
  happyAudioPending = false;
  bgmStarted = false;
}

function fadeInHappyBgm(targetVolume = 0.28, duration = 1500) {
  if (!happyBgm) return;

  const startVolume = 0.02;
  happyBgm.volume = startVolume;

  const steps = 15;
  const stepTime = duration / steps;
  const stepAmount = (targetVolume - startVolume) / steps;

  let currentStep = 0;
  const fade = setInterval(() => {
    currentStep++;

    if (!happyBgm) {
      clearInterval(fade);
      return;
    }

    happyBgm.volume = Math.min(targetVolume, happyBgm.volume + stepAmount);

    if (currentStep >= steps) {
      happyBgm.volume = targetVolume;
      clearInterval(fade);
    }
  }, stepTime);
}

function startHappyBgm() {
  if (bgmStarted) return;
  bgmStarted = true;

  happyBgm = new Audio(HAPPY_ENDING_AUDIO.bgm);
  happyBgm.loop = true;
  happyBgm.preload = "auto";

  happyBgm.play()
    .then(() => {
      fadeInHappyBgm(0.28, 1800);
    })
    .catch((err) => {
      console.warn("Happy BGM play blocked:", err);
      happyAudioPending = true;
      bgmStarted = false;
    });
}

function startHappyEndingAudio() {
  if (happyAudioStarted) return;

  happyAudioStarted = true;
  happyAudioPending = false;
  bgmStarted = false;

  // Stop roleplay1 audio if present
  if (typeof stopAllSfx === "function") stopAllSfx();
  if (typeof stopCurrentBgm === "function") stopCurrentBgm();

  happySfx = new Audio(HAPPY_ENDING_AUDIO.sfx);
  happySfx.loop = false;
  happySfx.volume = 0.7;
  happySfx.preload = "auto";

  happySfx.play()
    .then(() => {
      // 在 happy1 剩 0.35 秒时提前接 happy2
      sfxMonitor = setInterval(() => {
        if (!happySfx || bgmStarted || !isFinite(happySfx.duration)) return;

        const remaining = happySfx.duration - happySfx.currentTime;
        if (remaining <= 0.45) {
          clearInterval(sfxMonitor);
          sfxMonitor = null;
          startHappyBgm();
        }
      }, 50);

      happySfx.addEventListener(
        "ended",
        () => {
          if (sfxMonitor) {
            clearInterval(sfxMonitor);
            sfxMonitor = null;
          }

          // 兜底：如果前面没成功启动 BGM，结束时再补启动
          if (!bgmStarted) {
            startHappyBgm();
          }
        },
        { once: true }
      );
    })
    .catch((err) => {
      console.warn("Happy SFX autoplay blocked:", err);
      happyAudioPending = true;
      happyAudioStarted = false;
    });
}

function resumeHappyEndingAudioIfNeeded() {
  if (!happyAudioPending && happyAudioStarted) return;
  startHappyEndingAudio();
}

document.addEventListener("click", resumeHappyEndingAudioIfNeeded, { once: true });

/* ========================================
   HAPPY ENDING ROLEPLAY
======================================== */

function startHappyEnding() {
  runHappyEndingNode("he_01_awaken_start");
}

function runHappyEndingNode(nodeId) {
  const node = happyEndingData[nodeId];
  if (!node) {
    console.error("Missing happy ending node:", nodeId);
    return;
  }

  const quest2 = document.getElementById("quest2");
  const textEl = document.getElementById("apollo-text");
  const choicesEl = document.getElementById("apollo-choices");
  const speakerEl = document.getElementById("speaker-name");

  const apolloPortrait = document.getElementById("apollo-portrait");
  const dionPortrait = document.getElementById("dion-portrait");
  const apolloImg = document.getElementById("apollo-img");
  const dionImg = document.getElementById("dion-img");

  if (quest2 && node.background) {
    quest2.style.backgroundImage = `url("${node.background}")`;
  }

  if (speakerEl) {
    speakerEl.innerText = node.speaker || "";
    updateSpeakerStyle(node.speaker, speakerEl);
  }

  if (textEl) {
    textEl.innerText = node.text || "";
  }

  updatePortraits({
    speaker: node.speaker,
    expression: node.expression,
    form: node.form || "human",
    hidePortraits: !!node.hidePortraits,

    apolloForm: node.apolloForm,
    apolloExpression: node.apolloExpression,
    dionForm: node.dionForm,
    dionExpression: node.dionExpression,

    apolloPortrait,
    dionPortrait,
    apolloImg,
    dionImg
  });
  
  if (nodeId === "he_01_awaken_start") {
    startHappyEndingAudio();
  }

  if (choicesEl) {
    choicesEl.innerHTML = "";

    if (node.choices && node.choices.length) {
      node.choices.forEach((choice) => {
        const btn = document.createElement("button");
        btn.className = "dialogue-btn";
        btn.innerText = choice.text;
        btn.onclick = () => runHappyEndingNode(choice.next);
        choicesEl.appendChild(btn);
      });
    } else if (node.end) {
      const btn = document.createElement("button");
      btn.className = "dialogue-btn";
      btn.innerText = "FINAL ENDING";
      btn.onclick = () => {
        stopHappyEndingAudio();
        window.location.href = "final-ending.html";
      };
      choicesEl.appendChild(btn);
    } else if (node.next) {
      const btn = document.createElement("button");
      btn.className = "dialogue-btn";
      btn.innerText = "CONTINUE";
      btn.onclick = () => runHappyEndingNode(node.next);
      choicesEl.appendChild(btn);
    }
  }
}