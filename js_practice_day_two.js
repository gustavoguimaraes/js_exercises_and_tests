var first_name = function(name) {
  return name;
}

first_name("bob");
// = "bob"

function add(x,y) {
  return x + y;
}
//= 5

var full_name = function (first_name, last_name) {
  return first_name + " " + last_name;
};
full_name("Gus", "Guim");

// = "Gus Guim"

function square (x) {
  return(x * x);
}
console.log(square(5));

//= 25

function square (x) {
  return(x * x)
}

function cube (x) {
  return(x * square(x));
}
console.log(cube(2));
//= 8

function my_fun() { return "I am having fun" };

my_fun();
//= "I am having fun"

var what = function () { return "HI!!!!" };
console.log(typeof(what));
//= "function"

var max_value = function(array){
  result = array[0];
  for(var i = 1; i < array.length; i ++) {
    if (array[i] > result) {
      result = array[i];
    }
  }
  return result;
}

console.log(max_value([1,50,2]));
//= 50

var arr = ["boy", 42, 23, function () { return "gotta catch 'em all, Pokemon!" }, 56];

console.log(arr[3]());

// = "gotta catch 'em all, Pokemon!" 
// This is because functions are also values in JS and is treated as such.

function kesha() {
  return "Your love is my drug";
}
kesha();

var lambchop = function () {
  return "This is the song that never ends";
}
console.log(lambchop());
//= "This is the song that never ends"

function doctor_name (last_name) {
  return "Dr. " + last_name
}
console.log(doctor_name());
//= Dr. undefined

function dwelling(name) {
  if (typeof(name) != "string") {
    throw "ArgumentError"};
    return name + "cave";
}
console.log(dwelling(42));
//= "ArgumentError"


function add(x, y) {
  return(x + y);
}
console.log(add(1, 2, 3, 4, 10, 20));
//= 3
// JS does not throw an error if it has more than the necessary arguments. Interesting ...

function args() {
  return arguments;
}
console.log(args(8, 7, 6, 5, 4));
//= { '0': 8, '1': 7, '2': 6, '3': 5, '4': 4 }
// arguments is a special keyword in JS. It is an object that is very similar to an array, but the same as an array.

function lamp() {
  var my_special_variable = "I am special";
}
console.log(my_special_variable);
//= ReferenceError: variable not defined.

function book() {
  good_book = "Slaughterhouse Five";
}
console.log(good_book);
//= "Slaughterhouse Five"
// Note that the var good_book is not used.

num = 23;
function evil () {
  num += 5;
}
evil();
console.log(num);

//= 28

var min_value = function(array) {
    result = array[0];
     for(var i = 1; i < array.length; i ++){
        if (array[i] < array[0]){
            result = array[i];
        }
        
    }
    return result;
}

console.log(min_value([11,50,2]));

// = 2

function song () {
  return "Mary had a little lamb";
}
//= "Mary had a little lamb"


var add_numbers = function(num1, num2) {
    (typeof(num1) == "number") ? (typeof(num2) == "number") ? console.log(num1 + num2) :  console.log("ArgumentError") : console.log("ArgumentError")
    }

add_numbers(2, 3);

//= 5

arr = [0, "nice", function bad_hairday () { return "YOLO" }];

arr[2]();
//= YOLO

var your_name = function() { return "Snoop Dogg"}

your_name();



var result;

if (undefined) {
  result = function () { return "blah blah blah"; }();
} else {
  result = function () { return "meow meow meow"; }();
}
console.log(result);

//= "meow meow meow"


