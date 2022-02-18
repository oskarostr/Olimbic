const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav__links')[0]
const allNavItems = document.querySelectorAll('.nav__item')

const handleNav = () => {
    navbarLinks.classList.toggle('active')
    toggleButton.classList.toggle('open')

    allNavItems.forEach(item => {
        item.addEventListener('click', ()=> {
            navbarLinks.classList.remove('active')
            toggleButton.classList.remove('open')
        })
    })
}

toggleButton.addEventListener('click', handleNav)