class FlightPage {
	
	visit() {
    cy.get('[data-testid=Header__FlightsNavigationTab]').click()
	}
	
	search(departure, arrival) {

    cy.get('[data-testid=FlightSearchBox__FromAirportInput]').type(departure)
	cy.wait(300)
	cy.get('[data-testid=FlightSearchBox__AirportOption0]').click()
	cy.get('[data-testid=FlightSearchBox__ToAirportInput]').type(arrival)
	cy.wait(300)
	cy.get('[data-testid=FlightSearchBox__AirportOption0]').click()
	cy.get('[data-testid=FlightSearchBox__FromDateButton]').click()
	cy.get('[data-testid=FlightSearchCalendar__MonthDropdown]').eq(0).select('December')
	cy.get('[data-testid=FlightSearchCalendar__YearDropdown]').eq(0).select('2019')
	cy.get('[data-testid=FlightSearchCalendar__2019-12-15]').eq(0).click()
	cy.get('[data-testid=FlightSearchCalendar__2019-12-25]').eq(0).click()
	cy.get('[data-testid=FlightSearchBox__CabinTypeDropdown]').click()
	cy.get('[data-testid=FlightSearchCabinSelection__EconomyOption]').click()
	cy.get('[data-testid=FlightSearchBox__SearchButton]').eq(0).click()
	}
	
	selectRoute() {
    var checkText='Direct'
	cy.get('body').then(($body) => {
	if ($body.find('[data-testid=FlightSearchResult__StopsFilter__NonStopCheckbox]').length) {
		checkText='Direct'
		return '[data-testid=FlightSearchResult__StopsFilter__NonStopCheckbox]'
	}
	else if ($body.find('[data-testid=FlightSearchResult__StopsFilter__1StopCheckbox]').length){
		checkText='1 Stop'
		return '[data-testid=FlightSearchResult__StopsFilter__1StopCheckbox]'
	}
		checkText='+2 Stops'
		return '[data-testid=FlightSearchResult__StopsFilter__2StopsCheckbox]'

	})
	.then((selector) => {
		cy.get(selector).click({force: true })
	})
	cy.get('.sc-CtfFt>span')
	.each(($li, index, $lis) => {
     expect($li).to.have.text(checkText)
	});
	}
  
	selectFlight()	{
	cy.get('[data-testid=FlightSearchResult__Itinerary1__SelectFlightButton]').click()
	cy.on('uncaught:exception', (err, runnable) => {
    expect(err.message).to.include('Uncaught TypeError:')
    return false
  })
	}
	
}

export default FlightPage;