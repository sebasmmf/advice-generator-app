const spanId = document.querySelector('#id');
const pAdvice = document.querySelector('.advice');
const btnDice = document.querySelector('.btn-dice');

btnDice.addEventListener('click', randomAdvice);

async function randomAdvice() {
    const data = await getAdvice();

    if (data) {
        showData(data);
    }
}

async function getAdvice() {
    const url = 'https://api.adviceslip.com/advice';

    try {
        const response = await fetch(url);
        return await response.json();

    } catch (error) {
        console.log(error);
    }

}

function showData({slip}) {
    const { id, advice } = slip;

    spanId.textContent = `#${id}`;
    pAdvice.textContent = `"${advice}"`;
}