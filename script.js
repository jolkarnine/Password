//h3
let boss = document.querySelector('.had')
//input 1
let getit = document.querySelector('.bed')
//input 2
let gotit = document.querySelector('.led')
//red alert
let lot = document.querySelector('.lal')
//red alert2
let lot2 = document.querySelector('.lal2')
//button
let givit = document.querySelector('.btn')
//button2
let givit2 = document.querySelector('.btn2')
//email
let email = ("citesmern2104@gmail.com")
//password
let password = ("Esmern2104")
//chance
let time = 3
//chance amount
let hance = document.querySelector(".coffie")
let chance = document.querySelector(".cha")

givit.addEventListener('click', function () {

    time--
    chance.innerHTML = time

    if (getit.value == email) {
        boss.innerHTML = "Enter your password"
        getit.style.display = "none"
        gotit.style.display = "block"
        givit2.style.display = "block"
        givit.style.display = "none"
        gotit.style.width = "270px"
        givit2.style.width = "270px"
        lot.style.display = "none"
        hance.style.display = "none"

    } else if (getit.value != email) {
        lot.style.display = "block"
        lot.innerHTML = "Please enter a valid email"
        hance.style.display = "block"
    }
    
    if (time == 0){
        boss.innerHTML = "Sorry! your'e a robot"
        getit.style.display = "none"
        givit.style.display = "none"
        lot.style.display = "none"
        hance.style.display = "none"
    }
})

givit2.addEventListener('click', function () {

    time--
    chance.innerHTML = time

    if (gotit.value == password) {
        boss.innerHTML = "Congratulations! your account is hacked"
        gotit.style.display = "none"
        givit2.style.display = "none"
        lot2.style.display = "none"

    } else if (gotit.value != password) {
        lot2.style.display = "block"
        hance.style.display = "block"
    }

    if (time == 0){
        boss.innerHTML = "Sorry! your'e a robot"
        gotit.style.display = "none"
        givit2.style.display = "none"
        lot2.style.display = "none"
        hance.style.display = "none"
    }
})

//citesmern2104@gmail.com
//Esmern2104