
const containerRight = document.querySelector(".container-right");
var inputNome = document.querySelector("#inputNome");
var inputCard = document.querySelector("#inputCard");
var inputData = document.querySelector("#inputData");
var inputCvv = document.querySelector("#inputCvv");

var outputNome = document.querySelector("#outputNome");
var outputCard = document.querySelector("#outputCard");
var outputData = document.querySelector("#outputData");
var outputCvv = document.querySelector("#outputCvv");




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

const clearInput=()=>{
    inputNome.value ="";
    inputData.value ="";
    inputCard.value ="";
    inputCvv.value ="";
}

inputNome.addEventListener("input", ()=>{
    outputNome.textContent = inputNome.value
});
inputCard.addEventListener("input", ()=>{
    outputCard.textContent = inputCard.value
});
inputData.addEventListener("input", ()=>{
    outputData.textContent = inputData.value
});
inputCvv.addEventListener("input", ()=>{
    outputCvv.textContent = inputCvv.value
});

downloadButton.addEventListener("click", function() {
    html2canvas(divToDownload, {
     backgroundColor: null
    }).then(function(canvas) {
    var data = canvas.toDataURL();
     var downloadLink = document.createElement("a");
      downloadLink.href = data;
        downloadLink.download = 'Card -'+inputData.value.replace('/','-' )+ '.png';
      downloadLink.click();
      clearInput();
    });
   });