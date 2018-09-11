$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var person1Input = $("input#person1").val();

    $(".person1").text(person1Input);

    $("#letter").show();

  });
});
