function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}


function calcSum() {
    var x = 0;
    var y = 0; 
    var result = 0;

    x = parseInt(document.getElementById("numb").value);
    y = parseInt(document.getElementById("numb2").value);

    result = x + y;

    document.getElementById("resp").innerHTML = result;
}

function calcSub() {
    var x = 0;
    var y = 0; 
    var result = 0;

    x = parseInt(document.getElementById("numb").value);
    y = parseInt(document.getElementById("numb2").value);

    result = x - y;

    document.getElementById("resp").innerHTML = result;
}

function calcMult() {
    var x = 0;
    var y = 0; 
    var result = 0;

    x = parseInt(document.getElementById("numb").value);
    y = parseInt(document.getElementById("numb2").value);

    result = x * y;

    document.getElementById("resp").innerHTML = result;
}

function calcDiv() {
    var x = 0;
    var y = 0; 
    var result = 0;

    x = parseInt(document.getElementById("numb").value);
    y = parseInt(document.getElementById("numb2").value);

    result = x / y;

    document.getElementById("resp").innerHTML = result;
}