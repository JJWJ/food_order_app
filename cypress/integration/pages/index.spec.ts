export {};

describe('Index', () => {
    it('Should render', () => {
        cy.visit('/')
        cy.findByText('OrderFromUs').should('exist');
    })
})