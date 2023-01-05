export {notANumber, calculateBMI}

function notANumber (value) {
  return isNaN(value) || value == ''
}

function calculateBMI(weight, height) {
  let result = (weight / ((height / 100) ** 2)).toFixed(1) 
  return result
}
 