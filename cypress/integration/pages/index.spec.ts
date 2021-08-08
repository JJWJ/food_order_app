export {};

describe('Index', () => {
    it('Should render the app', () => {
        cy.visit('/')
        cy.findByText('OrderMealsFromUs').should('exist');
    })
    it('Should show loading state', () => {
        cy.findByText('Loading...').should('exist');
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
    it('Should open the Modal', () => {
        cy.findByRole('button', {name: 'shopping cart'}).click()
        cy.findByRole('button', {name: 'Close'}).should('exist')
    })
    it('Should close the Modal', () => {
        cy.findByRole('button', {name: 'Close'}).click()
        cy.findByRole('button', {name: 'Close'}).should('not.exist')
    })
    it('Should open the Modal and close it from the backdrop', () => {
        cy.findByRole('button', {name: 'shopping cart'}).click()
        cy.findByRole('button', {name: 'Close'}).should('exist')
        cy.findByTitle('ModalBackdrop').click()
        cy.findByRole('button', {name: 'Close'}).should('not.exist')
    })
    it('Should not show the order button if cart is empty ', () => {
        cy.findByRole('button', {name: 'shopping cart'}).click()
        cy.findByRole('button', {name: 'Order'}).should('not.exist')
        cy.findByTitle('ModalBackdrop').click()
    })
    it('Should add item to the cart', () => {
        cy.get('button').contains('+ Add').first().click()
        cy.findByRole('button', {name: 'shopping cart'}).within(() => {
            cy.get('span:last').should('contain', '1')
        });
    })
    it('Should remove item from the cart', () => {
        cy.findByRole('button', {name: 'shopping cart'}).click()
        cy.findByRole('button', {name: '-'}).click()
        cy.findByRole('button', {name: 'Close'}).click()
        cy.findByRole('button', {name: 'shopping cart'}).within(() => {
            cy.get('span:last').should('contain', '0')
        });
    })
})