let display = document.querySelector("#display");
let buttons = document.querySelectorAll('button');
let result = "";
let buttonArray = Array.from(buttons);
let brackets = 0;

function handleBracket(){
    if(brackets==0){
        result += '(';
        display.value = result;
        brackets = 1;
    }
    else if(brackets==1){
        result+=')'
        display.value = result;
        brackets = 0;
    }
}

buttonArray.forEach(function(button){
    button.addEventListener('click',function(event){
        if(event.target.innerHTML == '='){
            result = eval(result);
            display.value = result;
        }

        else if(event.target.innerHTML == 'AC'){
            brackets = 0;
            result = "";
            display.value = result;
        }
        else if(event.target.innerHTML == 'C'){
            if(brackets==0){
                brackets = 1;
            }
            else{
                brackets = 0;
            }
            result = result.substring(0, result.length-1);
            display.value = result;
        }
        
        else{
            if(event.target.innerHTML != '()'){
                result += event.target.innerHTML;
                display.value = result;
            }
        }
    })
});