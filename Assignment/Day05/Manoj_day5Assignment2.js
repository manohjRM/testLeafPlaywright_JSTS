"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Button = /** @class */ (function () {
    function Button() {
    }
    Button.prototype.render = function () {
        console.log("Button rendered successfully");
    };
    Button.prototype.handleEvent = function () {
        console.log("Event handled with button successfully");
    };
    return Button;
}());
var TextField = /** @class */ (function () {
    function TextField() {
    }
    TextField.prototype.render = function () {
        console.log("TextField rendered successfully");
    };
    TextField.prototype.handleEvent = function () {
        console.log("Event handled for the textfield successfully");
    };
    return TextField;
}());
var Checkbox = /** @class */ (function () {
    function Checkbox() {
    }
    Checkbox.prototype.render = function () {
        console.log("Checkbox rendered successfully");
    };
    Checkbox.prototype.handleEvent = function () {
        console.log("Event handled for the checkbox successfully");
    };
    return Checkbox;
}());
var button = new Button();
button.render();
button.handleEvent();
var textField = new TextField();
textField.render();
textField.handleEvent();
var checkBox = new Checkbox();
checkBox.render();
checkBox.handleEvent();
