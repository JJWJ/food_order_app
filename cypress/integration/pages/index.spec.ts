export {};

describe('Index', () => {
    it('Should render', () => {
        cy.visit('/')
        cy.findByText('OrderMealsFromUs').should('exist');
    })
    it('Should render the HeaderCarButton', () => {
        cy.visit('/')
        cy.findByRole('button', {name: 'shopping cart'}).should('exist')
    })
})