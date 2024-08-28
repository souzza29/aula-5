const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1 - Qual das seguintes práticas é mais benefica para promover a saúde mental e o bem estar?",
        alternativas: [
            "A - Praticar meditação diariamente",
            "B - seguir uma dieta rica em alimentos processados"
        ]
    },
    {
        enunciado: "2 - De que forma  os usuários de redes sociais possam  desenvolver uma consciência mais equilibrada sobre os impactos ambientais e promover um comportamento mais sustentável ?",
        alternativas: [
            "A - Aumento da consciência e conexão com o meio ambiente",
            "B - redução de estresse e ansiedade",
        ]
    },
    {
        enunciado: "3 - Como a alimentação pode influenciar a saúde mental?",
        alternativas: [
            "A - Uma alimentação balanceada pode melhorar o humor e reduzir os níveis de estresse.",
            "B - A alimentação não tem impacto significativo na saúde mental."
        ]
    }
    
    
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual=perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent=" ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) 
        {
    const botaoAlternativas = document. createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);

    }
}
mostraPergunta();
