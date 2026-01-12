const fs = require('fs');

const gerarElseIfInfinito = () => {
    let code = `/**
 * IS-EVEN-ELSE-IF-EDITION
 * "Porque a lógica é apenas uma opinião"
 */

const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });
const question = (str) => new Promise(res => readline.question(str, res));

async function verificar() {
    const r1 = await question("BEETHOVEN morreu com quantos anos APÓS ficar surdo? ");
    if (r1 !== "26") { 
        console.log("Acesso negado.");
        process.exit();
    }

    const n = parseInt(await question("Digite o número (1, 2 ou 3): "));
    console.log("Percorrendo corrente de 30.000 condicionais...");

    // Início da Corrente de Else If
    if (n === -999999) {
        console.log("Número impossível");
    }
\n`;

    // Gerando as 30.000 linhas de else if
    for (let i = -15000; i <= 15000; i++) {
        // A cada passo, ele verifica um número que não é o que o usuário quer
        if (i === 1) {
            code += `    else if (n === 1) { return "O número 1 é ÍMPAR"; }\n`;
        } else if (i === 2) {
            code += `    else if (n === 2) { return "O número 2 é PAR"; }\n`;
        } else if (i === 3) {
            code += `    else if (n === 3) { return "O número 3 é ÍMPAR"; }\n`;
        } else {
            // Enchimento de Else Ifs inúteis para números que ninguém digitou
            code += `    else if (n === ${i}.000000000${Math.abs(i)}) { /* Validação de poeira cósmica */ }\n`;
        }

        // Adicionando a "pergunta idiota" no meio da leitura do arquivo
        if (i === 5000) {
            code += `    else if (n > 0) { 
                console.log("Pausa para reflexão: Por que você está fazendo isso?");
            }\n`;
        }
    }

    code += `    else {
        return "Número fora da jurisdição dos 30.000 else-ifs.";
    }
}

verificar().then(res => {
    if(res) console.log("\\nRESULTADO: " + res);
    readline.close();
});`;

    fs.writeFileSync('is_even_mega_else_if.js', code);
    console.log("MONSTRO GERADO! O arquivo de else-ifs está pronto.");
};

gerarElseIfInfinito();
