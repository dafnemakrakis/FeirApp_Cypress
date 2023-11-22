/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000/')
    
  })

  it('valida que o site abriu', () => {
    
    cy.get('.filterTitle').should('contain', "Filtros:")
    cy.get('.selected').should('contain', "Todas")
    cy.get('.map').should('exist')
    cy.get('.button').click()

    cy.get('[title="Nome: Feira Ecológica Horário: 12"]',{ timeout: 10000 }).click()
    
    
  })

  it('valida se seleciona feiras da segunda feira', () => {
    cy.get('.button').should('contain', "Dias da semana")
    cy.get('.button').click()
    cy.get('#Segunda_feira').click()
    cy.get('.selected').should('contain', "Segunda_feira")
 
  })

  
  

})
