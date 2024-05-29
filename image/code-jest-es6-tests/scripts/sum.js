import { elements } from "./elements.js";
import { sum } from "./functions.js";

const { calculateSumBtn, numberOneEl, numberTwoEl, totalSumText } = elements;

function calculateSum()
{
    const result = sum(numberOneEl.valueAsNumber, numberTwoEl.valueAsNumber)
    totalSumText.innerText = result;
}

calculateSumBtn.addEventListener('click', () => calculateSum())