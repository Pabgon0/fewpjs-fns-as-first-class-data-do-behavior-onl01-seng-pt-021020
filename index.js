/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  const time = parseInt(timeString, 10)
  if (time < 12) return "Good Morning"
  else if (time > 17) return "Good Evening"
  else return "Good Afternoon"
}

function displayMessage(string) {
  document.getElementById("greeting").innerText = string
}
