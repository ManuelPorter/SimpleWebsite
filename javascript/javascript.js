    function calcfunc(value){
      
    var display = document.getElementById('display');
    if(display.textContent === '0') {
      display.textContent = value;
    }
    else {
      display.textContent += value;
    }

    }
   
    function clearDisplay(){
      document.getElementById('display').textContent = '0';

    }

    function ccalculate(){
      var expression = document.getElementById('display').textContent;
      var result = eval(expression);
      document.getElementById('display').textContent = result;
    }