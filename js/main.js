import { companySection } from './company.js';


// <-- Function Controller -->
function __init__ (){
    // <-- Sections "Function" -->
    companySection()
}

// <-- Runer Setting if  " DOMContent " Loaded --> 
document.addEventListener("DOMContentLoaded", function() {
    // <-- Load Fanctions --> 
    __init__()

    console.log("-------------")
    console.log("Setting Loded 🧑")
    console.log("-------------")

  });



