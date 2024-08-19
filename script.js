const id = document.getElementById("advice-id");
const advice = document.getElementById("advice");

const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json()
    id.innerHTML = `ADVICE #${data.slip.id}`;
    advice.innerHTML = `"${data.slip.advice}"`;

}

const setadvice = setInterval(getAdvice, 6000);

window.addEventListener('load', getAdvice());