/**
 * Quest Navigation & Dialogue System
 * Handles quest2-ending progression with grape tracking
 */

// Initialize quest.html on load
window.onload = function() {
    navigateTo('quest2');

    const chatbotContainer = document.getElementById('chatbot-container');
    if (chatbotContainer) {
        chatbotContainer.classList.remove('hidden');
    }

    autoGreeting();
};
/* ========================================
   GRAPE MANAGEMENT FUNCTIONS
   (Replicate from script.js for quest pages)
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

function addGrape() {
    const current = getGrapes();
    if (current < 5) {
        return setGrapes(current + 1);
    }
    return current;
}

function updateGrapeDisplay() {
    const count = getGrapes();
    const grapeElements = document.querySelectorAll('#grape-count');
    grapeElements.forEach(el => {
        el.innerText = count;
    });
}

function unlockGrape(step) {
    const current = getGrapes();
    if (step > current) {
        setGrapes(step);
    }
}

/* ========================================
   QUEST PROGRESSION & GRAPE TRACKING
   ======================================== */

function completeQuest3() {
    unlockGrape(3); // Award grape 3 for completing maze/quest3
}

function completeQuest4() {
    unlockGrape(4); // Award grape 4 for completing VR/quest4
}

// --- Navigation between quests ---

function navigateTo(pageId) {
    // Update grapes based on which quest page is being entered
    if (pageId === 'quest2') {
        setGrapes(2);
    } else if (pageId === 'quest3') {
        setGrapes(3);
    } else if (pageId === 'quest4') {
        setGrapes(4);
    }

    hideAllPages();

    const target = document.getElementById(pageId);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('active');
        console.log(`Navigated to: ${pageId}`);
    }

    updateGrapeDisplay();
}

function hideAllPages() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => {
        p.classList.add('hidden');
        p.classList.remove('active');
    });
}

// --- Chatbot Logic ---

function toggleChat() {
    document.getElementById('chatbot-window').classList.toggle('hidden');
}

function autoGreeting() {
    // Ensure window displays and Satyr greets first
    document.getElementById('chatbot-window').classList.remove('hidden');
    appendBotMessage("Remember, traveler. Every choice echoes in the dream. What do you need?");
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const text = input.value.toUpperCase().trim();
    if(!text) return;

    appendUserMessage(text);
    input.value = '';

    setTimeout(() => {
        if (text === "YES" || text === "INVITE ME") {
            appendBotMessage("Good. The dream requires willingness.");
            appendBotMessage("Navigate the trials, face the choices, and the path will reveal itself.");
        } else if (text === "HELP" || text === "WHAT DO I DO" || text === "GUIDE") {
            appendBotMessage("You are in the dream of Dionysus. Two paths clash: harmony and ecstasy.");
            appendBotMessage("Pay attention to the dialogue. Your choices matter more than you think.");
        } else if (text === "SKIP" || text === "SKIP DIALOGUE") {
            appendBotMessage("Impatient, are we? The story cannot be rushed. Only experienced.");
        } else {
            appendBotMessage("The music is loud here... try **YES**, **HELP**, or **SKIP** if you're lost.");
        }
    }, 800);
}

function appendBotMessage(text) {
    const history = document.getElementById('chatbot-history');
    const p = document.createElement('p');
    p.className = 'bot-msg';
    p.innerHTML = `Satyr: ${text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}`;
    history.appendChild(p);
    history.scrollTop = history.scrollHeight;
}

function appendUserMessage(text) {
    const history = document.getElementById('chatbot-history');
    const p = document.createElement('p');
    p.className = 'user-msg';
    p.innerText = text;
    history.appendChild(p);
    history.scrollTop = history.scrollHeight;
}

// --- Initialize Roleplay 1 when page loads ---
if (document.getElementById('apollo-text')) {
    startRoleplay1();
}