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
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // clear the table
    tbody.html("");
    
    // Select the input element and get the raw HTML node
    // var inputElement = d3.select("#datetime");
  
    // console.log(inputElement);

    // // Get the value property of the input element
    // var inputValue = inputElement.property("value");
  
    // console.log(inputValue);
  
    // var filteredUFO = ufoSightings.filter(sighting => sighting.datetime === inputValue);
  
    // console.log(filteredUFO);

    // filteredUFO.forEach(function(ufoQuery) {
    //     // console.log(ufoReport);
    //     var row = tbody.append("tr");
    //     Object.entries(ufoQuery).forEach(function([key, value]) {
    //         // output the data to the console before adding the data to the table
    //     //   console.log(key, value);
    //       // Append a cell to the row for each value in the ufoQuery object
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   });
    var dateElement = d3.select("#datetime");
    var cityElement = d3.select("#city");

    var dateValue = dateElement.property("value");
    var cityValue = cityElement.property("value");

    console.log(dateValue);
    console.log(cityValue);

    var filteredUFO = ufoSightings.filter(sighting => sighting.datetime === dateValue && sighting.city === cityValue);
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