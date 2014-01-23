var person = {
  name: "Joe Camel",
  age: 42,
  status: "dead"
}
console.log(typeof person);
//= "object"

var hat = {
  size: "large",
  color: "orange"
}
console.log(hat.size);
// = "large"

var teddy_bear = {
  texture: "fluffy"
}
console.log(teddy_bear["fluffy"]);

var fat_joe = {
  crew: "Terror Squad"
}
fat_joe.crew = "something";
console.log(fat_joe.crew);
//= "something"


var pen = {};
pen.ink = "blue";
console.log(pen.ink);
//= blue


var walking_dead = {
  topic: "zombie apocalypse"
}
console.log(walking_dead["main_character"])
//= undefined

var bottle = {
  contents: function() {
    return "some fine bubbly"
  };
  color: "green"
}

console.log(bottle.contents());
//= "some fine bubbly"

var yao = {
  self: function () { return this }
}
console.log(yao === yao.self());
//= true

var lebron = {
  occupation: "basketball",
  introduction: function () {
    return "My name is LeBron and I play " + this.occupation
  }
}
lebron.introduction();
//= "My name is LeBron and I play basketball"

var square = {
  side_length: 4,
  area: function () { 
    return this.side_length * this.side_length;
  }
}
console.log(square.area());
//= 16

var me = {
  first_name: "Matthew",
  last_name: "Powers",
  full_name: function () {
    return this.first_name + " " + this.last_name;
  }
}
console.log(me.full_name());
//= Matthew Powers

var mug = {
  capacity: "10 fluid ounces",
  customer_message: function (desired_size) {
    if (desired_size > 10) { return "This mug is not large enough for you" };
  }
}
console.log(customer_message(13));
//= Error customer_message is not defined. It should have been mug.customer_message(13)

function global_function() { return "I can be called anywhere"};
var an_obj = {
  something: golobal_function
}
console.log(an_obj.something());
//= "I can be called anywhere"

var person = {
  age: 32,
  address: {
    city: "New York",
    state: "NY"
  }
}
console.log(person.address.city);
//= "New York"

var golf = {
  type: "sport",
  clubs: {
    high_end: "taylor made",
    low_end: "rusty basement clubs"
  }
}  
golf.clubs.high_end = "callaway";
console.log(golf.clubs.high_end);
//= "callaway"

var ideal_scene = {
  status: "chillin'",
  location: "somewhere with good waves",
  thoughts: "bling bling"
}
delete ideal_scene.thoughts
console.log(ideal_scene.thoughts);
//= undefined

var zombie = new Object();
// The zombie variable is assigned to an empty object.

var game = { title: "tic tac toe" };
var same_game = { title: "tic tac toe" };
console.log(game === same_game );
//= false 
// the game ans sam_game objects have the same contents, but they are different objects. JavaScript only considers two onjects equal if the equality operator is referring to exactly the same object, not two different objects that have the same contents.

var lyric = { lyric: "right now, aight" };
console.log(lyric === lyric);
//= true
//The equality operator returns true when the lyric object is compared with itself.


var ruff_ryders = {
  dmx: {
    birthplace: "Mount Vernon, NY"
  }
}
console.log(ruff_ryders.lox.birthplace);
//= Error. lox is nota property in the function.

var ruff_ryders = {
  dmx: {
    birthplace: "Mount Vernon, NY"
  }
}
console.log(ruff_ryders.lox && ruff_ryders.lox.birthplace);
//= undefined

var a =  {
  x: "y"
}
console.log("x" in a)
//= true. The keyword in is a boolean and checks whether x is a property in a.

var abc = {
  zz: "ll"
}
console.log(abc.hasOwnProperty("zz"));
//= true
//the hasOwnProperty() method returns true if the object has the property and false otherwise.

var dmx = {
  real_name: "Earl Simmons"
  occupation: "rapper"
}
//I could have also done dmx.real)name = "Earl Simmons"
console.log(dmx.real_name);
//=  "Earl Simmons"

var circle = {
  radius:10
}
circle.circumference = (Math.PI * (2 * circle.radius));
console.log(circle.circumference);

 //or
circle.circumference = function () { return 2 * Math.PI * this.radius; }
console.log(circle.circumference());

//= 62.83185307179586