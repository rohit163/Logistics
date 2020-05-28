const header = document.querySelector('.main-header');
window.addEventListener('scroll',()=>{
    const scrollPos = window.scrollY;
    if(scrollPos > 10){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
})


// setTimeout(function(){
//     window.scrollBy({ 
//     top: 1500, 
  
//     behavior: 'smooth' 
//   });
//  }, 1500);

