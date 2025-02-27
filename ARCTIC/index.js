document.addEventListener('contextmenu', function(e) {
    e.preventDefault()
})

let corNow

let quest = document.getElementById('quest')
let ans1 = document.getElementById('ans1')
let ans2 = document.getElementById('ans2')
let ans3 = document.getElementById('ans3')
let ans4 = document.getElementById('ans4')
let next = document.getElementById('next')
let img = document.getElementById('img')
let all = document.getElementById('all')
let isChanging = false

let corA = new Audio()
corA.src = "correct.mp3"

let uncorA = new Audio()
uncorA.src = "uncorrect.mp3"

let taskNow = 0
let q_num = document.getElementById('q_num')

const QUESTS = [
    {
        quest: "Какое животное считается живым символом Арктики?",
        ans1: "ПИНГВИН",
        ans2: "БЕЛЫЙ МЕДВЕДЬ",
        ans3: "КЕНГУРУ",
        ans4: "СЕВЕРНАЯ ПАНДА",
        correct: 2,
        src: "task0.jpg",
    },
    {
        quest: "Какой океан окружает Арктику?",
        ans1: "АТЛАНТИЧЕСКИЙ",
        ans2: "ИНДИЙСКИЙ",
        ans3: "СЕВЕРНЫЙ ЛЕДОВИТЫЙ",
        ans4: "ТИХИЙ",
        correct: 3,
        src: "task1.jpg",
    },
    {
        quest: "Как называется самый крупный остров в Арктике?",
        ans1: "ГРЕНЛАНДИЯ",
        ans2: "ИСЛАНДИЯ",
        ans3: "САХАЛИН",
        ans4: "НОВАЯ ЗЕМЛЯ",
        correct: 1,
        src: "task2.jpg",
    },
    {
        quest: "Какой природный ресурс активно добывается в Арктике?",
        ans1: "ЗОЛОТО",
        ans2: "НЕФТЬ И ГАЗ",
        ans3: "ПРИРОДНЫЙ ЖЕМЧУГ",
        ans4: "АЛМАЗЫ",
        correct: 2,
        src: "task3.jpg",
    },
    {
        quest: "В какое время года в Арктике наблюдается полярная ночь?",
        ans1: "ЗИМА",
        ans2: "ВЕСНА",
        ans3: "ЛЕТО",
        ans4: "ОСЕНЬ",
        correct: 1,
        src: "task4.jpg",
    },
    {
        quest: "Какой из этих городов находится в Арктической зоне?",
        ans1: "ВЛАДИВОСТОК",
        ans2: "ЧЕЛЯБИНСК",
        ans3: "АРХАНГЕЛЬСК",
        ans4: "МУРМАНСК",
        correct: 4,
        src: "task5.jpg",
    },
    {
        quest: "Какой вид льдов образуется в результате длительного цикла замерзаний морской воды?",
        ans1: "ДРЕЙФУЮЩИЕ ЛЬДЫ",
        ans2: "ЛЕДЯНЫЕ ШАПКИ",
        ans3: "ПАКОВЫЕ ЛЬДЫ",
        ans4: "ЛЕДЯНЫЕ ПОЛЯ",
        correct: 3,
        src: "task6.jpg",
    },
    {
        quest: "Какое из этих природных явлений часто наблюдается в Арктике и связан с изменением температуры?",
        ans1: "СНЕГОПАД",
        ans2: "ЛАВИНЫ",
        ans3: "ТАЯНИЕ ВЕЧ. МЕРЗЛОТЫ",
        ans4: "УРАГАНЫ",
        correct: 3,
        src: "task7.jpg",
    },
    {
        quest: "Какое из этих животных умеет нырять на глубину до 600 метров?",
        ans2: "БЕЛЫЙ МЕДВЕДЬ",
        ans1: "РЫБА-КЛОУН",
        ans3: "ПИНГВИН",
        ans4: "МОРСКАЯ НЕРПА",
        correct: 4,
        src: "task8.jpg",
    },
    {
        quest: "Какой из этих видов рыб является характерным для арктических вод?",
        ans1: "СКУМБРИЯ",
        ans2: "ТРЕСКА",
        ans3: "ЛОСОСЬ",
        ans4: "РЫБА-КЛОУН",
        correct: 2,
        src: "task9.jpg",
    },
]

function changeQuest() {
    let questNow = QUESTS[taskNow]
    ++taskNow
    img.style.filter = 'blur(4.5vh)'
    isChanging = true
    ans1.classList.remove('cor')
    ans2.classList.remove('cor')
    ans3.classList.remove('cor')
    ans4.classList.remove('cor')
    ans1.disabled = false
    ans2.disabled = false
    ans3.disabled = false
    ans4.disabled = false
    all.style.filter = 'blur(1vw)'
    setTimeout(() => {
            q_num.textContent = taskNow
            img.src = questNow.src
            quest.textContent = questNow.quest
            ans1.textContent = questNow.ans1
            ans2.textContent = questNow.ans2
            ans3.textContent = questNow.ans3
            ans4.textContent = questNow.ans4
            corNow = questNow.correct
            next.disabled = true
            all.style.filter = 'none'
            setTimeout(() => {
                isChanging = false
            }, 500)           
        }, 500)
}
changeQuest()

ans1.addEventListener('click', function(e) {
    if (corNow === 1 && !isChanging) {
        corA.currentTime = 0
        corA.play()
        ans1.classList.add('cor')
        ans1.disabled = true
        ans2.disabled = true
        ans3.disabled = true
        ans4.disabled = true
        next.disabled = false
        img.style.filter = 'none'
    }
    if (corNow !== 1 && !isChanging) {
        uncorA.currentTime = 0
        uncorA.play()
        ans1.disabled = true
    }
})

ans2.addEventListener('click', function(e) {
    if (corNow === 2 && !isChanging) {
        corA.currentTime = 0
        corA.play()
        ans2.classList.add('cor')
        ans1.disabled = true
        ans2.disabled = true
        ans3.disabled = true
        ans4.disabled = true
        next.disabled = false
        img.style.filter = 'none'
    }
    if (corNow !== 2 && !isChanging) {
        uncorA.currentTime = 0
        uncorA.play()
        ans2.disabled = true
    }
})

ans3.addEventListener('click', function(e) {
    if (corNow === 3 && !isChanging) {
        corA.currentTime = 0
        corA.play()
        ans3.classList.add('cor')
        ans1.disabled = true
        ans2.disabled = true
        ans3.disabled = true
        ans4.disabled = true
        next.disabled = false
        img.style.filter = 'none'
    }
    if (corNow !== 3 && !isChanging) {
        uncorA.currentTime = 0
        uncorA.play()
        ans3.disabled = true
    }
})

ans4.addEventListener('click', function(e) {
    if (corNow === 4 && !isChanging) {
        corA.currentTime = 0
        corA.play()
        ans4.classList.add('cor')
        ans1.disabled = true
        ans2.disabled = true
        ans3.disabled = true
        ans4.disabled = true
        next.disabled = false
        img.style.filter = 'none'
    }
    if (corNow !== 4 && !isChanging) {
        uncorA.currentTime = 0
        uncorA.play()
        ans4.disabled = true
    }
})
