// variables
var elDictance = document.querySelector(".input-distance");
var elForm = document.querySelector(".form");
var elTimeByFoot = document.querySelector(".time-byfoot")
var elTimeByBicycle = document.querySelector(".time-bicycle")
var elTimeByCar = document.querySelector(".time-car")
var elTimeByPlane = document.querySelector(".time-plane")

// function
function time(s, v){
    var hours = Math.floor(s / v);
    var min = Math.round((s / v - hours) * 60);
    return `${hours} soat ${min} minut`
}

// default values
var SPEED_FOOT = 3.6;  // km/h
var SPEED_BICYCLE = 20.1;
var SPEED_CAR = 70;
var SPEED_PLANE = 800;

// dont submit
elForm.addEventListener("submit", function(event){
    event.preventDefault();

    elTimeByFoot.textContent = time(elDictance.value, SPEED_FOOT);
    elTimeByBicycle.textContent = time(elDictance.value, SPEED_BICYCLE);
    elTimeByCar.textContent = time(elDictance.value, SPEED_CAR);
    elTimeByPlane.textContent = time(elDictance.value, SPEED_PLANE);
})
