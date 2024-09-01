import * as alerts from './alerts.js';
import { BmiCalculator } from './bmiCalculator.js';

const kg = document.querySelector('.kg') as HTMLButtonElement;
const lb = document.querySelector('.lb') as HTMLButtonElement;
const cm = document.querySelector('.cm') as HTMLButtonElement;
const inch = document.querySelector('.in') as HTMLButtonElement;
const bmiEdit = document.querySelector('.bmi-edit') as HTMLButtonElement;
const panelEdit = document.querySelector('.panel-edit') as HTMLButtonElement;
const panelCancel = document.querySelector('.panel-cancel') as HTMLButtonElement;
const panelSave = document.querySelector('.panel-save') as HTMLButtonElement;
const coverDisplay = document.querySelector('.cover-display') as HTMLDivElement;
const weightNumber = document.querySelector('.weight-number') as HTMLParagraphElement
const heightNumber = document.querySelector('.height-number') as HTMLParagraphElement;
const weight = document.querySelector('.weight') as HTMLInputElement;
const height = document.querySelector('.height') as HTMLInputElement;
let weightType: string;
let heightType: string;


document.addEventListener('DOMContentLoaded', (): void => {
    kg.click();
    cm.click();
});

bmiEdit.addEventListener('click', (): void => {
    coverDisplay.classList.remove('hidden');
    panelEdit.classList.remove('hidden');
})


panelCancel.addEventListener('click', (): void => {
    panelEdit.classList.add('hidden');
    coverDisplay.classList.add('hidden');
})

panelSave.addEventListener('click', (): void => {
    const convertWeight = Number(weight.value);
    const convertHeight = Number(height.value);

    if (convertWeight && convertHeight) {
        if (convertWeight <= 0 && convertHeight <= 0) {
            alerts.tooltipInformation.failure('The weight and height you entered is invalid', 0, 3000)
        } else if (convertWeight <= 0) {
            alerts.tooltipInformation.failure('The weight you entered is invalid', 0, 3000)
        } else if (convertHeight <= 0) {
            alerts.tooltipInformation.failure('The height you entered is invalid', 0, 3000)
        } else {
            const instanceBmiCalculator = new BmiCalculator(convertWeight, weightType, convertHeight, heightType);
            instanceBmiCalculator.calculate();
    
            weightNumber.innerText = convertWeight +' '+ weightType;
            heightNumber.innerText = convertHeight +' '+ heightType;
            panelEdit.classList.add('hidden');
            coverDisplay.classList.add('hidden');
        }

    } else if (!convertWeight && !convertHeight) {
        alerts.tooltipInformation.failure('The weight and height you entered is invalid', 0, 3000)
    } else if (!convertWeight) {
        alerts.tooltipInformation.failure('The weight you entered is invalid', 0, 3000)
    } else if (!convertHeight) {
        alerts.tooltipInformation.failure('The height you entered is invalid', 0, 3000)
    }
})

coverDisplay.addEventListener('click', (): void => {
    panelEdit.classList.add('hidden');
    coverDisplay.classList.add('hidden');
})

// change style with click
kg.addEventListener('click', (): void => {
    weightType = 'KG';
    kg.classList.add('click-formula');
    lb.classList.remove('click-formula');
})
lb.addEventListener('click', (): void => {
    weightType = 'LB';
    lb.classList.add('click-formula');
    kg.classList.remove('click-formula');
})
cm.addEventListener('click', (): void => {
    heightType = 'CM';
    cm.classList.add('click-formula');
    inch.classList.remove('click-formula');
})
inch.addEventListener('click', (): void => {
    heightType = 'IN';
    inch.classList.add('click-formula');
    cm.classList.remove('click-formula');
})