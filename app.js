/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections =document.querySelectorAll("section");
const myUl = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// build the nav list

sections.forEach(function(element,index) {
let linkText= element.getAttribute("data-nav");
let myLink = document.createElement("a");
myLink.innerHTML=linkText
let myList =document.createElement("li");
myList.appendChild(myLink);
myLink.addEventListener("click",function(){
// scroll to the section on link click    
element.scrollIntoView({behavior:"smooth"})  
})

myUl.appendChild(myList);
})

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Scroll to anchor ID using scrollTO event
window.addEventListener("scroll",function(){
// begine events    
    sections.forEach(function(activeSec,index){
        const rect = activeSec.getBoundingClientRect();
// add class active to screen when near to the top of viewport       
        if(rect.top>0 && rect.top <300){
            const navigation = activeSec.getAttribute("data-nav");

            sections.forEach(function(elementSection){
// set sections as active                
                elementSection.classList.remove("your-active-class") ;
            })
            activeSec.classList.add("your-active-class");

            const activeLinks = document.querySelectorAll("a");
            activeLinks.forEach(function(elementLink){
                if (elementLink.innerText==navigation){
                    activeLinks.forEach(function(blank){
                        blank.style.background="black";
                    })
                    elementLink.style.background="rgb(136,203,171)";

                }
            })

        }
    })
})

/*End Main Functions
*/





