window.alert(Math.random());

window.alert(Math.random()* 10);

function addprob(){
    var addition = 6 + 10;
    document.getElementById("math").innerHTML = "6 + 10 =" + addition;
}

function subprob() {
    var subtraction = 10 - 8;
    document.getElementById("sub").innerHTML = " 10 - 8 = " + subtraction;
}

function multiprob() {
    var multiply = 7 * 6;
    document.getElementById("multi").innerHTML = "7 * 6 =" + multiply;
}

function divprob() {
    var division = 20 / 5;
    document.getElementById("div").innerHTML = "20 / 5 =" + division;
}

function mixedprob() {
    var mix = (7 + 3) * 6 / 2 -15;
    document.getElementById("omni").innerHTML = "7 plus 3, multiplied by 10, divided in half and then subtracted by 5 equals " + mix;
}

function modulus_prob() {
    var remain = 31 % 5;
    document.getElementById("remain").innerHTML = " when you divide 31 by 5 you will have a remainder of: " + remain;
}

function negation_prob() {
    var x = 7;
    document.getElementById("nega").innerHTML = -x;
}

var jj = 5;
jj++;
document.write(jj);

var kk = 9;
kk--;
document.write(kk);

