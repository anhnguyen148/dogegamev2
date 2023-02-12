$(function () {
    console.log("bring the wow v2.0");

    // add draggable event
    $("#dogememe").draggable({
        drag: function (event,ui) {
        console.log(ui.originalPosition);
        },
    });

    // add droppable event
    $("#dropbox-old").droppable({
        drop: function (event, ui) {
        // replace a new meme when dragged
        $("#dogememe").attr("src", "assets/Doge-meme-2.jpg");
        $(this)
            .addClass("ui-state-highlight")
            .find("p")
            // displace text after dropping
            .html("SO MUCH WOW!!")
            // add animation when dropped
            .animate({
            left: "350px",
            height: "150px",
            width: "200px",
            });
        },
    });

    // create counter function: count+1 when user clicks the meme
    var count = 0;
    $("#dogememe").click(function () {
        count++;
        // outputs when it's counting
        if (count < 9) {
            // ask buddy keep trying
            $("#counter").html(count + " Keep going buddy! You're almost there!");
            console.log("Not enough.");
        } 
        else if (count == 10) {
            // output for reaching the point
            $("#counter").html(count + " WOW!!!!");
            console.log("Wow!");
            // change a new meme when the point is reached
            $("#dogememe").attr("src", "assets/Doge-meme-1.jpg");
        }
    });

    // add alert when dropped
    $("#dropbox-new").droppable({
        drop: function (event, ui) {
        alert("Try my new Minigame down here, buddy!");
        },
    });

    // add page refreshing function
    $("#refresh").click(function () {
        location.reload(true);
    });

    // Rock Paper Scissors Game function
    list = ["rock", "paper", "scissors"];
    // set random method for computer's choice
    var computerChoice = Math.floor(Math.random() * list.length);

    // if user chooses rock
    $("#rock").click(function() {
        console.log("You choose rock");
        console.log("Computer chooses " + list[computerChoice]);
        if (list[computerChoice] == "paper") {
            $("#computerText").html("Your choice is: Rock<br>Computer's Choice is: Paper<br>You Lose!")
            $("#rock").attr("src", "assets/loser.jpg");
        }
        else if (list[computerChoice] == "scissors") {
            $("#computerText").html("Your choice is: Rock<br>Computer's Choice is: Scissors<br>You Win!")
            $("#rock").attr("src", "assets/winner.jpg");
        }
        else {
            $("#computerText").html("Your choice is: Rock<br>Computer's Choice is: Rock<br>Fair Enough!")
            $("#rock").attr("src", "assets/fair.jpg");
        }
        // disable click event of #paper and #scissors after playing
        $("#paper").off('click');
        $("#scissors").off('click');
    });

    // if user chooses paper
    $("#paper").click(function() {
        console.log("You choose paper");
        console.log("Computer chooses " + list[computerChoice]);
        if (list[computerChoice] == "paper") {
            $("#computerText").html("Your choice is: Paper<br>Computer's Choice is: Paper<br>Fair Enough!")
            $("#paper").attr("src", "assets/fair.jpg");
        }
        else if (list[computerChoice] == "scissors") {
            $("#computerText").html("Your choice is: Paper<br>Computer's Choice is: Scissors<br>You Lose!")
            $("#paper").attr("src", "assets/loser.jpg");
        }
        else {
            $("#computerText").html("Your choice is: Paper<br>Computer's Choice is: Rock<br>You Win!")
            $("#paper").attr("src", "assets/winner.jpg");
        }
        // disable click event of #rock and #scissors
        $("#rock").off('click');
        $("#scissors").off('click');
    });
    
    // if user chooses scissors
    $("#scissors").click(function() {
        console.log("This is scissors");
        console.log("Computer chooses " + list[computerChoice]);
        if (list[computerChoice] == "paper") {
            $("#computerText").html("Your choice is: Scissors<br>Computer's hoice is: Paper<br>You Win!")
            $("#scissors").attr("src", "assets/winner.jpg");
        }
        else if (list[computerChoice] == "scissors") {
            $("#computerText").html("Your choice is: Scissors<br>Computer's Choice is: Scissors<br>Fair Enough!")
            $("#scissors").attr("src", "assets/fair.jpg");
        }
        else {
            $("#computerText").html("Your choice is: Scissors<br>Computer's Choice is: Rock<br>You Lose!")
            $("#scissors").attr("src", "assets/loser.jpg");
        }
        // disable click event of #paper and #rock
        $("#paper").off('click');
        $("#rock").off('click');
    });
});
