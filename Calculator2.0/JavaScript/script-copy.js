/*function test() {
    console.log(document.getElementById('input').innerHTML);
    console.log(typeof(document.getElementById('input').innerHTML));
    var x = parseFloat(document.getElementById('input').innerHTML);
    console.log(x);
    console.log(typeof(x));
    console.log("It works");
    var array = document.getElementById('input').innerHTML.split(" ");
    console.log(array);
    var num1 = parseFloat(array[0]);
    console.log(num1);
    console.log(typeof(num1));
    var op = array[1];
    console.log(op);
    console.log(typeof(op));
    var num2 = parseFloat(array[2]);
    console.log(num2);
    console.log(typeof(num2));
}*/

var num1;
var num2;
var op;
var display = '';
var decimal = false;
var opPressed = false;
var numData;
var unit = "rad";
document.getElementById
function insert(input) {
    if (input === '.') {
        if (decimal === false) {
            decimal = true;
            display += input;
            document.getElementById('main-input').innerHTML = display;
        }
    } else {
    display += input;
    document.getElementById('main-input').innerHTML = display;
    }
}

function reset() {
    num1 = 0;
    op = "";
    display = "";
    decimal = false;
    opPressed = false;
    document.getElementById('main-input').innerHTML = "0";
    document.getElementById('secondary-input').innerHTML = "";
}

function signChange() {
    display = parseFloat(display);
    display *= -1;
    display = display.toString();
    if (display.match(/\./g)) {
        document.getElementById('main-input').innerHTML = display;
    } else {
        display += ".0";
        document.getElementById('main-input').innerHTML = display;
    }
}

function operator(action) {
    decimal = false;
    if (opPressed === false) {
        opPressed = true;
        numData = document.getElementById('main-input').innerHTML;
        document.getElementById('secondary-input').innerHTML = document.getElementById('main-input').innerHTML + action;
        num1 = parseFloat(document.getElementById('main-input').innerHTML);
        console.log(num1);
    } else {
        document.getElementById('secondary-input').innerHTML = numData + action;
    }
    document.getElementById('main-input').innerHTML = "0";
    display = "";
}