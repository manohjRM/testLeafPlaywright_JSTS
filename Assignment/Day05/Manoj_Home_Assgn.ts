//create a variable with immutable datatype and print the value in console
let browserVersion:string = '117';
console.log(`The new browserVersion is ${browserVersion}`)
//create custom datatype and print in the console
type browserNames = {
    bName: string
    version: number
}
let browsers:browserNames = {bName: 'Edge', version: 115};
console.log(`The browser ${browsers.bName} is updated to the version ${browsers.version} `)
//creating a variable with implicit type reference
let isHeadless = true
console.log(`Test running in headless mode (implicit type reference): ${isHeadless}`);

//creating a variable with explicit type reference
let releaseYear:number = 1998
console.log(`The first release year (explicit type reference): ${releaseYear}`);

//creating a variable with any data type and assigning two different data type values
let browserLogo:any;

browserLogo = "Ferrari";
console.log(`Any data type: the browser logo is ${browserLogo}`);

browserLogo = true;
console.log(`Is the browser logo visible? : ${browserLogo}`)