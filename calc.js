let calculation = '';
document.getElementById('btn').addEventListener('click', function(){
    console.log(calculation= calculation + '1');
    
});
document.getElementById('btn1').addEventListener('click', function(){
    console.log(calculation= calculation + '2');
});
document.getElementById('btn2').addEventListener('click', function(){
    console.log(calculation= calculation + '3');
});
document.getElementById('btn3').addEventListener('click', function(){
    console.log(calculation = calculation + ' + ');
});
document.getElementById('btn5').addEventListener('click', function(){
    console.log(calculation= calculation + '4');
})
document.getElementById('btn6').addEventListener('click', function(){
    console.log(calculation= calculation + '5');
})
document.getElementById('btn7').addEventListener('click', function(){
    console.log(calculation= calculation + '6');
})
document.getElementById('btn8').addEventListener('click', function(){
    console.log(calculation= calculation + ' - ');
})
document.getElementById('btn9').addEventListener('click', function(){
    console.log(calculation= calculation + ' * ');
})
                
document.getElementById('btn10').addEventListener('click', function(){
    console.log(calculation= calculation + '7');
})
                
document.getElementById('btn11').addEventListener('click', function(){
    console.log(calculation= calculation + '8');
})
                
document.getElementById('btn12').addEventListener('click', function(){
    console.log(calculation= calculation + '9');
})
                
document.getElementById('btn13').addEventListener('click', function(){
    console.log(calculation= calculation + '0');
})
                
document.getElementById('btn4').addEventListener('click', function(){
    console.log(calculation= calculation + ' / ');
})
document.getElementById('btn15').addEventListener('click', function(){
    console.log(calculation= calculation + '.');
})
document.getElementById('btn16').addEventListener('click', function(){
    calculation = ''
    console.log(calculation);
})
                       
document.getElementById('btn14').addEventListener('click', function(){
    console.log(eval(calculation));
    console.log(typeof(calculation))
});