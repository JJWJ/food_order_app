export {};

describe('Index', () => {
    it('Should render', () => {
        cy.visit('/')
        cy.findByText('Hello').should('exist');
    })
})