var hoursPassed = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var nineAM = $("#9AM");
var tenAM = $("#10AM");
var elevenAM = $("#11AM");
var twelvePM = $("#12PM");
var onePM = $("#1PM");
var twoPM = $("#2PM");
var threePM = $("#3PM");
var fourPM = $("#4PM");
var fivePM = $("#5PM");
var nineSave = $("#9Save");
var tenSave = $("#10Save");
var elevenSave = $("#11Save");
var twelveSave = $("#12Save");
var oneSave = $("#1Save");
var twoSave = $("#2Save");
var threeSave = $("#3Save");
var fourSave = $("#4Save");
var fiveSave = $("#5Save");
var nineText = $("#9Text");
var tenText = $("#10Text");
var elevenText = $("#11Text");
var twelveText = $("#12Text");
var oneText = $("#1Text");
var twoText = $("#2Text");
var threeText = $("#3Text");
var fourText = $("#4Text");
var fiveText = $("#5Text");


// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
//Use moment to select current day at top & change the H1 that way

//I use jQuery to select the h3 with the Current Day tag and then change its text content to the current time on loading the webpage using Moment
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
//Just display the hours from 9-5; it has been done

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//Depending on the time checked, change color of hour block to indicate past, present or future
//loop through array that checks each timeblock

//I loop through my array of times here to dynamically update the classes of each set bar depending on the time
for (var i = 0; i < hoursPassed.length; i++)
{
    //as it stands, I simply do a bunch of if statements, but there's gotta be a more elegant way
    if (hoursPassed[i] === 9) 
    {
    //change the spans to past class if the current time has passed by said time
        if (hoursPassed[i] < moment().format('HH'))
        {
        $("#9AM").attr("class", "time-block hour row description past");
        }
    //change the spans to present class if the current hour is that hour
        if (hoursPassed[i] == moment().format('HH'))
        {
        $("#9AM").attr("class", "time-block hour row description present");
        }
    //change the spans to future class if current hour has yet to reach it
        if (hoursPassed[i] > moment().format('HH'))
        {
        $("#9AM").attr("class", "time-block hour row description future");
        }
    }
    if (hoursPassed[i] === 10) 
    {
    //change the spans to past class if the current time has passed by said time
        if (hoursPassed[i] < moment().format('HH'))
        {
        $("#10AM").attr("class", "time-block hour row description past");
        }
    //change the spans to present class if the current hour is that hour
        if (hoursPassed[i] == moment().format('HH'))
        {
        $("#10AM").attr("class", "time-block hour row description present");
        }
    //change the spans to future class if current hour has yet to reach it
        if (hoursPassed[i] > moment().format('HH'))
        {
        $("#10AM").attr("class", "time-block hour row description future");
        }
    }
    if (hoursPassed[i] === 11) 
    {
    //change the spans to past class if the current time has passed by said time
        if (hoursPassed[i] < moment().format('HH'))
        {
        $("#11AM").attr("class", "time-block hour row description past");
        }
    //change the spans to present class if the current hour is that hour
        if (hoursPassed[i] == moment().format('HH'))
        {
        $("#11AM").attr("class", "time-block hour row description present");
        }
    //change the spans to future class if current hour has yet to reach it
        if (hoursPassed[i] > moment().format('HH'))
        {
        $("#11AM").attr("class", "time-block hour row description future");
        }
    }
    if (hoursPassed[i] === 12) 
    {
    //change the spans to past class if the current time has passed by said time
        if (hoursPassed[i] < moment().format('HH'))
        {
        $("#12PM").attr("class", "time-block hour row description past");
        }
    //change the spans to present class if the current hour is that hour
        if (hoursPassed[i] == moment().format('HH'))
        {
        $("#12PM").attr("class", "time-block hour row description present");
        }
    //change the spans to future class if current hour has yet to reach it
        if (hoursPassed[i] > moment().format('HH'))
        {
        $("#12PM").attr("class", "time-block hour row description future");
        }
    }
    if (hoursPassed[i] === 13) 
    {
    //change the spans to past class if the current time has passed by said time
        if (hoursPassed[i] < moment().format('HH'))
        {
        $("#1PM").attr("class", "time-block hour row description past");
        }
    //change the spans to present class if the current hour is that hour
        if (hoursPassed[i] == moment().format('HH'))
        {
        $("#1PM").attr("class", "time-block hour row description present");
        }
    //change the spans to future class if current hour has yet to reach it
        if (hoursPassed[i] > moment().format('HH'))
        {
        $("#1PM").attr("class", "time-block hour row description future");
        }
    }
    if (hoursPassed[i] === 14) 
    {
    //change the spans to past class if the current time has passed by said time
        if (hoursPassed[i] < moment().format('HH'))
        {
        $("#2PM").attr("class", "time-block hour row description past");
        }
    //change the spans to present class if the current hour is that hour
        if (hoursPassed[i] == moment().format('HH'))
        {
        $("#2PM").attr("class", "time-block hour row description present");
        }
    //change the spans to future class if current hour has yet to reach it
        if (hoursPassed[i] > moment().format('HH'))
        {
        $("#2PM").attr("class", "time-block hour row description future");
        }
    }
    if (hoursPassed[i] === 15) 
    {
    //change the spans to past class if the current time has passed by said time
        if (hoursPassed[i] < moment().format('HH'))
        {
        $("#3PM").attr("class", "time-block hour row description past");
        }
    //change the spans to present class if the current hour is that hour
        if (hoursPassed[i] == moment().format('HH'))
        {
        $("#3PM").attr("class", "time-block hour row description present");
        }
    //change the spans to future class if current hour has yet to reach it
        if (hoursPassed[i] > moment().format('HH'))
        {
        $("#3PM").attr("class", "time-block hour row description future");
        }
    }
    if (hoursPassed[i] === 16) 
    {
    //change the spans to past class if the current time has passed by said time
        if (hoursPassed[i] < moment().format('HH'))
        {
        $("#4PM").attr("class", "time-block hour row description past");
        }
    //change the spans to present class if the current hour is that hour
        if (hoursPassed[i] == moment().format('HH'))
        {
        $("#4PM").attr("class", "time-block hour row description present");
        }
    //change the spans to future class if current hour has yet to reach it
        if (hoursPassed[i] > moment().format('HH'))
        {
        $("#4PM").attr("class", "time-block hour row description future");
        }
    }
    if (hoursPassed[i] === 17) 
    {
    //change the spans to past class if the current time has passed by said time
        if (hoursPassed[i] < moment().format('HH'))
        {
        $("#5PM").attr("class", "time-block hour row description past");
        }
    //change the spans to present class if the current hour is that hour
        if (hoursPassed[i] == moment().format('HH'))
        {
        $("#5PM").attr("class", "time-block hour row description present");
        }
    //change the spans to future class if current hour has yet to reach it
        if (hoursPassed[i] > moment().format('HH'))
        {
        $("#5PM").attr("class", "time-block hour row description future");
        }
    }
}

// WHEN I click into a timeblock
// THEN I can enter an event
//On click, allow user to enter in text; if you don't figure it out, write in prompts lol

// nineAM.click(function()
// {
//     console.log("9AM");
// });
// tenAM.click(function()
// {

// });
// elevenAM.click(function(){

// });
// twelvePM.click(function(){

// });
// onePM.click(function(){

// });
// twoPM.click(function(){

// });
// threePM.click(function(){

// });
// fourPM.click(function(){

// });
// fivePM.click(function(){

// });
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
//On click of save button, allow that text to be saved to localStorage. The final line in each code also updates the text content of the hour when clicked.
nineSave.click(function()
{
    var newText = document.getElementById("9Text").value;
    localStorage.setItem("9 AM", newText);
    document.getElementById("9AM").textContent = "9 AM: " + localStorage.getItem("9 AM");
});
tenSave.click(function(){
    var newText = document.getElementById("10Text").value;
    localStorage.setItem("10 AM", newText);
    console.log(localStorage.getItem("10 AM"));
    document.getElementById("10AM").textContent = "10 AM: " + localStorage.getItem("10 AM");
})
elevenSave.click(function(){
    var newText = document.getElementById("11Text").value;
    localStorage.setItem("11 AM", newText);
    document.getElementById("11AM").textContent = "11 AM: " + localStorage.getItem("11 AM");
})
twelveSave.click(function(){
    var newText = document.getElementById("12Text").value;
    localStorage.setItem("12 PM", newText);
    document.getElementById("12PM").textContent = "12 PM: " + localStorage.getItem("12 PM");
})
oneSave.click(function(){
    var newText = document.getElementById("1Text").value;
    localStorage.setItem("1 PM", newText);
    document.getElementById("1PM").textContent = "1 PM: " + localStorage.getItem("1 PM");
})
twoSave.click(function(){
    var newText = document.getElementById("2Text").value;
    localStorage.setItem("2 PM", newText);
    document.getElementById("2PM").textContent = "2 PM: " + localStorage.getItem("2 PM");
})
threeSave.click(function(){
    var newText = document.getElementById("3Text").value;
    localStorage.setItem("3 PM", newText);
    document.getElementById("3PM").textContent = "3 PM: " + localStorage.getItem("3 PM");
})
fourSave.click(function(){
    var newText = document.getElementById("4Text").value;
    localStorage.setItem("4 PM", newText);
    document.getElementById("4PM").textContent = "4 PM: " + localStorage.getItem("4 PM");
})
fiveSave.click(function(){
    var newText = document.getElementById("5Text").value;
    localStorage.setItem("5 PM", newText);
    document.getElementById("5PM").textContent = "5 PM: " + localStorage.getItem("5 PM");
})
// WHEN I refresh the page
// THEN the saved events persist
// Print outs saved text from local storage.
function printStorage() {
    document.getElementById("9AM").textContent = "9 AM: " + localStorage.getItem("9 AM");
    document.getElementById("10AM").textContent = "10 AM: " + localStorage.getItem("10 AM");
    document.getElementById("11AM").textContent = "11 AM: " + localStorage.getItem("11 AM");
    document.getElementById("12PM").textContent = "12 PM: " + localStorage.getItem("12 PM");
    document.getElementById("1PM").textContent = "1 PM: " + localStorage.getItem("1 PM");
    document.getElementById("2PM").textContent = "2 PM: " + localStorage.getItem("2 PM");
    document.getElementById("3PM").textContent = "3 PM: " + localStorage.getItem("3 PM");
    document.getElementById("4PM").textContent = "4 PM: " + localStorage.getItem("4 PM");
    document.getElementById("5PM").textContent = "5 PM: " + localStorage.getItem("5 PM");
}

printStorage();