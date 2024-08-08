let barsBtn = document.querySelector('.fa-bars')
let xmarkBtn = document.querySelector('.fa-xmark')

barsBtn.addEventListener('click', () => {
    barsBtn.style.display = 'none'
    xmarkBtn.style.display = 'inline-block'
})

xmarkBtn.addEventListener('click', () => {
    barsBtn.style.display = 'inline-block'
    xmarkBtn.style.display = 'none'
})