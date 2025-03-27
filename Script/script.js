const display = document.getElementById('display')

function appendToDisplay (input) {
  display.value += input
}

function clearDisplay () {
  display.value = ''
}

function calculate () {
  try {
    // Use math.js for safe calculations
    display.value = math.evaluate(display.value)
  } catch (error) {
    display.value = 'Error'
  }
}
// Attach functions to the window to prevent linter warnings
window.appendToDisplay = appendToDisplay
window.clearDisplay = clearDisplay
window.calculate = calculate
