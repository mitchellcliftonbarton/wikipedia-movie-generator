import rand from './rand'

function stringChunk(string) {
  const array = []
  const tempString = string
  let currentIndex = 0

  // determine how many spaces are in sentence
  const spaceCount = string.match(/\s/g).length

  // get max and min values for a random number
  const maxNum = Math.floor(spaceCount * .333333)
  const minNum = spaceCount > 6 ? 3 : 1
  const randomNum = rand(minNum, maxNum)

  // get all indexes of spaces
  const spaceIndexes = []

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      spaceIndexes.push(i)
    }
  }

  // get random number index values from spaceIndexes
  const shuffledIndexes = spaceIndexes.sort(() => Math.random() - 0.5)
  const randomIndexes = shuffledIndexes.slice(0, randomNum)

  // sort randomIndexes array from lowest to highest
  randomIndexes.sort((a, b) => a - b)

  // loop through randomIndexes array
  for (let i = 0; i < randomIndexes.length + 1; i++) {
    if (i === 0) {
      array.push(tempString.slice(0, randomIndexes[i]))
    }

    if (i > 0) {
      array.push(tempString.slice(randomIndexes[i - 1], randomIndexes[i]))
    }
  }

  return array
}

export default function flattenSentences(paragraphs) {
  const sentences = paragraphs.reduce((acc, paragraph, currentIndex) => {
    const sentenceArray = paragraph.sentences.map(sentence => {
      return stringChunk(sentence.text)
    })

    // if not last item in array, add break
    if (currentIndex !== paragraphs.length - 1) {
      sentenceArray.push({ break: true })
    }

    return acc.concat(sentenceArray)
  }, [])

  return sentences
}