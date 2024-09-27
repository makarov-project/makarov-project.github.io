let quest = 1



const COLORS = {
	correct: '#1adf00'
}

let answers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

let answers_count = 0

const QUESTIONS = [
	{
		id: 'moscow',
		description: 'Где находится Москва?'
	},

	{
		id: 'spb',
		description: 'Где находится Санкт-Петербург?'
	},
	
	{
		id: 'voronez',
		description: 'Где находится Воронеж?'
	},

	{
		id: 'nizni-novgorod',
		description: 'Где находится Нижний Новгород?'
	},
	
	{
		id: 'rostovND',
		description: 'Где находится Ростов-на-Дону?'
	},
	
	{
		id: 'volgograd',
		description: 'Где находится Волгоград?'
	},
	
	{
		id: 'kazan',
		description: 'Где находится Казань?'
	},
	
	{
		id: 'samara',
		description: 'Где находится Самара?'
	},
	
	{
		id: 'ufa',
		description: 'Где находится Уфа?'
	},
	
	{
		id: 'perm',
		description: 'Где находится Пермь?'
	},
	
	{
		id: 'ekaterinburg',
		description: 'Где находится Екатеринбург?'
	},
	
	{
		id: 'chelabinsk',
		description: 'Где находится Челябинск?'
	},
	
	{
		id: 'omsk',
		description: 'Где находится Омск?'
	},
	
	{
		id: 'novosibirsk',
		description: 'Где находится Новосибирск?'
	},

	{
		id: 'krasnoiarsk',
		description: 'Где находится Красноярск?'
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
		city.style.fill = COLORS.correct
		++answers_count
		if (answers_count === 15) {
			questDescript.textContent = 'Молодец! Ты победил!'
		}
		rndQuest = getRandomQuestion()
		questDescript.textContent = rndQuest.description
	}
}

