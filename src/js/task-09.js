//Напиши скрипт, который изменяет цвета фона элемента < body >
//    через инлайн стиль при клике на button.change - color
//    и выводит значение цвета в span.color.

//<div class="widget">
//  <p>Background color: <span class="color">-</span></p>
//  <button type="button" class="change-color">Change color</button>
//</div >

//Для генерации случайного цвета используй функцию getRandomHexColor.

const randomColor = document.querySelector(".widget");
const span = document.querySelector(".color");
randomColor.addEventListener("click", onButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonClick(evt) {
  span.textContent = getRandomHexColor();

  if (!evt.target.classList.contains("change-color")) {
    return;
  }
  return (document.body.style.background = getRandomHexColor());
}
