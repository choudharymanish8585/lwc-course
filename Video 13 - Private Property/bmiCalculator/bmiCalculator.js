import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    cardTitle = 'BMI Calculator';

    changePrivatePropertyValue(){
        this.cardTitle = 'Changed value';
        console.log('value: ', this.cardTitle);
    }
}