var box  = document.getElementById('box');
var down = false;

function toggleMsg(){
  if (down) {
    box2.style.height  = '0px';
    box2.style.opacity = 0;
    down = false;
  }else {
    box2.style.height  = '410px';
    box2.style.opacity = 1;
    down = true;
  }
}

