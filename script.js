var timer=15


//---------
function make_bubble(){
var clutter=""
for(var i=0; i<105; i++){

    var rn = Math.floor(Math.random()*10)
    clutter+=`<div id='sound' class='bubble'> ${rn}</div>`
}

document.querySelector('.bpanel').innerHTML =clutter
}

make_bubble()

//------------


//---------
function TimeInterval(){
    var timerInt=setInterval(function(){
        if (timer>0){
        timer--
        document.querySelector('#timer-heading').innerHTML=timer

    }
    else{
        clearInterval(timerInt)
        var audio=new Audio('gameover.mp3')
        audio.play()
        document.querySelector('.bpanel').innerHTML=`<h1 class='gameover'>GAME OVER</h1> <span class='s'> Score : </span>  <span class='lastscore'>  ${score} </span>`
    

    }
    },1000)
}
TimeInterval()


//---------
var score=0
function IncreaseScore(){
    score +=10
    document.querySelector('#scorebox').innerHTML=score
}

// IncreaseScore()

//------------
var rand=0
function Hit(){
    rand=Math.floor(Math.random()*10)
    document.querySelector('#firstbox').innerHTML=rand
}
Hit()

//------------
var bp=document.querySelector('.bpanel')

bp.addEventListener('click',function(a){
    var clickednumb=(Number(a.target.textContent))
    if(clickednumb==rand){

        var audio=new Audio('press.mp3')
        audio.play()
       

        IncreaseScore();
        make_bubble()
        Hit();
    }

})
