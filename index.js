const mnav = document.getElementById("hamburger");
const mlinks = document.querySelector(".links-mobile");
console.log(mnav + mlinks);
let a = true;
mnav.addEventListener("click", ()=>{
    if (a) {
        mlinks.style.transform = "scaleY(1)";
        a=false;

    } else {
        mlinks.style.transform = "scaleY(0)"; 
        a=true;
    }
});

const slider1 = document.getElementById("slide1");
const slider2 = document.getElementById("slide2");
const slider3 = document.getElementById("slide3");

const divtoshow1 = document.getElementById("slida1");
const divtoshow2 = document.getElementById("slida2");
const divtoshow3 = document.getElementById("slida3");

slider1.addEventListener("click", ()=>{
    divtoshow1.style.transform = "scaleX(1)"; 
    divtoshow2.style.transform = "scaleX(0)";
    divtoshow3.style.transform = "scaleX(0)";
   
})
slider2.addEventListener("click", ()=>{
    divtoshow1.style.transform = "scaleX(0)"; 
    divtoshow2.style.transform = "scaleX(1)";
    divtoshow3.style.transform = "scaleX(0)";
    
})
slider3.addEventListener("click", ()=>{
    divtoshow1.style.transform = "scaleX(0)"; 
    divtoshow2.style.transform = "scaleX(0)";
    divtoshow3.style.transform = "scaleX(1)";
   
})

// Landing Chair Collapse

let collapse = document.querySelectorAll(".desc");
let collapsediv = document.querySelectorAll(".text-desc");
collapse.forEach((e)=>{
e.addEventListener("click", ()=>{
e.classList.toggle('show');
console.log('working');
})
})

const buybtn = document.querySelector('.chair-buy');
const addbtn = document.querySelector('.chair-add');
const desbuy = document.querySelector('.desc-buy');
const desadd = document.querySelector('.desc-add');
 let f = true;
buybtn.addEventListener('click', ()=>{
 if(f) {
    desbuy.style.opacity = '1';
    desbuy.style.zIndex = '10';
    
    f = false;
    console.log(d);
 } else {
    desbuy.style.opacity = '0';
    desbuy.style.zIndex = '-10';
    f = true;
 }
    

});

addbtn.addEventListener('click', ()=>{
    if(f) {
       
       desadd.style.opacity = '1';
       desadd.style.zIndex = '10';
      
       f = false;
       
    } else {
       
       desadd.style.opacity = '0';
       desadd.style.zIndex = '-10';
       f = true;
       
    }
       
   
   })
