import { LightningElement, track } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountManager.getAccount'

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
        }).catch(error =>{
            console.error('Error in getting the accounts', error.body.message);
        })
    }
    

}