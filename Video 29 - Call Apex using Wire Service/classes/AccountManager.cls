public with sharing class AccountManager {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){

        return [SELECT Id, Name, Phone FROM Account Limit 10];
        
    }
}
