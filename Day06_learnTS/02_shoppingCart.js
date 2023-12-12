var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(username, password) {
        console.log("Login successful");
    }
    ShoppingCart.prototype.addItem = function () {
        console.log("The new item added to the cart");
    };
    ShoppingCart.prototype.removeItem = function () {
        console.log("The item removed from the cart");
    };
    ShoppingCart.prototype.checkOut = function (accountName, cardNumber) {
        return "".concat(accountName, " and ").concat(cardNumber);
    };
    return ShoppingCart;
}());
var shopping = new ShoppingCart('Admin', 'Admin');
shopping.addItem();
shopping.removeItem();
var cardDetails = shopping.checkOut('Admin', 6546);
console.log("The cards details are \"".concat(cardDetails, "\""));
