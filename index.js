const step = 7
let itemStep = 4
let dx = 0
let shirtDy = 0
let movingLeft = false
let buttonLeft = false
let buttonRight = false
let movingRight = false


const isKeyLeft = (event) => event.key == "a" || event.key == "A" || event.key == "ArrowLeft"
const isKeyRight = (event) => event.key == "d" || event.key == "D" || event.key == "ArrowRight"

function randItem(array) {
    return array[Math.floor(Math.random()*array.length)]
}

const itemsPaths = ["pictures/Orange-Shirt.png", "pictures/Purple-Shirt.png"]

const params = new URLSearchParams(document.location.search)
const difficulty = params.get("difficulty")

const itemEl = document.getElementById("item")
const suitCaseEl = document.getElementById("suit-case")

function moveSuitCase(where) {
    let x = suitCaseEl.offsetLeft
    if (where === "left" && x>0) {
        x -= step
        suitCaseEl.style.left = `${x}px`
    } else if (where === "right" && x<1230) {
        x += step
        suitCaseEl.style.left = `${x}px`
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

function startItem() {
    itemEl.style.top = "-160px"
    let x = Math.floor(Math.random()*1400) + 10
    itemEl.style.left = `${x}px`
    let randItemPath = randItem(itemsPaths)
    itemEl.src = randItemPath
    shirtDy = 1
}

function itemPassed() {
    console.log("item passed")
    startItem()
}

function itemCaught() {
    console.log("item caught")
    startItem()
}

function moveItem() {
    let y = itemEl.offsetTop
    let suitCaseX = suitCaseEl.offsetLeft
    let itemX = itemEl.offsetLeft
    let rightY = y > 600 && y < 700
    let rightX = itemX > suitCaseX-80 && suitCaseX+270 > itemX
    if (rightY && rightX) {
        itemCaught()
    } else if (y > 900) {
        itemPassed()
    } else {
        y += itemStep
        itemEl.style.top = `${y}px`
    }
}

addEventListener('keydown', (event) => {
    if (isKeyLeft(event) && !movingLeft) {
        movingLeft = true
        dx-=1
    } else if (isKeyRight(event) && !movingRight) {
        movingRight = true
        dx+=1
    }
});

addEventListener('keyup', (event) => {
    // dx=0
    if (isKeyLeft(event) && movingLeft) {
        movingLeft = false
        dx+=1
    } else if (isKeyRight(event) && movingRight) {
        movingRight = false
        dx-=1
    }
});

function fun() {
    if (dx >= 1) {
        moveSuitCase("right")
    } else if (dx <= -1) {
        moveSuitCase("left")
    }

    if (shirtDy === 1) {
        moveItem()
    }

    requestAnimationFrame(fun)
}

startItem()
requestAnimationFrame(fun)
