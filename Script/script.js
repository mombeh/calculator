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
    
    const result = Function(`"use strict"; return (${display.value})`)()
    display.value = Number.isFinite(result) ? result : 'Error'
  } catch (error) {
    display.value = 'Error'
  }
}

window.appendToDisplay = appendToDisplay
window.clearDisplay = clearDisplay
window.calculate = calculate
