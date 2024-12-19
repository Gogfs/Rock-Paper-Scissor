const optionImages = document.querySelectorAll(".option-image");
const container = document.querySelector(".container");
const resultText = document.querySelector(".result-text");
const userResult = document.querySelector(".user-result img");
const computerResult = document.querySelector(".computer-result img");


const srcImg = ['./imagens/pedra.png', './imagens/papel.png', './imagens/tesoura.png'];

const winner = {
    RR: "Draw !",
    RP: "Computer Win !",
    RS: "You Win !",
    PR: "You Win !",
    PP: "Draw !",
    PS: "Computer Win !",
    SR: "Computer Win !",
    SP: "You Win !",
    SS: "Draw !",
}

function handleOptionClick(event) {
    const clickedImage = event.currentTarget;
    const userIndex = Array.from(optionImages).indexOf(clickedImage);

    container.classList.add("start");
    resultText.textContent = "...";

    userResult.src = computerResult.src = './imagens/pedra.png';

    setTimeout(() => {
        container.classList.remove("start");

        userResult.src = srcImg[userIndex];

        const randomNumber = Math.floor(Math.random() * srcImg.length);
        computerResult.src = srcImg[randomNumber];

        const userValue = ['R', 'P', 'S'][userIndex];
        const computerrValue = ['R', 'P', 'S'][randomNumber];
        const finalResult = userValue + computerrValue;
        const status = winner[finalResult];


        resultText.textContent = status;
    }, 2000);
}

optionImages.forEach(img => {
    img.addEventListener("click", handleOptionClick);
});