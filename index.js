let page = document.getElementById("page");
let content = document.getElementsByClassName("content");


page.style.position = "fixed";
page.style.width = "100vw";
page.style.transition = "top 1s ease-in-out";
// content.style.position = "fixed";
// content.style.top = "40%"

let view = 1;
let transitioning = false;
let maxview=3;

function turnPage(event) {
  event.preventDefault();
  if (!transitioning) {
      if (event.deltaY > 0 && view < maxview) {
          view += 1;
          transitioning = true;
        }
        if (event.deltaY < 0 && view > 1) {
            view -= 1;
            transitioning = true;
        }
        page.className = `page${view}`;
  }
}
page.onwheel = turnPage;

//for Mobile
let touchY = 0;
var src = document.getElementById("page");

src.addEventListener('touchstart', function(e) {
    touchY = e.touches[0].clientY
    console.log(touchY)
},false)

page.ontouchmove = (event) => {
    if (event.touches[0].clientY > touchY && view < maxview){
        view += 1;
        transitioning = true;
    }
    if (event.touches[0].clientY < touchY && view > 1) {
        view -= 1;
        transitioning = true;
    }
    page.className = `page${view}`;

};
refresh = function(){
    transitioning = false;
    console.log('time')
}

page.ontransitionend = () => {
    setTimeout(refresh, 1000)
    console.log(view)
}
