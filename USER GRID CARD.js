let bigconatiner = document.getElementById('bigcontainer')
let fetchdata = document.getElementById("FetchData");
let firstcircle = document.getElementById("firstcircle")
let mainmenu = document.getElementById("mainmenu")
let datadisplay = document.getElementById("data")
fetchdata.addEventListener('click',e=>{

    datadisplay.style.display = "block"
    datadisplay.style.animation = "transition"
    datadisplay.style.animationDuration = "10s"
    

    firstcircle.style.animationName = "processing"
    firstcircle.style.animationDelay = "1.5s"
    firstcircle.style.animationDuration = "6.5s"
    firstcircle.style.animationFillMode = "ease-in-out"

    secondcircle.style.animationName = "processing"
    secondcircle.style.animationDelay = "1s"
    secondcircle.style.animationDuration = "7s"
    secondcircle.style.animationFillMode = "ease-in-out"

    thirdcircle.style.animationName = "processing"
    thirdcircle.style.animationDelay = "0.5s"
    thirdcircle.style.animationDuration = "7.5s"
    thirdcircle.style.animationFillMode = "ease-in-out"

    forthcircle.style.animationName = "processing"
    // forthcircle.style.animationDelay = "1.5s"
    forthcircle.style.animationDuration = "8s"
    forthcircle.style.animationFillMode = "ease-in-out"


})

mainmenu.addEventListener('click',e=>{
    firstcircle.style.removeProperty('animation')
    secondcircle.style.removeProperty('animation')
    thirdcircle.style.removeProperty('animation')
    forthcircle.style.removeProperty('animation')
    datadisplay.style.display = "none"
})