let step = 10

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

addEventListener('keypress', (event) => {
    if (event.key == "a" || event.key == "A") {
        moveSuitCase("left")
    } else if (event.key == "d" || event.key == "D") {
        moveSuitCase("right")
    }
});