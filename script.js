const imgButton = document.querySelectorAll('.card-image')
const answers = document.querySelectorAll('.answer')

imgButton.forEach((button, index) => {
  button.onclick = () => {

    console.log('Click')
    if (answers[index].classList.contains('invisible')) {
      answers[index].classList.remove('invisible')
    } else {
      answers[index].classList.add('invisible')
    }
  }
})
