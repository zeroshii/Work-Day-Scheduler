//Moment js variables

var x = moment()
var date = moment().format('MMMM Do YYYY')
  
// Display current date on top of scheduler

function todaysDate() {
     document.getElementById("currentDay").innerHTML = date
}
todaysDate()

// Set textarea CSS class based on past, present, or future hours

var timeOfDay = [9,10,11,12,13,14,15,16,17]
var currentHour = moment().format('H')

function checkTime(){
  for (var i = 0; i < timeOfDay.length; i++){
    if (timeOfDay[i] < currentHour){
        document.querySelector(`#planner-${timeOfDay[i]}`).classList.add("past")
    }
    else if (timeOfDay[i] > currentHour){
        document.querySelector(`#planner-${timeOfDay[i]}`).classList.add("future")
    }
    else {
        document.querySelector(`#planner-${timeOfDay[i]}`).classList.add("present")
    }
  }
}
checkTime()

// Save text to local storage

function saveText(btnElement){

  var num = btnElement.id.split("-")[1]
  var text = document.querySelector(`#planner-${num}`).value
  
  localStorage.setItem(`#planner-${num}`, text)
}

//Display locally stored values

function displayText(){

  for (var i = 0; i < timeOfDay.length; i++){  
  document.querySelector(`#planner-${timeOfDay[i]}`).value = localStorage.getItem(`#planner-${timeOfDay[i]}`)
  }
}
displayText()