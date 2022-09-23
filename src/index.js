// General Variables
let myAnswer = [];
let positions = [];
let secretWord = "ARAÑA";
let letterNumber = 0;
let attempts = 5;
let level = 1;
//DOM variables
let spanAttempts = document.querySelector('#attempts');
let currentLevel = document.querySelector('#currentLevel');
let clue = document.querySelector('#clue');

const pressLetter = () => {
    const button = event.target;
    if (myAnswer.length < 5) {
        letterNumber++;
        const currentLetter = document.getElementById(`letter-${myAnswer.length + 1}`);
        myAnswer.push(button.textContent);
        currentLetter.textContent = button.textContent;
    }
}

const deleteLetter = () => {
    if(letterNumber > 0) {
        letterNumber--;
        const currentLetter = document.getElementById(`letter-${myAnswer.length}`);
        currentLetter.textContent = "";
        myAnswer.pop();
    }
}

const conditionWin = () => {
    event.preventDefault();
    for (let i = 0; i < myAnswer.length; i++) {
        if (myAnswer[i] === secretWord[i]) {
            positions.push('#68B408');
        } else if (secretWord.includes(myAnswer[i])) {
            positions.push('#CDB904');
        } else {
            positions.push('#BFBABA');
        }
    }
    for (let j = 0; j < 5; j++) {
        const currentLetter = document.getElementById(`letter-${j + 1}`);
        currentLetter.style.background = positions[j];
        currentLetter.style.color = 'white';
    }
    if (myAnswer.join('') == secretWord) {
        alert('Acertaste');
        level ++;
        for (let k = 0; k < myAnswer.length; k++) {
            const currentLetter = document.getElementById(`letter-${k + 1}`);
            currentLetter.textContent = '';
            currentLetter.style.background = 'white';
            currentLetter.style.color = 'black';
        }
        myAnswer = [];
    } else {
        alert('Erraste');
        attempts -= 1;
        spanAttempts.textContent = `${attempts}`;
        lifeNumbers();
    }
    positions = [];
    levelEvaluation();
}

const lifeNumbers = () => {
    if (attempts === 0) {
        alert('Has perdido. Intentalo de nuevo');
        location.reload();
    }
}

const levelEvaluation = () => {
    switch (level) {
        case 2:
            currentLevel.textContent = `${level}`;
            secretWord = 'SILLA';
            clue.textContent = 'Pese a tener 4 patas, no puedo correr ni caminar. ¿Qué soy?';
            break;
        case 3:
            currentLevel.textContent = `${level}`;
            secretWord = 'ANAFE';
            clue.textContent = 'Mi nombre es Ana y mi apellido Fe, si esto no lo aciertas eres un borriquito de pie.';
            break;
        case 4:
            currentLevel.textContent = `${level}`;
            secretWord = 'TEJAS';
            clue.textContent = 'Las damas están juntas en un corral y, cuando llueve, lloran todas a la par.';
            break;
        case 5:
            currentLevel.textContent = `${level}`;
            secretWord = 'FUEGO';
            clue.textContent = 'Crezco a pesar de no estar vivo. No tengo pulmones, pero para vivir necesito el aire. El agua, aunque no tenga boca, me mata. ¿Qué soy?';
            break;
        case 6:
            currentLevel.textContent = `${level}`;
            secretWord = 'HUEVO';
            clue.textContent = 'Estando roto es más útil que sin romperse. ¿Qué es?';
            break;
        case 7:
            currentLevel.textContent = `${level}`;
            secretWord = 'RELOJ';
            clue.textContent = 'Un galán yo conocía, que daba y nada tenía.';
            break;
        case 8:
            currentLevel.textContent = `${level}`;
            secretWord = 'CAÑAS';
            clue.textContent = 'Una torre muy alta, muy alta, a la que la cal y el canto le falta; tiene bóvedas más de un ciento, y la lleva y la trae el viento.';
            break;
        case 9:
            currentLevel.textContent = `${level}`;
            secretWord = 'ANCLA';
            clue.textContent = 'Tengo raíz y no soy planta';
            break;
        case 10:
            alert('FELICIDADES. Completaste todos los niveles');
            location.reload();
            break;
    }
}
