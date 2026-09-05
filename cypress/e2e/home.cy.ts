/// <reference types="cypress" />

describe('Home - eFood', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('deve carregar a página inicial', () => {
    cy.get('header').should('exist');
    cy.get('footer').should('exist');
  });

  it('deve listar produtos', () => {
    cy.get('.container').should('exist');
  });
});
