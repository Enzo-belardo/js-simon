
const button = document.getElementById('start');

let score = 0;
let stop = false;

button.addEventListener("click", function() {
    if (score < 10){
        score++;      
        button.innerHTML = "Start" + " " + score; 

    }else{
        stop= true;
        setTimeout(() => {
           stop= false;
           score= 0;
           button.innerHTML = "Start" + " " + score; 
        },5000);
    }
    
});