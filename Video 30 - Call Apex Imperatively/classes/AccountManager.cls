public with sharing class AccountManager {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(Integer numberOfRecords){

        return [SELECT Id, Name, Phone FROM Account Limit :numberOfRecords];
        
    }
}
