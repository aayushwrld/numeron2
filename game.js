// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let num1box = document.getElementById("number1");
let num2box = document.getElementById("number2");
let num3box = document.getElementById("number3");

let num1;
let num2;
let num3;
let ops;
let temp;
randomNum()
function randomNum(){
    num1 = Math.round(Math.random()*100);
    num2 = Math.round(Math.random()*100);
    if(num1<num2){
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    
    ops = Math.floor(Math.random()*5)+1
    switch(ops){
        case 1:
            num3 = num1+num2
            break
        case 2:
            num3 = num1-num2
            break
        case 3:
            num3 = num1*num2
            break
        case 4:
            num3 = Math.floor(num1/num2)
            break
        case 5:
            num3 = num1%num2
            break
    }
    num1box.textContent = num1
    num2box.textContent = num2
    num3box.textContent = num3
}


// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let mul = document.getElementById("mul")
let divide = document.getElementById("divide")
let modulus = document.getElementById("modulus")
let score = 0;
// plus.onmouseenter = () => {
//     plus.style.transform = "scale(0.8)";
// }
// plus.onmouseleave = () => {
//     plus.style.transform = "scale(1)";
// }
// plus.onclick = () => {
//     if (num1 + num2 == num3){
//         randomNum()
//         clearInterval(changeTime)
//         startTimer()
//         score ++;
//         localStorage.setItem("score",score)
//     }else{
//         window.open("gameover.html", "_self")
//     }
// };

minus.onclick = () => {
    if (num1 - num2 == num3){
        randomNum()
        clearInterval(changeTime)
        startTimer()
        score ++;
        localStorage.setItem("score",score)
    }else{
        window.open("gameover.html", "_self")
    }
};

mul.onclick = () => {
    if (num1 * num2 == num3){
        randomNum()
        clearInterval(changeTime)
        startTimer()
        score ++;
        localStorage.setItem("score",score)
    }else{
        window.open("gameover.html", "_self")
    }
};

divide.onclick = () => {
    if (Math.floor(num1/num2) == num3){
        randomNum()
        clearInterval(changeTime)
        startTimer()
        score ++;
        localStorage.setItem("score",score)
    }else{
        window.open("gameover.html", "_self")
    }
};

modulus.onclick = () => {
    if (num1%num2 == num3){
        randomNum()
        clearInterval(changeTime)
        startTimer()
        score ++;
        localStorage.setItem("score",score)
    }else{
        window.open("gameover.html", "_self")
    }
};
// Iteration 7: Making Timer functional
let time = 20;
let timer = document.getElementById("timer");
let changeTime;

function startTimer(){
    time = 20;
    timer.textContent = time;
    changeTime = setInterval(()=>{
        time--;
        timer.textContent = time;
        if (time == 0){
            window.open("gameover.html", "_self");
        }
    },1000)
}

startTimer()
localStorage.setItem("score", 0)