var wins = 0;
var losses = 0;
var rndmNumber = [];

    function rndmNumberStart () {
        rndmNumber = Math.floor((Math.random() * 120) + 19);
        alert("Your number is " + rndmNumber);
    }
    
rndmNumberStart ();

    
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

    function win(){
        alert("You win!");
        wins++; 
        $('#wins').text("Wins: " + wins);
        resetGame();
        }
    
    function lose(){
        alert ("You lose!");
        losses++;
        $('#losses').text("Losses: " + losses);
        resetGame()
        }
        

var rndmCrystalArray = [];

var crystalOne = [];
var crystalTwo = [];
var crystalThree = [];
var crystalFour= [];

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

assignCrystalValues();


var totalScore = 0;
var scoreClicks = 0;
        
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