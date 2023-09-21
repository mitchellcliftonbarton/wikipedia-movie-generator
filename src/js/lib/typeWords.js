// Adapted from Damon Zucconi's "Debt"
import decode from './decode'

export default (el, message) => {
  const letters = decode(message).split('')
    .map(letter => `<span class='letter'>${letter}</span>`)
    .concat([' ', ' ', ' '])

  return letters.reduce((promise, letter) =>
    promise.then(() => new Promise(resolve => {
      setTimeout(() => {
        resolve(el && (el.innerHTML += letter))
      }, 50)
    })), Promise.resolve(true))
}