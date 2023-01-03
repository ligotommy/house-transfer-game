let step = 7
let shirtStep = 4
let dx = 0
let shirtDy = 0
let movingLeft = false
let buttonLeft = false
let buttonRight = false
let movingRight = false
const params = new URLSearchParams(document.location.search)
const difficulty = params.get("difficulty")

let shirtEl = document.getElementById("shirt")
let suitCaseEl = document.getElementById("suit-case")

function moveSuitCase(where) {
    let x = document.getElementById("suit-case").offsetLeft
    if (where === "left" && x>0) {
        x -= step
        document.getElementById("suit-case").style.left = `${x}px`
    } else if (where === "right" && x<1230) {
        x += step
        document.getElementById("suit-case").style.left = `${x}px`
    }
}

function moveRight() {
    if (!buttonRight) {
        buttonRight = true
        dx+=1
        console.log(dx)
    }
}

function stopRight() {
    if (buttonRight) {
        buttonRight = false
        dx-=1
        console.log(dx)
    }
}

function moveLeft() {
    if (!buttonRight) {
        buttonLeft = true
        dx-=1
        console.log(dx)
    }
}

function stopLeft() {
    if (buttonLeft) {
        buttonLeft = false
        dx+=1
        console.log(dx)
    }
}

function startShirt() {
    shirtEl.style.top = "-160px"
    let x = Math.floor(Math.random()*1400) + 10
    shirtEl.style.left = `${x}px`
    let shirts = ["Orange-Shirt.png", "Purple-Shirt.png"]
    let randShirtPath = shirts[Math.floor(Math.random()*shirts.length)]
    document.getElementById("shirt").src = randShirtPath
    shirtDy = 1
}

function moveShirt() {
    let subStr = shirtEl.style.top.substring(0, shirtEl.style.top.length-2)
    let y = parseInt(subStr)
    if (y > 600 && y < 700 && (shirtEl.offsetLeft>suitCaseEl.offsetLeft-80 && suitCaseEl.offsetLeft+270>shirtEl.offsetLeft)) {
        startShirt()
    } else if (y > 900) {
        startShirt()
    } else {
        y += shirtStep
        shirtEl.style.top = `${y}px`
    }
}

addEventListener('keydown', (event) => {
    if ((event.key == "a" || event.key == "A" || event.key == "ArrowLeft") && !movingLeft) {
        movingLeft = true
        dx-=1
    } else if ((event.key == "d" || event.key == "D" || event.key == "ArrowRight") && !movingRight) {
        movingRight = true
        dx+=1
    }
});

addEventListener('keyup', (event) => {
    // dx=0
    if (event.key == "a" || event.key == "A" || event.key == "ArrowLeft") {
        movingLeft = false
        dx+=1
    } else if (event.key == "d" || event.key == "D" || event.key == "ArrowRight") {
        movingRight = false
        dx-=1
    }
});

function fun() {
    if (dx >= 1) {
        moveSuitCase("right")
    }
    if (dx <= -1) {
        moveSuitCase("left")
    }

    if (shirtDy === 1) {
        moveShirt()
    }

    requestAnimationFrame(fun)
}

startShirt()
requestAnimationFrame(fun)
