/*Navbrand animate*/
var textWrapper = document.querySelector('.navbar-brand');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g,
 "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.navbar-brand .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.navbar-brand',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 13000
  });

/*animate sriLaka's #1...*/
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 1750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 4000
  });
/*ResposiveTab*/
  function openFunction(){
    document.getElementById("menu").style.width="300px";
    document.getElementById("btn1").style.visibility="hidden";
  }
  function closeFunction(){
    document.getElementById("menu").style.width="0px";
    document.getElementById("btn1").style.visibility="visible"; 
}
