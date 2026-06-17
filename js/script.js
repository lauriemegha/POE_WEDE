/* Booking form validation */

const bookingForm=document.getElementById("bookingForm");

if(bookingForm){

    bookingForm.addEventListener("submit",function(event){

        event.preventDefault();

        let name=document.getElementById("name").value.trim();
        let email=document.getElementById("email").value.trim();
        let service=document.getElementById("service").value;

        if(name.length<2){
            alert("Please enter a valid name.");
            return;
        }

        if(!email.includes("@")){
            alert("Please enter a valid email address.");
            return;
        }

        if(service===""){
            alert("Please select a service.");
            return;
        }

        alert("Thank you! Your booking request has been submitted successfully.");

        bookingForm.reset();

        if(priceDisplay){
            priceDisplay.textContent="Estimated Price: R0";
        }

    });

}

/* Mobile navigation menu */

const menuToggle=document.getElementById("menuToggle");
const navMenu=document.getElementById("navMenu");

if(menuToggle&&navMenu){

    menuToggle.addEventListener("click",function(){

        navMenu.classList.toggle("show");

    });

}

/* Automatically select a service from the Services page */

const serviceSelect=document.getElementById("service");

if(serviceSelect){

    const params=new URLSearchParams(window.location.search);

    const service=params.get("service");

    if(service){

        serviceSelect.value=service;
        calculatePrice();

    }

}
/* Estimated price calculator */

const size=document.getElementById("size");
const length=document.getElementById("length");
const priceDisplay=document.getElementById("estimatedPrice");

function calculatePrice(){

    if(!serviceSelect||!size||!length||!priceDisplay){
        return;
    }

    let price=0;

    switch(serviceSelect.value){

        case "Knotless Braids":
            price=800;
            break;

        case "Fulani Braids":
            price=700;
            break;

        case "Stitch Braids":
            price=600;
            break;

        case "Locs & Protective Styles":
            price=900;
            break;

        case "Quick Hairstyles":
            price=300;
            break;

        case "Intricate Hairstyles / New Designs":
            priceDisplay.textContent="Estimated Price: Quote Required";
            return;

        default:
            priceDisplay.textContent="Estimated Price: R0";
            return;

    }

    if(size.value==="Small"){
        price+=200;
    }

    if(size.value==="Medium"){
        price+=0;
    }

    if(size.value==="Large"){
        price-=100;
    }

    if(length.value==="Mid-Back Length"){
        price+=100;
    }

    if(length.value==="Waist Length"){
        price+=200;
    }

    if(length.value==="Extra Long"){
        price+=300;
    }

    priceDisplay.textContent="Estimated Price: R"+price;

}

if(serviceSelect&&size&&length){

    serviceSelect.addEventListener("change",calculatePrice);
    size.addEventListener("change",calculatePrice);
    length.addEventListener("change",calculatePrice);

    calculatePrice();

}
/* Image sliders */

function createSlider(images,imageId,titleId,prevId,nextId){

    let current=0;

    const image=document.getElementById(imageId);
    const title=document.getElementById(titleId);
    const prev=document.getElementById(prevId);
    const next=document.getElementById(nextId);

    if(!image||!title||!prev||!next){
        return;
    }

    function showSlide(){
        image.src=images[current].image;
        title.textContent=images[current].title;
    }

    next.addEventListener("click",function(){
        current++;
        if(current>=images.length){
            current=0;
        }
        showSlide();
    });

    prev.addEventListener("click",function(){
        current--;
        if(current<0){
            current=images.length-1;
        }
        showSlide();
    });

}

/* Knotless Braids */

createSlider(
[
{image:"Images/knotlessbraids3.jpg",title:"Regular Knotless"},
{image:"Images/knotlessbohemian2.avif",title:"Bohemian Knotless"},
{image:"Images/knotlessbohemian.jpg",title:"Human Hair Knotless"}
],
"knotlessImage","knotlessTitle","prevKnotless","nextKnotless"
);

/* Fulani Braids */

createSlider(
[
{image:"Images/fulanibraids2.avif",title:"Small"},
{image:"Images/fulanibraid.avif",title:"Medium"},
{image:"Images/fulanisewin.jpg",title:"Fulani Sew-in"}
],
"fulaniImage","fulaniTitle","prevFulani","nextFulani"
);

/* Stitch Braids */

createSlider(
[
{image:"Images/stitchbraids.avif",title:"Simple"},
{image:"Images/stitchbraids2.avif",title:"Detailed"},
{image:"Images/stitchbraids3.avif",title:"Creative"}
],
"stitchImage","stitchTitle","prevStitch","nextStitch"
);

/* Locs */

createSlider(
[
{image:"Images/invisiblelocs.jpg",title:"Invisible Locs"},
{image:"Images/softlocs.jpeg",title:"Soft Locs"},
{image:"Images/butterflylocs.jpeg",title:"Butterfly Locs"}
],
"locsImage","locsTitle","prevLocs","nextLocs"
);

/* Quick Hairstyles */

createSlider(
[
{image:"Images/ponytail.avif",title:"Ponytail"},
{image:"Images/ponytail2.avif",title:"Sleek Style"},
{image:"Images/gallery1.jpg",title:"Simple Look"}
],
"quickImage","quickTitle","prevQuick","nextQuick"
);

/* Intricate Hairstyles */

createSlider(
[
{image:"Images/designbraids.jpg",title:"Custom Design"},
{image:"Images/frenchcurls4.avif",title:"Freestyle"},
{image:"Images/frenchcurls.avif",title:"Creative Look"}
],
"designImage","designTitle","prevDesign","nextDesign"
);