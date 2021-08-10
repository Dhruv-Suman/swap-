

var a = prompt('Enter the first variable: ');
var v = prompt('Enter the second variable');
function setup(){
  var b2 = createButton("click here to Swap");
 b2 . mousePressed(swap());
  }


function draw()
{
}
function swap (){
  [a,v]=[v,a]
  console.log("the value of a = ",+a)
  console.log("the value of b=",+v)
}