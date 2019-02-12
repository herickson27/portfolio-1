//Variables
var sweOne = ['båt','hatt','hus','katt','sjung','spring','bil','glad','ledsen','trött','bok','bord'];
var engOne = ['boat','hat','house','cat','sing','run','car','happy','sad','tired','book','table'];
var engTwo = ['study','drawing','whisper','sandwich','friend','movie-theater','waterbottle','backpack','ice-cream','trip','computer','homework'];
var sweTwo = ['plugga','målning','viska', 'smörgås','kompis','bio','vattenflaska','ryggsak','glass','resan','datorn','laxor'];
var engThree = ['to work','to visit','to walk','to shop','to dream','to swim','to build','to speak','to ask','to travel','to run','to eat'];
var sweThree = ['arbeta','hälsa','gå','köpa','drömma','simma','bygga','tala','fråga','resa','springa','äta'];

var imageClick;
var imageBox;
var images;
var time = 15;
var randNum;
var yourHiScore;
var wordBox;
var startBtn;
var scoreValue = 0;
var highScoreValue = 0;
var hiScoreEl = null; 
var scoreEl = null;

// This returns a random word from the engOne array
function chooseAWord() {
    // var engOne = ['boat','hat','friend','house','cat','sing','run','car','happy','sad','tired','read','book','table'];
    randNum = Math.floor(Math.random() * engOne.length);
    console.log(randNum);
    return engOne[randNum];

}
document.getElementById('0').textContent = "bat"

for (var i= 0; i < 12; i++) {
    var boxNum = i;
    console.log(i);
    document.getElementById(i).textContent = sweOne[i];
};
    // This renders the current word onto the page
    function renderWord(word) {
        wordBox.textContent = word;

    }
    
    // This kicks the game off / resets the game
    function startClick() {
        var theWord = chooseAWord();
        renderWord( theWord );
        updateTimer(); 
    }
    // click image - click result will be correct or incorrect and proceed that way
    function imageClick(e) {
        e.stopPropagation();
        if ( parseInt(e.target.id) === randNum ) {
            var theWord = chooseAWord();
            renderWord(theWord);
            console.log(imageClick);
            scoreValue++;
            scoreEl.textContent = scoreValue;
            e.target.style.borderColor = "rgb(85, 165, 91)"; 
            
        } else {
            e.target.style.borderColor = "rgb(173, 47, 47)";
        } 
        
        console.log(imageClick); 
        
    }
    // function unclick(
        
        document.addEventListener("DOMContentLoaded", function(){
        images = document.getElementsByClassName('textBox');
        yourHiScore = document.getElementById('yourhiScore');
        timer = document.getElementById('timer');
        startBtn = document.getElementById('startBtn');
        wordBox = document.getElementById('currentWord');
        startBtn.addEventListener('click', startClick);
        scoreEl = document.getElementById('score');
        imageBox = document.getElementsByClassName('textBox');
        document.getElementById('1')
        console.log(document.getElementById('1'));
        
        for (let i = 0; i < images.length; i++) {
            images[i].addEventListener('click', imageClick);
            
        }
    });
    //reset button: resets timer, randomize set of word options. 
    function myFunction() {
    location.reload();
    chooseAWord ( theWord);

}
function updateTimer() {
    var countdown = time;
    timer.textContent=countdown;
    count = setInterval(function() {
        countdown--;
        if (countdown >= 0) {
            timer.textContent=countdown;
        }
        if (countdown == 0) {
            timer.textContent = "Times Up!"
            clearInterval(count);
        }
    }, 1000);
}

//init game: 
    //reveal one random card from eng1 arr 
    //begin timer simutaneously. 
//countdown for 10 sec
//Endround functions: 
    //take index of randNUm.engOne[index] and compare to randNum.sweOne[index]
    //(able to click mulitple times, able to select incorrect)
    //click fucntion to all wordBox options 
        //if right = turn green, ++ point and randomize new word. 
        //if wrong = turn red, no pt, continue until correct. 
    //Loop another randNum from array until timer is at 0. Reset word button and reset timer to 0.
    //if points reach +7 pts move level forward. and repeat (more sec higher level?)

//set countdown 
//set random selected word from engOne arr
//set logic of if index of arr1 === index of arr2 than ++ pt to scoreboard and green background
                //else index of arr1 !=== index of arr2 than -- pt from scoreboard and red background
                //continure refreshing new arr1 words and clicking on board until timer = 0
            
                //if points are over =< 7,  move to next level 
                //if points are under >7, must redo initial level loop until passed
        //update hiscore and reset screen//