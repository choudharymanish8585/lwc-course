import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    cardTitle = 'BMI Calculator';

    weight;
    height;

    @track bmi;
    onWeightChange(event){
        this.weight = parseFloat(event.target.value);
    }

    onHeightChange(event){
        this.height = parseFloat(event.target.value);
    }

    calculateBMI(){
        try{
        this.bmi = this.weight/(this.height*this.height);
        } catch(error){
            this.bmi = undefined;
        }
    }

    get bmiValue(){
        if(this.bmi === undefined){
            return "";
        }
        return `Your BMI is: ${this.bmi}`;
    }
}