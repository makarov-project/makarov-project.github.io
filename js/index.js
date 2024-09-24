let quest = 1



const COLORS = {
	correct: '#1adf00'
}

const QUESTIONS = [
	{
		id: 'moscow',
		description: 'moscow',
		nonchecked: true
	},

	{
		id: 'spb',
		description: 'spb',
		nonchecked: true
	}
]

function getRandomQuestion(max) {
	let rnd = Math.floor(Math.random() * max)
	return QUESTIONS[rnd]
}

let rndQuest = getRandomQuestion(2)

function checkAnswer(cityName) {
	let questDescript = document.getElementById('questDescription')
	let city = document.getElementById(cityName)

	if ( rndQuest.id === cityName) {
		city.style.fill = COLORS.correct
		rndQuest.nonChecked = false
		while (rndQuest.nonchecked) {
			rndQuest = getRandomQuestion(2)
		}
		questDescript.textContent = rndQuest.description
	}
}

