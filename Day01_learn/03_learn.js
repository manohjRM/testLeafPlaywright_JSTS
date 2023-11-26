//condition statements
function launchBrowser(browser){
    if(browser === "Chrome"){
        console.log("Launched Chrome browser")
    }else{
        console.log("No browser available")
    }
}

launchBrowser("Chrome")

function runTests(test) {
    switch (test) {
        case "smoke":
            console.log("Smoke Testing")
            break;
        case "sanity":
            console.log("Sanity Testing")
            break;
        case "regression":
            console.log("Regression Testing")
            break;
        default:
            console.log("Smoke Testing")
            break;
    }
}

runTests('regression')