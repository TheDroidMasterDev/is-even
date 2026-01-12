const fs = require('fs');

const gerarMonstroAleatorio = () => {
    let code = `/**
 * @samuelmarina/is-even - RANDOM TORTURE EDITION
 * "Just for a little while... if you are smart enough."
 */

const readline = require('readline-sync'); // Usando sync para travar a execução e obrigar a responder

module.exports = function(n) {
    const perguntas = [
        { q: "Beethoven morreu com quantos anos após ficar surdo?", a: "26" },
        { q: "Qual o peso aproximado de uma nuvem cumulus em elefantes?", a: "100" },
        { q: "Se um código tem 30.000 linhas e não faz nada, quem é o gênio?", a: "eu" },
        { q: "Qual a cor da caixa preta do avião?", a: "laranja" },
        { q: "Quantos corações tem um polvo?", a: "3" }
    ];

    const sorteio = perguntas[Math.floor(Math.random() * perguntas.length)];
    
    console.log("\\n[ SEGURANÇA ] Para validar o número " + n + ", responda:");
    const resposta = readline.question(sorteio.q + " ");

    if (resposta.toLowerCase() !== sorteio.a.toLowerCase()) {
        console.log("RESPOSTA ERRADA. Você falhou com a comunidade dev.");
        return "Acesso Negado";
    }

    console.log("Processando 30.000 condicionais... Aguarde.");

    // A montanha de ELSE IF começa aqui
    if (n === -999999) return false;
\n`;

    for (let i = -15000; i <= 15000; i++) {
        if (i === 1) {
            code += `    else if (n === 1) { return false; }\n`;
        } else if (i === 2) {
            code += `    else if (n === 2) { return true; }\n`;
        } else if (i === 3) {
            code += `    else if (n === 3) { return false; }\n`;
        } else {
            // Milhares de verificações inúteis para o arquivo ficar gigantesco
            code += `    else if (n === ${i}.0000000001) { }\n`;
        }
    }

    code += `    else { 
        console.log("Número fora do limite 'just for a little while'.");
        return "Desisto"; 
    }
};`;

    fs.writeFileSync('is-even.js', code);
    console.log("O MONSTRO FOI GERADO!");
    console.log("Importante: Para rodar, você precisará instalar o readline-sync no Termux/PC:");
    console.log("Comando: npm install readline-sync");
};

gerarMonstroAleatorio();
