
const containerRight = document.querySelector(".container-right");



primeiraCor =()=>{
    containerRight.classList.toggle("cor1")
    containerRight.classList.remove("cor2", "cor3", "cor4", "cor5", "cor6", "cor7")
}
segundaCor =()=>{
    containerRight.classList.toggle("cor2")
    containerRight.classList.remove("cor1", "cor3", "cor4", "cor5", "cor6", "cor7")
}
terceiraCor =()=>{
    containerRight.classList.toggle("cor3")
    containerRight.classList.remove("cor2", "cor1", "cor4", "cor5", "cor6", "cor7")
}
quartaCor =()=>{
    containerRight.classList.toggle("cor4")
    containerRight.classList.remove("cor2", "cor3", "cor1", "cor5", "cor6", "cor7")
}
quintaCor =()=>{
    containerRight.classList.toggle("cor5")
    containerRight.classList.remove("cor2", "cor3", "cor4", "cor1", "cor6", "cor7")
}
sextaCor =()=>{
    containerRight.classList.toggle("cor6")
    containerRight.classList.remove("cor2", "cor3", "cor4", "cor5", "cor1", "cor7")
}
setimaCor =()=>{
    containerRight.classList.toggle("cor7")
    containerRight.classList.remove("cor2", "cor3", "cor4", "cor5", "cor6", "cor1")
}

