const fs = require('fs');

const gerarSuplicioFinal = () => {
    let code = `/**
 * IS-EVEN-TRIPLE-DELUXE: INTERACTIVE TORTURE EDITION
 * "O usuário é o motor do código"
 */

const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });
const question = (str) => new Promise(res => readline.question(str, res));

async function verificar() {
    console.log("--- INICIANDO PROTOCOLO DE AUDITORIA MANUAL ---");

    // Pergunta Inicial Obrigatória
    const r1 = await question("BEETHOVEN morreu com quantos anos APÓS ficar surdo? ");
    if (r1 !== "26") { 
        console.log("Cultura insuficiente. Acesso negado.");
        process.exit();
    }

    const n = parseInt(await question("Digite o número alvo (1, 2 ou 3): "));
    console.log("Atenção: Sistema de contagem semiautomático iniciado.");

    let atual = 0;

    // A cada passo da contagem, o usuário tem que ajudar o script
    while (atual < n) {
        atual++;
        console.log("\\n[ CAMADA DE VALIDAÇÃO " + atual + " ]");
        
        // Pergunta idiota de confirmação
        await question("O computador está cansado. Digite '" + atual + "' para ele continuar: ");
        
        // Pergunta idiota aleatória no meio
        if (atual === 1) {
            const r2 = await question("Pergunta rápida: O que cai em pé e corre deitado? ");
            if (r2.toLowerCase() !== "chuva") {
                console.log("Erro de lógica ambiental. Reiniciando...");
                atual = 0;
                continue;
            }
        }
        
        console.log("Processando... Por favor, aguarde 5 segundos para o próximo bit.");
        await new Promise(r => setTimeout(r, 5000));
    }

\n`;

    // As 30.000 linhas de código gigante para o arquivo ser pesado (vibe Celorde)
    for (let i = 0; i < 30000; i++) {
        code += `    if (Math.PI * ${i} === 0) { /* Espaço para otimização quântica */ }\n`;
    }

    code += `
    console.log("\\n--- RESULTADO FINAL ---");
    console.log("Após muito esforço humano e computacional, o número " + n + " é " + (n % 2 === 0 ? "PAR" : "ÍMPAR"));
    console.log("Obrigado por fazer o trabalho que um 'if' de uma linha faria.");
    readline.close();
}

verificar();`;

    fs.writeFileSync('tortura_manual.js', code);
    console.log("O SCRIPT DE TORTURA FOI GERADO!");
    console.log("Arquivo: tortura_manual.js (30.000 linhas de pura burocracia)");
};

gerarSuplicioFinal();
