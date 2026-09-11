const phrases = [
    'La curiosité ouvre souvent les portes que la routine laisse fermées',
    'Chaque erreur devient une occasion de comprendre et de progresser',
    'Le matin calme révèle parfois les meilleures idées de la journée',
    'Un bon café et une grande envie suffisent pour commencer quelque chose',
    'Les petits efforts répétés finissent par créer de grands changements',
    'Prendre le temps de bien faire est parfois le chemin le plus rapide',
    'La musique accompagne les pensées quand les mots cherchent leur place',
    'Demain se construit avec les décisions tranquilles prises aujourd’hui',
    'Une question bien posée peut transformer toute une conversation',
    "Les voyages commencent souvent par une carte et un peu d'imagination",
    'La patience donne aux projets la force de dépasser les premiers doutes',
    'Apprendre une nouvelle compétence rend le monde légèrement plus vaste',
    'Rien ne remplace la joie de créer quelque chose de ses propres mains',
    'Une promenade sous les arbres suffit parfois à éclaircir la pensée',
    'Les idées les plus simples sont souvent celles qui durent le plus longtemps',
    'Regarder le ciel étoilé rappelle la beauté discrète des détails du monde',
    'Chaque nouvelle journée offre une page blanche prête à être écrite',
    'La clé du succès réside souvent dans la régularité des actions quotidiennes',
    'Savoir écouter est une qualité précieuse qui enrichit chaque échange',
    'Un livre ouvert est un voyage immobile vers des horizons inconnus',
    'Sourire à un inconnu peut illuminer une journée ordinaire',
    'La simplicité apporte une élégance naturelle à toutes les créations',
    'Observer la nature enseigne le calme et le rythme des saisons',
    'Les souvenirs précieux se construisent dans la simplicité des instants partagés',
    'Une étincelle de créativité peut illuminer toute une semaine de travail',
    'Prendre de la hauteur permet souvent de mieux voir le chemin à parcourir',
    'Le silence qui suit un effort accompli possède une douceur particulière',
    'Rien n’est impossible à celui qui avance un pas après l’autre',
    'Chaque rencontre nous offre une nouvelle perspective sur le monde',
    'Accueillir l’inattendu transforme souvent les imprévus en belles opportunités',
    'La persévérance transforme les grands obstacles en simples étapes',
    'Créer de la beauté autour de soi est une façon poétique d’habiter le monde',
    'L’incommensurable immensité du cosmos suscite un profond sentiment d’humilité',
    'Ce phénomène idiosyncrasique déroute les chercheurs les plus expérimentés',
    'Une juxtaposition audacieuse de textures hétérogènes enrichit la composition visual',
    'L’interconnexion ubiquitaire des systèmes modernes transforme nos interactions',
    'Une circonspection légitime s’impose face à ces affirmations péremptoires',
    'La perspicacité remarquable de cet analyste permet d’anticiper les fluctuations',
    'Ce processus d’amalgamation nécessite une température strictement contrôlée',
    'Une pérégrination solitaire à travers des paysages escarpés et pittoresques',
    'La vélocité de la frappe au clavier exige une coordination psychomotrice optimale',
    'Ce raisonnement anachronique fausse la compréhension des événements historiques',
    'Une effervescence intellectuelle stimule les débats lors de ce colloque international',
    'La magnificence des fresques ancestrales témoigne d’un savoir-faire séculaire',
    'Ce comportement pérégrin illustre une insatiable curiosité pour l’inconnu',
    'Une minutie quasi obsessionnelle caractérise l’exécution de ce chef-d’œuvre',
    'L’ambivalence des émotions humaines rend la psychologie fascinante et complexe',
    'Une omniscience supposée qui masque souvent une profonde méconnaissance du sujet',
    'Ce vocabulaire alambiqué obscurcit l’intention initiale de l’auteur',
    'Une concomitance d’événements imprévus a précipité cette décision stratégique',
    'La versatilité des opinions publiques impose une communication adaptable',
    'Ce caractère pusillanime l’empêche de prendre des initiatives audacieuses',
    'Une prolifération exponentielle d’informations caractérise l’ère numérique',
    'L’exubérance de la végétation tropicale contraste avec l’aridité du désert',
    'Une philanthropie désintéressée guide les actions de cette organisation',
    'Ce pragmatisme rigoureux permet de résoudre les problèmes sans détour inutiles',
    'L’arborescence complexe des fichiers requiert une nomenclature rigoureusement définie',
    'Une méticulosité exemplaire est indispensable lors des manipulations de laboratoire',
    'Ce syllogisme logique démontre la cohérence interne de la démonstration',
    'L’hétérogénéité des données rassemblées complique le travail d’agrégation statistique',
    'Une magnanimité rare qui suscite le respect et l’admiration de tous ses pairs',
    'Ce périple rocambolesque restera gravé dans la mémoire des participants',
    'L’éphémère beauté d’un crépuscule rappelle la préciosité de chaque instant',
    'La résilience face à l’adversité forge un caractère inébranlable et serein',
    'Ce dilemme éthique suscite un débat passionné au sein de la communauté',
    'Une concision exemplaire caractérise la prose de cet auteur renommé',
    'Cette argumentation convaincante repose sur un raisonnement irréprochable',
    'L’authenticité des sentiments confère une dimension poignante à cette œuvre',
    'La bienveillance mutuelle constitue le ciment fondamental des relations humaines',
    'Cette perspective novatrice bouleverse les paradigmes scientifiques établis',
    'Une métamorphose radicale s’opère au cœur de cet écosystème fragile',
    'L’éloquence naturelle de l’orateur captive immédiatement l’assemblée attentive',
    'Une dichotomie marquée sépare la théorie abstraite de la pratique concrète',
    'Cette subtile nuance d’interprétation modifie entièrement le sens du texte',
    'Une atmosphère mélancolique enveloppe la cité déserte au lever du jour',
    'L’architecture contemporaine associe harmonieusement esthétique et fonctionnalité',
    'Une quête spirituelle guidée par la recherche de la sagesse et de l’harmonie',
    'L’optimisation d’un algorithme nécessite une analyse minutieuse des performances',
    'L’architecture logicielle doit anticiper les évolutions futures du système',
    'La refactorisation du code source améliore la lisibilité sans altérer la logique',
    'Le débogage demande une démarche méthodologique et une grande rigueur',
    'La modularité des composants facilite le maintien et l’extension de l’application',
    'L’interactivité d’une interface utilisateur repose sur des animations fluides',
    'L’ergonomie visuelle garantit une expérience agréable pour chaque utilisateur',
    'La gestion des événements asynchrones exige une attention particulière aux flux',
    'L’encapsulation des données protège l’intégrité des structures complexes',
    'Une documentation technique précise fait gagner un temps précieux à l’équipe',
    'La réactivité de la mise en page garantit un affichage harmonieux sur tous les écrans',
    'La manipulation du modèle d’objet du document exige de la précision',
    'Le déploiement continu permet de livrer des fonctionnalités rapidement',
    'L’accessibilité numérique offre une expérience inclusive à tous les utilisateurs',
    'L’analyse des métriques d’utilisation guide les choix d’amélioration de l’interface',
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
