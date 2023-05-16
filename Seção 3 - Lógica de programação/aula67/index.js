const tarefas = document.querySelector('.tarefa');
const adicionarTarefa = document.querySelector('#adicionarTarefa');
const tarefasListadas = document.querySelector('.tarefasListadas');


function criaLi(){
    const li = document.createElement('li');
    return li;
}

function limparInput(){
    tarefas.value = '';
    tarefas.focus();
}

tarefas.addEventListener('keypress', function(e){
    if(e.keyCode === 13) {
        criarTarefa(tarefas.value);
        limparInput();     
}
});

function criaBotaoApagar(li){
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    li.appendChild(botaoApagar);
    botaoApagar.setAttribute('class', 'apagar')
}

function criarTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefasListadas.appendChild(li);
    criaBotaoApagar(li)
    salvarTarefas()
}

adicionarTarefa.addEventListener("click", function(e) {
    e.preventDefault();
    criarTarefa(tarefas.value);
    limparInput();
});

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas(){
    const liTarefas = tarefasListadas.querySelectorAll('li');
    const listaDeTarefas = []

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionarTarefaSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
}

adicionarTarefaSalvas()