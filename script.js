$( document ).ready(function() {

    var sec = 5;
    var taps = 0;
    
    function timer(){
        var timer = setInterval(function(){
            sec--;
            document.getElementById("timer").innerHTML = sec;
            if (sec === 0) {
                if (taps > 45) {
                    var audio = new Audio("attributes/winner.mp3");
                    audio.play();
                    sec = 5;
                    $("#results").html("<br>" + "WINNER!!!!!!!!" + "<br>" + "<br>" + "Results: " + "<br>" + $("#taps").text() + " taps in " + sec + " second(s)" + "<br>" + "<br>" + "FOLLOW INSTRUCTIONS BELOW" + "<br>" + "TAKE SCREEN SHOT" + "<br>" + "<br>");
                    $("#instructions").html("INSTRUCTIONS" 
                    + "<br>" 
                    + "<br>" 
                    + "1. Click this link - " 
                    + "<a href='https://sweatco.in/i/solomonshahzad'>https://sweatco.in/i/solomonshahzad</a>" + "<br>" + "Download Sweatcoin, it pays you when you walk around :)" 
                    + "<br>"  
                    + "<br>"
                    + "2. Text secret code 'TSHW' to '610-969-9099'" 
                    + "<br>" + "<br>"
                    + "3. Add 'SolomonShahzad' on the Sweatcoin App to receive your prize money" + "<br>" + "<br>" + "You can choose to not spend it.");
                } else {
                    sec = 5;
                    $("#results").html("<br>" + "YOU LOST" + "<br>" + "TRY AGAIN!" + "<br>" + "<br>" + "Results: " + "<br>" + $("#taps").text() + " taps in " + sec + " second(s)" );
                }
                
                taps = 0;
                clearInterval(timer);
                $("#startGameButton").prop("disabled", false);
                $("#startGameButton").html("RESTART GAME");
                $("#imageOfHenry").prop("disabled", true);
                
            }
        }, 1000);
    }

    function tapsFunction() {
        taps++;
        console.log(taps);
        document.getElementById("taps").innerHTML = taps;
    }

    $("#imageOfHenry").click(function() {
        console.log(sec);
        if(sec != 5 && sec != 0) {
            tapsFunction();
        } 
    });

    $("#startGameButton").click(function() {
        timer();
        $("#startGameButton").prop("disabled", true);
        $("#startGameButton").html("TAP HENRY");
    });
});