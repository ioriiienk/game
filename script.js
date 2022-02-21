var won,lost,match;

match = 1;
won = 0;
lost = 0;

for(i = 1; i <=3; i++ ){

    var guess = Number(prompt("Please Guess Number From 1 To 5"));

    var random = Math.floor(Math.random() * 5 + 1);

    if( guess == random ){
        document.write("<br> Match = " + match);
        document.write("<br> Your Guessed Number is = " + guess + "<br>" + "Correct Number is = " + random + "<br>");
        document.write("Game Result = " + "<p class = won >You Won!</p> <br>");
        won++;
        match++
    }
    
    else{
        document.write("<br>Match = " + match);
        document.write("<br> Your Guessed Number is = " + guess + "<br>" + "Correct Number is = " + random + "<br>");
        document.write("Game Result = " + "<p class = lost >You Are Lost!</p> <br>");
        lost++;
        match++;
    };
}


document.write("<br><br>" + "<h3>Game Result</h3>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<div class = rl >You Had Won = " + won + "</div>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
document.write("<div class = rl >You Had Lost = " + lost + "</div><br>");
