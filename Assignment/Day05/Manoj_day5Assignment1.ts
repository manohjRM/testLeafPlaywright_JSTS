/*
Assignment 1: Automated Testing of a User Authentication System 
 
Objective:
Practice integrating classes and methods into a test script for a user authentication system.
 
Instructions:
1. Create a class as `UserAuthenticator` 
2. Create a methods like login(with 2 mandatory parameters and one optional parameter), logout, 
   and password reset.
3. Create instance of the class and call the methods
*/

class UserAuthenticator{
    login(username:string, password: string, email?: string){
        console.log(`User logged in successfully ${username}, email: ${email}`);
        
    }
    logout(){
        console.log('User logged out successfully');
        
    }
    resetpassowrd(email:string){
        console.log(`Password reset link send to the email ID: ${email}`);
        
    }
}

let userAuth = new UserAuthenticator();

userAuth.login('Admin', 'Admin');
userAuth.login('Admin1', 'admin@123', 'admin@xyz.com');

userAuth.logout();

userAuth.resetpassowrd('admin@xyz.com');