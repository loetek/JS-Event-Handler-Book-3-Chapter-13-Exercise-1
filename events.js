let mainBox = document.getElementById('message');
let redBox = document.getElementById('textBoxRed');
let blueBox = document.getElementById('textBoxBlue');
let redInput = document.getElementById('redMessageBox');
let blueInput = document.getElementById('blueMessageBox');


mainBox.addEventListener("keyup", function (event) {
    redBox.textContent = event.target.value;
    blueBox.textContent = event.target.value;
})
