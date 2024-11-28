describe("Gerenciador de Tarefas - Caminho Feliz", () => {
  beforeEach(() => {
    cy.visit("/"); // Substitua pela URL do Vercel, se necessário
  });

  it("Deve adicionar 3 tarefas corretamente", () => {
    // Adicionar a primeira tarefa
    cy.get('input[placeholder="Digite o titulo da tarefa"]').type("Trabalhar");
    cy.get('input[placeholder="Digite a descrição da tarefa"]').type(
      "Foco no projeto."
    );
    cy.contains("Adicionar").click();

    // Verifica se a tarefa foi adicionada com sucesso
    cy.contains("Trabalhar").should("be.visible");

    // Adicionar a segunda tarefa
    cy.get('input[placeholder="Digite o titulo da tarefa"]')
      .clear()
      .type("Estudar");
    cy.get('input[placeholder="Digite a descrição da tarefa"]')
      .clear()
      .type("Estudo de backend.");
    cy.contains("Adicionar").click();

    // Verifica se a segunda tarefa foi adicionada
    cy.contains("Estudar").should("be.visible");

    // Adicionar a terceira tarefa
    cy.get('input[placeholder="Digite o titulo da tarefa"]')
      .clear()
      .type("Exercício");
    cy.get('input[placeholder="Digite a descrição da tarefa"]')
      .clear()
      .type("Correr no parque.");
    cy.contains("Adicionar").click();

    // Verifica se a terceira tarefa foi adicionada
    cy.contains("Exercício").should("be.visible");
  });

  it("Deve excluir apenas uma tarefa", () => {
    // Excluir a primeira tarefa clicando no ícone de lixeira (SVG)
    cy.get("svg.lucide-trash").first().click(); // Seleciona o primeiro ícone de lixeira SVG e clica nele

    // Verifica se a tarefa foi removida
    cy.contains("Trabalhar").should("not.exist");

    // Verifica se as outras tarefas ainda existem
    cy.contains("Estudar").should("be.visible");
    cy.contains("Exercício").should("be.visible");
  });
});
