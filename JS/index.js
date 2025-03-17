const sec2leftarrow = document.getElementById("sec2__left__arrow__btn");
const sec2rightarrow = document.getElementById("sec2__right__arrow__btn");
const cardsdiv = document.querySelector('.section2__cardsdiv');

const sec3leftarrow = document.getElementById("sec3__left__arrow__btn");
const sec3rightarrow = document.getElementById("sec3__right__arrow__btn");
const sec3_cardsdiv = document.querySelector('.section3__cardsdiv');
let sec2scrollamount = 0;
let sec3scrollamount = 0;

sec2leftarrow.addEventListener('click',()=>{
    if(sec2scrollamount <= 0){
        sec2leftarrow.style.cursor = "not-allowed";
        return;
    }
    else{
        sec2scrollamount = 0;
        sec2leftarrow.style.cursor = "not-allowed";
        cardsdiv.style.transform = `translateX(-${sec2scrollamount}px)`;
        sec2rightarrow.style.cursor = "pointer";
        sec2leftarrow.style.background = "rgba(0,0,0,0.1)";
        sec2rightarrow.style.background = "white";

    }
    
});

sec2rightarrow.addEventListener('click',()=>{
    console.log("Hi");
    if(sec2scrollamount>600)
    {
        return;
    }
    else{
        sec2scrollamount+=1000;
        cardsdiv.style.transform = `translateX(-${sec2scrollamount}px)`;
        sec2rightarrow.style.cursor = "not-allowed";
        sec2leftarrow.style.cursor = "pointer";
        sec2leftarrow.style.backgroundColor = "white";
        sec2rightarrow.style.background = "rgba(0,0,0,0.1)"
    }
    
});

// ==============================Section 3 ==============================

sec3leftarrow.addEventListener('click',()=>{
    if(sec3scrollamount <= 0){
        sec3leftarrow.style.cursor = "not-allowed";
        return;
    }
    else{
        sec3scrollamount = 0;
        sec3leftarrow.style.cursor = "not-allowed";
        sec3_cardsdiv.style.transform = `translateX(-${sec3scrollamount}px)`;
        sec3rightarrow.style.cursor = "pointer";
        sec3leftarrow.style.background = "rgba(0,0,0,0.1)";
        sec3rightarrow.style.background = "white";

    }
    
});

sec3rightarrow.addEventListener('click',()=>{
    console.log("Hi");
    if(sec3scrollamount>600)
    {
        return;
    }
    else{
        sec3scrollamount+=580;
        sec3_cardsdiv.style.transform = `translateX(-${sec3scrollamount}px)`;
        sec3rightarrow.style.cursor = "not-allowed";
        sec3leftarrow.style.cursor = "pointer";
        sec3leftarrow.style.backgroundColor = "white";
        sec3rightarrow.style.background = "rgba(0,0,0,0.1)"
    }
    
});


// =================================selectdiv===================================

// let selectdivs = document.querySelectorAll(".sec2card__selectdiv");



// selectdivs.forEach(selectdiv =>{
//     selectdiv.addEventListener('click',()=>{

//     })
// })


// Cart Functionality

function addToCart(id,url,name,cost){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingitem = undefined;

    for (let i = 0; i<cart.length ; i++)
    {
        if(cart[i].id === id){
            existingitem = cart[i];
        }
    }

    if(existingitem){
        existingitem.quantity+=1;
    }
    else{
        cart.push({id,url,name,cost,quantity:1});
    }

    localStorage.setItem('cart',JSON.stringify(cart));
    alert(`${name} added to cart`);
}


// let cartsdiv = document.getElementById("cartsdiv").addEventListener('click',()=>{
//     window.location.href = "cart.html";
// })