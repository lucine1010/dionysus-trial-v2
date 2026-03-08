/**
 * Quest Navigation & Apollo Dialogue Logic
 * Handles quest2-ending progression and Apollo scene management
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

// --- Apollo Dialogue System (Quest 2) ---

const apolloScript = {
    start: {
        speaker: "APOLLO",
        text: "Stop right there, Dionysus. You think this dream is your playground? Patterns don't lie—you are walking into a loop.",
        choices: [
            { text: "I'm finally enjoying myself. Back off!", next: "dion_speaks" }
        ]
    },
    dion_speaks: {
        speaker: "DION",
        text: "I don't care about your logic, Apollo! This is my dream, my party. Why can't you just let people be happy?",
        choices: [
            { text: "Why do you always interrupt?", next: "apollo_rebuttal" }
        ]
    },
    apollo_rebuttal: {
        speaker: "APOLLO",
        text: "I seek clarity. If you are so certain of your path, prove it in the labyrinth. Your 'joy' won't save you there.",
        choices: [
            { text: "Enter the Maze", next: "to_quest3" }
        ]
    }
};

// Initialize Apollo scene on page load
if (document.getElementById('apollo-text')) {
    runApolloScene('start');
}

function runApolloScene(step) {
    // Logic jump: proceed to quest3
    if (step === 'to_quest3') {
        navigateTo('quest3');
        return;
    }

    const data = apolloScript[step];
    const textElement = document.getElementById('apollo-text');
    const choicesContainer = document.getElementById('apollo-choices');
    const apolloImg = document.getElementById('apollo-img');
    const dionImg = document.getElementById('dion-img');
    const nameTag = document.querySelector('.name-tag');

    if (!textElement || !choicesContainer) {
        console.log('Apollo dialogue elements not found');
        return;
    }

    // Update speaker name and styling
    nameTag.innerText = data.speaker;
    
    if (data.speaker === "APOLLO") {
        nameTag.style.color = "#C0A060";
        nameTag.style.textShadow = '0 0 20px rgba(192, 160, 96, 0.8), 0 0 40px rgba(192, 160, 96, 0.4)';
    } else if (data.speaker === "DION") {
        nameTag.style.color = "#A370F7";
        nameTag.style.textShadow = '0 0 20px rgba(163, 112, 247, 0.8), 0 0 40px rgba(163, 112, 247, 0.4)';
    }

    // Update dialogue text
    textElement.innerText = data.text;

    // Update character brightness
    if (data.speaker === "APOLLO") {
        apolloImg.className = "portrait active";
        dionImg.className = "portrait dim";
    } else if (data.speaker === "DION") {
        dionImg.className = "portrait active";
        apolloImg.className = "portrait dim";
    }

    // Update dialogue choices
    choicesContainer.innerHTML = "";
    data.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.innerText = choice.text;
        btn.className = "dialogue-btn";
        btn.onclick = () => runApolloScene(choice.next);
        choicesContainer.appendChild(btn);
    });
}
