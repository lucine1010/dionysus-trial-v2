window.addEventListener("load", () => {
  unlockGrape(5);
  startEndingTrapped();
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
   TRAPPED ENDING AUDIO
======================================== */

// 改成你的真实路径
const TRAPPED_ENDING_AUDIO = {
  corridorBgm: "audio/bgm/ending/empty classroom.m4a",
  footstep: "audio/sfx/corridor/footstep.mov",
  partyBgm: "audio/bgm/party/party1+2.m4a"
};

let trappedCurrentBgm = null;
let trappedCurrentBgmKey = null;
let trappedFootstep = null;

let trappedAudioStarted = false;
let trappedAudioPending = false;
let footstepPlayed = false;

function stopTrappedCurrentBgm() {
  if (!trappedCurrentBgm) return;

  try {
    trappedCurrentBgm.pause();
    trappedCurrentBgm.currentTime = 0;
  } catch (e) {
    console.warn("Failed to stop trapped ending BGM:", e);
  }

  trappedCurrentBgm = null;
  trappedCurrentBgmKey = null;
}

function playTrappedBgm(key, volume = 0.22, forceRetry = false) {
  if (!key || !TRAPPED_ENDING_AUDIO[key]) return;

  if (!forceRetry && trappedCurrentBgmKey === key && trappedCurrentBgm) return;

  stopTrappedCurrentBgm();

  const nextBgm = new Audio(TRAPPED_ENDING_AUDIO[key]);
  nextBgm.loop = true;
  nextBgm.volume = volume;
  nextBgm.preload = "auto";

  nextBgm.play()
    .then(() => {
      trappedCurrentBgm = nextBgm;
      trappedCurrentBgmKey = key;
      trappedAudioPending = false;
    })
    .catch((err) => {
      console.warn("Trapped ending BGM autoplay blocked:", err);
      trappedCurrentBgm = null;
      trappedCurrentBgmKey = null;
      trappedAudioPending = true;
    });
}

function playFootstepOnce() {
  if (footstepPlayed) return;
  footstepPlayed = true;

  trappedFootstep = new Audio(TRAPPED_ENDING_AUDIO.footstep);
  trappedFootstep.loop = false;
  trappedFootstep.volume = 0.65;
  trappedFootstep.preload = "auto";

  trappedFootstep.play().catch((err) => {
    console.warn("Footstep autoplay blocked:", err);
  });
}

function stopTrappedEndingAudio() {
  stopTrappedCurrentBgm();

  if (trappedFootstep) {
    try {
      trappedFootstep.pause();
      trappedFootstep.currentTime = 0;
    } catch (e) {
      console.warn("Failed to stop trapped footstep:", e);
    }
    trappedFootstep = null;
  }

  trappedAudioStarted = false;
  trappedAudioPending = false;
  footstepPlayed = false;
}

function startTrappedCorridorAudio(forceRetry = false) {
  if (trappedAudioStarted && !forceRetry && trappedCurrentBgmKey === "corridorBgm") return;

  trappedAudioStarted = true;
  trappedAudioPending = false;

  if (typeof stopAllSfx === "function") stopAllSfx();
  if (typeof stopCurrentBgm === "function") stopCurrentBgm();

  playTrappedBgm("corridorBgm", 0.22, forceRetry);
}

function resumeTrappedEndingAudioIfNeeded() {
  if (trappedAudioPending) {
    startTrappedCorridorAudio(true);
  }
}

document.addEventListener("click", resumeTrappedEndingAudioIfNeeded, { once: true });

/* ========================================
   TRAPPED ENDING ROLEPLAY
======================================== */

function startEndingTrapped() {
  runEndingTrappedNode("et_01_corridor_start");
}

function runEndingTrappedNode(nodeId) {
  const node = endingTrappedData[nodeId];
  if (!node) {
    console.error("Missing trapped ending node:", nodeId);
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
    apolloPortrait,
    dionPortrait,
    apolloImg,
    dionImg
  });

  // 1) Start corridor ambience at the first node
  if (nodeId === "et_01_corridor_start") {
    startTrappedCorridorAudio();
  }

  // 2) Trigger footsteps on "Goodbye, Dion."
  if (nodeId === "et_11_apollo_goodbye") {
    playFootstepOnce();
  }

  // 3) Switch to party BGM when entering the bad party section
  if (nodeId === "et_13_party_shift") {
    playTrappedBgm("partyBgm", 0.24);
  }

  if (choicesEl) {
    choicesEl.innerHTML = "";

    if (node.choices && node.choices.length) {
      node.choices.forEach((choice) => {
        const btn = document.createElement("button");
        btn.className = "dialogue-btn";
        btn.innerText = choice.text;
        btn.onclick = () => runEndingTrappedNode(choice.next);
        choicesEl.appendChild(btn);
      });
    } else if (node.end) {
      const btn = document.createElement("button");
      btn.className = "dialogue-btn";
      btn.innerText = "FINAL ENDING";
      btn.onclick = () => {
        stopTrappedEndingAudio();
        window.location.href = "final-ending.html";
      };
      choicesEl.appendChild(btn);
    } else if (node.next) {
      const btn = document.createElement("button");
      btn.className = "dialogue-btn";
      btn.innerText = "CONTINUE";
      btn.onclick = () => runEndingTrappedNode(node.next);
      choicesEl.appendChild(btn);
    }
  }
}