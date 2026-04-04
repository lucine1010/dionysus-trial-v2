/**
 * Project 2: Dionysus - The Dream Trial
 * Homepage & Chatbot Logic (index.html)
 * GRAPE PROGRESSION SYSTEM - Centralized Management
 */

/* ========================================
   GRAPE MANAGEMENT UTILITY FUNCTIONS
   ======================================== */

/**
 * Get current grape count from localStorage
 */
function getGrapes() {
    const saved = localStorage.getItem('grapes');
    return saved ? parseInt(saved) : 0;
}

/**
 * Set grape count to a specific value
 */
function setGrapes(count) {
    const maxGrapes = 5;
    const newCount = Math.min(Math.max(count, 0), maxGrapes);
    localStorage.setItem('grapes', newCount);
    updateGrapeDisplay();
    return newCount;
}

/**
 * Add one grape to current count (max 5)
 */
function addGrape() {
    const current = getGrapes();
    if (current < 5) {
        return setGrapes(current + 1);
    }
    return current;
}

/**
 * Update all visible grape-count elements on page
 */
function updateGrapeDisplay() {
    const count = getGrapes();
    const grapeElements = document.querySelectorAll('#grape-count');
    grapeElements.forEach(el => {
        el.innerText = count;
    });
}

/**
 * Unlock grape at specific progression step (used to ensure grape count matches story point)
 */
function unlockGrape(step) {
    const current = getGrapes();
    // step: 1=chatbot, 2=roleplay1, 3=maze, 4=vr, 5=ending
    if (step > current) {
        setGrapes(step);
    }
}

/* ========================================
   HOMEPAGE INITIALIZATION
   ======================================== */

let grapes = 0;

// Initialize homepage on load
window.onload = function() {
    // Show campus by default
    const campusSection = document.getElementById('campus');
    if (campusSection) {
        campusSection.classList.remove('hidden');
        campusSection.classList.add('active');
    }
    
    // Reset grapes to 0 for new playthrough (home page is always fresh start)
    grapes = 0;
    localStorage.setItem('grapes', 0);
    updateGrapeDisplay();
    
    // Show chatbot on homepage
    const chatbotContainer = document.getElementById('chatbot-container');
    if (chatbotContainer) {
        chatbotContainer.classList.remove('hidden');
    }
    
    autoGreeting();
};

// --- Chatbot Logic ---

function toggleChat() {
    document.getElementById('chatbot-window').classList.toggle('hidden');
}

function autoGreeting() {
    // Ensure window displays and Satyr greets first
    document.getElementById('chatbot-window').classList.remove('hidden');
    appendBotMessage("Hey Dion! Welcome to the party. The campus looks dreamy tonight, doesn't it? You're here to join us, right?");
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const text = input.value.toUpperCase().trim();
    if(!text) return;

    appendUserMessage(text);
    input.value = '';

    setTimeout(() => {
        if (text === "YES" || text === "INVITE ME") {
            appendBotMessage("I knew you had the spirit! Here is your first **Grape** <img src='img/icons8-grape-60.png' alt='Grape' style='height: 20px; vertical-align: middle; margin: 0 4px;'>.");
            appendBotMessage("Now, listen: your guide is waiting. Click **BEGIN THE TRIAL** when you're ready!");
            unlockGrape(1); // Award grape 1 for chatbot completion
        } else {
            appendBotMessage("What? The music is so loud! Just say **YES** if you want to join the dream!");
        }
    }, 800);
}

function appendBotMessage(text) {
    const history = document.getElementById('chatbot-history');
    const p = document.createElement('p');
    p.className = 'bot-msg';
    // Support simple bold Markdown
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

// Optional: Reset function if needed
function resetProgress() {
    setGrapes(0);
    document.getElementById('chatbot-history').innerHTML = '';
    document.getElementById('user-input').value = '';
    autoGreeting();
}
