function string_length() {
    var x = "flskflshnalndsf";
document.getElementById("long").innerHTML = x.length;
}

function length_prob() {
    var text = "fbsdnfkjbjidsbcvkjis";
    document.getElementById("long").innerHTML = text.length;
}
var makes = ["chevy", "dodge", "ford", "nissan", "toyota"]
var content = "";
var x;
function for_loop() { 
    for (x = 0; x < makes.length; x++) {
    content += makes[x] + "<br>";
    }
    document.getElementById("list_of_cars").innerHTML = content;
}

function array_function() {
    var music = ["edm", "hiphop", "rap", "country"]
    document.getElementById("array").innerHTML = music;
}

function constant_prob() {
    const pc_build = {type: "desktop", cpu: "ryzen", ram_size: "16gb"};
    pc_build.cpu = "intel";
    pc_build.price = "$800";
    document.getElementById("constant").innerHTML = "the cpu of the " + pc_build.type + " is a " + pc_build.cpu + " making it a good pc for gaming!";
}

function function_let() {
    let z = "this is the let keyword";
    document.getElementById("let").innerHTML = z;
}

function my_lastname(name) {
    return "michael " + name;
}
  document.getElementById("return").innerHTML = my_lastname("mtz");

    function food_object(){
    let food = {
        type: "asian",
        protein: "chicken",
        carb: "rice",
        fat: "eggroll", 
        description : function () {
            return "one of my favorite foods is " + food.type + " it has a great source of carbs in " + food.carb
        }
    };
        document.getElementById("food_object").innerHTML = food.description(); 
}

    function break_prob() {
    let number = "";
        for (let x = 0; x < 10; x++) {
        if (x === 10) { break; }
        number += "The number is " + x + "<br>";
        }
        document.getElementById("break").innerHTML = number;
        }

function continue_var() {
    let number = "";
    for (let m = 0; m < 10; m++) {
        if (m === 4) {continue; }
        number += "the number is " + m + "<br>";
    } 
    document.getElementById("proceed").innerHTML= number;
}