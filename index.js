const sectionOne = document.querySelector('.box__content1');
const sections = document.querySelectorAll('section')

const options = {
    root: null, // it is viewport
    threshold: 0,
    rootMargin: "-150px"
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle('inverse')
    })
}, options)

sections.forEach(section => {
    observer.observe(section)
})

