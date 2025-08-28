// Part 1: Basics
// Variables and conditionals

let userAge = 20;
if (userAge >= 18) {
  console.log("You are an adult ✅");
  document.getElementById("basic-output").innerText = "You are an adult ✅";
} else {
  console.log("You are a minor ❌");
  document.getElementById("basic-output").innerText = "You are a minor ❌";
}

// Part 2: Functions
// Function 1: Calculate total
function showTotal(a, b) {
  let total = a + b;
  document.getElementById("function-output").innerText = `Total is: ${total}`;
}

function formatName(first, last) {
  return `${first.toUpperCase()} ${last.toUpperCase()}`;
}
console.log("Formatted Name:", formatName("john", "doe"));

// Part 3: Loops

let fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes", "🍊 Orange"];

// For loop
function listFruits() {
  let list = document.getElementById("fruit-list");
  list.innerHTML = ""; // clear list
  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    list.appendChild(li);
  }
}

// While loop: simple countdown
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}

// Part 4: DOM Manipulation
// Toggle highlight on paragraph
document.getElementById("toggle-btn").addEventListener("click", function () {
  document.getElementById("dom-text").classList.toggle("highlight");
});

// Add new list item dynamically
function addItem() {
  let list = document.getElementById("dynamic-list");
  let li = document.createElement("li");
  li.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(li);
}

// Change text dynamically
document.getElementById("dom-text").addEventListener("mouseover", function () {
  this.textContent = "You hovered over me! 🎉";
});
document.getElementById("dom-text").addEventListener("mouseout", function () {
  this.textContent = "This text will change color when toggled!";
});
