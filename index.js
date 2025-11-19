
// Hotkeys
document.addEventListener("keydown", e => {
    const input = e.code
    // toggle the player page when the i key is pressed
    if (input === "KeyI") {
        let myButton = document.querySelector("button[aria-label='Close player page']")

        if (myButton === null) {
            myButton = document.querySelector("button[aria-label='Open player page']")
        }
        myButton.click()
        return;
    }
    // move forward and backward with the arrow keys and period & comma keys\

    if (input === "ArrowLeft") {
        e.preventDefault()
        jump(-5)
        return;
    }
    if (input === "ArrowRight") {
        e.preventDefault()
        jump(+5)
        return;
    }
    if (input === "Comma") {
        jump(-1)
        return;
    }
    if (input === "Period") {
        jump(+1)
        return;
    }
    if (input === "Equal") {
        const mySlider = document.querySelector("tp-yt-paper-slider#volume-slider")
        mySlider.classList.add("on-hover")
        setTimeout(() => {
            mySlider.classList.remove("on-hover")
        },3000)
        return
    }
    if (input === "Minus") {
        const mySlider = document.querySelector("tp-yt-paper-slider#volume-slider")
        mySlider.classList.add("on-hover")
        setTimeout(() => {
            mySlider.classList.remove("on-hover")
        },3000)
        return
    }
    // 숫자 이용해서 점프
    if (/^Digit/.test(input)) {
        const number = numberfyEventCode(input)
        goTo(number / 10)

        return;
    }

    if (e.metaKey && e.shiftKey && e.code === "KeyP") {
        console.log("단축키 감지됨!");
        return;
    }

    return;
})

document.addEventListener("click", e => {
    const active = document.activeElement 
    if (!active) {return}

    const tag = active.tagName.toLowerCase()
    const isTypingField = (tag === "input")

    if (isTypingField) {
        return
    }

    setTimeout(() => {
        active.blur()
    },0)
})

function goTo(playRate) {
    const video = document.querySelector("video.html5-main-video")
    const duration = video.duration

    const newPos = duration * playRate
    video.currentTime = newPos
}

function numberfyEventCode(str) {
    return Number(str.replace(/^Digit/, ''))
}

function jump(seconds) {
    const video = document.querySelector("video.html5-main-video")
    video.currentTime += seconds
}

