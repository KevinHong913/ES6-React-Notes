//destructuring
var foo = {
  bar: 1,
  baz: 2
};

var {bar, baz} = foo;
var {bar} = foo;

var tenses = ["me", "you", "he"];
var [ firstPerson, secondPerson ] = tenses;
// be helpful if using promise
Promise.all([promise1, promise2]).then(function(results) {
  var [ results1 ] = results;
});
// or
Promise.all([promise1, promise2]).then(function([results1, results2]) {

});

//destructure object
var foo = 2;
var obj = {
  bar: 1,
  foo,
}
//EX
var name = "will";
var age = 34;
some.method({name, age});
{
  name:name,
  age: age
}
//ALSO create own key
var name = "will";
var obj = {
  ["name" + name]: "some value",
}
//destructure arguments
function calcBmi(weight, height, max, callback) {
  var bmi = weight / Math.pow(height, 2);
  if (bmi > 25) {
    console.log("you're overweight");
  }
  if (callback) {
    callback(bmi);
  }
}
calcBmi(weight, height);
calcBmi(wieght, height, function(){} ); // need to pass in null, like below
calcBmi(wieght, height, null, function(){} ); // need to pass in null
// soooo desturcture
function calcBmi({ weight: w, height: h, max = 25, callback }) { // max is default as 25 if not passed in 
  var bmi = w / Math.pow(h, 2);
  if (bmi > max) {
    console.log("you're overweight");
  }
  if (callback) {
    callback(bmi);
  }
}
calcBmi({weight, height, max:25});
calcBmi({wieght, height, callback: function(){} });  
// destrcture when there's multiple arguments


//  template strings
// before:
var name = "will";
var thing = "party";
var gree = "hi, my name is " + name + "and I like to " + thing + ".";
// with template strings
var greet = 'hi, my name is ${name} and I like to ${thing}!'; // can be multiple lines also~
