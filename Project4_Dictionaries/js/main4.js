// kVP underneath 

function my_workout() {
    var my_car = {
        color: "black", 
        interior: "grey leather",
        rims: "22in",
        engine: "automatic",
        trait: "accelerates" 
    };
    document.getElementById("dictionary").innerHTML = my_car.interior;
}
//kvp underneath with deleted propertySS
var my_car = {
    color: "black",
    interior: "grey leather",
    year: 2017,
    engine: "automatic",
    trait: "accelerates"   
  };
  delete my_car.engine;
  document.getElementById("dictionary").innerHTML = my_car.engine;