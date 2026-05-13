
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap.to("#loader", {
    opacity:0,
    duration:1,
    delay:1,
    onComplete:()=>{
      document.getElementById("loader").style.display="none";
    }
  });
});

gsap.from(".hero-content h1",{
  y:100,
  opacity:0,
  duration:1.2
});

gsap.from(".hero-content p",{
  y:50,
  opacity:0,
  duration:1,
  delay:.3
});

gsap.from(".hero-content button",{
  scale:.7,
  opacity:0,
  duration:1,
  delay:.6
});

gsap.utils.toArray(".card").forEach((card,i)=>{
  gsap.from(card,{
    scrollTrigger:{
      trigger:card,
      start:"top 85%"
    },
    y:80,
    opacity:0,
    duration:1,
    delay:i*.1
  });
});

gsap.from(".overlay h1",{
  scrollTrigger:{
    trigger:".parallax",
    start:"top center"
  },
  scale:0.7,
  opacity:0,
  duration:1.5
});

gsap.from(".stat",{
  scrollTrigger:{
    trigger:".stats",
    start:"top 80%"
  },
  y:80,
  opacity:0,
  stagger:.2,
  duration:1
});
