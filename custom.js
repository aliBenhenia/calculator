// operators 
var display = document.getElementById("display") ;
var equal = document.getElementById("equal") ;
var plus = document.getElementById("plus") ;
var mince = document.getElementById("mince") ;
var div = document.getElementById("div") ;
var mult = document.getElementById("mult") ;
var mod = document.getElementById("mod") ;
var dot = document.getElementById("dot") ;
var clear = document.getElementById("clear") ;
var div = document.getElementById("div") ;
// digits 
var zero= document.getElementById("zero") ;
var one = document.getElementById("one") ;
var two= document.getElementById("two") ;
var tree= document.getElementById("tree") ;
var four= document.getElementById("four") ;
var five= document.getElementById("five") ;
var six= document.getElementById("six") ;
var saven= document.getElementById("saven") ;
var eight= document.getElementById("eight") ;
var nine= document.getElementById("nine") ;
// functions  digits
zero.onclick = function (argument) {
  display.value += 0
}
one.onclick = function (argument) {
  display.value += 1
}
two.onclick = function (argument) {
  display.value += 2
}
tree.onclick = function (argument) {
  display.value += 3
}
four.onclick = function (argument) {
  display.value += 4
}
five.onclick = function (argument) {
  display.value += 5
}
six.onclick = function (argument) {
  display.value += 6
}
saven.onclick = function (argument) {
  display.value += 7
}
eight.onclick = function (argument) {
  display.value += 8
}
nine.onclick = function (argument) {
  display.value += 9
}
// function operators
plus.onclick = function (argument) {
  display.value += "+"
}
mince.onclick = function (argument) {
  display.value += "-"
}
div.onclick = function (argument) {
  display.value += "/"
}
mod.onclick = function (argument) {
  display.value += "%"
}
mult.onclick = function (argument) {
  display.value += "*"
}
dot.onclick = function (argument) {
  display.value += "."
}
equal.onclick = function (argument) {
  if(display.value != ""){
     display.value = eval(display.value)
  }
}
clear.onclick = function (argument) {
  display.value = ""
}