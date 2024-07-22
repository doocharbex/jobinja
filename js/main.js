import { companySection } from './company.js';
import { renderEmploymentNotice } from './EmploymentNotice/EmploymentNotice.js';

// <-- Function Controller -->
function __init__ (){
    // <-- Sections "Function" -->
    companySection()
    renderEmploymentNotice()
}

// <-- Runer Setting if  " DOMContent " Loaded --> 
document.addEventListener("DOMContentLoaded", function() {
    // <-- Load Fanctions --> 
    __init__()

    console.log("-------------")
    console.log("Setting Loded 🧑")
    console.log("-------------")

  });



