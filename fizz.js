//globals
const innerCont = document.getElementById("id-inner-cont");
const maxCountEl = document.getElementById("max-count");
let maxCount = 100; //we use to cache maxCountEl.value
const greetEl = document.getElementById("custom-name");
const colorPickerEl = document.getElementById("box-color");

let lastBoxId = 0;
const MAX = 100;
const MIN = 0;

//Add Listeners to each button

function onAddElement(event) {
    console.log("Adding SingleElement call from", event.currentTarget.id);
    //Avoid using innerHTML because it is easy to mess up HTML and introduce security issues
    // innerCont.innerHTML += "<div class='inner-box'>Kaste</div>";
    lastBoxId++;
    const id = "b-id-" + lastBoxId;
    addElement(innerCont, "div", id, ["box", "red-box"], "Kaste" + lastBoxId);
}

function addElement(parent, tag, id, classList, content) {
    const newEl = document.createElement(tag);
    if (id !== null) newEl.id = id;
    newEl.classList.add(...classList);
    newEl.innerText = content;
    parent.appendChild(newEl);
}

function addManyElements() {
    console.log("Adding Many Elements");
    //TODO get rid of magic 10
    for (let i = 1; i <= maxCount; i++) {
        lastBoxId++; //global variable
        const id = "b-id-" + lastBoxId;
        const classList = ["box"];
        //backticks https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        console.log(`Adding index ${i} id ${id} with `);
        // console.log(classList);
        // addElement(innerCont, "div", id, classList, "Kaste " + lastBoxId);
        if (i % 3 === 0) {
            classList.push("red-box");
            addElement(innerCont, "div", id, classList, greetEl.value + lastBoxId);

        }
        // else {
        // classList.push("green-box");

    }
    // addElement(innerCont, "div", id, classList, greetEl.value + lastBoxId);
}
// }

function deleteElements() {
    console.log("Clearing Elements");
    lastBoxId = 0;
    while (innerCont.firstChild) {
        innerCont.removeChild(innerCont.firstChild);
    }
}

function onMaxChange() {
    console.log("New value might be", maxCountEl.value);
    //IMPORTANT need to convert to Number instead of String
    const tvalue = parseInt(maxCountEl.value);
    //sanity check
    if (tvalue > MAX || tvalue < MIN) return;

    maxCount = tvalue;
    console.log("Actually maxcount is", maxCount);
    console.log(maxCount, typeof maxCount);
}

function addEventHandlers() {
    console.log("adding Handlers");
    // const addBtn = document.getElementById("btn-id-add");
    // addBtn.onclick = onAddElement;
    const addManyBtn = document.getElementById("btn-id-add-many");
    addManyBtn.onclick = addManyElements;
    //we do not even need to save the buttons
    document.getElementById("btn-id-clear").onclick = deleteElements;
    maxCountEl.onchange = onMaxChange; //this happens when value is finalize
    //so there is difference between onchange and oninput
    //oninput fires whenever value is changed on the fly
    maxCountEl.oninput = (ev) =>
        console.log("Fires while changing", ev.target.value);
    //add event handlers here
    //you will need to find the elements
    //TODO add button should call addElements
    //TODO clear button should call deleteElements
    greetEl.oninput = onGreetingChange;

    //with addEventListener I can attach multiple functions to same event
    colorPickerEl.addEventListener("change", () =>
        console.log("Color Changing")
    );
    colorPickerEl.addEventListener("change", (ev) =>
        console.log("Color Changing to", ev.target.value)
    );
    colorPickerEl.addEventListener("change", onColorChange);
}

function onColorChange(event) {
    console.log("Yeah new color is", event.target.value);
}

function onGreetingChange(event) {
    console.log("New greeting is", event.target.value);
    //TODO change greeting on all boxes
    //below returns HTMLCollection which Live meaning it updates
    // const boxes = document.getElementsByClassName('box');
    //alternative use querySelectorAll which returns static NodeList
    const boxes = document.querySelectorAll(".box");
    console.log(boxes.length, typeof boxes);
    //alterantive would be
    for (let i = 0; i < boxes.length; i++) {
        console.log(boxes[i].id, boxes[i].innerText);
    }
    //if we do not need index we can use the newer loop style
    for (const boxEl of boxes) {
        //boxEl.id.split("-")[2]; depends on actually haveing at least two - in your id
        boxEl.innerText = event.target.value + " " + boxEl.id.split("-")[2];
        //how to preserver number for the box?
    }
}
addEventHandlers();