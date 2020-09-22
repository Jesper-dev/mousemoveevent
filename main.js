const box = document.querySelector(".box");

box.addEventListener("mousemove",function(e) {
   console.log(e.offsetX, e.offsetY);
   box.textContent = `x position - ${e.offsetX}  y position - ${e.offsetY}`;
});