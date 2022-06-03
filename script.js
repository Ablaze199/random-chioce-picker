const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    creatTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(()=> {
         e.target.value = ''
        }, 10)
        randonSelect()
    }
})

function creatTags(input) {
    const tags = input.split(','). filter(tag => tag.trim() 
    !== '').map(tag => tag.trim())
tagsEl.innerHTML = ''

tags.forEach(tags => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tags')
    tagEl.innerText = tags
    tagsEl.appendChild(tagEl)
})
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout (()=> {
        const randomTag = pickRandomTag()
        highlightTag(randomTag)
    },100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tags')
    return tags[Math.floor(Math.random()* tags.length)]
}

function highlightTag(tags) {
    tags.classList.add('highlight')
}

function unHighlightTag(tags) {
    tags.classList.remove('highlight')
}
