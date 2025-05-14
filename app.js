const container = document.querySelector("div");
const body = document.querySelector("body");

const btn = document.createElement("button");
body.appendChild(btn);
btn.textContent = "Reset";


for (let i = 1; i <= 16; i++) {
    const square = document.createElement("div");
    square.classList.add("box");
    container.appendChild(square);
}

const gridSquares = document.querySelectorAll(".box");

gridSquares.forEach(square => {
    square.addEventListener("mouseover", function() {
        square.style.backgroundColor = "blue";
    });
});

btn.addEventListener("click", () => {
    prompt("How many squares?");
})