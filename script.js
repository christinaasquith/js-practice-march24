const text= document.querySelector('.text') 
const secretDiv = document.querySelector('.chea')
const keys =[]
const secretCode = ['C','H','E','A']

const confettiSettings = {
    target: 'my-canvas',
    size: 1.4,
    max: 150
    
}
const confetti = new ConfettiGenerator(confettiSettings)

function keysDetector (e) {
    console.log(e.key)
    keys.push(e.key)
    if (keys.length > secretCode.length) {
        keys.shift()
    }
    if (JSON.stringify(keys) === JSON.stringify(secretCode)) {
        secretDiv.style.display = 'block'
        text.innerHTML = 'Bring Back Chea!'
        confetti.render()
        AnimationEffect({
            targets: 'body',
            rotate: 'lturn',
            backgroundColor: '#fcba03',
            duration: 2000,
        })
    }
}

window.addEventListener('keyup', keysDetector)

 