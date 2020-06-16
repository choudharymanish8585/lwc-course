import { LightningElement, track } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountManager.getAccount'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AccountManageApex extends LightningElement {

    @track numberOfRecords;
    @track accounts;

    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }

    numberOfAccountChangeHandler(event){
        this.numberOfRecords = event.target.value;
    }

    getAccounts(){
        getAllAccounts({numberOfRecords:this.numberOfRecords}).then(response =>{
            this.accounts = response;
            const toastEvent = new ShowToastEvent({
                title : 'Accounts Loaded',
                message : this.numberOfRecords + ' Accounts Fetched From Server',
                variant : 'success',
            });
            this.dispatchEvent(toastEvent);
        }).catch(error =>{
            console.error('Error in getting the accounts', error.body.message);
            const toastEvent = new ShowToastEvent({
                title : 'ERROR',
                message : error.body.message,
                variant : 'error',
            });
            this.dispatchEvent(toastEvent);
        })
    }
    

}