##  README

###  Tema do Projeto

Um sistema que **organiza treinos de academia**, desenvolvido com HTML, CSS e JavaScript. O foco é permitir que o usuário cadastre, visualize, simule e exclua treinos de forma simples e interativa.

---

###  Objetivo do Sistema

O sistema permite que o usuário:

* Cadastre seus treinos informando nome, tipo e duração.
* Visualize a lista de treinos cadastrados.
* Exclua treinos por ID.
* Simule um treino aleatório entre os cadastrados.

---

###  Estrutura da Interface

A interface é composta por:

* **Tela principal (menu)** com botões de ação.
* **Formulário de cadastro de treino.**
* **Formulário de exclusão de treino.**
* **Lista de treinos cadastrados.**
* **Simulação de treino aleatório.**
* Estilo moderno com fundo escuro, imagem de fundo transparente e botões em gradiente.

---

##  Perguntas Respondidas

###  Quais telas meu sistema precisa?

1. **Tela inicial (menu)** com botões de ação.
2. **Tela de cadastro de treino.**
3. **Tela de listagem de treinos.**
4. **Tela de exclusão de treino.**
5. **Tela de simulação de treino.**

Essas telas estão organizadas usando `div`s ocultas com a classe `.hidden`, sendo mostradas dinamicamente com JavaScript.

---

###  Que campos devem aparecer no formulário?

No **formulário de cadastro de treino**:

* **Seu nome** (identifica o usuário)
* **Nome do treino** (ex: "Treino A")
* **Tipo do treino** (cardio ou força)
* **Duração** (em minutos)

No **formulário de exclusão**:

* **ID do treino** (para remover o treino correspondente)

---

### Como o usuário vai interagir com meu sistema?

* O usuário interage por meio de **botões no menu principal**:

  * **Cadastrar Treino** abre o formulário para preencher e salvar.
  * **Listar Treinos** exibe todos os treinos salvos.
  * **Excluir Treino** permite digitar o ID e remover o treino.
  * **Simular Treino** escolhe aleatoriamente um treino e mostra os detalhes.

* A navegação é fluida e feita com JavaScript sem recarregar a página.


