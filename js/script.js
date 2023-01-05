import {Modal} from './modal.js'
const form = document.querySelector('form')
const inputWeight = document.querySelector('#inputWeight')
const inputHeight = document.querySelector('#inputHeight')

form.onsubmit = handleSubmit

function handleSubmit (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  const message = `Your BMI is ${result}`
  
  Modal.message.innerText = message
  Modal.open()
}

function IMC(weight, height) {
  let result = (weight / ((height / 100) ** 2)).toFixed(1) 
  return result
}

