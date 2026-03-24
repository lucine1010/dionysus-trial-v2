const ROLEPLAY1_IMAGES = {
  APOLLO: {
    normal: "roleplay1/A-normal.png",
    angry: "roleplay1/A-angry.png",
    upset: "roleplay1/A-upset.png",
    shocked: "roleplay1/A-shocked.png",
    smile: "roleplay1/A-smile.png",
    smirk: "roleplay1/A-smirk.png",
    "eyes-closed": "roleplay1/A-eyes-closed.png"
  },
  DION: {
    normal: "roleplay1/D-normal.png",
    angry: "roleplay1/D-angry.png",
    upset: "roleplay1/D-upset.png",
    shocked: "roleplay1/D-shocked.png",
    smile: "roleplay1/D-smile.png",
    laugh: "roleplay1/D-laugh.png"
  }
};

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
    hidePortraits: !!node.hidePortraits,
    apolloPortrait,
    dionPortrait,
    apolloImg,
    dionImg
  });

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

function updatePortraits({
  speaker,
  expression,
  hidePortraits,
  apolloPortrait,
  dionPortrait,
  apolloImg,
  dionImg
}) {
  if (!apolloPortrait || !dionPortrait || !apolloImg || !dionImg) return;

  // IMPORTANT: If hidePortraits is explicitly true, hide both and stop
  if (hidePortraits) {
    apolloPortrait.classList.add("roleplay-hidden");
    dionPortrait.classList.add("roleplay-hidden");
    return;
  }

  // ALWAYS remove hidden classes if we reach here (hidePortraits is false/undefined)
  apolloPortrait.classList.remove("roleplay-hidden");
  dionPortrait.classList.remove("roleplay-hidden");

  // Handle specific speakers: APOLLO and DION stay in their positions
  if (speaker === "APOLLO") {
    const imgPath = ROLEPLAY1_IMAGES.APOLLO[expression] || ROLEPLAY1_IMAGES.APOLLO.normal;
    apolloImg.src = imgPath;

    // Apollo on left: active and bright
    apolloPortrait.classList.add("active");
    apolloPortrait.classList.remove("dim");
    
    // Dion on right: dimmed but visible
    dionPortrait.classList.add("dim");
    dionPortrait.classList.remove("active");
    
  } else if (speaker === "DION") {
    const imgPath = ROLEPLAY1_IMAGES.DION[expression] || ROLEPLAY1_IMAGES.DION.normal;
    dionImg.src = imgPath;

    // Dion on right: active and bright
    dionPortrait.classList.add("active");
    dionPortrait.classList.remove("dim");
    
    // Apollo on left: dimmed but visible
    apolloPortrait.classList.add("dim");
    apolloPortrait.classList.remove("active");
    
  } else {
    // For SATYR, NARRATION, NPC, or any other speaker:
    // Keep both portraits visible but dimmed
    apolloPortrait.classList.add("dim");
    apolloPortrait.classList.remove("active");
    
    dionPortrait.classList.add("dim");
    dionPortrait.classList.remove("active");
  }
}

function finishRoleplay1() {
  navigateTo("quest3");
}