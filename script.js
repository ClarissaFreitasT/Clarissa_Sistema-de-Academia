let treinos = [];

function showForm() {
  hideAll();
  document.getElementById('formulario').classList.remove('hidden');
}

function hideForm() {
  document.getElementById('formulario').classList.add('hidden');
}

function showDeleteForm() {
  hideAll();
  document.getElementById('deleteForm').classList.remove('hidden');
}

function hideDeleteForm() {
  document.getElementById('deleteForm').classList.add('hidden');
}

function listTreinos() {
  hideAll();
  const ul = document.getElementById('treinosUl');
  ul.innerHTML = '';

  if (treinos.length === 0) {
    ul.innerHTML = '<li>Nenhum treino cadastrado.</li>';
  } else {
    treinos.forEach((t, i) => {
      ul.innerHTML += `<li><strong>ID:</strong> ${i + 1} | <strong>Usuário:</strong> ${t.usuario} | <strong>Nome:</strong> ${t.nome} | <strong>Tipo:</strong> ${t.tipo} | <strong>Duração:</strong> ${t.duracao} min</li>`;
    });
  }

  document.getElementById('treinosList').classList.remove('hidden');
}

function addTreino() {
  const usuario = prompt("Digite o nome do usuário que realizou o treino:");
  const nome = document.getElementById('nome').value;
  const tipo = document.getElementById('tipo').value;
  const duracao = parseInt(document.getElementById('duracao').value);

  if (!nome || !usuario || isNaN(duracao)) {
    alert('Preencha todos os campos corretamente!');
    return;
  }

  treinos.push({ usuario, nome, tipo, duracao });
  alert('Treino cadastrado com sucesso!');
  hideForm();
}

function deleteTreino() {
  const id = parseInt(document.getElementById('treinoId').value);
  if (isNaN(id) || id < 1 || id > treinos.length) {
    alert('ID inválido!');
    return;
  }
  treinos.splice(id - 1, 1);
  alert('Treino excluído!');
  hideDeleteForm();
}

function simulateTreino() {
  hideAll();
  if (treinos.length === 0) {
    alert('Nenhum treino para simular.');
    return;
  }

  const ultimo = treinos[treinos.length - 1];
  const details = `Usuário: ${ultimo.usuario} | Treino: ${ultimo.nome} | Tipo: ${ultimo.tipo} | Duração: ${ultimo.duracao} minutos`;
  document.getElementById('simulacaoDetails').innerText = details;
  document.getElementById('simulacaoTreino').classList.remove('hidden');
}

function hideAll() {
  document.getElementById('formulario').classList.add('hidden');
  document.getElementById('deleteForm').classList.add('hidden');
  document.getElementById('treinosList').classList.add('hidden');
  document.getElementById('simulacaoTreino').classList.add('hidden');
}