let treinos = [];
let idCounter = 1;

function showForm() {
    hideAll();
    document.getElementById('formulario').classList.remove('hidden');
}

function hideAll() {
    document.getElementById('formulario').classList.add('hidden');
    document.getElementById('deleteForm').classList.add('hidden');
    document.getElementById('treinosList').classList.add('hidden');
    document.getElementById('simulacaoTreino').classList.add('hidden');
}

function backToMenu() {
    hideAll();
    document.getElementById('menu').classList.remove('hidden');
}

function addTreino() {
    const pessoa = document.getElementById('pessoa').value.trim();
    const nome = document.getElementById('nome').value.trim();
    const tipo = document.getElementById('tipo').value;
    const duracao = document.getElementById('duracao').value.trim();

    if (pessoa === "" || nome === "" || duracao === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    treinos.push({
        id: idCounter++,
        pessoa: pessoa,
        nome: nome,
        tipo: tipo,
        duracao: duracao
    });

    alert(`Treino "${nome}" de ${pessoa} cadastrado com sucesso!`);

    document.getElementById('pessoa').value = "";
    document.getElementById('nome').value = "";
    document.getElementById('duracao').value = "";

    backToMenu();
}

function listTreinos() {
    hideAll();
    const list = document.getElementById('treinosUl');
    list.innerHTML = "";

    if (treinos.length === 0) {
        list.innerHTML = "<li>Nenhum treino cadastrado.</li>";
    } else {
        treinos.forEach(t => {
            list.innerHTML += `<li><strong>${t.nome}</strong> (${t.tipo}, ${t.duracao} min) - por ${t.pessoa} [ID: ${t.id}]</li>`;
        });
    }

    document.getElementById('treinosList').classList.remove('hidden');
}

function showDeleteForm() {
    hideAll();
    document.getElementById('deleteForm').classList.remove('hidden');
}

function deleteTreino() {
    const id = parseInt(document.getElementById('treinoId').value);
    const index = treinos.findIndex(t => t.id === id);

    if (index !== -1) {
        treinos.splice(index, 1);
        alert("Treino excluído com sucesso!");
    } else {
        alert("Treino não encontrado.");
    }

    document.getElementById('treinoId').value = "";
    backToMenu();
}

function simulateTreino() {
    if (treinos.length === 0) {
        alert("Cadastre pelo menos um treino para simular.");
        return;
    }

    hideAll();
    const randomTreino = treinos[Math.floor(Math.random() * treinos.length)];
    document.getElementById('simulacaoDetails').innerText = `Simulando: ${randomTreino.nome} (${randomTreino.tipo}, ${randomTreino.duracao} min) - por ${randomTreino.pessoa}`;
    document.getElementById('simulacaoTreino').classList.remove('hidden');
}