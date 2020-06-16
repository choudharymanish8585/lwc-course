import { LightningElement, track, wire } from 'lwc';
import {registerListener, unregisterAllListeners} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class SelectedMeetingRoom extends LightningElement {
    @track selectedMeetingRoom = {};

    @wire(CurrentPageReference) pageRef;
    
    connectedCallback(){
        registerListener('pubsubtileclick', this.onMeetingRoomSelectHandler, this);
    }


    disconnectedCallback(){
        unregisterAllListeners(this);
    }

    onMeetingRoomSelectHandler(payload){
        this.selectedMeetingRoom = payload;
    }

}