//create a variable with immutable datatype and print the value in console
var browserVersion = '117';
console.log("The new browserVersion is ".concat(browserVersion));
var browsers = { bName: 'Edge', version: 115 };
console.log("The browser ".concat(browsers.bName, " is updated to the version ").concat(browsers.version, " "));
//creating a variable with implicit type reference
var isHeadless = true;
console.log("Test running in headless mode (implicit type reference): ".concat(isHeadless));
//creating a variable with explicit type reference
var releaseYear = 1998;
console.log("The first release year (explicit type reference): ".concat(releaseYear));
//creating a variable with any data type and assigning two different data type values
var browserLogo;
browserLogo = "Ferrari";
console.log("Any data type: the browser logo is ".concat(browserLogo));
browserLogo = true;
console.log("Is the browser logo visible? : ".concat(browserLogo));
