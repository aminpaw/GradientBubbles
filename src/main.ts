import "./style.css";

let currX = 0;
let currY = 0;
let toX = 0;
let toY = 0;

document.addEventListener("DOMContentLoaded", () => {
  const interBubble = document.querySelector<HTMLDivElement>(".interactive")!;

  function move() {
    currX += (toX - currX) * 0.05;
    currY += (toY - currY) * 0.05;
    interBubble.style.transform = `translate(${Math.round(
      currX
    )}px, ${Math.round(currY)}px)`;
    requestAnimationFrame(() => {
      move();
    });
  }

  window.addEventListener("mousemove", (e) => {
    toX = e.clientX;
    toY = e.clientY;
  });

  move();
});
