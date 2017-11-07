alert('Prepare to be amazed!')
var generateButton = document.getElementById('generate-fortune');

//creating an anonymous function
generateButton.onclick = function() {
    var fortuneHolder = document.getElementById('fortune');
    var fortunes = ["You're awesome.", "You suck.", "In the beginning, it's you. In the middle, it's you. In the end, it's you."];
    var randomIndex = Math.round(Math.random() * (fortunes.length - 1));
    //the 2 is so that random numbers up to 2 are generated, so this would need to be changed based on the number of fortunes
    //so we changed the "2" to "fortunes.length - 1" to generate random numbers up to the array length 
    fortuneHolder.innerHTML = fortunes[randomIndex];
}

