const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord;

const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    console.log(randomObj);
}

initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if (userWord !== correctWord) return alert(`Oops! ${userWord} is not the correct word`);
    alert(`Congratulations! ${userWord.toUpperCase()} is the correct word`);
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);