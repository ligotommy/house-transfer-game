let step = 7
let dx = 0

function moveSuitCase(where) {
    let x = document.getElementById("suit-case").offsetLeft
    if (where === "left" && x>-10) {
        x -= step
        document.getElementById("suit-case").style.left = `${x}px`
    } else if (where === "right" && x<1198) {
        x += step
        document.getElementById("suit-case").style.left = `${x}px`
    }
    console.log(x)
}

addEventListener('keydown', (event) => {
    if (event.key == "a" || event.key == "A" || event.key == "ArrowLeft") {
        dx=-1
    } else if (event.key == "d" || event.key == "D" || event.key == "ArrowRight") {
        dx=1
    }
    console.log(event.key)
});

addEventListener('keyup', (event) => {
    dx=0
    // if (event.key == "a" || event.key == "A" || event.key == "ArrowLeft") {
    //     dx=-1
    // } else if (event.key == "d" || event.key == "D" || event.key == "ArrowRight") {
    //     dx=1
    // }
});

function fun() {
    if (dx == 1) {
        moveSuitCase("right")
    }
    if (dx == -1) {
        moveSuitCase("left")
    }
    requestAnimationFrame(fun)
}

requestAnimationFrame(fun)
