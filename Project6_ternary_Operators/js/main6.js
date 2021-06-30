// function displaying ternary operator
function ride_function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "you are too short":"you are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function age_check() {
    var age, can_enter;
    age = document.getElementById("age").value;
    can_enter = (age >= 21) ? "you are old enough" : "you too young";
    document.getElementById("enter").innerHTML = can_enter + " to enter";
}
// this function utilizes new and this //
function shoe(brand, style, price, color) {
    this.shoe_brand = brand;
    this.shoe_style = style;
    this.shoe_price = price;
    this.shoe_color = color;
} 
// this displays the result of constructor function //
var dunk = new shoe('nike', 'casual', 120, 'red');
var retro = new shoe('jordan', 'basketball', 170, 'black');
var air_force = new shoe('nike', 'casual', 99, 'white');
function my_shoes() {
    document.getElementById("kandc").innerHTML = "The dunk is a " + dunk.shoe_brand + " made for " + dunk.shoe_style + " wear, and comes in " + dunk.shoe_color; 
} 

function drink(brand, type, price) {
    this.drink_brand = brand;
    this.drink_type = type;
    this.drink_price = price;
}
// this is the nested function //
function up_one() {
    document.getElementById("nested_function").innerHTML = count();
    function count() {
        var starting_point = 3;
        function plus_one() {starting_point += 1}
        plus_one();
        return starting_point;
    }
}