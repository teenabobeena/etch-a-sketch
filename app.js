const container = document.querySelector("div");



for (let i = 1; i <= 16; i++) {
    const square = document.createElement("div");
    square.classList.add("box");
    container.appendChild(square);
}
