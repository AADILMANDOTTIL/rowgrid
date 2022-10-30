const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('toggle-menu'),
      closeMenu =document.getElementById('close-menu')


      toggleMenu.addEventListener('click',()=>{
        navMenu.classList.toggle('show')
      })

      closeMenu.addEventListener('click',()=>{
        navMenu.classList.remove('show')
      })



window.addEventListener('scroll',reveal);
function reveal(){
  var reveals =document.querySelectorAll('.reveal');
  for(var i = 0; i < reveals.length;i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint =150;
    if(revealtop<windowheight-revealpoint){
      reveals[i].classList.add('active');
    }else{
      reveals[i].classList.remove('active')
    }
  }
}