const p = document.querySelector("#Text");
const b = document.querySelector("#change_button");
b.addEventListener("click", () => {
    p.textContent = "New Text";
});
let count = 0;
const counter = document.querySelector("#Clicker");
const Clicker = document.querySelector("#clicker_button");
Clicker.addEventListener("click", () => {
    counter.textContent = count = count + 1;
});
const bg = document.querySelector("#tc");
const button = document.querySelector("#chbg");
button.addEventListener("click", () => {
    bg.style.backgroundColor = "blue"
});
const fs = document.querySelector("#chfs");
const nm = document.querySelector("#Name");
fs.addEventListener("click", () => {
    nm.style.fontSize = "40px"
});
const tl = document.querySelector("#tl");
const add = document.querySelector("#Addi");
const remove = document.querySelector("#Remove")
add.addEventListener("click", () => {
    const item = document.createElement("li")
    item.textContent = "new Track"
    tl.append(item);
})
remove.addEventListener("click", () => {
    const lastItem = tl.lastElementChild;
    if(lastItem !==null){
        lastItem.remove();
    }
})

