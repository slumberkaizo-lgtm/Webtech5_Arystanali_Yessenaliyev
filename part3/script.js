const box = document.querySelector("#box");
box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "blue";
});
box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "#171725";
});

const textInput = document.querySelector("#textInput");
const preview = document.querySelector("#preview");
textInput.addEventListener("keyup", () => {
    preview.textContent = textInput.value;
});

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const result = document.querySelector("#result");

plus.addEventListener("click", () => {
    if(num1.value === "" || num2.value === ""){
        result.textContent = "Enter both numbers";
    } else {
        const a = Number(num1.value);
        const b = Number(num2.value);
        result.textContent = a + b;
    }
});

minus.addEventListener("click", () => {
    if(num1.value === "" || num2.value === ""){
        result.textContent = "Enter both numbers";
    } else {
        const a = Number(num1.value);
        const b = Number(num2.value);
        result.textContent = a - b;
    }
});

multiply.addEventListener("click", () => {
    if(num1.value === "" || num2.value === ""){
        result.textContent = "Enter both numbers";
    } else {
        const a = Number(num1.value);
        const b = Number(num2.value);
        result.textContent = a * b;
    }
});

divide.addEventListener("click", () => {
    if(num1.value === "" || num2.value === ""){
        result.textContent = "Enter both numbers";
    } else {
        const a = Number(num1.value);
        const b = Number(num2.value);
        if(b === 0){
            result.textContent = "Cannot divide by zero";
        } else {
            result.textContent = a / b;
        }
    }
});
