import * as alerts from './alerts.js';
import { BmiCalculator } from './bmiCalculator.js';
const kg = document.querySelector('.kg');
const lb = document.querySelector('.lb');
const cm = document.querySelector('.cm');
const inch = document.querySelector('.in');
const bmiEdit = document.querySelector('.bmi-edit');
const panelEdit = document.querySelector('.panel-edit');
const panelCancel = document.querySelector('.panel-cancel');
const panelSave = document.querySelector('.panel-save');
const coverDisplay = document.querySelector('.cover-display');
const weightNumber = document.querySelector('.weight-number');
const heightNumber = document.querySelector('.height-number');
const weight = document.querySelector('.weight');
const height = document.querySelector('.height');
let weightType;
let heightType;
document.addEventListener('DOMContentLoaded', () => {
    kg.click();
    cm.click();
});
bmiEdit.addEventListener('click', () => {
    coverDisplay.classList.remove('hidden');
    panelEdit.classList.remove('hidden');
});
panelCancel.addEventListener('click', () => {
    panelEdit.classList.add('hidden');
    coverDisplay.classList.add('hidden');
});
panelSave.addEventListener('click', () => {
    const convertWeight = Number(weight.value);
    const convertHeight = Number(height.value);
    if (convertWeight && convertHeight) {
        if (convertWeight <= 0 && convertHeight <= 0) {
            alerts.tooltipInformation.failure('The weight and height you entered is invalid', 0, 3000);
        }
        else if (convertWeight <= 0) {
            alerts.tooltipInformation.failure('The weight you entered is invalid', 0, 3000);
        }
        else if (convertHeight <= 0) {
            alerts.tooltipInformation.failure('The height you entered is invalid', 0, 3000);
        }
        else {
            const instanceBmiCalculator = new BmiCalculator(convertWeight, weightType, convertHeight, heightType);
            instanceBmiCalculator.calculate();
            weightNumber.innerText = convertWeight + ' ' + weightType;
            heightNumber.innerText = convertHeight + ' ' + heightType;
            panelEdit.classList.add('hidden');
            coverDisplay.classList.add('hidden');
        }
    }
    else if (!convertWeight && !convertHeight) {
        alerts.tooltipInformation.failure('The weight and height you entered is invalid', 0, 3000);
    }
    else if (!convertWeight) {
        alerts.tooltipInformation.failure('The weight you entered is invalid', 0, 3000);
    }
    else if (!convertHeight) {
        alerts.tooltipInformation.failure('The height you entered is invalid', 0, 3000);
    }
});
coverDisplay.addEventListener('click', () => {
    panelEdit.classList.add('hidden');
    coverDisplay.classList.add('hidden');
});
// change style with click
kg.addEventListener('click', () => {
    weightType = 'KG';
    kg.classList.add('click-formula');
    lb.classList.remove('click-formula');
});
lb.addEventListener('click', () => {
    weightType = 'LB';
    lb.classList.add('click-formula');
    kg.classList.remove('click-formula');
});
cm.addEventListener('click', () => {
    heightType = 'CM';
    cm.classList.add('click-formula');
    inch.classList.remove('click-formula');
});
inch.addEventListener('click', () => {
    heightType = 'IN';
    inch.classList.add('click-formula');
    cm.classList.remove('click-formula');
});
