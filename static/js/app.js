// part 1: creation of the table
// -------------------------------------------------------------------------------------------------------------------------------------------

// from data.js
var ufoSightings = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// print the data to the console 
// console.log(ufoSightings);

  
// use forEach to enter the data from the array into the table
// create a row for each object in the array
ufoSightings.forEach(function(ufoReport) {
    // console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
        // output the data to the console before adding the data to the table
    //   console.log(key, value);
      // Append a cell to the row for each value in the ufoReport object
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // -------------------------------------------------------------------------------------------------------------------------------------------
//   part 2: filtering and updating the table

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#filters");

// Create event handlers 
form.on("submit", runEnter);
button.on("click", runEnter);


// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // clear the table
    tbody.html("");
    
    // Select each input element and get the raw HTML node
    var dateElement = d3.select("#datetime");
    var cityElement = d3.select("#city");
    var stateElement = d3.select("#state");
    var countryElement = d3.select("#country");
    var shapeElement = d3.select("#shape");

    // Get the value property of each input element
    var dateValue = dateElement.property("value");
    var cityValue = cityElement.property("value");
    var stateValue = stateElement.property("value");
    var countryValue = countryElement.property("value");
    var shapeValue = shapeElement.property("value");

    // print each element to console
    console.log(dateValue);
    console.log(cityValue);
    console.log(stateValue);
    console.log(countryValue);
    console.log(shapeValue);

    var filteredUFO = ufoSightings.filter(
      sighting => sighting.datetime === dateValue && 
      sighting.city === cityValue &&
      sighting.state === stateValue &&
      sighting.country === countryValue &&
      sighting.shape === shapeValue);
    console.log(filteredUFO);

    filteredUFO.forEach(function(ufoQuery) {
        // console.log(ufoReport);
      var row = tbody.append("tr");
      Object.entries(ufoQuery).forEach(function([key, value]) {
        // output the data to the console before adding the data to the table
        console.log(key, value);
        // Append a cell to the row for each value in the ufoQuery object
        var cell = row.append("td");
        cell.text(value);
      });
    });
}  