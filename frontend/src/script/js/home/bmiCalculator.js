const bmiNumber = document.querySelector('.bmi-number');
const bmiPosition = document.querySelector('.bmi-position');
const titleChart = document.querySelector('.title-chart');
export class BmiCalculator {
    constructor(weight, weightType, height, heightType) {
        this.weight = 0;
        this.weightType = null;
        this.height = 0;
        this.heightType = null;
        this.weightResult = null;
        this.heightResult = null;
        this.result = 0;
        this.finalResult = 0;
        this.clear();
        this.weight = weight;
        this.weightType = weightType;
        this.height = height;
        this.heightType = heightType;
    }
    calculate() {
        console.log('test passed in calculate');
        if (this.weightType === 'KG' && this.heightType === 'CM') {
            this.heightResult = this.height / 100;
            this.result = this.weight / (Math.pow(this.heightResult, 2));
        }
        else if (this.weightType === 'LB' && this.heightType === 'IN') {
            this.weightResult = this.weight * 703;
            this.heightResult = this.height / 100;
            this.result = this.weightResult / (Math.pow(this.heightResult, 2));
        }
        else if (this.weightType === 'KG' && this.heightType === 'IN') {
            this.heightResult = this.height * 0.0254;
            this.result = this.weight / this.heightResult;
        }
        else if (this.weightType === 'LB' && this.heightType === 'CM') {
            this.weightResult = this.weight * 703;
            this.heightResult = this.height / 100;
            this.result = this.weightResult / (Math.pow(this.heightResult, 2));
        }
        this.finalResult = parseFloat(this.result.toFixed(2));
        this.positionShow();
    }
    positionShow() {
        bmiNumber.innerText = this.finalResult.toString();
        titleChart.innerText = this.finalResult.toString();
        if (this.finalResult < 16) {
            bmiPosition.innerText = 'Very underweight';
        }
        else if (this.finalResult < 18.5) {
            bmiPosition.innerText = 'Underweight';
        }
        else if (this.finalResult < 25) {
            bmiPosition.innerText = 'Healthy weight';
        }
        else if (this.finalResult < 30) {
            bmiPosition.innerText = 'Overweight';
        }
        else if (this.finalResult < 35) {
            bmiPosition.innerText = 'Moderately obese';
        }
        else if (this.finalResult < 40) {
            bmiPosition.innerText = 'Very obese';
        }
        else if (this.finalResult > 40) {
            bmiPosition.innerText = 'Severely obese';
        }
    }
    clear() {
        this.weight = 0;
        this.weightType = null;
        this.height = 0;
        this.heightType = null;
        this.weightResult = null;
        this.heightResult = null;
        this.result = 0;
    }
}
