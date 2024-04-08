import { Client, Account, ID } from "appwrite"
import conf from "../conf/conf.js";

// make a  class of Authservice and export it to the authservice 
// make a client 
// make a constructor and make new account
// create account 
// login 
// get currentuser
// logut 



export class Authservice {

 client = new Client()
account;

constructor (){
this.client
.setEndpoint(conf.appwriteUrl)
.setProject(conf.appwriteProjectId)
this.account = new Account(this.client)

}

// create Account 

async createAccount({email, password , name}) {

try {
    
 const userAccount = await this.account.create(ID.unique() , email, password ,name) 

// if block for login 

if(userAccount){
return this.login({email, password})
} else{
    return userAccount
}

} catch (error) {
    console.log("Appwrite Error Create Account" , error);
}
}


async login ({email ,password}) {
try {
    
  return await this.account.createEmailSession(email, password)

} catch (error) {
    console.log("Appwrite Error :: login", error);
}
}


async getCurrentUser (){
try {
    return await this.account.get()
} catch (error) {
    console.log("Appwrite Errror :: getCurrentUser", error);
}
    
}


async logout (){

    try {
        return await this.account.deleteSessions()
    } catch (error) {
        console.log("Appwrite Error :: logout" , error);
    }
}




}

const authservice = new Authservice()

export default authservice

