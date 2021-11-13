/*Old Sign Change Method (Has issues with keeping the decimal placed at the correct spot no matter what)
    var sign_number = parseFloat(document.getElementById('main-input').innerHTML);
    sign_number *= -1;
    var sign_string = sign_number.toString();
    document.getElementById('main-input').innerHTML = sign_string;
    sign_number = 0;
    sign_string = "";
*/
var num1;
var num2;
var op;
var display = '';
var decimal = false;
var opPressed = false;
var numData;
var opCount = 0;
var unit = "Rad";
var trigNum = 0;
var piePressed = false;
var str;
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
    numData = "";
    opCount = 0;
    piePressed = false;
    document.getElementById('main-input').innerHTML = "0";
    document.getElementById('secondary-input').innerHTML = "";
}

function signChange() {
    if (parseFloat(document.getElementById('main-input').innerHTML) > 0 || parseFloat(document.getElementById('main-input').innerHTML) < 0) {
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
}

function operator(action) {
    opCount++;
    if (opCount > 1) {
        calculate();
        op = action;
        decimal = false;
        if (opPressed === false) {
            opPressed = true;
            numData = document.getElementById('main-input').innerHTML;
            document.getElementById('secondary-input').innerHTML = document.getElementById('main-input').innerHTML + action;
            num1 = parseFloat(document.getElementById('main-input').innerHTML);
        } else {
            document.getElementById('secondary-input').innerHTML = numData + action;
        }
        document.getElementById('main-input').innerHTML = "0";
    } else {
        op = action;
        decimal = false;
        if (opPressed === false) {
            opPressed = true;
            numData = document.getElementById('main-input').innerHTML;
            document.getElementById('secondary-input').innerHTML = document.getElementById('main-input').innerHTML + action;
            num1 = parseFloat(document.getElementById('main-input').innerHTML);
        } else {
            document.getElementById('secondary-input').innerHTML = numData + action;
        }
        document.getElementById('main-input').innerHTML = "0";
    }
    display = "";
    piePressed = false;
}

function calculate() {
    num2 = parseFloat(document.getElementById('main-input').innerHTML);
    if (op === " + ") {
        num1 += num2;
        document.getElementById('main-input').innerHTML = num1;
        document.getElementById('secondary-input').innerHTML += num2;
    } else if (op === " - ") {
        num1 -= num2;
        document.getElementById('main-input').innerHTML = num1;
        document.getElementById('secondary-input').innerHTML += num2;
    } else if (op === " * ") {
        num1 *= num2;
        document.getElementById('main-input').innerHTML = num1;
        document.getElementById('secondary-input').innerHTML += num2;
    } else if (op === " / ") {
        num1 /= num2;
        document.getElementById('main-input').innerHTML = num1;
        document.getElementById('secondary-input').innerHTML += num2;
    } else if (op === " ^ ") {
        var tempNum = num1 ** num2;
        document.getElementById('main-input').innerHTML = tempNum;
        document.getElementById('secondary-input').innerHTML += num2;
    }
    num1 = 0;
    num2 = 0;
    op = "";
    decimal = false;
    display = "";
    numData = "";
    opPressed = false;
    piePressed = false;
}

function squareRoot() {
    var rootOf = parseFloat(document.getElementById('main-input').innerHTML);
    document.getElementById('main-input').innerHTML = Math.sqrt(rootOf);
    document.getElementById('secondary-input').innerHTML = "sqrt " + rootOf;
    opCount++;
}

function trig(func) {
 if (unit === "Deg") {
    if (func === "sin") {
        trigNum = parseFloat(document.getElementById('main-input').innerHTML);
        document.getElementById('main-input').innerHTML = Math.sin(trigNum * (Math.PI / 180));
        document.getElementById('secondary-input').innerHTML = func + "(" + trigNum + ")";
        opCount++;
        display = "";
    } else if (func === "cos") {
        trigNum = parseFloat(document.getElementById('main-input').innerHTML);
        document.getElementById('main-input').innerHTML = Math.cos(trigNum * (Math.PI / 180));
        document.getElementById('secondary-input').innerHTML = func + "(" + trigNum + ")";
        opCount++;
        display = "";
    } else if (func === "tan") {
        trigNum = parseFloat(document.getElementById('main-input').innerHTML);
        document.getElementById('main-input').innerHTML = Math.tan(trigNum * (Math.PI / 180));
        document.getElementById('secondary-input').innerHTML = func + "(" + trigNum + ")";
        opCount++;
        display = "";
    }
 } else {
    if (func === "sin") {
        trigNum = parseFloat(document.getElementById('main-input').innerHTML);
        document.getElementById('main-input').innerHTML = Math.sin(trigNum);
        document.getElementById('secondary-input').innerHTML = func + "(" + trigNum + ")";
        opCount++;
        display = "";
    } else if (func === "cos") {
        trigNum = parseFloat(document.getElementById('main-input').innerHTML);
        document.getElementById('main-input').innerHTML = Math.cos(trigNum);
        document.getElementById('secondary-input').innerHTML = func + "(" + trigNum + ")";
        opCount++;
        display = "";
    } else if (func === "tan") {
        trigNum = parseFloat(document.getElementById('main-input').innerHTML);
        document.getElementById('main-input').innerHTML = Math.tan(trigNum);
        document.getElementById('secondary-input').innerHTML = func + "(" + trigNum + ")";
        opCount++;
        display = "";
    }
 }
}

function mode() {
    if (unit === "Rad") {
        unit = "Deg";
        document.getElementById('trig-mode').innerHTML = unit;
    } else {
        unit = "Rad";
        document.getElementById('trig-mode').innerHTML = unit;
    }
}

function pie() {
    if (piePressed === false) {
        piePressed = true;
        document.getElementById('main-input').innerHTML = Math.PI;
        display = "";
        opCount++;
    }
}

function remove() {
    if (piePressed === true) {
        document.getElementById('main-input').innerHTML = "0";
        piePressed = false;
        display = "";
    } else {
        if (document.getElementById('main-input').innerHTML.length === 1) {
            document.getElementById('main-input').innerHTML = "0";
            display = "";
        } else {
            str = document.getElementById('main-input').innerHTML.split("");
            str.pop();
            display = str.join("");
            document.getElementById('main-input').innerHTML = display;
            str = [""];
        }
    }
}