const answer = document.querySelector("#answer")
const inputQuestion = document.querySelector("#inputQuestion")
const askButton = document.querySelector('#askButton')
const triangle = document.querySelector('#triangle')
const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
]

function ask() {

  if(inputQuestion.value == "") {
    alert("Type your question.")
    return
  }

  askButton.classList.add('hide')
  askButton.setAttribute("disabled", true)
  inputQuestion.classList.add('hide')

  answer.innerHTML = answers[Math.floor(Math.random() * answers.length)]
  
  answer.classList.add('show')
  triangle.classList.add('show')
  // answer.style.opacity = 1;

  setTimeout(function() {
    // answer.style.opacity = 0;
    askButton.classList.remove('hide')
    askButton.removeAttribute("disabled")
    inputQuestion.classList.remove('hide')
    triangle.classList.remove('show')
    answer.classList.remove('show')
  }, 2000)
}
