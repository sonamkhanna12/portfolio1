var tablinks=document.getElementsByClassName("tab-links");
var tabcontent=document.getElementsByClassName("tab-content");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcont of tabcontent){
        tabcont.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
var sidem=document.getElementById("sidemenu");
function openmenu(){
    sidem.style.right="0";
}
function closemenu(){
    sidem.style.right="-200px";
}