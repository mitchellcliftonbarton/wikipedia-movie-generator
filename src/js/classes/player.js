import typeWords from "../lib/typeWords"

export default class Player {
  constructor({ el, sentences }) {
    this.el = el
    this.sentences = sentences
    this.currentSentenceIndex = 0
    this.currentChunkIndex = 0

    this.init()
  }

  init() {
    this.play()
  }

  play() {
    const currentSentence = this.sentences[this.currentSentenceIndex]
    const currentChunk = currentSentence[this.currentChunkIndex]

    // if sentence is a break, skip it
    if (currentSentence.break) {
      this.el.innerHTML += '<br><br>'
      this.currentSentenceIndex++  
      setTimeout(() => {
        this.play()
      }, 800)
      return
    }

    // if sentence is the last one, stop
    if (this.currentSentenceIndex === this.sentences.length - 1) {
      return
    }

    // if sentence is not the last one, type current chunk
    typeWords(this.el, currentChunk)
      .then(() => {
        if (this.currentChunkIndex === currentSentence.length - 1) {
          this.currentSentenceIndex++
          this.currentChunkIndex = 0

          setTimeout(() => {
            this.play()
          }, 500)
        } else {
          this.currentChunkIndex++
          this.el.innerHTML += '<span style="color: red;"> | </span>'

          this.play()
        }
      })
  }
}