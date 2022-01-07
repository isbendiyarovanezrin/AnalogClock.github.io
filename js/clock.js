"use strict";

const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function ticktock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hour = now.getHours();

  secondHand.style.transform = `rotate(${seconds * 6}deg)`;
  minHand.style.transform = `rotate(${mins * 6}deg)`;
  hourHand.style.transform = `rotate(${hour * 30}deg)`;
}

setInterval(ticktock, 1000);
ticktock();

// cursor
let cursor = document.getElementById("cursor");

document.addEventListener("mousemove", changeCursor);

function changeCursor(e) {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
}
