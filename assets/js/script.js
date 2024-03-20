
function adicionarTarefa() {
    let btnAdicionar = document.querySelector('#btnAdicionar');

    
    let inputTarefa = document.querySelector('#inputTarefa');
    let valorInput = inputTarefa.value.trim();

    if(valorInput === "") {
        alert("Adicione uma nova tarefa.")
        return;
    }


    const itemLista = document.createElement('li');
    itemLista.classList = "item"
    itemLista.innerText = valorInput;

    let btnTarefaConcluida = document.createElement("button");
    btnTarefaConcluida.classList = "btnConcluir";
    btnTarefaConcluida.textContent = "Concluir tarefa";

    btnTarefaConcluida.onclick = function () {
        concluirTarefa(itemLista);
    }
    itemLista.appendChild(btnTarefaConcluida);


    let btnDeletarTarefa = document.createElement("button");
    btnDeletarTarefa.classList = "btnDeletar";
    btnDeletarTarefa.textContent = "Excluir";

    btnDeletarTarefa.onclick = function () {
        excluirTarefa(itemLista);
    };
    itemLista.appendChild(btnDeletarTarefa);

    
    document.getElementById("lista").appendChild(itemLista);

    inputTarefa.value = "";


}

function concluirTarefa(tarefa){
    tarefa.classList.toggle("concluida");
}

function excluirTarefa(tarefa){
    tarefa.remove();
}