var hoursPassed = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var nineSave = $("#9Save");
var tenSave = $("#10Save");
var elevenSave = $("#11Save");
var twelveSave = $("#12Save");
var oneSave = $("#1Save");
var twoSave = $("#2Save");
var threeSave = $("#3Save");
var fourSave = $("#4Save");
var fiveSave = $("#5Save");

//I use jQuery to select the h3 with the Current Day tag and then change its text content to the current time on loading the webpage using Moment
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

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
        if (hoursPassed[i] < moment().format('HH'))
        {
        $("#10AM").attr("class", "time-block hour row description past");
        }
        if (hoursPassed[i] == moment().format('HH'))
        {
        $("#10AM").attr("class", "time-block hour row description present");
        }
        if (hoursPassed[i] > moment().format('HH'))
        {
        $("#10AM").attr("class", "time-block hour row description future");
        }
    }
    if (hoursPassed[i] === 11) 
    {
        if (hoursPassed[i] < moment().format('HH'))
        {
        $("#11AM").attr("class", "time-block hour row description past");
        }
        if (hoursPassed[i] == moment().format('HH'))
        {
        $("#11AM").attr("class", "time-block hour row description present");
        }
        if (hoursPassed[i] > moment().format('HH'))
        {
        $("#11AM").attr("class", "time-block hour row description future");
        }
    }
    if (hoursPassed[i] === 12) 
    {
        if (hoursPassed[i] < moment().format('HH'))
        {
        $("#12PM").attr("class", "time-block hour row description past");
        }
        if (hoursPassed[i] == moment().format('HH'))
        {
        $("#12PM").attr("class", "time-block hour row description present");
        }
        if (hoursPassed[i] > moment().format('HH'))
        {
        $("#12PM").attr("class", "time-block hour row description future");
        }
    }
    if (hoursPassed[i] === 13) 
    {
        if (hoursPassed[i] < moment().format('HH'))
        {
        $("#1PM").attr("class", "time-block hour row description past");
        }
        if (hoursPassed[i] == moment().format('HH'))
        {
        $("#1PM").attr("class", "time-block hour row description present");
        }
        if (hoursPassed[i] > moment().format('HH'))
        {
        $("#1PM").attr("class", "time-block hour row description future");
        }
    }
    if (hoursPassed[i] === 14) 
    {
        if (hoursPassed[i] < moment().format('HH'))
        {
        $("#2PM").attr("class", "time-block hour row description past");
        }
        if (hoursPassed[i] == moment().format('HH'))
        {
        $("#2PM").attr("class", "time-block hour row description present");
        }
        if (hoursPassed[i] > moment().format('HH'))
        {
        $("#2PM").attr("class", "time-block hour row description future");
        }
    }
    if (hoursPassed[i] === 15) 
    {
        if (hoursPassed[i] < moment().format('HH'))
        {
        $("#3PM").attr("class", "time-block hour row description past");
        }
        if (hoursPassed[i] == moment().format('HH'))
        {
        $("#3PM").attr("class", "time-block hour row description present");
        }
        if (hoursPassed[i] > moment().format('HH'))
        {
        $("#3PM").attr("class", "time-block hour row description future");
        }
    }
    if (hoursPassed[i] === 16) 
    {
        if (hoursPassed[i] < moment().format('HH'))
        {
        $("#4PM").attr("class", "time-block hour row description past");
        }
        if (hoursPassed[i] == moment().format('HH'))
        {
        $("#4PM").attr("class", "time-block hour row description present");
        }
        if (hoursPassed[i] > moment().format('HH'))
        {
        $("#4PM").attr("class", "time-block hour row description future");
        }
    }
    if (hoursPassed[i] === 17) 
    {
        if (hoursPassed[i] < moment().format('HH'))
        {
        $("#5PM").attr("class", "time-block hour row description past");
        }
        if (hoursPassed[i] == moment().format('HH'))
        {
        $("#5PM").attr("class", "time-block hour row description present");
        }
        if (hoursPassed[i] > moment().format('HH'))
        {
        $("#5PM").attr("class", "time-block hour row description future");
        }
    }
}

//On click of save button, saves the text in the corresponding textarea to localStorage. The final line in each code also updates the text content of the hour when clicked.
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
});
elevenSave.click(function(){
    var newText = document.getElementById("11Text").value;
    localStorage.setItem("11 AM", newText);
    document.getElementById("11AM").textContent = "11 AM: " + localStorage.getItem("11 AM");
});
twelveSave.click(function(){
    var newText = document.getElementById("12Text").value;
    localStorage.setItem("12 PM", newText);
    document.getElementById("12PM").textContent = "12 PM: " + localStorage.getItem("12 PM");
});
oneSave.click(function(){
    var newText = document.getElementById("1Text").value;
    localStorage.setItem("1 PM", newText);
    document.getElementById("1PM").textContent = "1 PM: " + localStorage.getItem("1 PM");
});
twoSave.click(function(){
    var newText = document.getElementById("2Text").value;
    localStorage.setItem("2 PM", newText);
    document.getElementById("2PM").textContent = "2 PM: " + localStorage.getItem("2 PM");
});
threeSave.click(function(){
    var newText = document.getElementById("3Text").value;
    localStorage.setItem("3 PM", newText);
    document.getElementById("3PM").textContent = "3 PM: " + localStorage.getItem("3 PM");
});
fourSave.click(function(){
    var newText = document.getElementById("4Text").value;
    localStorage.setItem("4 PM", newText);
    document.getElementById("4PM").textContent = "4 PM: " + localStorage.getItem("4 PM");
});
fiveSave.click(function(){
    var newText = document.getElementById("5Text").value;
    localStorage.setItem("5 PM", newText);
    document.getElementById("5PM").textContent = "5 PM: " + localStorage.getItem("5 PM");
});

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

//runs the printStorage function on load so whatever is in localStorage gets printed when the user comes back
printStorage();