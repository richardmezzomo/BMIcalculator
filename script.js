const form = document.querySelector('form')
const inputWeight = document.querySelector('#inputWeight')
const inputHeight = document.querySelector('#inputHeight')

form.onsubmit = handleSubmit

const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),
  
  open() {
    Modal.wrapper.classList.add('open')
  },

  close() {
    Modal.wrapper.classList.remove('open')
  }
}

function handleSubmit (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  const message = `Your BMI is ${result}`
  
  Modal.message.innerText = message
  Modal.open()
}

Modal.buttonClose.onclick = () => Modal.close()

function IMC(weight, height) {
  let result = (weight / ((height / 100) ** 2)).toFixed(1) 
  return result
}