// HW 1

const gmailRegExp = /^(([^<>(){}[\].!?#%^-_,=+*&"':\s@]+(\.[^<>(){}[\].!?#%^-_,=+*&"':\s@]+)*)|(".+"))@(([^<>(){}[\].!?#%^-_,=+*&"':\s@]+\.)+[^<>(){}[\].!?#%^-_,=+*&"':\s@]{2,})$/iu
const gmailInput = document.getElementById('gmail_input')
const gmailButton = document.getElementById("gmail_button");

function isEmailValid(value) {
    return gmailRegExp.test(value)
}
function gmail(val) {
    if (isEmailValid(val)) {
        gmailInput.style.borderColor = 'green'
    } else {
        gmailInput.style.borderColor = 'red'
    }
}


gmailButton.addEventListener("click", event => {
    event.preventDefault()
    gmail(gmailInput.value)
})



// HW2
const block = document.querySelector('.child_block')

let positionX = 0

const handleBlockMove = () => {
    if (positionX <= 440){
        positionX += 16
        block.style.left = `${positionX}px`
        setTimeout(handleBlockMove,100)
    }
}
handleBlockMove()
