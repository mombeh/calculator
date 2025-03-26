const display = document.getElementById('display')

function appendToDisplay (input) {
  display.value += input
}

function clearDisplay () {
  display.value = ''
}

function calculate () {
  try {
    // display.value = eval('3 + 3')
    display.value = eval(display.value)
  }
  catch (error) {
    display.value = 'Error'
  }
}
