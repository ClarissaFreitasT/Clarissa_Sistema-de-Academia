let treinos = [];
let usuarioLogado = null;

// Elementos
const loginScreen = document.getElementById('loginScreen');
const inputUsuario = document.getElementById('inputUsuario');
const btnLogin = document.getElementById('btnLogin');

const app = document.getElementById('app');
const bemVindo = document.getElementById('bemVindo');
const btnLogout = document.getElementById('btnLogout');

const formulario = document.getElementById('formulario');
const deleteForm = document.getElementById('deleteForm');
const treinosListDiv = document.getElementById('treinosList');
const simulacaoTreino = document.getElementById('simulacaoTreino');

const treinosUl = document.getElementById('treinosUl');

// Funções login/logout
btnLogin.onclick = () => {
  const usuario = inputUsuario.value.trim();
  if (!usuario) {
    alert("Digite um nome de usuário para entrar.");
    return;
  }
  usuarioLogado = usuario;
  bemVindo.textContent = `Olá, ${usuarioLogado}!`;
  loginScreen.classList.add('hidden');
  app.classList.remove('hidden');
  inputUsuario.value = '';
};

btnLogout.onclick = () => {
  if (confirm("Deseja realmente sair?")) {
    usuarioLogado = null;
    treinos = [];
    app.classList.add('hidden');
    loginScreen.classList.remove('hidden');
    hideAll();
  }
};

// Funções da UI e treinos
function showForm() {
  hideAll();
  formulario.classList.remove('hidden');
}

function hideForm() {
  formulario.classList.add('hidden');
}

function showDeleteForm() {
  hideAll();
  deleteForm.classList.remove('hidden');
}

function hideDeleteForm() {
  deleteForm.classList.add('hidden');
}

function listTreinos() {
  hideAll();
  treinosUl.innerHTML = '';
  const meusTreinos = treinos.filter(t => t.usuario === usuarioLogado);
  if (meusTreinos.length === 0) {
    treinosUl.innerHTML = '<li>Nenhum treino cadastrado.</li>';
  } else {
    meusTreinos.forEach((t, i) => {
      treinosUl.innerHTML += `<li><strong>ID:</strong> ${i + 1} | <strong>Nome:</strong> ${t.nome} | <strong>Tipo:</strong> ${t.tipo} | <strong>Duração:</strong> ${t.duracao} min</li>`;
    });
  }
  treinosListDiv.classList.remove('hidden');
}

function addTreino() {
  const nome = document.getElementById('nome').value.trim();
  const tipo = document.getElementById('tipo').value;
  const duracao = parseInt(document.getElementById('duracao').value);

  if (!nome || !tipo || isNaN(duracao) || duracao <= 0) {
    alert('Preencha todos os campos corretamente!');
    return;
  }

  treinos.push({ usuario: usuarioLogado, nome, tipo, duracao });
  alert('Treino cadastrado com sucesso!');
  hideForm();
}

function deleteTreino() {
  const id = parseInt(document.getElementById('treinoId').value);
  const meusTreinos = treinos.filter(t => t.usuario === usuarioLogado);

  if (isNaN(id) || id < 1 || id > meusTreinos.length) {
    alert('ID inválido!');
    return;
  }

  // Encontrar índice global
  const treinoExcluir = meusTreinos[id - 1];
  const indexGlobal = treinos.findIndex(t => t === treinoExcluir);
  if (indexGlobal > -1) {
    treinos.splice(indexGlobal, 1);
    alert('Treino excluído!');
  }
  hideDeleteForm();
}

function simulateTreino() {
  hideAll();
  const meusTreinos = treinos.filter(t => t.usuario === usuarioLogado);
  if (meusTreinos.length === 0) {
    alert('Nenhum treino para simular.');
    return;
  }
  const ultimo = meusTreinos[meusTreinos.length - 1];
  const detalhes = `Treino: ${ultimo.nome} | Tipo: ${ultimo.tipo} | Duração: ${ultimo.duracao} minutos`;
  document.getElementById('simulacaoDetails').innerText = detalhes;
  simulacaoTreino.classList.remove('hidden');
}

function hideAll() {
  formulario.classList.add('hidden');
  deleteForm.classList.add('hidden');
  treinosListDiv.classList.add('hidden');
  simulacaoTreino.classList.add('hidden');
}
