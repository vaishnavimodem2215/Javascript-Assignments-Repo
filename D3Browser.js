function launchBrowser(Browser) {
    if (Browser === "Chrome") {
        console.log("Launching Chrome Browser");
    }
    else if (Browser === "Firefox") {
        console.log("Launching Firefox Browser");
    
    }
    else {
        console.log("Not supported Browser");

}
}
launchBrowser("Chrome");
function Runtest(Testtype){
    switch(Testtype){
        case "Smoke":
            console.log("smoke")
            break;
        case "Regression":
            console.log("regression")
            break;
        case "Sanity":
            console.log("sanity")
            break;
        default:
            console.log("smoke")
    }


}
Runtest("Default")