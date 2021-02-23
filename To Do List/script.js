var enterButton = document.getElementById("enter");
var input  = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

inputLength = () => {
    return input.value.length;
}

listLength = () => {
    return item.length;
}

createListElement = () => {
    var li = document.createElement("li"); // create an element "li"
    li.appendChild(document.createTextNode(input.value)); //make text form in put field the li text
    ul.appendChild(li); //add li to ul
    input.value = ""; //reset text input field

    crossOut = () => {
        li.classList.toggle("done");
    }

    deleteListitem = () => {
        li.classList.add("delete");
    }

    li.addEventListener("click", crossOut);

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListitem);

    deleteListitem = () => {
        li.classList;
    }
}

addListAfterClick = () => {
    if(inputLength() > 0) {
        createListElement();
    }
}

addListAfterKeyPress = (event) => {
    if(inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

clearAll = () => {
    ul.classList.add("delete");
}

enterButton .addEventListener("click",addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);