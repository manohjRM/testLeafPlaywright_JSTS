//difference b/w var and let
const browserName = "Chrome";

function getBrowserVersion(browser){
    if(browser.startsWith("Chrome")){
        //var browserVersion = "120.0.2";
        let browserVersion = "120.0.2";
    }else{
        console.log("Not available")
    }
    console.log(browserVersion);
}

getBrowserVersion(browserName);

// function getBrowserVersion(){
//     if(browserName.startsWith("Chrome")){
//         //var browserVersion = "120.0.2";
//         let browserVersion = "120.0.2";
//     }else{
//         console.log("Not available")
//     }
//     console.log(browserVersion);
// }

// getBrowserVersion();
