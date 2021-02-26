beforeEach(() => {
    cy.visit('http://localhost:3000/pizza')
})

describe('Check for text to be added on name input', () => {

    const nameInput = () => cy.get('.form > :nth-child(2) > input')
    const selectInput = () => cy.get('select')
    const pepperoniInput = () => cy.get(':nth-child(1) > input')
    const chickenInput = () => cy.get('.choice-toppings > :nth-child(2) > input')
    const sausageInput = () => cy.get(':nth-child(3) > input')
    const pineappleInput = () => cy.get(':nth-child(4) > input')
    const submitButton = () => cy.get('.form-btn')
    
    it('check for name input', () => {
        nameInput()
        .should('exist')
        .type('Randy')
    })

    it('mark more than one pizza topping', () => {
        pepperoniInput()
        .should('exist')
        .click()

        chickenInput()
        .should('exist')
        .click()

        sausageInput()
        .should('exist')
        .click()

        pineappleInput()
        .should('exist')
        .click()
    })

    describe.only('Submit pizza order when selecting required fields ', () => {
        
        it('submit the pizza order form', () => {
            nameInput()
            .should('exist')
            .type('Randy')

            selectInput()
            .should('exist')
            .select('Small').should('have.value', 'small')

            submitButton()
            .should('exist')
            .click()
        })
    })
})