/* Global Rules */


// Create CountDown Timer


// Set the date to countdown to

var countdownDate        = new Date("April 18, 2023 23:59:59").getTime(),
	
	countDiv             = document.getElementById('counter'),
	
	passedMilliseconds,
	
	countdownTimer = setInterval(function () {
		
		'use strict'
		
		passedMilliseconds();
		
	}, 1000);


// Update the countdown every second

function passedMilliseconds() {
	
	'use strict';
	
  	// Get the current date and time
	
  	var now = new Date().getTime();

  	// Calculate the time remaining
	
  	var timeRemaining = countdownDate - now;

  	// Calculate days, hours, minutes, and seconds remaining
	
  	var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
	
  	var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	
  	var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
	
  	var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
	

  	// Display the countdown in an HTML element
	
  	countDiv.innerHTML = `

	  <span class="days">${days.toString().padStart(3, "0").charAt(0)}</span>
	  <span class="days">${days.toString().padStart(2, "0").charAt(1)}</span>
	  <span class="colon">${':'}</span>
	  <span class="hours">${hours.toString().padStart(2, "0").charAt(0)}</span>
	  <span class="hours">${hours.toString().padStart(2, "0").charAt(1)}</span>
	  <span class="colon">${':'}</span>
	  <span class="minutes">${minutes.toString().padStart(2, "0").charAt(0)}</span>
	  <span class="minutes">${minutes.toString().padStart(2, "0").charAt(1)}</span>
	  <span class="colon">${':'}</span>
	  <span class="seconds">${seconds.toString().padStart(2, "0").charAt(0)}</span>
	  <span class="seconds">${seconds.toString().padStart(2, "0").charAt(1)}</span>

	`;

  	// If the countdown is finished, stop the timer
	
  	if (timeRemaining <= 0) {
	  
    	clearInterval(countdownTimer);
	  
    	countDiv.innerHTML = "EXPIRED";
	  
  	}
	
}














