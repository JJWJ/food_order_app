export {};

describe('Index', () => {
    it('Should render the app', () => {
        cy.visit('/')
        cy.findByText('OrderMealsFromUs').should('exist');
    })
    it('Should render the HeaderCarButton', () => {
        cy.findByRole('button', {name: 'shopping cart'}).should('exist')
    })
    it('Should render the meals summary', () => {
        cy.findByText(/Scrumptious food, with fast delivery/i).should('exist')
    })
    it('Should render the available meals', () => {
        cy.findByTitle(/meals list/i).should('exist')
    })
    it('Should render the MealItemForm', () => {
        cy.findAllByText('Amount').should('exist')
    })
})