
$(document).ready(function() {
  $("form#survey").submit(function() {
    event.preventDefault();
    const username = $("input#username").val();
    console.log(username);
    const answer1 = parseInt($("input:radio[name=question1]:checked").val());
    console.log(answer1); //remove this after verifying
    const answer2 = parseInt($("input:radio[name=question2]:checked").val());
    console.log(answer2);  //remove this after verifying
    const answer3 = parseInt($("input:radio[name=question3]:checked").val());
    console.log(answer3);  //remove this after verifying
    const answer4 = parseInt($("input:radio[name=question4]:checked").val());
    console.log(answer4);  //remove this after verifying
    const answer5 = parseInt($("input:radio[name=question5]:checked").val());
    console.log(answer5);  //remove this after verifying

    const total = answer1 + answer2 + answer3 + answer4 + answer5;
    let result;
    if (total <= 10) {
      result = "congrats! option one."
    } else if (total >= 11 && total <= 30) {
      result = "congrats! option two."
    } else if (total >= 31 && total <= 50) {
      result = "congrats! option three."
    } else if (total >= 51 && total <= 80) {
      result = "congrats! option four."
    } else {
      result = "congrats! option five."
    }
    console.log(total); // remove this after verifying
    console.log(result); // remove this after verifying

    $("#output").text(result);
    $("#footer").show();
    $()

  });

  $(".clickable").click(function() {
    $(".test-result").toggle();
  });

});

//don't forget your readme!!!