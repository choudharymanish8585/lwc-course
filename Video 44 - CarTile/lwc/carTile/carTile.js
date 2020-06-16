import { LightningElement, api } from 'lwc';

export default class CarTile extends LightningElement {
    @api car;
    @api carSelectedId;

    handleCarSelect(event){
        event.preventDefault();

        const carId = this.car.Id;

        const carSelect = new CustomEvent('carselect', {detail:carId});
        this.dispatchEvent(carSelect);
    }

    get isCarSelected(){
        if(this.car.Id === this.carSelectedId){
            return "tile selected";
        }
        return "tile";
    }
}