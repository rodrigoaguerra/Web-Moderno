// Factory simples
function criarProduto(nome = 'Novo Produto', preco = 1) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49));
console.log(criarProduto('iPad', 1199.49));