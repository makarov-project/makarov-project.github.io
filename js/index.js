let quest = 1



const COLORS = {
	correct: '#1adf00'
}

const QUESTIONS = [
	{
		id: 'moscow',
		description: 'moscow',
		checked: false
	},

	{
		id: 'spb',
		description: 'spb',
		checked: false
	},
	
	{
		id: 'voronez',
		description: 'voronez',
		checked: false
	}
]

function getRandomQuestion(max) {
	let rnd = Math.floor(Math.random() * max)
	return QUESTIONS[rnd]
}

let rndQuest = getRandomQuestion(3)

function checkAnswer(cityName) {
	let questDescript = document.getElementById('questDescription')
	let city = document.getElementById(cityName)

	if (rndQuest.id === cityName) {
		city.style.fill = COLORS.correct
		rndQuest.checked = true

		do {
			rndQuest = getRandomQuestion(3)
		} while (rndQuest.checked === true); //или все объекты массива QUESTIONS имеют checked: true
		
		questDescript.textContent = rndQuest.description
	}
}

