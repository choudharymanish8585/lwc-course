import { LightningElement, track } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    @track value;

    checkboxSelectHandler(){
        const childComponent = this.template.querySelector('c-public-method-child');
        const returnedMessage = childComponent.selectCheckbox(this.value);
        console.log('Returned Message: ', returnedMessage);
    }

    onInputChangeHandler(event){
        this.value = event.target.value;
    }
}