document.addEventListener("DOMContentLoaded",()=>{
  const nav=document.querySelector(".nav");
  const menu=document.querySelector(".menu-btn");
  if(menu&&nav){
    menu.addEventListener("click",()=>{
      const open=nav.classList.toggle("mobile-open");
      menu.setAttribute("aria-expanded",open);
    });
    document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("mobile-open")));
  }
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}})
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach((el,i)=>{el.style.transitionDelay=Math.min(i%6*70,350)+"ms";io.observe(el)});
});