const storyText = {
    start: "Você está em uma selva mágica, e seu objetivo é encontrar o segredo para se tornar o mestre de todos os jogos. Para onde você vai primeiro?",
    floresta: "Você entrou na floresta densa e encontrou um caminho bifurcado. Você vai para a esquerda ou para a direita?",
    montanha: "Você escalou a montanha e encontrou uma caverna. Dentro, há um guardião que lhe faz uma pergunta. O que você fará?",
    lago: "Você chegou ao lago cristalino. Uma sereia oferece um desafio. Você aceita?",
    caverna: "Você entrou na caverna e encontrou um tesouro escondido. Você pode pegar uma parte ou deixá-la.",
    objeto1: "Você escolheu a varinha mágica. Ao usá-la, você ganhou a habilidade de ser o conquistador do mundo! Parabéns!",
    objeto2: "Você escolheu a espada mágica. Com ela, você se tornou imbatível! Parabéns!",
    desafio1: "Você enfrentou um dragão e, com suas habilidades, venceu! Parabéns, você agora é o conquistador do mundo!",
    desafio2: "Você resolveu o enigma da sereia e ganhou um poderoso artefato! Parabéns!",
    perguntaGuardião: "O guardião lhe pergunta: 'Qual é a chave para a vitória?'. O que você responde?",
    resposta1: "Você respondeu 'Inteligência'. O guardião ficou satisfeito e lhe deu um presente! Parabéns!",
    resposta2: "Você respondeu 'Força'. O guardião não ficou satisfeito e você precisa sair da caverna.",
    tesouro: "Você decidiu pegar uma parte do tesouro. Agora, você tem uma moeda mágica que pode usar mais tarde! Parabéns!",
    final: "Você usou suas habilidades e itens mágicos para se tornar o mestre de todos os jogos! Sua aventura continua..."
};

const imgstory = {
    start: 'img/start.jpg',
    floresta: 'magical-florest-7443154_1920.jpg',
    montanha: 'WhatsApp Image 2024-10-07 at 11.53.56 AM.jpeg',
    lago: 'img/lake.jpg',
    caverna: 'img/cave.jpg',
    objeto1: 'img/wand.jpg',
    objeto2: 'img/sword.jpg',
    desafio1: 'img/dragon.jpg',
    desafio2: 'img/mermaid.jpg',
    perguntaGuardião: 'img/guardian.jpg',
    resposta1: 'img/gift.jpg',
    resposta2: 'img/angry.jpg',
    tesouro: 'img/treasure.jpg',
    final: 'img/final.jpg'
};

function choose(option) {
    const textElement = document.getElementById('text');
    const imageElement = document.getElementById('story-image');

    // Atualiza o texto e a imagem com base na escolha
    textElement.innerText = storyText[option];
    imageElement.src = imgstory[option];

    switch(option) {
        case 'start':
            updateButtons('local');
            break;
        case 'floresta':
            updateButtons('caminho');
            break;
        case 'montanha':
            updateButtons('guardião');
            break;
        case 'lago':
            updateButtons('desafio');
            break;
        case 'caverna':
            updateButtons('tesouro');
            break;
        case 'resposta1':
        case 'resposta2':
        case 'desafio1':
        case 'desafio2':
        case 'tesouro':
        case 'final':
            removeButtons();
            break;
    }
}

function updateButtons(type) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.remove());

    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'buttons';

    if (type === 'local') {
        buttonContainer.innerHTML = `
            <button onclick="choose('floresta')">Ir para a floresta</button>
            <button onclick="choose('montanha')">Escalar a montanha</button>
            <button onclick="choose('lago')">Visitar o lago</button>
            <button onclick="choose('caverna')">Explorar a caverna</button>
        `;
    } else if (type === 'caminho') {
        buttonContainer.innerHTML = `
            <button onclick="choose('desafio1')">Ir para a esquerda</button>
            <button onclick="choose('desafio2')">Ir para a direita</button>
        `;
    } else if (type === 'guardião') {
        buttonContainer.innerHTML = `
            <button onclick="choose('resposta1')">Responder 'Inteligência'</button>
            <button onclick="choose('resposta2')">Responder 'Força'</button>
        `;
    } else if (type === 'desafio') {
        buttonContainer.innerHTML = `
            <button onclick="choose('desafio1')">Aceitar o desafio da sereia</button>
        `;
    } else if (type === 'tesouro') {
        buttonContainer.innerHTML = `
            <button onclick="choose('tesouro')">Pegar uma parte do tesouro</button>
        `;
    }

    document.getElementById('story').appendChild(buttonContainer);
}

function removeButtons() {
    const buttons = document.getElementById('buttons');
    if (buttons) buttons.remove();
}
