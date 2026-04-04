window.addEventListener("load", () => {
  // Ensure grapes are set to 5 when entering ending page
  unlockGrape(5);
  
  startEndingTrapped();
});

/* ========================================
   GRAPE MANAGEMENT - Replicate from script.js
   ======================================== */

function getGrapes() {
    const saved = localStorage.getItem('grapes');
    return saved ? parseInt(saved) : 0;
}

function setGrapes(count) {
    const maxGrapes = 5;
    const newCount = Math.min(Math.max(count, 0), maxGrapes);
    localStorage.setItem('grapes', newCount);
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
    const grapeElements = document.querySelectorAll('#grape-count');
    grapeElements.forEach(el => {
        el.innerText = count;
    });
}

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

  if (choicesEl) {
    choicesEl.innerHTML = "";

    if (node.choices && node.choices.length) {
      node.choices.forEach(choice => {
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