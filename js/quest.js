/**
 * Quest Navigation & Dialogue System
 * Handles quest2-ending progression
 */

let grapes = 0;

// Initialize quest.html on load
window.onload = function() {
    // Show first quest (quest2 with Apollo dialogue)
    navigateTo('quest2');
    
    // Retrieve grapes from localStorage if available
    const savedGrapes = localStorage.getItem('grapes');
    if (savedGrapes) {
        grapes = parseInt(savedGrapes);
        document.getElementById('grape-count').innerText = grapes;
    }
};

// --- Navigation between quests ---

function navigateTo(pageId) {
    hideAllPages();
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('active');
        console.log(`Navigated to: ${pageId}`);
    }
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

function sendMessage() {
    const input = document.getElementById('user-input');
    const text = input.value.toUpperCase().trim();
    if(!text) return;

    appendUserMessage(text);
    input.value = '';

    setTimeout(() => {
        if (text === "YES" || text === "INVITE ME") {
            appendBotMessage("I knew you had the spirit! Here is your first **Grape 🍇**.");
            appendBotMessage("You're deep in the dream now. Navigate through the trials and collect the grapes!");
            updateGrapes();
        } else {
            appendBotMessage("What? The music is so loud! Just say **YES** if you need help!");
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

function updateGrapes() {
    if(grapes < 5) {
        grapes++;
        document.getElementById('grape-count').innerText = grapes;
        localStorage.setItem('grapes', grapes);
    }
}

// --- Initialize Roleplay 1 when page loads ---
if (document.getElementById('apollo-text')) {
    startRoleplay1();
}