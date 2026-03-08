/**
 * Project 2: Dionysus - The Dream Trial
 * Homepage & Chatbot Logic (index.html)
 */

let grapes = 0;

// Initialize homepage on load
window.onload = function() {
    // Show campus by default
    const campusSection = document.getElementById('campus');
    if (campusSection) {
        campusSection.classList.remove('hidden');
        campusSection.classList.add('active');
    }
    
    // Load grapes from localStorage
    const savedGrapes = localStorage.getItem('grapes');
    if (savedGrapes) {
        grapes = parseInt(savedGrapes);
        document.getElementById('grape-count').innerText = grapes;
    } else {
        document.getElementById('grape-count').innerText = '0';
    }
    
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
            appendBotMessage("I knew you had the spirit! Here is your first **Grape 🍇**.");
            appendBotMessage("Now, listen: your guide is waiting. Click **BEGIN THE TRIAL** when you're ready!");
            updateGrapes();
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

function updateGrapes() {
    if(grapes < 5) {
        grapes++;
        document.getElementById('grape-count').innerText = grapes;
        localStorage.setItem('grapes', grapes);
    }
}

// Optional: Reset function if needed
function resetProgress() {
    grapes = 0;
    localStorage.removeItem('grapes');
    document.getElementById('grape-count').innerText = '0';
    document.getElementById('chatbot-history').innerHTML = '';
    document.getElementById('user-input').value = '';
    autoGreeting();
}