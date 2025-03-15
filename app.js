// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar nomes digitados
let listaDeNomes = []

// Função para adicionar amigos na lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); 

    if (nome === "") {
        alert("Por favor, insira um nome.");  
    } else {
        listaDeNomes.push(nome); 
        input.value = ""; 

        atualizarLista();
    }
}

// Limpa a lista antes de adicionar novos elementos e mostra no HTML
function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = ""; 

    for (let i = 0; i < listaDeNomes.length; i++) {
        let li = document.createElement("li"); 
        li.textContent = listaDeNomes[i]; 
        lista.appendChild(li); 
    }
}    



