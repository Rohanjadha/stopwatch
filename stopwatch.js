// Initialize variables for milliseconds, seconds, minutes, and hours
let ms = 0, s = 0, m = 0, h = 0;
// Declare a variable for the timer
let timer;

// Select the elements for displaying the timer and the laps
var display = document.querySelector('.timer-display');
var laps = document.querySelector('.laps');

// Function to start the timer
function start() {
    // Check if the timer is not already running
    if (!timer) {
        // Set an interval to call the run function every 10 milliseconds
        timer = setInterval(run, 10);
    }
}

// Function to update the timer display and increment time units
function run() {
    // Update the display with the current timer value
    display.innerHTML = getTimer();
    // Increment milliseconds
    ms++;
    // If milliseconds reach 100, reset ms to 0 and increment seconds
    if (ms == 100) {
        ms = 0;
        s++;
    }
    // If seconds reach 60, reset seconds to 0 and increment minutes
    if (s == 60) {
        s = 0;
        m++;
    }
    // If minutes reach 60, reset minutes to 0 and increment hours
    if (m == 60) {
        m = 0;
        h++;
    }
}

// Function to format the timer display as a string

function getTimer() {
    // Format hours, minutes, seconds, and milliseconds with leading zeros if necessary
    
    return (h < 10 ? "0" + h : h) + " : " + (m < 10 ? "0" + m : m) + " : " + (s < 10 ? "0" + s : s) + " : " + (ms < 10 ? "0" + ms : ms);
}

// Function to stop the timer

function stop() {
    // Call stopTimer function to clear the interval and stop the timer
    
    stopTimer();
}

// Function to clear the timer interval and stop the timer
function stopTimer() {

    // Clear the interval using the timer variable

    clearInterval(timer);

    // Set the timer variable to false to indicate that the timer is not running
    timer = false;
}

// Function to reset the timer
function reset() {
    // Stop the timer
    stopTimer();
    // Reset milliseconds, seconds, minutes, and hours to 0
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    // Update the display with the reset timer value
    display.innerHTML = getTimer();
}

// Function to restart the timer
function restart() {
    // Check if the timer is running
    if (timer) {
        // Reset the timer
        reset();
        // Start the timer
        start();
    }
}

// Function to record a lap
function lap() {
    // Check if the timer is running
    if (timer) {
        // Create a new list item element
        var li = document.createElement('li');
        // Set the inner HTML of the list item to the current timer value
        li.innerHTML = getTimer();
        // Append the list item to the laps element
        laps.appendChild(li);
    }
}

// Function to reset the laps
function resetlap() {
    // Clear the inner HTML of the laps element
    laps.innerHTML = "";
}