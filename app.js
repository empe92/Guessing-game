const number = Math.floor(Math.random()*100);
const submit = document.querySelector("#btn");
const resultView = document.querySelector("#result");
const form = document.querySelector("#content");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let userGuess = form.elements.guess.value;
    if (userGuess < number) {
        resultView.innerHTML = 'TRY HIGHER!'
        }
        else if (userGuess > number) {
        resultView.innerHTML = 'TRY LOWER!'
        }
        else {
            resultView.innerHTML = 'YOU WIN!'
        }
});




