const nav=document.querySelector(".nav");

 navList=nav.querySelectorAll("li");
 allsection=document.querySelectorAll(".section");
 
navListLength=navList.length;
for(let i=0;i<navListLength;i++){
 const a=navList[i].querySelector("a");
 a.addEventListener("click",()=>{
    for(let j=0;j<navListLength;j++){
        if(navList[j].querySelector("a").classList.contains("active")){
            allsection[j].classList.add("back-section");
        } else{
            allsection[j].classList.remove("back-section");
        }
        navList[j].querySelector("a").classList.remove("active");
    }
    a.classList.add("active");
    showSection(a);
   if(window.innerWidth<1200){
    asideSectionTogglerBtn();
   }    
 })
}
function showSection(element){
   
    for(i=0;i<allsection.length;i++){        
          allsection[i].classList.remove("active");     
    }
    const href=element.getAttribute("href").split("#");
   target=href[1];
   document.querySelector("#" + target).classList.add("active");  
}
const navTogglerBtn=document.querySelector(".nav-toggler");
aside=document.querySelector(".aside");
navTogglerBtn.addEventListener("click",()=>{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0;i<allsection.length;i++){
        allsection[i].classList.toggle("open");
    }
}
function updateNav(element){
    for(let i=0;i<navList.length;i++){
        navList[i].querySelector("a").classList.remove("active");
        const href=element.getAttribute("href").split("#");
        target=href[1];
        if(target===navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
    }
}
document.querySelector(".hire-me").addEventListener("click", function(){
    allsection[1].classList.add("back-section");
    showSection(this);
    updateNav(this);
})