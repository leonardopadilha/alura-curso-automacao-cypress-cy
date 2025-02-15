/// <reference types="cypress" />

describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  context('Verifica redirecionamento de página', () => { 
    it('Deve clicar no link "Cadastre-se" e ser redirecionado para a página de cadastro da clínica', () => {
        cy.contains('Cadastre-se')
            .click()

        cy.get('h2')
            .should('contain', 'Primeiro, alguns dados básicos')
    })
  })
    
  context('Primeira parte da sessão de cadastro', () => {

    it('Deve cadastrar o usuário com sucesso após informar os dados corretos', () => {
        cy.contains('Cadastre-se')
            .click()
    
        cy.location('pathname').should('equal', '/cadastro')
    
        cy.get('h2')
            .should('contain', 'Primeiro, alguns dados básicos')
    
        cy.get('[data-test="inputNome"]')
            .type("Cliente Teste")
    
        cy.get('[data-test="inputCNPJ"]')
            .type('12598432')
    
        cy.get('[data-test="inputEmail"]')
            .type("teste@tete.com")
    
        cy.get('[data-test="inputSenha"]')
            .type("123456")
    
        cy.get('[data-test="inputSenhaVerificada"]')
            .type("123456")
    
        cy.contains('button', 'Avançar')
            .should('be.visible')
            .click()
    
        cy.contains('h2', 'Agora, os dados técnicos:')
            .should('be.visible') 
    })
  })

  context('Sessão de cadastro completa', () => {
    it('Deve cadastrar o usuário com sucesso após informar os dados corretos', () => {
        cy.contains('Cadastre-se')
            .click()
    
        cy.location('pathname').should('equal', '/cadastro')
    
        cy.get('h2')
            .should('contain', 'Primeiro, alguns dados básicos')
    
        cy.get('[data-test="inputNome"]')
            .type("Cliente Teste")
    
        cy.get('[data-test="inputCNPJ"]')
            .type('12598432')
    
        cy.get('[data-test="inputEmail"]')
            .type("teste@tete.com")
    
        cy.get('[data-test="inputSenha"]')
            .type("123456")
    
        cy.get('[data-test="inputSenhaVerificada"]')
            .type("123456")
    
        cy.contains('button', 'Avançar')
            .should('be.visible')
            .click()
    
        cy.contains('h2', 'Agora, os dados técnicos:')
            .should('be.visible')

        cy.get('[data-test="inputTelefone"]')
            .type('11111111111')
    
        cy.get('[data-test="inputCEP"]')
            .type('123456')
    
        cy.get('[data-test="inputRua"]')
            .type("Rua Teste")
    
        cy.get('[data-test="inputNumero"]')
            .type('125')
    
        cy.get('[data-test="inputComplemento"]')
            .type("teste")
    
        cy.get('[data-test="inputEstado"]')
            .type('São Paulo')
    
        cy.contains('button', 'Cadastrar')
            .should('be.visible')
            .click()
    
        cy.contains('h2', 'Faça login em sua conta')
            .should('be.visible')
    
        cy.location('pathname').should('equal', '/login')
    
    })
  })
})