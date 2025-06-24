let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('dm-active')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    document.body.classList.remove('not-darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.add('not-darkmode')
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode == "active") enableDarkmode()



themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})