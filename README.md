# Seera

This consists of 4 files

  ### i.    \integration\Seera.js 
  
  ### ii.   \fixtures\cities.JSON
  
  ### iii.  \integration\pages\flightPage.js
  
  ### iv.   \integration\pages\BooKFlightPage.js
  
  
# File Contents
The main test cases are in Seera.js , while test data containig 2 origin i.e. 'from' and destination i.e. 'to' arrays consisting of 5 locations each.
The other two files with in the Pages sub-folder contains the POM for flight search and flight book pages.


To execute just run the scripts from Cypress UI.


# First TC
First test cases will open the site and search for a flight from randow locations mentioned in cities.JSON and filter them on the shortest stop avaialble and assert that flight are being shown according to selected the filter. Then it opens the first flight option's booking page and fills the contact information and perfoms asssert that upon clicking button proper errors are shown for the empty fields in traveller's section.


# Second TC
The second test cases will open the site and search for a flight from randow locations mentioned in cities.JSON and sort the results by cheapest price and then asserts that the price shown for the cheapest i.e. first flight is equal to he price shown in price-range-filter.
