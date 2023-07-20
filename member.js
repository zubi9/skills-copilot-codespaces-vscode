function skillsMember(){
    var skills = ["HTML", "CSS", "JS", "PHP"];
    var output = "";
    var i;
    for (i = 0; i < skills.length; i++) {
      output += skills[i] + "<br>";
    }
    document.getElementById("demo").innerHTML = output;
  }
