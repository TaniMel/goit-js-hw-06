//Напиши скрипт создания и очистки коллекции элементов.
//Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//после чего рендерится коллекция.
//При нажатии на кнопку Очистить, коллекция элементов очищается.

//<div id="controls">
//  <input type="number" min="1" max="100" step="1" />
//  <button type="button" data-create>Create</button>
//  <button type="button" data-destroy>Destroy</button>
//</div>

//<div id="boxes"></div>

//Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

//Размеры самого первого <div> - 30px на 30px.
//Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
//Все элементы должены иметь случайный цвет фона в формате HEX.
//Используй готовую функцию getRandomHexColor для получения цвета.

//Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//тем самым удаляя все созданные элементы.

const valueToInput = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divsContainer = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onCreateCounterInValueInput = (value) => {
  valueToInput.setAttribute("counter", value.currentTarget.value);
};

const onCreateBoxes = () => {
  let startBoxSizing = 30;
  let allDivsEl = [];
  for (let i = 1; i <= valueToInput.getAttribute("counter"); i += 1) {
    startBoxSizing += 10;
    const createdDiv = document.createElement("div");

    createdDiv.classList.add("box-item");
    createdDiv.style.width = `${startBoxSizing}px`;
    createdDiv.style.height = `${startBoxSizing}px`;
    createdDiv.style.border = "2px solid black";
    createdDiv.style.backgroundColor = `${getRandomHexColor()}`;
    createdDiv.style.marginTop = "10px";
    createdDiv.style.verticalAlign = "middle";

    allDivsEl.push(createdDiv);
  }
  divsContainer.append(...allDivsEl);
};

const onDestroyBtn = () => {
  divsContainer.innerHTML = "";
  valueToInput.removeAttribute("counter");
  valueToInput.value = "";
};

valueToInput.addEventListener("input", onCreateCounterInValueInput);
createBtn.addEventListener("click", onCreateBoxes);
destroyBtn.addEventListener("click", onDestroyBtn);
