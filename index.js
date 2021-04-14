//Criar lista de produtos
var soma = 0
var produtos = [
    {nome:"Papel higienico", preco:6.00, qtdEstoque:0},
    {nome:"Agua mineral", preco:3.00, qtdEstoque:10},
    {nome:"Vaselina", preco:8.00, qtdEstoque:2},
    {nome:"Pasta de dente", preco:6.00, qtdEstoque:3},
    {nome:"Barbeador", preco:13.00, qtdEstoque:1},
    {nome:"Fio dental", preco:4.00, qtdEstoque:0},
    {nome:"Chinelo", preco:20.00, qtdEstoque:0},
    {nome:"Ovo de codorna", preco:8.00, qtdEstoque:0},
    {nome:"Tomate", preco:9.00, qtdEstoque:5},
    {nome:"Refrigerante", preco:8.50, qtdEstoque:1}
]

//Filtrar todos os produtos que ainda tenham estoque
function checaEstoque (catalogo) {
    return catalogo.filter(etq => etq.qtdEstoque > 0)
}

//Ordenar por preço crescente
function ordenaPreco (a, b){
    return a.preco - b.preco
}

//Ordenar alfabeticamente
function ordenaAlfabeto (a, b){
    if (a.nome < b.nome){
        return -1
    }
    if (a.nome > b.nome){
        return 1
    }
    return 0
}

//Filtrar produtos em estoque, ordenando por preço e exibir a soma de todos os produtos
function exibeValor (catalogo){
    function somar (a){
        soma += a.preco * a.qtdEstoque
    }
    const filtroProdutos = catalogo.filter(cat => cat.qtdEstoque > 0)
        .sort(ordenaPreco)
    produtos.forEach(somar)
    return [filtroProdutos, soma]
}
console.log("Possui estoque: \n", checaEstoque(produtos))
console.log("Ordena por preço crescente: \n", produtos.sort(ordenaPreco))
console.log("Ordem Alfabetica: ", produtos.sort(ordenaAlfabeto));
console.log("Produtos e Valor total: ", exibeValor(produtos));