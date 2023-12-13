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
var UserAuthenticator = /** @class */ (function () {
    function UserAuthenticator() {
    }
    UserAuthenticator.prototype.login = function (username, password, email) {
        console.log("User logged in successfully ".concat(username, ", email: ").concat(email));
    };
    UserAuthenticator.prototype.logout = function () {
        console.log('User logged out successfully');
    };
    UserAuthenticator.prototype.resetpassowrd = function (email) {
        console.log("Password reset link send to the email ID: ".concat(email));
    };
    return UserAuthenticator;
}());
var userAuth = new UserAuthenticator();
userAuth.login('Admin', 'Admin');
userAuth.login('Admin1', 'admin@123', 'admin@xyz.com');
userAuth.logout();
userAuth.resetpassowrd('admin@xyz.com');
