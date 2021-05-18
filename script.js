let welcome= document.getElementById('welcomeScreen')
let startBtn= document.getElementById('start')

let startScreen= document.getElementById('startScreen')
let start1Btn= document.getElementById('start1')
let start2Btn= document.getElementById('start2')
let start3Btn= document.getElementById('start3')

// Start Button 1 option: 
let solo= document.getElementById('soloSituation')

// Options to begin Solo trail:
let solo1Btn= document.getElementById('solo1')
let solo2Btn= document.getElementById('solo2')

let sOption1=document.getElementById('soloOption1')
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

// Begins the game, leads to first screen of choices

startBtn.addEventListener('click', () => {
    startScreen.style.display= "block"
    welcome.style.display= "none"
})

// You decide to go alone

start1Btn.addEventListener('click', () => {
    startScreen.style.display= 'none'
    solo.style.display='block'
})

solo1Btn.addEventListener('click', () => {
    solo.style.display= 'none'
    sOption1.style.display= 'block'
})

solo2Btn.addEventListener('click', () => {
    solo.style.display= 'none'
    sOption2.style.display= 'block'
})

//You decide to wait for friends

start2Btn.addEventListener('click', () => {
    startScreen.style.display= 'none'
    friend.style.display= 'block'
})

friend1Btn.addEventListener('click', () => {
    friend.style.display= 'none'
    fOption1.style.display= 'block'
})

friend2Btn.addEventListener('click', () => {
    friend.style.display= 'none'
    fOption2.style.display= 'block'
})

// You Aren't Ready Yet

start3Btn.addEventListener('click', () => {
    startScreen.style.display= 'none'
    notReady.style.display= 'block'
})

resetBtn.addEventListener('click', () => {
    startScreen.style.display= 'block'
})