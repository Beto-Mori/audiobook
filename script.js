const playPauseButton = document.getElementById("play-pause")
const forwardButton = document.getElementById("forward")
const backwardButton = document.getElementById("backward")
const chapterName = document.getElementById("chapter")
const chapterAudio = document.getElementById("chapter-audio")
const chapterNumber = 10
let playing = 0
let currentChapter = 1

function playTrack() {
  chapterAudio.play()
  playPauseButton.classList.remove("bi-play-circle-fill")
  playPauseButton.classList.add("bi-pause-circle-fill")
}

function pauseTrack() {
  chapterAudio.pause()
  playPauseButton.classList.remove("bi-pause-circle-fill")
  playPauseButton.classList.add("bi-play-circle-fill")
}

function playPause() {
  if (playing === 0) {
    playTrack()
    playing = 1
  } else {
    pauseTrack()
    playing = 0
  }
}

function changeTrackName() {
  chapterName.innerText = "Capítulo " + currentChapter
}

function forwardTrack() {
  if (currentChapter === chapterNumber) {
    currentChapter = 1
  } else {
    currentChapter = currentChapter + 1
  }

  chapterAudio.src = "./books/dom-casmurro/" + currentChapter + ".mp3"
  playTrack()
  playing = 1
  changeTrackName()
}

function backwardTrack() {
  if (currentChapter === 1) {
    currentChapter = chapterNumber
  } else {
    currentChapter = currentChapter - 1
  }

  chapterAudio.src = "./books/dom-casmurro/" + currentChapter + ".mp3"
  playTrack()
  playing = 1
  changeTrackName()
}

playPauseButton.addEventListener("click", playPause)
forwardButton.addEventListener("click", forwardTrack)
backwardButton.addEventListener("click", backwardTrack)
