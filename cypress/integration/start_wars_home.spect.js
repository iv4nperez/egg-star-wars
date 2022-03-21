describe('Homepage Star wars', () => {

    it('frontpage can to be open', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Example Title')
    })

    it('verify load list element', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Luke Skywalker')
    })

    it('go to detail', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Ver más').click()
        cy.contains('Birth Year')
        cy.contains('Height')
        cy.contains('Mass')
    })


    it('close to detail with icon close', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Ver más').click()
        cy.contains('Birth Year')
        cy.contains('Height')
        cy.contains('Mass')
        cy.get('button').click()
        cy.contains('Example Title')
    })


    it('check to see tutorial', () => {

        cy.visit('http://localhost:3000/')
        cy.contains('Ver tutorial').click()
        cy.contains('descubrir').click()
        cy.contains('SIGUIENTE').click()
        cy.contains('finalizar').click()
        cy.contains('Example Title')
    })


})