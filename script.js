const form = document.querySelector('form')
const inputWeight = document.querySelector('#inputWeight')
const inputHeight = document.querySelector('#inputHeight')
const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')

form.onsubmit = handleSubmit

const Modal = {
  open() {
    modalWrapper.classList.add('open')
  },

  close() {
    modalWrapper.classList.remove('open')
  }
}

function handleSubmit (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  const message = `Your BMI is ${result}`
  
  modalMessage.innerText = message
  Modal.open()
}

modalBtnClose.onclick = () => Modal.close()

function IMC(weight, height) {
  let result = (weight / ((height / 100) ** 2)).toFixed(1) 
  return result
}