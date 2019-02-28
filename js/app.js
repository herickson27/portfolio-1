//Variables
var sweOne = ['båt','hatt','hus','katt','sjung','spring','bil','glad','ledsen','trött','bok','bord'];
var engOne = ['boat','hat','house','cat','sing','run','car','happy','sad','tired','book','table'];
var engTwo = ['study','drawing','whisper','sandwich','friend','movie-theater','waterbottle','backpack','ice-cream','trip','computer','homework'];
var sweTwo = ['plugga','målning','viska', 'smörgås','kompis','bio','vattenflaska','ryggsak','glass','resan','datorn','laxor'];
var engThree = ['to work','to visit','to walk','to shop','to dream','to swim','to build','to speak','to ask','to travel','to run','to eat'];
var sweThree = ['arbeta','hälsa','gå','köpa','drömma','simma','bygga','tala','fråga','resa','springa','äta'];

var imageClick;
var textBox;
var images;
var time = 15;
var randNum;
var yourHiScore;
var wordBox;
var startBtn;
var scoreValue = 0;
var scoreEl = null;
var levelOne;
var gameOver = false;
var borderTimeout;
var theWord;

// This returns a random word from the engOne array
function chooseAWord() {
    //var engOne = ['boat','hat','friend','house','cat','sing','run','car','happy','sad','tired','read','book','table'];
    randNum = Math.floor(Math.random() * engOne.length);
    return engOne[randNum];
    //change border color with new word generated. 
        //settimeout
    }

document.getElementById('0').textContent = "bat"

for (var i= 0; i < 12; i++) {
    var boxNum = i;
    //console.log(i);
    document.getElementById(i).textContent = sweOne[i];
    };

    // This renders the current word onto the page
function renderWord(word) {
    wordBox.textContent = word;
// console.log(renderWord);
}
    
    // This kicks the game off / resets the game
function startClick() {
    // console.log('CLICK')
    gameOver = false;
    updateTimer(); 
    var theWord = chooseAWord();
    renderWord( theWord);
    
}
    // click image - click result will be correct or incorrect and proceed that way
//Function game over 


    function imageClick(e) {
        e.stopPropagation()
        //if gameover is false, then 
        if(gameOver !== true) {
            if (parseInt(e.target.id) !== randNum) { // note: I am using `!==`
            //console.log(false, e)
            e.target.style.borderColor = "rgb(173, 47, 47)"; // incorrect!
            } else {
            //console.log(true, e)
            e.target.style.borderColor = "rgb(85, 165, 91)"; // hi-light correct answer!
            scoreValue++; // update score
            scoreEl.textContent = scoreValue; // update score in the DOM
            var theWord = chooseAWord();
            renderWord( theWord);
            }
        }

    }
    document.addEventListener("DOMContentLoaded", function(){
    images = document.getElementsByClassName('textBox');
    timer = document.getElementById('timer');
    startBtn = document.getElementById('startBtn');
    wordBox = document.getElementById('currentWord');
    startBtn.addEventListener('click', startClick, true);
    scoreEl = document.getElementById('score');
    textBox = document.getElementsByClassName('textBox');
    document.getElementById('1')
    

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', imageClick);
        //console.log('hit');
        }
    });

function updateTimer() {
    var countdown = time;//time is 15
    timer.textContent = countdown; //text to timer
    count = setInterval(function() { //interval down by one sec
    countdown--;
    
    if (countdown >= 0) {
        timer.textContent = countdown;
    }
    if (countdown == 0) {
        gameOver = true;
        timer.textContent = "Times Up!" 
    }   
    }, 1000)
};

//borders to to white
//gameover 


//Endround functions: 
    //take index of randNUm.engOne[index] and compare to randNum.sweOne[index]
    //(able to click mulitple times, able to select incorrect)
    //click fucntion to all wordBox options 
        //if right = turn green, ++ point and randomize new word. 
        //if wrong = turn red, no pt, continue until correct. 
    //Loop another randNum from array until timer is at 0. Reset word button and reset timer to 0.
    //if points reach +7 pts move level forward. and repeat (more sec higher level?)

                //else index of arr1 !=== index of arr2 than -- pt from scoreboard and red background
                //continure refreshing new arr1 words and clicking on board until timer = 0
            
                //if points are over =< 7,  move to next level 
                //if points are under >7, must redo initial level loop until passed
        //update hiscore and reset screen//