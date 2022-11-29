const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach((elemento) => {
    criaElemento(elemento)
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const existe = itens.find( elemento => elemento.nome === nome.value)
    
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if (existe){
        itemAtual.id = existe.id

        atualizaElemento(itemAtual)
    } else {
        itemAtual.id = itens.length

        criaElemento(itemAtual)
    
        itens.push(itemAtual)
    }

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""

})

function criaElemento(item) {
    const novoItem = document.createElement("li") // criando elemento do tipo 'li'
    novoItem.classList.add("item") // adicionando css no elemento criado

    const numeroItem = document.createElement("strong") // criando elemento do tipo 'strong'
    numeroItem.innerHTML = item.quantidade // inserindo quantidade na tag 'strong'
    numeroItem.dataset.id = item.id
    novoItem.appendChild(numeroItem) // inserindo um elemento dentro de outro
    novoItem.innerHTML += item.nome //inserindo nome na tag 'li'

    lista.appendChild(novoItem)
}

function atualizaElemento(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}