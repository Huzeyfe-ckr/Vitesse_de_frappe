const phrases = [
    'La curiosité ouvre souvent les portes que la routine laisse fermées.',
    'Chaque erreur devient une occasion de comprendre et de progresser.',
    'Le matin calme révèle parfois les meilleures idées de la journée.',
    'Un bon café et une grande envie suffisent pour commencer quelque chose.',
    'Les petits efforts répétés finissent par créer de grands changements.',
    'Prendre le temps de bien faire est parfois le chemin le plus rapide.',
    'La musique accompagne les pensées quand les mots cherchent leur place.',
    'Demain se construit avec les décisions tranquilles prises aujourd’hui.',
    'Une question bien posée peut transformer toute une conversation.',
    'Les voyages commencent souvent par une carte et un peu d’imagination.',
    'La patience donne aux projets la force de dépasser les premiers doutes.',
    'Apprendre une nouvelle compétence rend le monde légèrement plus vaste.'
];

const textDisplay = document.querySelector('#text-display');
const typingInput = document.querySelector('#typing-input');
const timerValue = document.querySelector('#timer-value');
const progressBar = document.querySelector('#progress-bar');
const resultsPanel = document.querySelector('#results-panel');
const restartButton = document.querySelector('#restart-button');
const stats = {
    wpm: document.querySelector('#wpm-value'),
    cpm: document.querySelector('#cpm-value'),
    accuracy: document.querySelector('#accuracy-value'),
    words: document.querySelector('#words-value'),
    errors: document.querySelector('#errors-value'),
    totalTime: document.querySelector('#total-time-value')
};

let currentPhrase = '';
let startTime = null;
let timerId = null;
let gameFinished = false;
let errorCount = 0;
let previousTypedText = '';

function choosePhrase() {
    const availablePhrases = phrases.filter((phrase) => phrase !== currentPhrase);
    return availablePhrases[Math.floor(Math.random() * availablePhrases.length)];
}

function renderPhrase() {
    textDisplay.replaceChildren();
    [...currentPhrase].forEach((character) => {
        const characterElement = document.createElement('span');
        characterElement.textContent = character;
        textDisplay.append(characterElement);
    });
    updateCharacterStates('');
}

function updateCharacterStates(typedText) {
    const characters = textDisplay.querySelectorAll('span');
    characters.forEach((character, index) => {
        character.className = '';
        if (index < typedText.length) {
            character.classList.add(typedText[index] === currentPhrase[index] ? 'correct' : 'incorrect');
        } else if (index === typedText.length && !gameFinished) {
            character.classList.add('current');
        }
    });
    progressBar.style.width = `${Math.min((typedText.length / currentPhrase.length) * 100, 100)}%`;
}

function getElapsedSeconds() {
    return (performance.now() - startTime) / 1000;
}

function updateTimer() {
    if (startTime !== null) timerValue.textContent = `${getElapsedSeconds().toFixed(1)} s`;
}

function startTimer() {
    if (startTime !== null) return;
    startTime = performance.now();
    timerId = window.setInterval(updateTimer, 100);
}

function countErrors(typedText) {
    return [...typedText].reduce((total, character, index) => (
        total + (character !== currentPhrase[index] ? 1 : 0)
    ), 0);
}

function finishGame() {
    gameFinished = true;
    window.clearInterval(timerId);
    const elapsedSeconds = Math.max(getElapsedSeconds(), 0.1);
    const correctCharacters = Math.max(currentPhrase.length - errorCount, 0);
    const words = currentPhrase.trim().split(/\s+/).length;
    const accuracy = Math.max(0, Math.round((correctCharacters / currentPhrase.length) * 100));

    stats.wpm.textContent = Math.round((words / elapsedSeconds) * 60);
    stats.cpm.textContent = Math.round((correctCharacters / elapsedSeconds) * 60);
    stats.accuracy.textContent = accuracy;
    stats.words.textContent = words;
    stats.errors.textContent = errorCount;
    stats.totalTime.textContent = elapsedSeconds.toFixed(1);
    typingInput.disabled = true;
    resultsPanel.hidden = false;
    resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function handleInput(event) {
    if (gameFinished) return;
    const typedText = event.target.value.slice(0, currentPhrase.length);
    if (event.target.value !== typedText) event.target.value = typedText;
    if (typedText.length > 0) startTimer();
    if (typedText.length > previousTypedText.length) {
        for (let index = previousTypedText.length; index < typedText.length; index += 1) {
            if (typedText[index] !== currentPhrase[index]) errorCount += 1;
        }
    } else if (typedText.length === previousTypedText.length) {
        for (let index = 0; index < typedText.length; index += 1) {
            if (typedText[index] !== previousTypedText[index] && typedText[index] !== currentPhrase[index]) {
                errorCount += 1;
            }
        }
    }
    previousTypedText = typedText;
    updateCharacterStates(typedText);
    if (typedText === currentPhrase) finishGame();
}

function resetGame() {
    window.clearInterval(timerId);
    currentPhrase = choosePhrase();
    startTime = null;
    timerId = null;
    gameFinished = false;
    errorCount = 0;
    previousTypedText = '';
    timerValue.textContent = '0.0 s';
    typingInput.value = '';
    typingInput.disabled = false;
    resultsPanel.hidden = true;
    renderPhrase();
    typingInput.focus();
}

typingInput.addEventListener('input', handleInput);
restartButton.addEventListener('click', resetGame);
resetGame();
