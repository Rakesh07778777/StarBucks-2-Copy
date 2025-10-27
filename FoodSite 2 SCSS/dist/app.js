const button = document.querySelectorAll('.footer__toggle')

button.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        let parent = toggle.closest('.footer__container-items')
        parent.classList.toggle('active')
    })
})