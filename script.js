console.log("Hello");

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
//Use moment to select current day at top & change the H1 that way

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
//Just display the hours from 9-5

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//Depending on the time checked, change color of hour block to indicate past, present or future

// WHEN I click into a timeblock
// THEN I can enter an event
//On click, allow user to enter in text

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
//On click of save button, allow that text to be saved to localStorage

// WHEN I refresh the page
// THEN the saved events persist
// Print out saved text from local storage but only for those blocks