const display = document.getElementById('display')

function appendToDisplay(input) {
  display.value += input
}

function clearDisplay() {
  display.value = ''
}

function calculate() {
  try {
    display.value = new Function('return ' + display.value)()
  } catch (error) {
    display.value = 'Error'
  }
}

// Attach functions to window object to avoid linter warnings
window.appendToDisplay = appendToDisplay
window.clearDisplay = clearDisplay
window.calculate = calculate

