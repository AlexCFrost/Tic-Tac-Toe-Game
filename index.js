
const box = document.getElementsByClassName("box")
const button = document.getElementById("button")
const result = document.getElementById("result")
const message = document.getElementById("message")
let text =  "O"
let count = 0
flag = false
for(let i=0;i<box.length;i++){

    
    box[i].addEventListener('click', clicker)


}

function clicker(e){
    if(!e.target.innerText){
        count++
    text = text=="O"?"X":"O"
    e.target.innerHTML =`<h2>${text}</h2>` 
    }
checkResult()
    if(count==9 && flaf == false){
        showResult("Draw")
    }
}

//Function for checking winner

function checkResult(){

    if(box[0].innerText+box[1].innerText+box[2].innerText=="XXX" ||
    box[3].innerText+box[4].innerText+box[5].innerText=="XXX" ||
    box[6].innerText+box[7].innerText+box[8].innerText=="XXX" ||
    box[0].innerText+box[3].innerText+box[6].innerText=="XXX" ||
    box[1].innerText+box[4].innerText+box[7].innerText=="XXX" ||
    box[2].innerText+box[5].innerText+box[8].innerText=="XXX" ||
    box[0].innerText+box[4].innerText+box[8].innerText=="XXX" ||
    box[2].innerText+box[4].innerText+box[6].innerText=="XXX"){
        flag = true
        showResult('X Won!')
    }else if(
        box[0].innerText+box[1].innerText+box[2].innerText=="OOO" ||
        box[3].innerText+box[4].innerText+box[5].innerText=="OOO" ||
        box[6].innerText+box[7].innerText+box[8].innerText=="OOO" ||
        box[0].innerText+box[3].innerText+box[6].innerText=="OOO" ||
        box[1].innerText+box[4].innerText+box[7].innerText=="OOO" ||
        box[2].innerText+box[5].innerText+box[8].innerText=="OOO" ||
        box[0].innerText+box[4].innerText+box[8].innerText=="OOO" ||
        box[2].innerText+box[4].innerText+box[6].innerText=="OOO"
    ){
        flag = true
        showResult('O Won!')
    }
}

// Function to show results

function showResult(char){

    message.innerText =  `${char}`
    result.style.visibility = "visible"

}
 button.onclick = ()=>{
    window.location.reload()
 }





