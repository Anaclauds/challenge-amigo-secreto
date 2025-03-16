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

// Função para sortear um amigo
function sortearAmigo() {
    // Valida se há amigos no array
    if (listaDeNomes.length === 0) {
        alert("Não há amigos na lista!");
        return; // Se não há amigos, sai da função.
    }

    // Gera um índice aleatório entre 0 e o tamanho do array (nunca 1)
    let indiceAleatorio = Math.floor(Math.random() * listaDeNomes.length);

    // Obtem o nome sorteado
    let amigoSorteado = listaDeNomes[indiceAleatorio];

    // Exibi o resultado na página
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "O amigo(a) sorteado é: " + amigoSorteado;

    exibirBotaoNovoSorteio();
}

// Função para criar um novo botão ao realizar um sorteio
function exibirBotaoNovoSorteio() {
    let novoSorteioBtn = document.getElementById("novoSorteio");

    if (!novoSorteioBtn) {
        novoSorteioBtn = document.createElement("button");
        novoSorteioBtn.id = "novoSorteio";
        novoSorteioBtn.className = "button-draw";
        novoSorteioBtn.textContent = "Novo Sorteio";
        novoSorteioBtn.onclick = resetarSorteio;

        document.querySelector(".button-container").appendChild(novoSorteioBtn);
    }
}

// Limpa os campos
function resetarSorteio() {
    // Limpa o resultado
    document.getElementById("resultado").innerHTML = "";

    // Remove a lista de amigos no HTML e limpa o array
    listaDeNomes = [];
    document.getElementById("listaAmigos").innerHTML = "";

    // Remove o botão de novo sorteio
    const novoSorteioBtn = document.getElementById("novoSorteio");
    if (novoSorteioBtn) {
        novoSorteioBtn.remove();
    }
}



