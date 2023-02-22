function recommendMovie() {
  console.log("Function called!");
  // Retrieve the values of the form fields
  // var budget = document.getElementById('budget').value;
  // console.log(budget);
  // // var genres = document.getElementsByName('genres');
  // var genres = 'Action'
  // console.log(genres);
  // var originalLanguage = document.getElementById('original_language').value;
  // console.log(originalLanguage);
  // var popularity = document.getElementById('popularity').value;
  // console.log(popularity);
  // var revenue = document.getElementById('revenue').value;
  // console.log(revenue);
  // var runtime = document.getElementById('runtime').value;
  // console.log(runtime);
  // var voteAverage = document.getElementById('voteAverage').value;
  // console.log(voteAverage)

  // // Convert the genres to an array of strings
  // var genresArray = [];
  // for (var i = 0; i < genres.length; i++) {
  //   if (genres[i].checked) {
  //     genresArray.push(genres[i].value);
  //   }
  // }

  // // Make an AJAX request to the server to get the prediction
  // var xhr = new XMLHttpRequest();
  // xhr.open('POST', '/predict', true);
  // xhr.setRequestHeader('Content-Type', 'application/json');
  // xhr.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {
  //     var response = JSON.parse(this.responseText);
  //     var prediction = response.result;
  //     if (prediction == 'successful') {
  //       alert('This movie is predicted to be successful!');
  //     } else {
  //       alert('This movie is predicted to be unsuccessful.');
  //     }
  //   }
  // };
  // xhr.send(JSON.stringify({
  //   budget: budget,
  //   genres: genresArray,
  //   original_language: originalLanguage,
  //   popularity: popularity,
  //   revenue: revenue,
  //   runtime: runtime,
  //   vote_average: voteAverage
  // }));
}
