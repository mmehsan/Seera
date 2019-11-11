import FlightPage from './pages/flightPage';
import BookFlightPage from './pages/BookFlightPage';

describe('Book Fight', function() {
  it('Search Flight, Stop Filters and Form Validations', function() {
    cy.viewport(1440,1200)
    cy.visit('https://www.tajawal.com/en')
	
	const flight = new FlightPage();
    flight.visit();
	var to = 'DXB'
	var from = 'KHI'

	
	var min = 0
    var max = 4
    var index = Math.floor(Math.random() * (max - min) + min);
	cy.log(index)
	cy.fixture('cities').then((json) => {
	  to=json.to[index]
	  from=json.from[index]
	  flight.search(from, to)
	  
  });
	
	cy.wait(10000)
	
	flight.selectRoute()
	
	flight.selectFlight()
	
	cy.wait(40000)
	
	const bookflight = new BookFlightPage();
	
	bookflight.fillForm()
	
	
	bookflight.validateError()
  
    })
  
  
	it('Search Flight and Sorting', function() {
    cy.viewport(1440,1200)
    cy.visit('https://www.tajawal.com/en')
	
	const flight = new FlightPage();
    flight.visit();
	var to = 'DXB'
	var from = 'KHI'

	
	var min = 0
    var max = 4
    var index = Math.floor(Math.random() * (max - min) + min);
	cy.log(index)
	cy.fixture('cities').then((json) => {
	  to=json.to[index]
	  from=json.from[index]
	  cy.log(to)
	  cy.log(from)
	  flight.search(from, to)
	  
  });
	cy.wait(5000)
	cy.get('.DropdownPill--default').eq(1).click({force: true })
	cy.get('.sc-fkyLDJ').eq(0).click({force: true })
	cy.get('.sc-gipzik').click({force: true })
	
	
	
	var price 
	cy.get('[data-testid=FlightSearchResult__Itinerary1__PriceLabel]').invoke('text').then((text) => {
    
	price = text
	cy.log(price)
	
	cy.get('.sc-kcbnda > span').eq(0).contains(price)
	
	cy.get('.sc-kcbnda > span').eq(0).should('contain', price)
	});

	
    })
	

})

