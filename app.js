
document.querySelector(".btn-user").addEventListener("click", userInfo)
document.querySelector(".btn-array").addEventListener("click", arrayOperations)
document.querySelector(".btn-palindrome").addEventListener("click", palindrome)
document.querySelector(".btn-fizzbuzz").addEventListener("click", fizzBuzz)
document.querySelector(".btn-guessnum").addEventListener("click", guessNum)

function userInfo() {
  let userName = ""
  while (!userName || userName === "") {
    userName = prompt("Как вас зовут?")
  }

  let userAge = inputUserAge()
  while (!userAge || userAge === "" || isNaN(+userAge) || +userAge < 0 || +userAge > 120) {
    alert("Введите корректный возраст")
    userAge = inputUserAge()
  }

  userName = userName[0].toUpperCase() + userName.substring(1)
  alert(`Привет, ${userName}, тебе уже ${userAge} лет!`)

  document.querySelector('#username').innerHTML = userName
  document.querySelector('#userage').innerHTML = userAge
}

function inputUserAge() {
  return prompt("Сколько вам лет?")
}

function arrayOperations() {
  let array = Array.from({length: 10}, () => Math.floor(Math.random() * 100))

  let direction = ""
  while (!direction || direction === "" || (direction !== "asc" && direction !== "desc")){
    direction = prompt("Введите как хотите сортировать (asc, desc)")
  }
  sortArray(array, direction)
  alert(array)
  let sortedArray = document.querySelector('#sortedarray')
  let sumoddsquares = document.querySelector('#sumoddsquares')
  sortedArray.innerHTML = array.toString()
  sumoddsquares.innerHTML = sumOddSquares(array)
}

function sortArray(array, direction) {
  array.sort( (a, b) => a - b )
  if (direction === "asc")
    return array
  else
    return array.reverse()
}

function sumOddSquares(array) {
  return array.filter(i => i % 1 === 0 && i % 2 !== 0).reduce((sum, current) => sum + Math.pow(current, 2), 0)
}

function fizzBuzz() {
  let num = Math.ceil(Math.random() * 100)
    if (num % 15 === 0)
      alert("FizzBuzz")
    else if (num % 3 === 0)
      alert("Fizz")
    else if (num % 5 === 0)
      alert("Buzz")
    else
      alert(num)
}

function palindrome() {
  let word = prompt("Введите слово")
  if (word === word.split('').reverse().join(''))
    alert(word + " - палиндром!")
  else
    alert(word + " - не палиндром!")
}

function guessNum() {
  let numberToGuess = Math.ceil(Math.random() * 1000)
  let numberOfTries = 0
  let win = false
  let guess

  while (win === false) {

    guess = prompt("Введите число от 1 до 1000")

    numberOfTries++
    console.log(Number(guess), numberToGuess)

    if (Number(guess) === numberToGuess) {
      let answer = prompt(`Вы угадали! Количество попыток: ${numberOfTries}. Начать заново (y, n)?`)
      if (answer === "n")
        win = true;
      else {
        numberToGuess = Math.ceil(Math.random() * 1000)
        alert("Загадано новое число")
        numberOfTries = 0
      }
    }
    else if (Number(guess) < numberToGuess)
      alert("Искомое число больше!")
    else if (Number(guess) > numberToGuess)
      alert("Искомое число меньше!")
  }
}
