$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    // var colorChoice = $ ("#color").val();
    // var person1Input = $("input#person1").val().toUpperCase();
    // var addressInput = $("input#address").val();
    //
    // $(".color").text(colorChoice);
    // $(".person1").text(person1Input);
    // $(".address").text(addressInput);
    //
    // $("#letter").show();

    var nameInput = $("input#name").val().toUpperCase();
    var addressInput = $("input#address").val();
    var phoneInput = $ ("input#phone").val();

    $("ul").prepend(nameInput);

    $("#contact-list").click(function() {
      $(".address").text(addressInput);
      $(".phone").text(phoneInput);
    });
  });
});
