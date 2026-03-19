// --- Funções do Modal de Aviso ---
function exibirAviso(mensagem) {
    document.getElementById('modal-aviso-mensagem').innerText = mensagem;
    document.getElementById('modal-aviso').style.display = 'block';
}

function fecharAviso() {
    document.getElementById('modal-aviso').style.display = 'none';
}
// ------------------------------------

// Lógica de Remessa, Conserto e Devolução
const Garantia = {
    remessas: [],

    gerarGuiaRemessa(dadosOS, motivo) {
        const novaRemessa = {
            id: Date.now(),
            equipamento: dadosOS.serie,
            marca: dadosOS.marca,
            motivo: motivo, // Garantia, Conserto ou Devolução
            status: 'Enviado para Laboratório',
            dataEnvio: new Date().toLocaleDateString()
        };

        this.remessas.push(novaRemessa);
        exibirAviso(`Guia de ${motivo} gerada para o equipamento SN: ${dadosOS.serie}`);
        return novaRemessa;
    },

    listarRemessas() {
        return this.remessas;
    }
};