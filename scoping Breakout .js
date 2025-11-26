
var genderType = "female";

function printGender() {
    
    let color = "brown";
  
    if (genderType.startsWith("female")) {
       
        var age = 30;
        
        let color = "pink";
        
        console.log("Color inside if-block:", color); 
    } else {
        
        var age = 35;
       
        console.log("Color inside else-block:", color); 
    }
    
    console.log("Age outside if/else:", age);
}

genderType = "female";
printGender();
console.log("Global genderType:", genderType);





