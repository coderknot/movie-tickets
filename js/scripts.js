// Business Logic
function Movie(movieName, runType) {
  this.movieName = movieName;
  this.runType = runType;
  this.basePrice = 10;
}

Movie.prototype.ticketPrice = function(movieTime, customerAge) {
  var ticketPrice = this.basePrice;

  if(this.runType !== "new") {
    ticketPrice -= 3;
  }
  if(customerAge >= 60) {
    ticketPrice -= 2;
  }
  if(movieTime <= 2) {
    ticketPrice -= 1.75;
  }

  return ticketPrice;
}

// User Interface Logic
$(document).ready(function() {
  $("form#ticket-form").submit(function(event) {
    event.preventDefault();

    var inputtedMovieName = $("select.movie").val();
    var inputtedRunType = $('select[name="movie"] :selected').attr('class');
    var inputtedMovieTime = parseInt($("select.time").val());
    var inputtedCustomerAge = parseInt($("input#age").val());
    var newMovie = new Movie(inputtedMovieName, inputtedRunType);

    var newTicketPrice = newMovie.ticketPrice(inputtedMovieTime, inputtedCustomerAge);

    $("#results-movie-name").text(newMovie.movieName);
    $("#results-run-type").text(newMovie.runType);
    $("#results-movie-time").text(inputtedMovieTime);
    $("#results-customer-age").text(inputtedCustomerAge);
    $("#results-ticket-price").text(newTicketPrice);

    $("#show-price").show();
  });
});
