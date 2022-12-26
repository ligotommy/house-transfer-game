let step = 7
let dx = 0
let shirtDy = 0
let movingLeft = false
let buttonLeft = false
let buttonRight = false
let movingRight = false

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

function moveShirt(where) {
    let x = document.getElementById("shirt").offsetTop
    if (where === "left" && x>-10) {
        x -= step
        document.getElementById("suit-case").style.left = `${x}px`
    } else if (where === "right" && x<1198) {
        x += step
        document.getElementById("suit-case").style.left = `${x}px`
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
    console.log(dx)
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
    console.log(dx)
});

function fun() {
    if (dx >= 1) {
        moveSuitCase("right")
    }
    if (dx <= -1) {
        moveSuitCase("left")
    }
    requestAnimationFrame(fun)
}

requestAnimationFrame(fun)
