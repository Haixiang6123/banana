const $leftEye = document.querySelector('.left-eye')
const $rightEye = document.querySelector('.right-eye')
const $tongue = document.querySelector('.tongue')

$tongue.addEventListener('click', () => {
    document.body.classList.toggle('wink')

    $leftEye.classList.toggle('wink')
    $rightEye.classList.toggle('wink')
})
