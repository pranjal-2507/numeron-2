// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let num1 = Math.round(Math.random()*100);
let num2 = Math.round(Math.random()*100);

const Number1 = document.getElementById("number1");
const Number2 = document.getElementById("number2");

Number1.innerHTML = num1;
Number2.innerHTML = num2;

// Iteration 3: Creating variables required to make the game functional
let score = 0;
var operator;
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let mul = document.getElementById("mul");
let divide = document.getElementById("divide");
let modulus = document.getElementById("modulus");

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
const Number3 = document.getElementById("number3");
var num3;

// Iteration 5: Creating a randomise function to make the game functional
function randomise(){
     num1 = Math.round(Math.random()*100);
     num2 = Math.round(Math.random()*100);

    //  edge case
    if(num1<num2){
        let temp = num1;
        num1 = num2;
        num2 = temp;

    }
    operator = Math.round(Math.random()*5);

    // if(operator==1){
    //     num3=num1+num2;
    // }
    // else if(operator==2){
    //     num3 = num1-num2;
    // }
    // else if(operator==3){
    //     num3 = num1*num2;
    // }
    // else if(operator==4){
    //     num3 = num1/num2;
    // }
    // else if(operator==5){+
    //     num3 = num1%num2;
    // }
    // else if(operator==0){
    //     randomise();
    // }

    switch(operator){
        case 1:
            num3 = num1 + num2;
            break;
        case 2:
            num3 = num1-num2;
            break;
        case 3:
            num3 = num1 * num2;
            break;
        case 4:
            num3 =Math.floor(num1 / num2);
            break;
        case 5:
            num3 = num1%num2;
            break;
        case 0:
            randomise();
            
    }
    Number1.innerHTML = num1;
    Number2.innerHTML = num2;
    Number3.innerHTML = num3;
}
randomise();

// Iteration 6: Making the Operators (button) functional
plus.onclick = ()=>{
    if(num1+num2===num3){
        score++;
        randomise();
        resetTimer(timerId)
    }
    else{
        location.href= "./gameover.html?score="+score;
    }
}

minus.onclick = ()=>{
    if(num1-num2===num3){
        score++;
        randomise();
        resetTimer(timerId)
    }
    else{
        location.href= "./gameover.html?score="+score;
    }
}

mul.onclick = ()=>{
    if(num1*num2===num3){
        score++;
        randomise();
        resetTimer(timerId)
    }
    else{
        location.href= "./gameover.html?score="+score;
    }
}

divide.onclick = ()=>{
    if((num1/num2)==Math.floor(num3)){
        score++;
        randomise();
        resetTimer(timerId)
    }
    else{
        location.href= "./gameover.html?score="+score;
    }
}

modulus.onclick = ()=>{
    if(num1%num2===num3){
        score++;
        randomise();
        resetTimer(timerId)
    }
    else{
        location.href= "./gameover.html?score="+score;
    }
    
    
}
// Iteration 7: Making Timer functional

const timer = document.getElementById("timer")
var timerId;
var time = 10;

function startTimer(){
    let time  = 10;
    timer.innerHTML = time;
    timerId = setInterval(()=>{
        time--
        if(time==0){
            window.location.href = "./gameover.html?score="+score;
        }
        timer.innerHTML = time;
    },1000);


}
function resetTimer(timerId){
    clearInterval(timerId)
    startTimer()
   //   we are stopping the interval loop
   }
   startTimer()


