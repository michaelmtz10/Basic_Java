// concatenate strings 
function connect_me(){
    var pt1 = "Today ";
    var pt2 = "I learned about ";
    var pt3 = "javascript and the many ";
    var pt4 = "ways it can be utilized";
    var whole_sentence = pt1.concat(pt2, pt3, pt4);
    document.getElementById("connect").innerHTML = whole_sentence;
}

// slcing parts of a string
function slice_way() {
    var sentence = "not all good things come to an end";
    var section = sentence.slice(0, 3);
    document.getElementById("slice").innerHTML = section;
}
// removing part of string
function section_remove() {
    var sentence = "this is the good life";
    var section = sentence.slice(1, 8);
    document.getElementById("cut").innerHTML = section;
}
// converting string in uppercase
function upper_case() {
    var sentence = document.getElementById("up").innerHTML;
    document.getElementById("up").innerHTML = sentence.toUpperCase();
}
// finding position of element in string
function search_word() {

var str = "how many sea horses can a sea horse see, in a sea of horses?";
document.getElementById("find").innerHTML = str.search("horse");
}
// converting number to string
function num_to_string() {
    var c = 124;
    document.getElementById("num").innerHTML = c.toString();
}
// rounding number to closest var amount
function round_me() {
    var m = 12.54363463;
    document.getElementById("round").innerHTML = m.toPrecision(5);
}
// fixing number to the next 10 or 0
function fix_the_num() {
    var r = 3.879;
    document.getElementById("fix").innerHTML = r.toFixed(2);
}
// finding largest number in js
function largest_num() {
    var k = Number.MAX_VALUE;
    document.getElementById("max").innerHTML = k;
}