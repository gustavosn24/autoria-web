var  listaP = [];

function gravarP() {
    let nomeP = document.getElementById('nomeP').Value;
    let QuantidadeP = document.getElementById('quantidadeP')
    let valorP = document.getElementById('valorP')
    let fornecedorP = document.getElementById('fornecedorP')

    let produto = {
        nomeP: nomeP,
        QuantidadeP: QuantidadeP,
        valorP: valorP,
        fornecedorP: fornecedorP
    }

    listaP.push(produto)
}

function listarProdutos() {
    let conteudo = '';
    if (listaP.length === 0) {
        conteudo = '<tr> <td colspan="7">Nenhum produto cadastrado</td></tr>'
    }else{
        listaP.forEach((produto, indice) => {
            conteudo += `
                <tr>
                    <td>${produto.nomeP}</td>
                    <td>${produto.QuantidadeP}</td>
                    <td>${produto.valorP}</td>
                    <td>${produto.fornecedorP}</td>
                </tr>
            `;
        });
    }

    document.getElementById('contedo').innerHTML = conteudo;
}