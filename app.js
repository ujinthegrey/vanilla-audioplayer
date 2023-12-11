const player = document.querySelector('.player')
const playBtn = document.querySelector('.play')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const audio = document.querySelector('.audio')
const progressContainer = document.querySelector('.progress__container')
const progressBar = document.querySelector('.progress')
const songTitle = document.querySelector('.song')
const cover = document.querySelector('.cover')
const coverImg  = document.querySelector('.cover__img')
const playStop = document.querySelector('.play-stop')

// array of song names
const songNames = [
    'Почему мы любим книги Джона Пайпера - 1',
    'Почему мы любим книги Джона Пайпера - 2',
    'Почему мы любим книги Джона Пайпера - 3',
    'Таковых есть Царствие Небесное - 1',
    'Таковых есть Царствие Небесное - 2',
    'Таковых есть Царствие Небесное - 3',
    'Огонь молодости',
    'Успешный успех',
    'Объём Евангелия',
    'Оптимистичное начало Евангелия',
    'Евангелие и агностицизм',
    'Евангелие и Библия'
]

const songFileNames = [
    '01_why_piper_1',
    '02_why_piper_2',
    '03_why_piper_3',
    '04_of_such_is_the_kingdoom_1',
    '05_of_such_is_the_kingdoom_2',
    '06_of_such_is_the_kingdoom_3',
    '07_fire_of_youth',
    '08_success',
    '09_euangelion_1',
    '10_euangelion_2',
    '11_euangelion_3',
    '12_euangelion_4'
]

// current song
let songIndex = 0

function loadSong(songIndex) {
    const songName = songNames[songIndex]
    const songFileName = songFileNames[songIndex]
    songTitle.innerHTML = songName
    audio.src = `./audio/${songFileName}.mp3`
}
loadSong(songIndex)

function playSong() {
    player.classList.add('playing')
    cover.classList.add('active')
    playStop.src = './img/pause.png'
    audio.play()
}

function pauseSong() {
    player.classList.remove('playing')
    cover.classList.remove('active')
    playStop.src = './img/play.png'
    audio.pause()
}

playBtn.onclick = () => {
    const isPlaying = player.classList.contains('playing')
    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
}

nextBtn.onclick = () => {
    const isPlaying = player.classList.contains('playing')
    songIndex++
    if (songIndex > songFileNames.length - 1) songIndex = 0
    loadSong(songIndex)
    if (isPlaying) playSong()
}

prevBtn.onclick = () => {
    const isPlaying = player.classList.contains('playing')
    songIndex--
    if (songIndex < 0) songIndex = songFileNames.length - 1
    loadSong(songIndex)
    if (isPlaying) playSong()
}