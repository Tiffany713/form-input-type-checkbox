$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
  });
  
  $("form#music").submit(function(event) {
    var choicemusic = $("#music").val();
    console.log;
    debugger;
  });

  $("form#food").submit(function(event) {
    var choicefood = $("input:radio[name=food]:checked").val();
    console.log;
  });

  $("form#born").submit(function(event) {
    var dob = $("#born").val();
    console.log;
  });

  $("form#color").submit(function(event) {
    event.preventDefault();
    var favoriteColor = $("#color").val();
    console.log; 

  });
});

