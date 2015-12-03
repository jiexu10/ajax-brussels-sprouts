$('#get-dish').on('click', function(event) {
  event.preventDefault();

  // request a new dish and alert the user
  var fortune = { content: "Walk through life like a badass." };
  var request = $.ajax({
    method: "GET",
    url: "/dishes/random.json",
  });

  request.done(function(newRecipe) {
    alert(newRecipe);
  });
});
