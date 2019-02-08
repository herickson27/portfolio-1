//Variables
var sweOne = ['båt', 'hatt', 'kompis','hus', 'katt', 'sjung','spring','bil','glad','ledsen','trött','läsa','bok','bord'];
var engOne = ['boat','hat','friend','house','cat','sing','run','car','happy','sad','tired','read','book','table'];
var engTwo = ['study','drawing','whisper','uncle','difficult','movie-theater','waterbottle','backpack','abroad','ice-cream','trip','computer','marker','homework'];
var sweTwo = ['plugga','målning','','faster','svårt','bio','vattenflaska','ryggsak','utomlands','glass','resan','datorn','markerspenna','laxor'];
var engThree = ['to work','to visit','to walk','to live','to shop','to dream','to swim','to build','to speak','to think','to eat','to ask','to travel','to run'];
var sweThree = ['arbeta','hälsa','gå','bo','köpa','drömma','simma','bygga','tala','tänka','äta','fråga','resa','springa'];

var time = 10;
var hiScoreEl = null; 
var scoreEl = null;
var randNum;
var yourHiScore;
var newWordBtn;
var wordBox;
var startBtn;
var scoreValue = 0;
var highScoreValue = 0;

// This returns a random word from the engOne array
function chooseAWord() {
    // var engOne = ['boat','hat','friend','house','cat','sing','run','car','happy','sad','tired','read','book','table'];
    randNum = Math.floor(Math.random() * engOne.length);
    return engOne[randNum];
}

// This renders the current word onto the page
function renderWord(word) {
    wordBox.textContent = word;
}


//event listeners

// This kicks the game off / resets the game
function startClick() {
    var theWord = chooseAWord();
    console.log("theWord is:", theWord);
    console.log("randNum is:", randNum);
    renderWord( theWord );
}
// click image - click result will be correct or incorrect and proceed that way
function imageClick(e) {
    e.stopPropagation();
    if ( parseInt(e.target.id) === randNum ) {
        scoreValue++;
        // var theWord = chooseAWord();
        // renderWord(theWord);
        startClick();
        console.log("CORRECT!!!!!");
    } else {
        console.log("INCORRECT!!!");
    }
}

document.addEventListener("DOMContentLoaded", function(){
    images = document.getElementsByClassName('imageBox');
    yourHiScore = document.getElementById('yourhiScore');
    timer = document.getElementById('timer');
    startBtn = document.getElementById('startBtn');
    wordBox = document.getElementById('currentWord');
    startBtn.addEventListener('click', startClick);
    scoreEl = document.getElementById('yourScore');
    // imageBox = document.getElementsByClassName('imageBox');
    
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', imageClick);
    }
});


// }
// function timer() {
//     var countdown = time;
//     $('.timer').text(countdown);
//     count = setInterval(function() {
//         countdown--;
//         if (countdown >= 0) {
//             $('.timer').text(countdown);
//         }
//         if (countdown == 0) {
//             clearInterval(count);
//             clearGame();
//         }
//     }, 1000);
//  }
//}

//if (!localStorage.getItem('yourScore') && !localStorage.getItem('yourHiScore')){
//    localStorage.setItem('yourScore', 0);
//   localStorage.setItem('yourHiScore', 0);

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