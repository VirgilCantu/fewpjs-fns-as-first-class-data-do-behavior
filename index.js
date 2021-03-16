/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  let parsedTime = parseInt(timeString)

  if (parsedTime < 12) {
    return "Good Morning"
  } else if (parsedTime > 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

function displayMessage(message) {
  let greeting = document.getElementById("greeting")
  greeting.innerText = message
}




/* Write your implementation of displayMessage() */
