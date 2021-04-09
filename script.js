const $leftEye = document.querySelector('.left-eye')
const $rightEye = document.querySelector('.right-eye')

document.body.addEventListener('click', () => {
    document.body.classList.toggle('wink')

    $leftEye.classList.toggle('wink')
    $rightEye.classList.toggle('wink')
})
