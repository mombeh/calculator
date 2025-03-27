const display = document.getElementById('display')

function appendToDisplay (input) {
  display.value += input
}

function clearDisplay () {
  display.value = ''
}

function calculate () {
  try {
    // Allow only numbers, basic math operators, decimals, and parentheses
    if (!/^[\d+\-*/(). ]+$/.test(display.value)) {
      throw new Error('Invalid input')
    }

    // Evaluate the expression safely
    const result = Function(`"use strict"; return (${display.value})`)()
    
    // If result is a valid finite number, display it; otherwise, show 'Error'
    display.value = Number.isFinite(result) ? result : 'Error'
  } catch (error) {
    display.value = 'Error'
  }
}

window.appendToDisplay = appendToDisplay
window.clearDisplay = clearDisplay
window.calculate = calculate
