document.addEventListener("DOMContentLoaded",init);

var swe1 = ['båt', 'hatt', 'kompis','hus', 'katt', 'sjung','spring','bil','glad','ledsen','trött','läsa','bok','bord'];
var eng1 = ['boat','hat','friend','house','cat','sing','run','car','happy','sad','tired','read','book','table'];
var eng2 = ['study','drawing','whisper','uncle','difficult','movie-theater','waterbottle','backpack','abroad','ice-cream','trip','computer','marker','homework'];
var swe2 = ['plugga','målning','','faster','svårt','bio','vattenflaska','ryggsak','utomlands','glass','resan','datorn','markerspenna','laxor'];
var eng3 = ['to work','to visit','to walk','to live','to shop','to dream','to swim','to build','to speak','to think','to eat','to ask','to travel','to run'];
var swe3 = ['arbeta','hälsa','gå','bo','köpa','drömma','simma','bygga','tala','tänka','äta','fråga','resa','springa'];
var currentWord = document.getElementById('currentWord');
var count = 10;
var counter=setInterval(timer, 1000)
document.getElementById('timer');

function timer (){
    count=count-1;
    if (count <=0)
}
clearInterval(counter);
// var currentWord =
// var wordSet
// var goBtn = document.getElementById("")

//init game: reveal one random card from eng1 arr and begin timer simutaneously. 
//countdown for 10 sec
//select definition word from wordSet: 
    //if right = turn green, ++ point and continue.
    //if wrong = turn red, no pt, continue.
//Select another randNum from array until timer is at 0. Retry button/reset at timer 0.
    
//if points reach +7 pts move level forward. and repeat (more sec higher level?)

function init (){
    var randWord = eng1[Math.floor(Math.random()*eng1.length)];
    console.log(eng1.indexOf(randNum));
}

// var scoreboard = 
// var time = 
// var score = 
// var round = 

// function countDown( {
//     var countDown = time;
//     $('.counter').text(countDown);
//     count = setInterval(function(){
// if (countDown > )
//     })
// })