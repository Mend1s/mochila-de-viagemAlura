const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = []

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    criaElemento(nome.value, quantidade.value)

    nome.value = ""
    quantidade.value = ""

})

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement("li") // criando elemento do tipo 'li'
    novoItem.classList.add("item") // adicionando css no elemento criado

    const numeroItem = document.createElement("strong") // criando elemento do tipo 'strong'
    numeroItem.innerHTML = quantidade // inserindo quantidade na tag 'strong'

    novoItem.appendChild(numeroItem) // inserindo um elemento dentro de outro
    novoItem.innerHTML += nome //inserindo nome na tag 'li'

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(itemAtual)

    lista.appendChild(novoItem)

    localStorage.setItem("item", JSON.stringify(itens))
}