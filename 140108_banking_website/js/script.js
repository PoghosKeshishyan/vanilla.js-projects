let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

function isMobileView() {
   return window.innerWidth <= 768;
}

function closeDropdown() {
   document.querySelectorAll('.header .navbar ul ul').forEach(submenu => {
      submenu.style.removeProperty('display');
   });
}

function removeNavbar() {
   navbar.classList.remove('active'); 
   closeDropdown(); 
}

menuBtn.onclick = () => {
   navbar.classList.toggle('active');

   if (!navbar.classList.contains('active')) {
      closeDropdown();
   }
};

document.addEventListener('click', (e) => {
   if (isMobileView() && navbar.classList.contains('active')) {
      if (e.target !== menuBtn && !navbar.contains(e.target)) {
         removeNavbar();
      }
   }
});

window.onscroll = () => {
   if (isMobileView() && navbar.classList.contains('active')) {
      removeNavbar();
   }
}

document.querySelectorAll('.header .navbar a[href="#"]').forEach(anchor => {
anchor.onclick = (e) => {

   e.preventDefault();

   if (navbar.classList.contains('active') || isMobileView()) {

      let parentLi = anchor.closest('li');
      let submenu = parentLi && parentLi.querySelector('ul');

      if (submenu) {
         let siblings = parentLi.parentNode.querySelectorAll('ul');
         siblings.forEach(sub => {
            if (sub !== submenu) {
               sub.style.removeProperty('display');
            }
         });
         submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }
   }
}
});

let resizeTimer;
window.onresize = () => {
   clearTimeout(resizeTimer);
   resizeTimer = setTimeout(() => {
      if (!isMobileView()) {
         removeNavbar();
      }
   }, 150);
};

document.addEventListener('DOMContentLoaded', () => {
   if (!isMobileView()) {
      removeNavbar();
   }
});

document.querySelectorAll('input[type="number"]').forEach(inputNumber =>{
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength){
         inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
      }
   }
});

if(document.querySelector('.loan-calculator')){

let loanAmount = document.getElementById('amount');
let loanInterest = document.getElementById('interest');
let loanTenure = document.getElementById('loanTenure');
let calculate = document.getElementById('calculate');

calculate.onclick = (e) =>{
   e.preventDefault();

   let isYear = document.getElementById('year').checked;
   let isMonth = document.getElementById('month').checked;
   let noOfMonths = 0;

   if(isMonth == '' && isYear == ''){
      alert('Please select the loan tenure either monthly or yearly.')
   }else{

      if(isYear == true){
         noOfMonths = loanTenure.value * 12;
      }else{
         noOfMonths = loanTenure.value;
      }

      let r = parseFloat(loanInterest.value)/12/100;
      let p = loanAmount.value;
      let n = noOfMonths;

      let emi = (p * r * Math.pow((1+r),n)) / (Math.pow((1+r),n) - 1);
      let totalInterest = (emi * n) - p;
      let totalPayment = totalInterest + parseFloat(p);

      document.getElementById('emi').innerHTML = '₹ ' + Math.round(emi);
      document.getElementById('totalInterest').innerHTML = '₹ ' + Math.round(totalInterest);
      document.getElementById('totalPayment').innerHTML = '₹ ' + Math.round(totalPayment);

   }

}

}

if(document.querySelector('.reviews')){

   let reviews_slider = document.querySelector('.reviews .reviews-slider');
   let first_slide = document.querySelector('.reviews .reviews-slider .box:first-child').clientWidth + 20;
   let prev_btn = document.getElementById('prev-btn');
   let next_btn = document.getElementById('next-btn');

   next_btn.onclick = () =>{
      reviews_slider.style.scrollBehavior = "smooth";
      reviews_slider.scrollLeft += first_slide;

      if (reviews_slider.scrollLeft >= (reviews_slider.scrollWidth - reviews_slider.clientWidth - 5)) {
        reviews_slider.scrollLeft = 0;
      }
   }

   prev_btn.onclick = () =>{
      reviews_slider.style.scrollBehavior = "smooth";
      reviews_slider.scrollLeft -= first_slide;

       if (reviews_slider.scrollLeft <= 5) {
        const maxScrollLeft = reviews_slider.scrollWidth - reviews_slider.clientWidth;
        reviews_slider.scrollLeft = maxScrollLeft;
      }
   }

}

let faq_items = document.querySelectorAll('.faq .row .box-container .box');

if(faq_items){

   faq_items.forEach(item => {

   let heading = item.querySelector('.title');
   let icon = item.querySelector('.title i');

   heading.onclick = () => { 

      faq_items.forEach(otherItem => {
         
         if (otherItem !== item) {

               otherItem.classList.remove('active');

               let otherIcon = otherItem.querySelector('.title i');

               if (otherIcon && otherIcon.classList.contains('fa-minus')) {
                  otherIcon.classList.replace('fa-minus', 'fa-plus');
               }

         }

      });

      item.classList.toggle('active');

      if (item.classList.contains('active')) {
         icon.classList.replace('fa-plus', 'fa-minus');
      } else {
         icon.classList.replace('fa-minus', 'fa-plus');
      }
   };
});

}