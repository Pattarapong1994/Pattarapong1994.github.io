var typeSring = ["Pattarapong.", "NewDeveloper.", "Por and shy."];
var i = 0;
var count = 0;
var selectedText = "";
var text = "";

(type = () => {
    if (count == typeSring.length) {
        count = 0;
    }
    selectedText = typeSring[count];
    text = selectedText.slice(0,++i);
    document.getElementById('typing').innerHTML = text;
    if (text.length == selectedText.length) {
        count++;
        i = 0;
    }
    setTimeout(type, 200);
})();

console.log(selectedText);
console.log(text);