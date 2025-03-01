// не судите строго



let quest = 1
let wrongs = 0
let correctAnswers = 0
let uncorrect = 0
let hint = 0
let onehint = 0

const musicSrc = {
	bg: '/js/sounds/fon.mp3', 
	victory: '/js/sounds/victory.mp3',
	click: '/js/sounds/clickSound.mp3',
	wrong: '/js/sounds/wrong.mp3',
	hint: '/js/sounds/hint.mp3',
}

function createSound(path) {
	audio = new Audio()
	audio.src = path
	return(audio)
}

const AUDIO = {
	bg: createSound(musicSrc.bg),
	victory: createSound(musicSrc.victory),
	click: createSound(musicSrc.click),
	wrong: createSound(musicSrc.wrong),
	hint: createSound(musicSrc.hint),
}
AUDIO.hint.volume = 0.3

function muteSound() {
	for (const key in AUDIO) {
        if (AUDIO.hasOwnProperty(key)) {
            const audio = AUDIO[key]
            audio.volume = 0
        }
    }
}

function returnSound() {
	for (const key in AUDIO) {
        if (AUDIO.hasOwnProperty(key)) {
            const audio = AUDIO[key]
            audio.volume = 1
        }
    }
	AUDIO.hint.volume = 0.3
}

let seconds = 0
let minutes = 0
let mseconds = 0
let interval
let timer = document.getElementById('timer')

function updateTime() {
	mseconds++
	if (mseconds === 100) {
		seconds++
		mseconds = 0
	}
	if (seconds === 60) {
		minutes++
		seconds = 0
	}
	timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${mseconds.toString().padStart(2, '0')}`
}

const startBtn = document.getElementById('start_button')
startBtn.addEventListener('click', () => {
	interval = setInterval(updateTime, 10)
})

function startGame() {
	let help = document.getElementById('help')
	let timerViewButton = document.getElementById('timerViewButton')
	let screen = document.getElementById('start_screen')
	let que = document.getElementById('question')
	AUDIO.bg.play()
	AUDIO.bg.loop = true
	AUDIO.bg.autoplay = true
	screen.style.visibility = 'hidden'
	que.style.visibility = 'visible'
	timerViewButton.style.display = 'block'
	help.style.display = 'block'
}

const COLORS = {
	correct: '#1adf00',
	wrong: '#f30000',
	normal: 'rgba(233, 233, 233, 0.562)',
	help: '#1e00ca',
	middle: '#f1ed00',
	bad: '#ff9011'
}

let answers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

let answers_count = 0

const QUESTIONS = [
	{
		id: 'moscow',
		description: 'Где находится Москва?',
		checked: false
	},

	{
		id: 'spb',
		description: 'Где находится Санкт-Петербург?',
		checked: false
	},
	
	{
		id: 'voronez',
		description: 'Где находится Воронеж?',
		checked: false
	},

	{
		id: 'nizni-novgorod',
		description: 'Где находится Нижний Новгород?',
		checked: false
	},
	
	{
		id: 'rostovND',
		description: 'Где находится Ростов-на-Дону?',
		checked: false
	},
	
	{
		id: 'volgograd',
		description: 'Где находится Волгоград?',
		checked: false
	},
	
	{
		id: 'kazan',
		description: 'Где находится Казань?',
		checked: false
	},
	
	{
		id: 'samara',
		description: 'Где находится Самара?',
		checked: false
	},
	
	{
		id: 'ufa',
		description: 'Где находится Уфа?',
		checked: false
	},
	
	{
		id: 'perm',
		description: 'Где находится Пермь?',
		checked: false
	},
	
	{
		id: 'ekaterinburg',
		description: 'Где находится Екатеринбург?',
		checked: false
	},
	
	{
		id: 'chelabinsk',
		description: 'Где находится Челябинск?',
		checked: false
	},
	
	{
		id: 'omsk',
		description: 'Где находится Омск?',
		checked: false
	},
	
	{
		id: 'novosibirsk',
		description: 'Где находится Новосибирск?',
		checked: false
	},

	{
		id: 'krasnoiarsk',
		description: 'Где находится Красноярск?',
		checked: false
	}
]

function getRandomQuestion() {
	let rnd = Math.floor(Math.random() * answers.length)
	let rnd_item = answers[rnd]
	let rand = rnd_item
	answers.splice(rnd, 1)
	return QUESTIONS[rand]
}

let rndQuest = getRandomQuestion()
let questDescript = document.getElementById('questDescription')
questDescript.textContent = rndQuest.description

function checkAnswer(cityName) {
	questDescript = document.getElementById('questDescription')
	let city = document.getElementById(cityName)

	if (rndQuest.id === cityName) {
		AUDIO.click.currentTime = 0
		AUDIO.click.play()
		++answers_count
		city.checked = true
		onehint = 0

		if (uncorrect === 0) {
			++correctAnswers
			++correctAnswers
			++correctAnswers
			city.style.fill = COLORS.correct
		}

		else if (uncorrect === 1) {
			++correctAnswers
			++correctAnswers
			city.style.fill = COLORS.middle
		}

		else if (uncorrect === 2) {
			++correctAnswers
			city.style.fill = COLORS.bad
		}

		else {
			city.style.fill = COLORS.wrong
		}

		if (answers_count === 15) {
			let que = document.getElementById('question')
			que.style.visibility = 'hidden'
			document.getElementById('help').style.display = 'none'
			document.getElementById('timerViewButton').style.display = 'none'
			document.getElementById('timer').style.display = 'none'
			AUDIO.victory.play()
			AUDIO.bg.pause()

			let screen = document.getElementById('start_screen')
			let screenBtn = document.getElementById('start_button')
			let win = document.getElementById('win')
			let result = document.getElementById('result')
			let result1 = document.getElementById('result1')
			let percent = document.getElementById('percent')
			let helps = document.getElementById('helps')
			let hints = document.getElementById('hints')

			screen.style.visibility = 'visible'
			screenBtn.style.display = 'none'
			win.style.display = 'block'

			clearInterval(interval)
			result.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${mseconds.toString().padStart(2, '0')}`

			rightPercent = Math.floor((correctAnswers / 45) * 100)

			if (rightPercent <= 30) {
				result1.textContent = 'Ты совсем не знаешь Россию😞'
			}

			else if (rightPercent <= 60) {
				result1.textContent = 'Средненько...'
			}

			else if (rightPercent <= 80 && minutes <= 2) {
				result1.textContent = 'Нормально😪 Но нужно еще постараться...'
			}

			else if (rightPercent <= 95 && minutes <= 1) {
				result1.textContent = 'Отлично!)'
			}

			else if (rightPercent <= 100 && minutes <= 1) {
				result1.textContent = 'Просто невероятно!😎'
			}

			else {
				result1.textContent = 'Даже не знаю, что сказать...'
			}

			wrong.textContent = wrongs
			percent.textContent = rightPercent + '%'
			helps.textContent = hint
			if (hint === 0) {
				hints.style.display = 'none'
			}
			setTimeout(() => {
				AUDIO.bg.play()
			}, 5000)
		}
		if (answers_count <= 14) {
			rndQuest = getRandomQuestion()
			questDescript.textContent = rndQuest.description
		}
		uncorrect = 0
		return(uncorrect)
	} 

	else if(!city.checked) {
		let arg = document.getElementById(rndQuest.id)

		if (uncorrect <= 2) {
			++wrongs
		}

		city.style.fill = COLORS.wrong
		++uncorrect
		AUDIO.wrong.currentTime = 0
		AUDIO.wrong.play()
		
		setTimeout(() => {
			city.style.fill = COLORS.normal
		}, 200)

		if (uncorrect >= 3) {
			arg.style.fill = COLORS.help
		}
	}
}

function retry() {
	document.location.reload()
}

const contextMenu = document.getElementById('context-menu')

window.addEventListener('contextmenu', function(e) {
	e.preventDefault()
	const menuWidth = contextMenu.offsetWidth
	const menuHeight = contextMenu.offsetHeight
	const posX = e.pageX
	const posY = e.pageY

	const rightSpace = window.innerWidth - posX
	const bottomSpace = window.innerHeight - posY

	contextMenu.style.left = (rightSpace < menuWidth) ? posX - menuWidth + 'px' : posX + 'px'
	contextMenu.style.top = (bottomSpace < menuHeight) ? posY - menuHeight + 'px' : posY + 'px'
	
	contextMenu.style.display = 'block'
})

window.addEventListener('click', function() {
	contextMenu.style.display = 'none'
})

function timerView() {
	let timer = document.getElementById('timer')
	let timerViewButton = document.getElementById('timerViewButton')

	if (timer.style.visibility === "hidden") {
		timer.style.visibility = "visible"
		timerViewButton.textContent = "Скрыть таймер"
	}
	else {
		timer.style.visibility = "hidden"
		timerViewButton.textContent = "Показать таймер"
	}
}

function help() {
	if (onehint === 0) {
		let arg = document.getElementById(rndQuest.id)
		uncorrect = 3
		++hint
		++onehint
		AUDIO.hint.currentTime = 0
		AUDIO.hint.play()
		arg.style.fill = COLORS.help
	}
}

let isMusicMuted = false

function changeMusic() {
	let mus_img = document.getElementById('mus_but')

	if (isMusicMuted) {
		mus_img.src = 'images/yes-aud.png'
		returnSound()
		isMusicMuted = false
	}

	else if (!isMusicMuted) {
		mus_img.src = 'images/no-aud.png'
		muteSound()
		isMusicMuted = true
	}
}

// document.getElementById('mus_but').addEventListener('click', changeMusic)
// document.getElementById('hint_but').addEventListener('click', help)