//Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//подставляет его текущее значение в span#name - output.
//Если инпут пустой, в спане должна отображаться строка "Anonymous".

//<input type="text" id="name-input" placeholder="Please enter your name" />
//<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const inputName = () => {
  spanEl.textContent = inputEl.value;

  if (inputEl.value.trim() === "".trim()) {
    spanEl.textContent = "Anonymous";
  }
};

inputEl.addEventListener("input", inputName);

//let input = document.getElementById("name-input");
//let nameOutput = document.getElementById("name-output");

//input.oninput = function () {
//  if (input.value === "") {
//    nameOutput.innerHTML = "Anonymous";
//  } else {
//    nameOutput.innerHTML = input.value;
//  }
//};
