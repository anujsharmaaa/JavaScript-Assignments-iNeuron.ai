let count = 0 ;
const number = document.getElementById("number");

function decrease(){
    count -= 1;
    number.innerHTML = count;
}

function increase(){
    count +=1;
    number.innerText = count;
}