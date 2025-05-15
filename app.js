const container = document.querySelector(".container");
const body = document.querySelector("body");

const btn = document.createElement("button");
body.appendChild(btn);
btn.textContent = "Reset";

function makeGrid(count) {
    container.innerHTML = "";
    const gridSize = Math.ceil(Math.sqrt(count));
    const boxSize = 500 / gridSize;

    for (let i = 0; i < count; i++) {
        const square = document.createElement("div");
        square.classList.add("box");
        square.style.width = `${boxSize}px`;
        square.style.height = `${boxSize}px`;
        container.appendChild(square);
    }

    const gridSquares = document.querySelectorAll(".box");

    gridSquares.forEach(square => {
        square.addEventListener("mouseover", function() {
            square.style.backgroundColor = "blue";
        });
    });
}

makeGrid(16);

btn.addEventListener("click", () => {
    const userCount = parseInt(prompt("How many squares? Max 99"));
    
    while (isNaN(userCount) || userCount < 1 || userCount > 100) {
        userCount = parseInt(prompt("Please enter a number between 1 and 100"));
    }

    makeGrid(userCount);
})