function calculate(num){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result;
    if(num=="+"){
        result = num1 + num2
    }else if(num=="-"){
        result = num1 - num2
    }else if(num=="*"){
        result = num1 * num2
    }else if(num=="/"){
        result = num1 / num2
    }
    document.getElementById("cavab").innerHTML = result



}
