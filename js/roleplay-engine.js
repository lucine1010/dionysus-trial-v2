const ROLEPLAY1_IMAGES = {
  APOLLO: {
    human: {
      normal: "roleplay1/A-normal.png",
      angry: "roleplay1/A-angry.png",
      upset: "roleplay1/A-upset.png",
      shocked: "roleplay1/A-shocked.png",
      smile: "roleplay1/A-smile.png",
      smirk: "roleplay1/A-smirk.png",
      "eyes-closed": "roleplay1/A-eyes-closed.png"
    },
    god: {
      normal: "roleplay1/A-G_normal.png",
      angry: "roleplay1/A-G_angry.png",
      upset: "roleplay1/A-G_upset.png",
      shocked: "roleplay1/A-G_shocked.png",
      smile: "roleplay1/A-G_smile.png",
      smirk: "roleplay1/A-G_smirk.png",
      "eyes-closed": "roleplay1/A-G_eyes-closed.png"
    }
  },

  DION: {
    human: {
      normal: "roleplay1/D-normal.png",
      angry: "roleplay1/D-angry.png",
      upset: "roleplay1/D-upset.png",
      shocked: "roleplay1/D-shocked.png",
      smile: "roleplay1/D-smile.png",
      laugh: "roleplay1/D-laugh.png"
    },
    god: {
      normal: "roleplay1/D-G_normal.png",
      normal_with_jar: "roleplay1/D-G_normal_with_jar.png",
      angry: "roleplay1/D-G_angry.png",
      upset: "roleplay1/D-G_upset.png",
      shocked: "roleplay1/D-G_shocked.png",
      smile: "roleplay1/D-G_smile.png",
      laugh: "roleplay1/D-G_laugh.png"
    }
  }
};

/* =========================
   AUDIO PATHS
========================= */

const ROLEPLAY1_AUDIO = {
  bgm: {
    party: "audio/bgm/party/party1+2.m4a",
    flashback1: "audio/bgm/flashback/flashback1-1.m4a",
    flashback2: "audio/bgm/flashback/flashback2-1.m4a",
    flashback3: "audio/bgm/flashback/flashback3-1&2.m4a",
    corridor: "audio/bgm/corridor/corridor2.m4a",
    nextday: "audio/bgm/nextday/nextday2+3.m4a",
    nextday_tension: "audio/bgm/nextday/nextday4.m4a"
  },

  sfx: {
    party2_1: "audio/sfx/party/party2-1.mp3",
    party2_2: "audio/sfx/party/party2-2.mp3",
    party2_3: "audio/sfx/party/party2-3.mp3",
    party3: "audio/sfx/party/party3.m4a",
    party4: "audio/sfx/party/party4.mp3",
    party5: "audio/sfx/party/party5.mp3",

    flashback1_2: "audio/sfx/flashback/flashback1-2.mp3",
    flashback1_3: "audio/sfx/flashback/flashback1-3.mp3",
    transition2: "audio/sfx/flashback/transition2.m4a",

    corridor1: "audio/sfx/corridor/corridor1.mp3",
    corridor3: "audio/sfx/corridor/corridor3.m4a",

    nextday1: "audio/sfx/nextday/nextday1.mp3"
  }
};

/* =========================
   AUDIO STATE
========================= */

let currentBgm = null;
let currentBgmKey = null;
let currentSfxList = [];

let audioUnlocked = true;
let currentPendingBgmKey = null;
let currentPendingBgmVolume = 0.32;

function unlockAudioAndResume() {
  audioUnlocked = true;

  if (currentPendingBgmKey) {
    const pendingKey = currentPendingBgmKey;
    const pendingVolume = currentPendingBgmVolume;
    currentPendingBgmKey = null;
    playBgm(pendingKey, pendingVolume);
  }
}

document.addEventListener("click", unlockAudioAndResume, { once: true });

function createAudio(src, loop = false, volume = 1) {
  const audio = new Audio(src);
  audio.loop = loop;
  audio.volume = volume;
  audio.preload = "auto";
  return audio;
}

function stopCurrentBgm() {
  if (!currentBgm) return;

  try {
    currentBgm.pause();
    currentBgm.currentTime = 0;
  } catch (e) {
    console.warn("Failed to stop BGM:", e);
  }

  currentBgm = null;
  currentBgmKey = null;
}

function stopAllSfx() {
  currentSfxList.forEach(audio => {
    try {
      audio.pause();
      audio.currentTime = 0;
    } catch (e) {
      console.warn("Failed to stop SFX:", e);
    }
  });

  currentSfxList = [];
}

function playBgm(key, volume = 0.32) {
  if (!key || !ROLEPLAY1_AUDIO.bgm[key]) return;
  if (currentBgmKey === key) return;

  currentPendingBgmKey = key;
  currentPendingBgmVolume = volume;

  stopCurrentBgm();

  currentBgm = createAudio(ROLEPLAY1_AUDIO.bgm[key], true, volume);
  currentBgmKey = key;

  currentBgm.play()
    .then(() => {
      currentPendingBgmKey = null;
    })
    .catch(err => {
      console.warn("BGM autoplay blocked:", err);
    });
}

function playSfx(key, volume = 0.65, delay = 0) {
  if (!key || !ROLEPLAY1_AUDIO.sfx[key]) return;

  const trigger = () => {
    const sfx = createAudio(ROLEPLAY1_AUDIO.sfx[key], false, volume);

    currentSfxList.push(sfx);

    sfx.addEventListener("ended", () => {
      currentSfxList = currentSfxList.filter(item => item !== sfx);
    });

    sfx.play().catch(err => {
      console.warn("SFX autoplay blocked:", err);
    });
  };

  if (delay > 0) {
    setTimeout(trigger, delay);
  } else {
    trigger();
  }
}

/* =========================
   NODE AUDIO MAP
========================= */

function handleNodeAudio(nodeId) {
  // PARTY START
  if (nodeId === "rp1_01_party_intro") {
    stopAllSfx();
    playBgm("party", 0.28);
  }

  if (nodeId === "rp1_02_satyr_push") {
    playSfx("party3", 0.55);
  }

  if (nodeId === "rp1_04_apollo_smashes") {
    stopAllSfx();
    stopCurrentBgm();
    playSfx("party4", 0.8);
    playSfx("party5", 0.75, 450);
  }

  // FLASHBACK 1
  if (nodeId === "rp1_06_flashback_start") {
    stopAllSfx();
    playBgm("flashback1", 0.24);
  }

  if (nodeId === "rp1_07_flashback_1") {
    playSfx("flashback1_2", 0.62);
    playSfx("flashback1_3", 0.28, 300);
  }

  // FLASHBACK 2
  if (nodeId === "rp1_13_flashback_6") {
    stopAllSfx();
    playBgm("flashback2", 0.23);
  }

  // FLASHBACK 3
  if (nodeId === "rp1_20_flashback_12") {
    stopAllSfx();
    playBgm("flashback3", 0.23);
  }

  // RETURN TO PARTY
  if (nodeId === "rp1_26_back_to_party_transition") {
    stopAllSfx();
    playSfx("transition2", 0.7);
    playBgm("party", 0.18);
  }

  if (nodeId === "rp1_27_back_to_party") {
    stopAllSfx();
    playSfx("party2_1", 0.28);
    // 先只保留一个 crowd murmur，避免太乱
    // playSfx("party2_2", 0.22, 120);
  }

  if (nodeId === "rp1_37_apollo_move") {
    stopAllSfx();
    playSfx("party2_3", 0.45);
  }

  // CORRIDOR
  if (nodeId === "rp1_38_transition_space") {
    stopAllSfx();
    playSfx("corridor1", 0.52);
    playBgm("corridor", 0.17);
  }

  if (nodeId === "rp1_57_leave_corridor") {
    stopAllSfx();
    playSfx("corridor3", 0.42);
  }

  // NEXT DAY
  if (nodeId === "rp1_58_next_day") {
    stopAllSfx();
    playSfx("nextday1", 0.42);
    playBgm("nextday", 0.19);
  }

  if (nodeId === "rp1_65_apollo_dont_play_dumb") {
    stopAllSfx();
    playBgm("nextday_tension", 0.17);
  }

  // CHASE / END
  if (nodeId === "rp1_72_apollo_run") {
    stopAllSfx();
    playBgm("nextday_tension", 0.24);
  }

  if (nodeId === "rp1_74_dion_runs") {
    stopAllSfx();
    stopCurrentBgm();
  }
}

/* =========================
   ROLEPLAY FLOW
========================= */

function startRoleplay1() {
  runRoleplayNode("rp1_01_party_intro");
}

function runRoleplayNode(nodeId) {
  const node = roleplay1Data[nodeId];
  if (!node) {
    console.error("Missing roleplay node:", nodeId);
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

  handleNodeAudio(nodeId);

  if (choicesEl) {
    choicesEl.innerHTML = "";

    if (node.choices && node.choices.length) {
      node.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "dialogue-btn";
        btn.innerText = choice.text;
        btn.onclick = () => runRoleplayNode(choice.next);
        choicesEl.appendChild(btn);
      });
    } else if (node.end) {
      const btn = document.createElement("button");
      btn.className = "dialogue-btn";
      btn.innerText = "ENTER THE MAZE";
      btn.onclick = () => finishRoleplay1();
      choicesEl.appendChild(btn);
    } else if (node.next) {
      const btn = document.createElement("button");
      btn.className = "dialogue-btn";
      btn.innerText = "CONTINUE";
      btn.onclick = () => runRoleplayNode(node.next);
      choicesEl.appendChild(btn);
    }
  }
}

function updateSpeakerStyle(speaker, el) {
  const styles = {
    APOLLO: {
      color: "#C0A060",
      shadow: "0 0 18px rgba(192,160,96,0.75), 0 0 35px rgba(192,160,96,0.25)"
    },
    DION: {
      color: "#A370F7",
      shadow: "0 0 18px rgba(163,112,247,0.75), 0 0 35px rgba(163,112,247,0.25)"
    },
    SATYR: {
      color: "#7ED957",
      shadow: "0 0 18px rgba(126,217,87,0.75), 0 0 35px rgba(126,217,87,0.25)"
    },
    NPC: {
      color: "#ffffff",
      shadow: "0 0 10px rgba(255,255,255,0.25)"
    },
    NARRATION: {
      color: "#dddddd",
      shadow: "0 0 10px rgba(255,255,255,0.15)"
    }
  };

  const selected = styles[speaker] || styles.NARRATION;
  el.style.color = selected.color;
  el.style.textShadow = selected.shadow;
}

function getImagePath(character, form, expression) {
  const charSet = ROLEPLAY1_IMAGES[character];
  if (!charSet) return null;

  const formSet = charSet[form] || charSet.human;
  if (!formSet) return null;

  return formSet[expression] || formSet.normal || null;
}

function updatePortraits({
  speaker,
  expression,
  form,
  hidePortraits,
  apolloPortrait,
  dionPortrait,
  apolloImg,
  dionImg
}) {
  if (!apolloPortrait || !dionPortrait || !apolloImg || !dionImg) return;

  if (hidePortraits) {
    apolloPortrait.classList.add("roleplay-hidden");
    dionPortrait.classList.add("roleplay-hidden");
    return;
  }

  apolloPortrait.classList.remove("roleplay-hidden");
  dionPortrait.classList.remove("roleplay-hidden");

  if (speaker === "APOLLO") {
    const imgPath = getImagePath("APOLLO", form, expression);
    if (imgPath) apolloImg.src = imgPath;

    apolloPortrait.classList.add("active");
    apolloPortrait.classList.remove("dim");

    dionPortrait.classList.add("dim");
    dionPortrait.classList.remove("active");
  } else if (speaker === "DION") {
    const imgPath = getImagePath("DION", form, expression);
    if (imgPath) dionImg.src = imgPath;

    dionPortrait.classList.add("active");
    dionPortrait.classList.remove("dim");

    apolloPortrait.classList.add("dim");
    apolloPortrait.classList.remove("active");
  } else {
    apolloPortrait.classList.add("dim");
    apolloPortrait.classList.remove("active");

    dionPortrait.classList.add("dim");
    dionPortrait.classList.remove("active");
  }
}

function finishRoleplay1() {
  stopAllSfx();
  stopCurrentBgm();
  unlockGrape(2); // Award grape 2 for completing roleplay1
  navigateTo("quest3");
}