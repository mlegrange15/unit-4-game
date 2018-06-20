// Setting up variables to begin the game with. Need wins, losses and a random number to begin.

var wins = 0;
var losses = 0;
var rndmNumber = [];

// Function that generates a random value and puts it in the rndmNumber variable then alerts it to the screen.

    function rndmNumberStart () {
        rndmNumber = Math.floor((Math.random() * 101) + 19);
        alert("Your number is " + rndmNumber);
    }
    
// Run function to produce the random number and start the game.

rndmNumberStart ();

// This function will reset the game at the end of each round. 

    function resetGame () {
    
        totalScore = 0;
        rndmCrystalArray = [];
    
        crystalOne = [];
        crystalTwo = [];
        crystalThree = [];
        crystalFour= [];
    
        rndmNumberStart();
        assignCrystalValues();
        $("#total-score").text(totalScore);
        $("#click-score").text("Crystal value is: ");
    
    }
// Function to alert a win, add the score and start the next game.
    function win(){
        alert("You win!");
        wins++; 
        $('#wins').text("Wins: " + wins);
        resetGame();
        }
// funciton to alert a loss, add the score and start a new game.   
    function lose(){
        alert ("You lose!");
        losses++;
        $('#losses').text("Losses: " + losses);
        resetGame()
        }
        
// setting up variables to begin assiging random values to the crystals

var rndmCrystalArray = [];

var crystalOne = [];
var crystalTwo = [];
var crystalThree = [];
var crystalFour= [];

// Function that will give the crystals random values, convert them to integers and then push them into an array

    function assignCrystalValues () {

        for (var i = 0; i < 4; i++) {
            var rndmCrystalValues = Math.floor((Math.random() * 12) + 1);
            rndmCrystalArray.push(rndmCrystalValues);
    
        }
    
            crystalOne.push(rndmCrystalArray[0]);
            crystalTwo.push(rndmCrystalArray[1]);
            crystalThree.push(rndmCrystalArray[2]);
            crystalFour.push(rndmCrystalArray[3]);
        
            crystalOne = parseInt(crystalOne);
            crystalTwo = parseInt(crystalTwo);
            crystalThree = parseInt(crystalThree);
            crystalFour = parseInt(crystalFour);
        
    }
// calling the function to assign the crystal values
assignCrystalValues();

// variables for the following crystal click functions
var totalScore = 0;
var scoreClicks = 0;
       
// click function for crystal 1 that adds the value to total score and puts it in the html 
    $("#crystal-one").on("click", function(){
    
        (totalScore = totalScore + crystalOne);
        
        $("#click-score").text("Crystal value is: " + crystalOne);
        $("#total-score").text(totalScore);
        
    
        if (totalScore === rndmNumber){
            win();
            } else if (totalScore > rndmNumber){
            lose();
            } 
    
        
    });

    // click function for crystal 2 that adds the value to total score and puts it in the html 

    $("#crystal-two").on("click", function(){
    
        (totalScore = totalScore + crystalTwo);

        $("#click-score").text("Crystal value is: " + crystalTwo);
        $("#total-score").text(totalScore);
    
        if (totalScore === rndmNumber){
            win();
            } else if (totalScore > rndmNumber){
            lose();
            } 
        
    });

// click function for crystal 3 that adds the value to total score and puts it in the html 

    $("#crystal-three").on("click", function(){
    
        (totalScore = totalScore + crystalThree);

        $("#click-score").text("Crystal value is: " + crystalThree);
        $("#total-score").text(totalScore);
    
        if (totalScore === rndmNumber){
            win();
            } else if (totalScore > rndmNumber){
            lose();
            } 
        
    });
    
// click function for crystal 4 that adds the value to total score and puts it in the html 

    $("#crystal-four").on("click", function(){
    
        (totalScore = totalScore + crystalFour);

        $("#click-score").text("Crystal value is: " + crystalFour);
        $("#total-score").text(totalScore);
    
        if (totalScore === rndmNumber){
            win();
            } else if (totalScore > rndmNumber){
            lose();
            } 
});