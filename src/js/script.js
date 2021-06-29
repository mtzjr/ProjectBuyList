const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const listItems = document.getElementsByTagName("li");
const buttonList = document.getElementsByClassName("togglebutton");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  const li = document.createElement("li");
  const button = document.createElement("button");

  button.className = "togglebutton";
  button.appendChild(document.createTextNode("X"));

  li.appendChild(button);
  li.appendChild(document.createTextNode(" " + input.value));
  ul.appendChild(li);

  input.value = "";
  itemEvents();
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleItem() {
  this.classList.toggle("done");
}

function deleteItem() {
  this.parentElement.remove();
}

function itemEvents() {
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", toggleItem);
  }
  for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", deleteItem);
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

itemEvents();
