const answer = document.querySelector("#answer")
const inputQuestion = document.querySelector("#inputQuestion")
const askButton = document.querySelector('#askButton')
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

  askButton.setAttribute("disabled", true)

  const question = "<div>" + inputQuestion.value + "</div>"

  const  answersTotal = answers.length
  const randomNumber = Math.floor(Math.random() * answersTotal)

  answer.innerHTML = question + answers[randomNumber]

  answer.style.opacity = 1;

  setTimeout(function() {
    answer.style.opacity = 0;
    askButton.removeAttribute("disabled")
  }, 3200)
}
