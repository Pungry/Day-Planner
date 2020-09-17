console.log("Hello");

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
};

// WHEN I click into a timeblock
// THEN I can enter an event
//On click, allow user to enter in text

nineAM.click(function()
{
    console.log("9AM");
});
tenAM.click(function()
{

});
elevenAM.click(function(){

});
twelvePM.click(function(){

});
onePM.click(function(){

});
twoPM.click(function(){

});
threePM.click(function(){

});
fourPM.click(function(){

});
fivePM.click(function(){

});
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
//On click of save button, allow that text to be saved to localStorage
nineSave.click(function()
{
    console.log("Save 9AM");
    //set item in localStorage equal to the text in the text area on click
    //localStorage.setItem("");
});
tenSave.click(function(){

})
elevenSave.click(function(){
    
})
twelveSave.click(function(){
    
})
oneSave.click(function(){
    
})
twoSave.click(function(){
    
})
threeSave.click(function(){
    
})
fourSave.click(function(){
    
})
fiveSave.click(function(){
    
})
// WHEN I refresh the page
// THEN the saved events persist
// Print out saved text from local storage but only for those blocks
function printStorage() {
    console.log("Print local storage");
}

printStorage();