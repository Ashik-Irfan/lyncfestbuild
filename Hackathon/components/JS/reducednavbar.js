document.querySelector('.hamburger').addEventListener('click', (e)=>{
  document.querySelector('.nav-buttons-mobile').classList.toggle('hidden-nav')
  let i=0;
  document.querySelectorAll('.hamburger span').forEach((span)=>{ 
    i+=1; 
    span.classList.toggle(`close-${i}`);
  })
})
window.onscroll = function() {
  if(window.screen.width<800){
    scrollFunction()
  }
  else{
    scrollFunction1()
  }
};

function scrollFunction1() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".header-nav img").style.width = "80px";
    document.querySelector(".header-nav .brand-name").style.fontSize = "1.3rem";
    document.querySelectorAll(".header-nav .nav-buttons .nav-btn").forEach((btn)=>{btn.style.fontSize = "1.2rem"});
    document.querySelector(".hamburger").style.top = "5%";
    document.querySelector(".top").classList.add('show-top');
  } else {
    document.querySelector(".header-nav img").style.width = "100px";
    document.querySelector(".header-nav .brand-name").style.fontSize = "";
    document.querySelectorAll(".header-nav .nav-buttons .nav-btn").forEach((btn)=>{btn.style.fontSize = ""});
    document.querySelector(".hamburger").style.top = "";
    document.querySelector(".top").classList.remove('show-top');
  }
} 
function scrollFunction(){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".top").style.left="5%";
    document.querySelector(".top").classList.add('show-top');
  } else {
    document.querySelector(".top").classList.remove('show-top');
  }
}