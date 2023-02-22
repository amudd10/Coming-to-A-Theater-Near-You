// Define the search function that will be called when the Search button is clicked
function search() {
    // Get the search term from the input box
    var searchTerm = document.getElementById("searchBar").value;
    
    // Make an AJAX request to the Flask app to get the movie suggestions
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/suggest-movies/" + searchTerm, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Parse the JSON response from the Flask app
        var data = JSON.parse(xhr.responseText);
        
        // Update the movie list with the suggestions
        var movieList = document.getElementById("movieList");
        movieList.innerHTML = "";
        for (var i = 0; i < data.length; i++) {
          var listItem = document.createElement("li");
          listItem.innerHTML = data[i]["title"];
          listItem.addEventListener("click", function() {
            // When a movie title is clicked, show the recommendation button
            document.getElementById("recommendButton").style.display = "inline";
          });
          movieList.appendChild(listItem);
        }
      } else {
        // If the request fails, show an error message
        console.error(xhr.statusText);
        document.getElementById("movieList").innerHTML = "Error: Could not get movie suggestions";
      }
    };
    xhr.send();
  }
  
  // Define the recommend function that will be called when the Recommend button is clicked
  function recommend() {
    // Get the selected movie title from the list
    var selectedTitle = document.querySelector("#movieList li.selected").innerHTML;
    
    // Get the inputs from the user
    var budget = document.getElementById("budgetInput").value;
    var genre = document.getElementById("genreInput").value;
    var language = document.getElementById("languageInput").value;
    var popularity = document.getElementById("popularityInput").value;
    var revenue = document.getElementById("revenueInput").value;
    var runtime = document.getElementById("runtimeInput").value;
    var voteAverage = document.getElementById("voteAverageInput").value;
    
    // Make an AJAX request to the Flask app to get the recommendation
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/get-recommendation", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Parse the JSON response from the Flask app
        var data = JSON.parse(xhr.responseText);
        
        // Update the recommendation text with the result
        var recommendationText = document.getElementById("recommendationText");
        recommendationText.innerHTML = data["recommendation"];
      } else {
        // If the request fails, show an error message
        console.error(xhr.statusText);
        document.getElementById("recommendationText").innerHTML = "Error: Could not get recommendation";
      }
    };
    xhr.send(JSON.stringify({
      "title": selectedTitle,
      "budget": budget,
      "genre": genre,
      "language": language,
      "popularity": popularity,
      "revenue": revenue,
      "runtime": runtime,
      "vote_average": voteAverage
    }));
  }
  
  // Add event listeners to the movie list items
  var movieList = document.getElementById("movieList");
  movieList.addEventListener("click", function(event) {
    var items = movieList.getElementsByTagName("li");
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove("selected");
    }
    event.target.classList.add("selected");
  });
  
  // Hide the recommendation button by default
  document.getElementById("recommendButton").style.display = "none";
  ``
  