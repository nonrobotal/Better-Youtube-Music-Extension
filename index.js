
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
        jump(-5)
        return;
    }
    if (input === "ArrowRight") {
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

    // 숫자 이용해서 점프
    if(/^Digit/.test(input)){
        const number = numberfyEventCode(input)
        goTo(number/10)

        return;
    }

    return;
})



function goTo(playRate) {
    const video = document.querySelector("video.html5-main-video")
    const duration = video.duration

    const newPos = duration * playRate
    video.currentTime = newPos
}

function numberfyEventCode(str) {
    return Number(str.replace(/^Digit/,''))
}

function jump(seconds) {
    const video = document.querySelector("video.html5-main-video")
    video.currentTime += seconds
}