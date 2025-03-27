const display = document.getElementById('display')

function appendToDisplay(input) {
  display.value += input
}

function clearDisplay() {
  display.value = ''
}

function calculate() {
  try {
    if (typeof math !== 'undefined') {
      display.value = math.evaluate(display.value)
    } else {
      throw new Error('Math.js not loaded')
    }
  } catch (error) {
    display.value = 'Error'
  }
}
// Attach functions to the window to prevent linter warnings
window.appendToDisplay = appendToDisplay
window.clearDisplay = clearDisplay
window.calculate = calculate
