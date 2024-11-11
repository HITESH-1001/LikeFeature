var container = document.querySelector("#container")
var heart = document.querySelector("i")

container.addEventListener("dblclick", function () {
    heart.style.transform = "translate(-50%, -50%) scale(1)"
    heart.style.opacity = 0.8
    setTimeout(function () {
        heart.style.opacity = 0
    }, 1000)
    setTimeout(function () {
        heart.style.transform = "translate(-50%, -50%) scale(0)"
    }, 2000)
})
setTimeout(function () {

}, 5000)