class BookFlightPage {
	fillForm() {
    cy.get('.sc-isBZXS').eq(1).click({force: true })
	cy.get('.sc-dBAPYN').eq(0).click({force: true })
	cy.get('[data-testid=FlightPAX__ContactDetails__FirstNameInput]').type('Mukarram')
	cy.get('[data-testid=FlightPAX__ContactDetails__LastNameInput]').type('Ehsan')
	cy.get('[data-testid=FlightPAX__ContactDetails__EmailInput]').type('devilmme@gmail.com')

	cy.get('[data-testid=FlightPAX__ContactDetails__MobileNumberInput]').type('3337877028')
	cy.get('[data-testid=FlightPAX__ContinueToPaymentButton]').click()
	}
	
	validateError()	{
	cy.get('[data-testid=FlightPAX__Adult1__FirstNameErrorLabel]').should('be.visible')
	cy.get('[data-testid=FlightPAX__Adult1__LastNameErrorLabel]').should('be.visible')
	}
	
	
}

export default BookFlightPage;