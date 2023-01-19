let step = 6
let itemStep = 3
let dx = 0
let shirtDy = 0
const buttons = document.querySelectorAll("button")
let overlayDiv = document.getElementById("overlay")
let container = document.getElementById("container")
const suitCaseEl = document.getElementById("suit-case")
const itemEl = document.getElementById("item")

let movingLeft = false
let buttonLeft = false
let buttonRight = false
let movingRight = false

let interval1 = null
let interval0 = null
let frameNum = 0
let firstAnimationFinished = false
let secondAnimationFinished = false
let firstAnimationStarted = false
let secondAnimationStarted = false

let paused = false

let a = 0
let b = 0

let suitCaseFrames = []
for (i=0;i<19;i++) {
    suitCaseFrames.push(`pictures/suit-case-frame-${i+1}.png`)
    suitCaseEl.src = `pictures/suit-case-frame-${i+1}.png`
}
suitCaseEl.src = "pictures/suit-case-frame-1.png"

function nextFrame() {
    suitCaseEl.src = suitCaseFrames[frameNum]
    if (frameNum == 18) {
        frameNum = 0
        clearInterval(interval1)
        suitCaseEl.style.left = 646
        suitCaseEl.style.bottom = 143
        suitCaseEl.style.width = 320
        suitCaseEl.src = "pictures/suitcase.png"
        secondAnimationFinished = true
    } else {
        frameNum ++
    } if (frameNum == 5 || frameNum == 6) {
        suitCaseEl.style.left = suitCaseEl.offsetLeft + 50
    }
}

function animate() {
    let bottom = window.innerHeight - (suitCaseEl.offsetHeight + suitCaseEl.offsetTop)
    b += 0.07
    a += b

    if (bottom <= 20) {
        firstAnimationFinished = true
        clearInterval(interval0)
    } else {
        suitCaseEl.style.top = suitCaseEl.offsetTop + Math.floor(a)
    }
}

function suitCaseAnimation1() {
    firstAnimationStarted = true
    interval0 = setInterval(animate, 20)
}

function suitCaseAnimation2() {
    interval1 = setInterval(nextFrame, 100)
    secondAnimationStarted = true
}

function mobileCheck() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

const isMobile = mobileCheck()

if (isMobile) {
    buttons[0].style.display = "none"
    buttons[1].style.display = "none"

    screen.orientation.lock("landscape-primary")
}


const isKeyLeft = (event) => event.key == "a" || event.key == "A" || event.key == "ArrowLeft"
const isKeyRight = (event) => event.key == "d" || event.key == "D" || event.key == "ArrowRight"

function randItem(array) {
    return array[Math.floor(Math.random()*array.length)]
}

const shirtsPaths = [
    "pictures/Orange-Shirt.png",
    "pictures/Purple-Shirt.png",
    "pictures/Green-Shirt.png",
    "pictures/Blue-Shirt.png",
    "pictures/Yellow-Shirt.png",
    "pictures/Red-Shirt.png",
]

const itemsPaths = shirtsPaths

for (let i=0;i<itemsPaths.length;i++) {
    itemEl.src = itemsPaths[i]
}

const params = new URLSearchParams(document.location.search)
const difficulty = params.get("difficulty")

function moveSuitCase(where) {
    let x = suitCaseEl.offsetLeft
    if (where === "left" && x>0) {
        x -= step
        suitCaseEl.style.left = `${x}px`
    } else if (where === "right" && x<window.innerWidth-320) {
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
    itemEl.style.bottom = "unset"
    itemEl.style.top = "-200px"
    let x = Math.floor(Math.random()*(window.innerWidth-160)) + 40
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
    let suitCaseY = suitCaseEl.offsetTop
    let itemX = itemEl.offsetLeft
    let rightY = y > suitCaseY-20 && y < suitCaseY+110
    let rightX = itemX > suitCaseX-80 && suitCaseX+270 > itemX
    if (rightY && rightX) {
        itemCaught()
    } else if (y > window.innerHeight + 40) {
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
    } if (event.key == "Escape") {
        if (paused) {
            resumeGame()
        } else {
            pauseGame()
        }
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

function pauseGame() {
    paused = true
    clearInterval(interval0)
    clearInterval(interval1)
    overlayDiv.style.display = "block"
    containerChildren = container.children
    for (let i=0; i<containerChildren.length; i++) {
        containerChildren[i].setAttribute("class", "blur")
    }
}

function resumeGame() {
    paused = false
    if (firstAnimationStarted && !firstAnimationFinished) {
        interval0 = setInterval(animate, 20)
    } if (secondAnimationStarted && !secondAnimationFinished) {
        interval1 = setInterval(nextFrame, 100)
    }
    overlayDiv.style.display = "none"
    for (let i=0; i<container.children.length; i++) {
        container.children[i].setAttribute("class", "none")
    }
}

function fun() {
    if (!paused) {
        if ((window.innerWidth < 1100 || window.innerHeight < 700) && !isMobile) {
            pauseGame()
            setTimeout(function () {alert(`Screen is too small for the game.
To continue expand the window.`)}, 5);
        } else {
            if (!firstAnimationStarted) {
                suitCaseEl.src = "pictures/suit-case-frame-1.png"
                suitCaseAnimation1()
            } if (firstAnimationFinished && !secondAnimationStarted) {
                suitCaseEl.style.top = "unset"
                suitCaseEl.style.width = "1300px"
                suitCaseEl.style.bottom = "0px"
                suitCaseEl.style.left = "-70px"
                suitCaseAnimation2()
            } if (secondAnimationFinished) {
                if (dx >= 1) {
                    moveSuitCase("right")
                } else if (dx <= -1) {
                    moveSuitCase("left")
                } if (shirtDy === 1) {
                    moveItem()
                }
            }
        }
    }
}

    // requestAnimationFrame(fun)

startItem()
// requestAnimationFrame(fun)

let interval2 = setInterval(fun, 5)
