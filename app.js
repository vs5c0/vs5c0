
const buttonElemenet=document.getElementById("btn");

buttonElemenet.onclick = ()=>{
    buttonElemenet.style.color="White";
    buttonElemenet.style.background="black";
    buttonElemenet.style.border="4px solid green";
    buttonElemenet.textContent="change";


    
}


function backgroundColor(e){
    document.body.style.backgroundColor = e.value;

}

function textColor(e){
    document.body.style.color = e.value;
    
}

function img(e){
    document.body.img=e.value;
}