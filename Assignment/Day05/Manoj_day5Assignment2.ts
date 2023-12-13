/*
Assignment 2: UI Component Library
 
Objective:
Practice creating interfaces and implementing them in classes for a UI component library.
 
Instructions:
1. Create a TypeScript interface named `UIComponent` with methods `render()` and `handleEvent()`.
2. Create classes `Button`, `TextField`, and `Checkbox` that implement the `UIComponent` interface.
3. Implement the methods in each class to simulate rendering and handling events for UI components.
4. Create instances of all UI components  and call all the methods
*/

interface UIComponent{
    render():void;
    handleEvent():void;
}

class Button implements UIComponent{
    render(): void {
        console.log(`Button rendered successfully`);
    }
    handleEvent(): void {
        console.log(`Event handled with button successfully`);
    }

}

class TextField implements UIComponent{
    render(): void {
        console.log(`TextField rendered successfully`);
    }
    handleEvent(): void {
        console.log(`Event handled for the textfield successfully`);
    }
}

class Checkbox implements UIComponent{
    render(): void {
        console.log(`Checkbox rendered successfully`);
    }
    handleEvent(): void {
        console.log(`Event handled for the checkbox successfully`);
    }
}

const button = new Button();
button.render();
button.handleEvent();

const textField = new TextField();
textField.render();
textField.handleEvent();

const checkBox = new Checkbox();
checkBox.render();
checkBox.handleEvent();

export {UIComponent}