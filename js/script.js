import {Modal} from './modal.js'
import { AlertError } from './alert-error.js'
import { notANumber, calculateBMI } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#inputWeight')
const inputHeight = document.querySelector('#inputHeight')

form.onsubmit = handleSubmit


function handleSubmit (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if(weightOrHeightIsNotANumber) {
    AlertError.open() 
    return;
  } 

  const result = calculateBMI(weight, height)
  displayResultMessage(result)
}

form.oninput = () => AlertError.close()

function displayResultMessage (result) {
  let message;
  if (result < 18.5) {
    message = `Your BMI is ${result} and the category is: Underweight`
  } else if (result > 18.5 && result < 24.9) {
    message = `Your BMI is ${result} and the category is: Normal`
  } else if (result > 25.0 && result < 29.9) {
    message = `Your BMI is ${result} and the category is: Overweight`
  } else if (result > 30.0 && result < 39.9) {
    message = `Your BMI is ${result} and the category is: Obesity`
  } else if (result > 40) {
    message = `Your BMI is ${result} and the category is: Severe Obesity`
  }
  
  Modal.message.innerText = message
  Modal.open()
}
