const bmiNumber = document.querySelector('.bmi-number') as HTMLParagraphElement;
const bmiPosition = document.querySelector('.bmi-position') as HTMLParagraphElement;
const titleChart = document.querySelector('.title-chart') as HTMLParagraphElement;

export class BmiCalculator {
    weight: number = 0;
    weightType: string | null = null
    height: number = 0;
    heightType: string | null = null

    weightResult: number | null = null
    heightResult: number | null = null
    result: number = 0;
    finalResult: number = 0
    
    constructor(weight: number,weightType: string, height: number, heightType: string) {
        this.clear();
        
        this.weight = weight;
        this.weightType = weightType;
        this.height = height;
        this.heightType = heightType;
    }

    calculate(): void {
        console.log('test passed in calculate');
        if (this.weightType === 'KG' && this.heightType === 'CM') {
            this.heightResult = this.height / 100;
            this.result = this.weight / (this.heightResult**2);   

        } else if (this.weightType === 'LB' && this.heightType === 'IN') {
            this.weightResult = this.weight * 703;
            this.heightResult = this.height / 100;
            this.result = this.weightResult / (this.heightResult**2);

        } else if (this.weightType === 'KG' && this.heightType === 'IN') {
            this.heightResult = this.height * 0.0254;
            this.result = this.weight / this.heightResult;

        } else if (this.weightType === 'LB' && this.heightType === 'CM') {
            this.weightResult = this.weight * 703;
            this.heightResult = this.height / 100;
            this.result = this.weightResult / (this.heightResult**2);
        }

        this.finalResult = parseFloat(this.result.toFixed(2));
        this.positionShow();
    }


    positionShow(): void {   
        bmiNumber.innerText = this.finalResult.toString();
        titleChart.innerText = this.finalResult.toString();

        if (this.finalResult < 16) {
            bmiPosition.innerText = 'Very underweight';
        } else if (this.finalResult < 18.5) {
            bmiPosition.innerText = 'Underweight';
        } else if (this.finalResult < 25) {
            bmiPosition.innerText = 'Healthy weight';
        } else if (this.finalResult < 30) {
            bmiPosition.innerText = 'Overweight';
        } else if (this.finalResult < 35) {
            bmiPosition.innerText = 'Moderately obese';
        } else if (this.finalResult < 40) {
            bmiPosition.innerText = 'Very obese';
        } else if (this.finalResult > 40) {
            bmiPosition.innerText = 'Severely obese';
        }
    }

    clear(): void {
        this.weight = 0;
        this.weightType = null;
        this.height = 0;
        this.heightType = null;
        this.weightResult = null;
        this.heightResult = null;
        this.result = 0;
    }

}