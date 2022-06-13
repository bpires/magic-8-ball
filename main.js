const answer = document.querySelector("#answer")
const inputQuestion = document.querySelector("#inputQuestion")
const askButton = document.querySelector('#askButton')
const triangle = document.querySelector('#triangle')
const control = document.querySelector('#control')
const audio = document.querySelector('#audio')
const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
]

function ask() {

  if(inputQuestion.value == "") {
    inputQuestion.placeholder='Type your question!'
    inputQuestion.classList.add('error')
    setTimeout(function() {
      inputQuestion.classList.remove('error')
    }, 750)
    return
  }

  askButton.classList.add('hide')
  askButton.setAttribute("disabled", true)
  inputQuestion.classList.add('hide')

  answer.innerHTML = answers[Math.floor(Math.random() * answers.length)]
  
  answer.classList.add('show')
  triangle.classList.add('show')

  setTimeout(function() {
    askButton.classList.remove('hide')
    askButton.removeAttribute("disabled")
    inputQuestion.classList.remove('hide')
    triangle.classList.remove('show')
    answer.classList.remove('show')
    inputQuestion.value = ""
    inputQuestion.placeholder='Ask me anything...'
  }, 2000)
}

let a=1;
let b=0;

askButton.addEventListener("click", function() {
  if(a == 1 && b == 0) {
    audio.play()
    b++
    a--
  } return
 });


control.addEventListener("click", function() {
  if(a == 0) {
    audio.pause()
    a++
    control.style.opacity="0.6"
  } else {
    audio.play();
    a--
    b++
    control.style.opacity="1"
  }
 });
