console.log("Site iniciado!");

const botao = document.querySelector("#btn-info");
const cards = document.querySelector("#info-cards");

if (botao && cards) {

    botao.addEventListener("click", function() {

        cards.style.display = "flex";

    });

}

const btnAbout = document.querySelector("#btn-about");
const modalAbout = document.querySelector("#modal-about");
const closeAbout = document.querySelector("#close-about");

if (btnAbout && modalAbout) {

    btnAbout.addEventListener("click", function(event) {

        event.preventDefault();

        modalAbout.style.display = "flex";

    });

}

if (closeAbout && modalAbout) {

    closeAbout.addEventListener("click", function() {

        modalAbout.style.display = "none";

    });

}

const equipamentos = document.querySelectorAll(".equipamento");
const processoDisplay = document.querySelector("#processo-display");

let equipamentoAtual = "";
let etapaAtual = 0;

equipamentos.forEach(function (equipamento) {

    equipamento.addEventListener("click", function () {

        console.log("CLIQUEI EM:", equipamento.dataset.tipo);

        equipamentoAtual = equipamento.dataset.tipo;

        etapaAtual = 0;

        mostrarEtapa();

    });

});

function nomeEquipamento() {

    if (equipamentoAtual === "computador") {
        return "💻 Computador";
    }

    if (equipamentoAtual === "celular") {
        return "📱 Celular";
    }

    if (equipamentoAtual === "console") {
        return "🎮 Console";
    }

    return "Equipamento";
}

function criarProgresso() {

    let progresso = "";

    for (let i = 0; i < 4; i++) {

        if (i <= etapaAtual) {
            progresso += `<span class="ponto ativo"></span>`;
        } else {
            progresso += `<span class="ponto"></span>`;
        }

        if (i < 3) {
            progresso += `<span class="linha"></span>`;
        }

    }

    return `
        <div class="progresso">
            ${progresso}
        </div>
    `;
}

function mostrarEtapa() {

    if (etapaAtual === 0) {

    processoDisplay.innerHTML = `
        <div class="processo-etapa">

            <div class="progresso">

                <span class="ponto ativo"></span>
                <span class="linha"></span>

                <span class="ponto"></span>
                <span class="linha"></span>

                <span class="ponto"></span>
                <span class="linha"></span>

                <span class="ponto"></span>

            </div>

            <span class="etapa-icon">📦</span>

            <h3>Etapa 01 — Recebimento</h3>

            <p>
                O equipamento chega à EcoTech
                por meio de entrega ou coleta.
            </p>

            <button id="btn-proximo">
                Próximo →
            </button>

        </div>
    `;

    } else if (etapaAtual === 1) {

    processoDisplay.innerHTML = `
        <div class="processo-etapa">

            ${criarProgresso()}

            <div class="equipamento-selecionado">
                Você escolheu: <strong>${nomeEquipamento()}</strong>
            </div>

            <span class="etapa-icon">🔎</span>

            <h3>Etapa 02 — Triagem</h3>

            <p>
                O equipamento é avaliado para identificar
                suas condições e possibilidades de recuperação.
            </p>

            <button id="btn-proximo">
                Próximo →
            </button>

        </div>
    `;

    } else if (etapaAtual === 2) {

        processoDisplay.innerHTML = `
            <div class="processo-etapa">

                ${criarProgresso()}

                <div class="equipamento-selecionado">
                    Você escolheu:
                    <strong>${nomeEquipamento()}</strong>
                </div>

                <span class="etapa-icon">🔧</span>

                <h3>Etapa 03 — Recuperação</h3>

                <p>
                    Quando possível, o equipamento
                    passa por manutenção e reparos.
                </p>

                <button id="btn-proximo">
                    Próximo →
                </button>

            </div>
        `;

    } else {

        processoDisplay.innerHTML = `
            <div class="processo-etapa">

                ${criarProgresso()}

                <div class="equipamento-selecionado">
                    Você escolheu:
                    <strong>${nomeEquipamento()}</strong>
                </div>

                <span class="etapa-icon">♻️</span>

                <h3>Processo concluído</h3>

                <p>
                    O equipamento recebeu um novo destino
                    dentro da proposta sustentável da EcoTech.
                </p>

                <button id="btn-reiniciar">
                    Escolher outro equipamento
                </button>

            </div>
        `;

        const btnReiniciar = document.querySelector("#btn-reiniciar");

        btnReiniciar.addEventListener("click", function () {

            etapaAtual = 0;

            processoDisplay.innerHTML = `
                <div class="processo-placeholder">

                    <span>♻️</span>

                    <h3>
                        Escolha um equipamento
                    </h3>

                    <p>
                        Selecione uma das opções acima
                        para descobrir o que acontece
                        com ela na EcoTech.
                    </p>

                </div>
            `;

        });

        return;
    }

    const btnProximo = document.querySelector("#btn-proximo");

    btnProximo.addEventListener("click", function () {

        etapaAtual++;

        mostrarEtapa();

    });

}

console.log("JavaScript carregado!");