# Vitesse de frappe

Jeu de typing test en HTML, CSS et JavaScript natif. Le joueur doit recopier une phrase française le plus rapidement possible. Chaque caractère est coloré pendant la frappe et un bilan est affiché à la fin de la partie.

## Fonctionnalités

- Sélection aléatoire d'une phrase parmi 12 phrases françaises.
- Affichage de chaque caractère dans un élément `<span>` indépendant.
- Démarrage automatique du chronomètre à la première frappe.
- Caractères corrects en vert, caractères incorrects en rouge.
- Curseur visuel indiquant le prochain caractère à saisir.
- Support de la touche Retour arrière.
- Barre de progression basée sur le nombre de caractères saisis.
- Résultats : WPM, CPM, précision, erreurs, mots et temps total.
- Bouton pour recommencer avec une nouvelle phrase.
- Interface responsive et accessible, avec un thème sombre.

## Lancer le projet

Aucune installation ni dépendance n'est nécessaire.

1. Ouvrir le dossier du projet dans VS Code.
2. Ouvrir `index.html` dans un navigateur.
3. Cliquer dans la zone de saisie et commencer à taper.

Le projet peut aussi être lancé avec une extension comme Live Server. Le fichier `index.html` charge automatiquement `style.css` et `script.js`.

## Organisation des fichiers

### `index.html`

Contient la structure de la page :

- l'en-tête et le nom du jeu ;
- le chronomètre ;
- la barre de progression ;
- la phrase à recopier dans `#text-display` ;
- la zone de saisie `#typing-input` ;
- le panneau de résultats, masqué au début ;
- le bouton `#restart-button` ;
- le chargement différé de `script.js`.

Les identifiants HTML (`id`) servent de points de connexion entre l'interface et le JavaScript. Par exemple, `#timer-value` permet au script de modifier le temps affiché.

### `style.css`

Contient l'apparence du jeu :

- variables de couleurs du thème sombre ;
- typographies `Space Grotesk` et `DM Mono` ;
- mise en page responsive pour ordinateur et mobile ;
- états `.correct`, `.incorrect` et `.current` des caractères ;
- animation du curseur et apparition du panneau de résultats ;
- style du champ de saisie, de la progression et des statistiques.

### `script.js`

Contient toute la logique de jeu. Il ne dépend d'aucun framework.

## Fonctionnement du JavaScript

### 1. Les phrases

```js
const phrases = [ ... ];
```

`phrases` est un tableau contenant les phrases disponibles. Une nouvelle phrase est choisie lorsque la page est initialisée ou lorsque le joueur clique sur « Recommencer ».

### 2. Les éléments HTML

Les appels `document.querySelector()` récupèrent les éléments que le script doit modifier :

- `textDisplay` : affiche les caractères de la phrase ;
- `typingInput` : reçoit la saisie du joueur ;
- `timerValue` : affiche le temps ;
- `progressBar` : affiche la progression ;
- `resultsPanel` : contient les résultats ;
- `restartButton` : relance une partie ;
- `stats` : regroupe les éléments qui affichent les statistiques.

### 3. Les variables d'état

- `currentPhrase` : phrase actuellement affichée ;
- `startTime` : instant précis du début de la frappe, fourni par `performance.now()` ;
- `timerId` : identifiant de l'intervalle qui actualise le chronomètre ;
- `gameFinished` : indique si la partie est terminée ;
- `errorCount` : nombre total d'erreurs commises pendant la partie ;
- `previousTypedText` : ancienne saisie, utilisée pour détecter les nouvelles fautes tout en conservant les fautes corrigées.

## Détail des fonctions

### `choosePhrase()`

Choisit une phrase au hasard dans `phrases`. La phrase précédente est retirée temporairement de la sélection afin d'éviter de recevoir deux fois la même phrase à la suite.

### `renderPhrase()`

Vide `#text-display`, puis crée un `<span>` pour chaque caractère de `currentPhrase`. Cela permet de colorer individuellement chaque lettre. La fonction appelle ensuite `updateCharacterStates('')` pour placer le curseur au début.

### `updateCharacterStates(typedText)`

Compare la saisie avec la phrase caractère par caractère :

- caractère identique : classe `correct` ;
- caractère différent : classe `incorrect` ;
- prochain caractère à taper : classe `current`.

La fonction met aussi à jour la largeur de la barre de progression. Elle est appelée après chaque événement de saisie et après chaque réinitialisation.

### `getElapsedSeconds()`

Calcule le temps écoulé depuis la première frappe :

```text
(performance.now() - startTime) / 1000
```

La division par 1000 convertit les millisecondes en secondes.

### `updateTimer()`

Met à jour `#timer-value` avec une précision d'un dixième de seconde. Cette fonction ne fait rien tant que le chronomètre n'a pas démarré.

### `startTimer()`

Démarre la partie une seule fois. Elle enregistre `startTime`, puis lance `setInterval()` afin d'appeler `updateTimer()` toutes les 100 millisecondes. Le test `if (startTime !== null)` empêche le chronomètre de redémarrer à chaque caractère.

### `countErrors(typedText)`

Compare une saisie complète avec la phrase et renvoie le nombre de caractères différents. Cette fonction constitue un utilitaire de comparaison directe. Le jeu utilise actuellement le suivi cumulatif dans `handleInput()` afin de conserver les erreurs qui ont ensuite été corrigées avec Retour arrière.

### `finishGame()`

Termine la partie lorsque la saisie correspond exactement à la phrase :

1. arrête l'intervalle du chronomètre ;
2. calcule le temps écoulé ;
3. calcule les mots, les caractères corrects et la précision ;
4. calcule les WPM et les CPM ;
5. remplit les statistiques dans le HTML ;
6. désactive la zone de saisie ;
7. affiche le panneau de résultats.

### `handleInput(event)`

Est appelée à chaque événement `input`, y compris lors d'un collage ou d'un appui sur Retour arrière.

Elle :

- limite la saisie à la longueur de la phrase ;
- démarre le chronomètre si nécessaire ;
- compare les nouveaux caractères avec la phrase ;
- ajoute les nouvelles fautes à `errorCount` ;
- mémorise la saisie dans `previousTypedText` ;
- actualise les couleurs et la progression ;
- appelle `finishGame()` lorsque la phrase est entièrement saisie.

### `resetGame()`

Réinitialise complètement une partie :

- arrête l'ancien chronomètre ;
- sélectionne une nouvelle phrase ;
- remet le temps et les erreurs à zéro ;
- vide la zone de saisie ;
- masque les résultats ;
- recrée les `<span>` de la phrase ;
- redonne le focus au champ de saisie.

## Calcul des statistiques

### WPM

Les WPM (Words Per Minute) représentent le nombre de mots tapés par minute :

```text
WPM = (nombre de mots / temps en secondes) × 60
```

Un mot est calculé à partir des groupes de caractères séparés par des espaces.

### CPM

Les CPM (Characters Per Minute) représentent le nombre de caractères corrects par minute :

```text
CPM = (caractères corrects / temps en secondes) × 60
```

### Précision

La précision est calculée à partir des caractères corrects par rapport à la longueur de la phrase :

```text
Précision = caractères corrects / longueur de la phrase × 100
```

Les fautes corrigées restent comptées dans `errorCount`, ce qui permet d'obtenir une mesure plus fidèle des erreurs réellement commises.

## Déroulement d'une partie

```text
Chargement de la page
	↓
resetGame()
	↓
choosePhrase() puis renderPhrase()
	↓
Première frappe → startTimer()
	↓
Chaque saisie → handleInput()
	↓
updateCharacterStates()
	↓
Phrase complète → finishGame()
	↓
Clic sur Recommencer → resetGame()
```

## Technologies utilisées

- HTML5 sémantique
- CSS3 avec variables, animations et media queries
- JavaScript ES6+
- API DOM native
- Aucun framework et aucune dépendance npm
