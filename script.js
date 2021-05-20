let welcome= document.getElementById('welcomeScreen')
let startBtn= document.getElementById('start')
let myAudio=document.querySelector('audio')

let startScreen= document.getElementById('startScreen')
let start1Btn= document.getElementById('start1')
let start2Btn= document.getElementById('start2')
let start3Btn= document.getElementById('start3')

// Start Button 1 option: 
let solo= document.getElementById('soloSituation')

let solo1Btn= document.getElementById('solo1')

let sOption1=document.getElementById('soloOption1')
let s1ABtn= document.getElementById('sOptionA')
let s1BBtn= document.getElementById('sOptionB')

let sOptionA= document.getElementById('soloOptionA')
let sOptionB= document.getElementById('soloOptionB')

let solo2Btn= document.getElementById('solo2')
let sOption2= document.getElementById('soloOption2')

// Start Button 2 option:
let friend= document.getElementById('friendsSituation')

let friend1Btn= document.getElementById('friends1')
let friend2Btn= document.getElementById('friends2')

let fOption1= document.getElementById('friendsOption1')
let fOption2= document.getElementById('friendsOption2')

// Start Button 3 option: 
let notReady= document.getElementById('notReadySituation')

// Start Over Button
let resetBtn= document.getElementsByClassName('reset')

// Gif Div
let hikingGif= document.getElementById('testingGifIdea')

// Begins the game, leads to first screen of choices

startBtn.addEventListener('click', () => {
    startScreen.style.display= "block"
    welcome.style.display= "none"
    myAudio.play()
})

// You decide to go alone

start1Btn.addEventListener('click', () => {
    startScreen.style.display= 'none'
    hikingGif.style.display="block"
    transitionPage ()
    // solo.style.display='block'
})

solo1Btn.addEventListener('click', () => {
    solo.style.display= 'none'
    hikingGif.style.display="block"
    transitionPage2 ()
    // sOption1.style.display= 'block'
})

s1ABtn.addEventListener('click', () => {
    sOption1.style.display= 'none'
    hikingGif.style.display="block"
    transitionPage3 ()
    // sOptionA.style.display= 'block'
})

s1BBtn.addEventListener('click', () => {
    sOption1.style.display= 'none'
    hikingGif.style.display="block"
    transitionPage4 ()
    // sOptionB.style.display= 'block'
})

solo2Btn.addEventListener('click', () => {
    solo.style.display= 'none'
    hikingGif.style.display="block"
    transitionPage5 ()
    // sOption2.style.display= 'block'
})

//You decide to wait for friends

start2Btn.addEventListener('click', () => {
    startScreen.style.display= 'none'
    friend.style.display= 'block'
})

friend1Btn.addEventListener('click', () => {
    friend.style.display= 'none'
    hikingGif.style.display="block"
    transitionPage6 ()
    // fOption1.style.display= 'block'
})

friend2Btn.addEventListener('click', () => {
    friend.style.display= 'none'
    hikingGif.style.display="block"
    transitionPage7 ()
    // fOption2.style.display= 'block'
})

// You Aren't Ready Yet

start3Btn.addEventListener('click', () => {
    startScreen.style.display= 'none'
    hikingGif.style.display="block"
    transitionPage8 ()
    // notReady.style.display= 'block'
})

// Reset Game

function resetGame() {
    welcome.style.display= 'block'
    startScreen.style.display= 'none'
    solo.style.display='none'
    sOption1.style.display= 'none'
    sOptionA.style.display= 'none'
    sOptionB.style.display= 'none'
    sOption2.style.display= 'none'
    friend.style.display= 'none'
    fOption1.style.display= 'none'
    fOption2.style.display= 'none'
    notReady.style.display= 'none'
}

for (i=0; i < resetBtn.length; i++) {
    resetBtn[i].addEventListener('click', resetGame)
}

function transitionPage () {
setTimeout(function () {
    hikingGif.style.display= 'none'; 
}, 5000);
setTimeout(function (){
    solo.style.display='block';
}, 5050);
}

function transitionPage2 () {
    setTimeout(function () {
        hikingGif.style.display= 'none'; 
    }, 5000);
    setTimeout(function (){
        sOption1.style.display='block';
    }, 5050);
    }

function transitionPage3 () {
    setTimeout(function () {
         hikingGif.style.display= 'none'; 
    }, 5000);
    setTimeout(function (){
        sOptionA.style.display='block';
     }, 5050);
    }

function transitionPage4 () {
    setTimeout(function () {
        hikingGif.style.display= 'none'; 
    }, 5000);
    setTimeout(function (){
        sOptionB.style.display='block';
    }, 5050);
    }

function transitionPage5 () {
    setTimeout(function () {
      hikingGif.style.display= 'none'; 
    }, 5000);
    setTimeout(function (){
     sOption2.style.display='block';
    }, 5050);
    }

function transitionPage6 () {
    setTimeout(function () {
        hikingGif.style.display= 'none'; 
    }, 5000);
    setTimeout(function (){
        fOption1.style.display='block';
    }, 5050);
    }

function transitionPage7 () {
    setTimeout(function () {
        hikingGif.style.display= 'none'; 
    }, 5000);
    setTimeout(function (){
        fOption2.style.display='block';
    }, 5050);
    }

function transitionPage8 () {
    setTimeout(function () {
        hikingGif.style.display= 'none'; 
    }, 5000);
    setTimeout(function (){
        notReady.style.display='block';
    }, 5050);
    }