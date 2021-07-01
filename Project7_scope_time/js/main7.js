function local_var() {

    var x = 22;
    document.write(22 + x);
    document.getElementById("test").innerHTML = x;
}
var numb = 21;
function globe_val() {
    document.write(2 + numb);
    document.getElementById("test2").innerHTML = numb;
}

function time_verify(){
    if (new Date().getHours() < 20) {
        document.getElementById("elif").innerHTML = "How was your day today?";
    }
}

function get_minute() {
    if (new Date().getMinutes() < 59) {
        document.getElementById("time").innerHTML = "you have about an hour!";
    }
}

function age_function() {
    age = document.getElementById("age").value;
    if (age >= 18) {
        vote = "you are old enough to vote";
    }
    else {
        vote = " you are not old enough!";
    }
    document.getElementById("how_old_you_are").innerHTML = vote;
}

function item_cost() {
    money = document.getElementById("money").value ;
    if(money >= 20) {
        money = "you can buy this product";
}
    else {
        money = "you don't have quite enough";
    }
    document.getElementById("amount_for_purchase").innerHTML= money;
}

function time_calc() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "it is morning time";
    }
    else if (time >= 12, time < 18) {
        reply = "it is afternoon";
    }
    else {
        reply = "it is evening time.";
    }
    document.getElementById("time_of_day").innerHTML=reply;
}