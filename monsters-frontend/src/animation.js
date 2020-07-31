var initX = 0;
var initY = 0;


// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//       let leftNumbers = dodger.style.left.replace("px", "");
//       let left = parseInt(leftNumbers, 10);
   
//       dodger.style.left = `${left - 1}px`;
//     }
//   });

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft")  {//left
      initX += 30;
      document.getElementsByTagName('body')[0].style.backgroundPositionX = initX + "px";
      document.getElementById('legs').style.transform =   "rotate(-10deg)";
      // document.querySelector('#head').style.transform = "scaleX(-1)";
      // document.querySelector('#body').style.transform = "scaleX(-1)";
      // document.querySelector('#legs').style.transform = "scaleX(-1)";
      // document.querySelector('#').style.transform = "scaleX(-1)";
      // document.getElementById('legs').style.transform =  "rotate(20deg)";
    }
    else if (e.key === "ArrowRight") {//right
      initX -= 30;
      document.getElementsByTagName('body')[0].style.backgroundPositionX = initX + "px";
      document.getElementById('legs').style.transform =  "rotate(10deg)";
      // document.querySelector('#head').style.transform = "scaleX(1)";
      // document.querySelector('#body').style.transform = "scaleX(1)";
      // document.querySelector('#legs').style.transform = "scaleX(-1)";
      
    }

    document.addEventListener("keyup", () => {
      document.getElementById('legs').style.transform =  "rotate(0deg)";
    })


    // if (e.key === "F")
});
