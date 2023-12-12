import { Element, button } from "./03_interface";

class ShoppingCart{

    constructor(username:string, password:string){
        console.log(`Login successful`);
        
    }

    addItem():void{
        console.log(`The new item added to the cart`);
        
    }
    removeItem():void{
        console.log(`The item removed from the cart`);
        
    }
    checkOut(accountName:string, cardNumber: number):string{
        return `${accountName} and ${cardNumber}`
    }
}
const shopping = new ShoppingCart('Admin', 'Admin');
shopping.addItem()
shopping.removeItem()
let cardDetails = shopping.checkOut('Admin', 6546);
console.log(`The cards details are "${cardDetails}"`);


class FindElements implements Element{
    findElement(): string {
        throw new Error("Method not implemented.");
    }

}