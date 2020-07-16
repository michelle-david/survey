
$(document).ready(function() {
  $("form#survey").submit(function() {
    event.preventDefault();
    const username = $("input#username").val();
    console.log(username);
    const answer1 = parseInt($("input:radio[name=question1]:checked").val());
    
    const answer2 = parseInt($("input:radio[name=question2]:checked").val());
    
    const answer3 = parseInt($("input:radio[name=question3]:checked").val());
    
    const answer4 = parseInt($("input:radio[name=question4]:checked").val());
  
    const answer5 = parseInt($("input:radio[name=question5]:checked").val());

    const total = answer1 + answer2 + answer3 + answer4 + answer5;
    let result;
    if (total <= 10) {
      result = (username + ", you're a standout candidate to master Python! this high-level, general-purpose programming language will allow you to tackle the greatest existential problems of all time.")
    } else if (total >= 11 && total <= 30) {
      result = username + ", amazing! all signs point to learning Swift. once you've memorized the ins and outs of this exciting new language you'll be able to create the next candy crush!"
    } else if (total >= 31 && total <= 50) {
      result = username + ", nice job. our survey says you're a top candidate for a certificate in Rust. voted the 'most loved programming language' in the Stack Overflow Developer Survey every year since 2016, this versatile language is free, open-source, and just might save the world."
    } else if (total >= 51 && total <= 80) {
      result = username + ", beep boop, our algorithim suggests SQL! this domain-specific langauge is used across many disciplines, including data science. help build a better Netflix recomendation engine in no time once you've mastered this popular language!"
    } else {
      result = username + ", our crystal ball sees Visual Basic in your future. first appearing nearly 30 years ago, this event-driven programming language has lasted for a while because of its ease of use and popularity. give it a spin and see for yourself!"
    }

    $("#output").text(result);
    $("#footer").show();

  });

  $(".clickable").click(function() {
    $(".test-result").toggle();
  });

});