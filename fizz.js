function main() {
    const innerCont = document.getElementById("id-inner-cont");
    const minCountEl = document.getElementById("min-count");
    const maxCountEl = document.getElementById("max-count");

    let minCount = 1; //we use to cache minCountEl.value
    let maxCount = 100; //we use to cache maxCountEl.value
    // const greetEl = "FIZZ=";
    const colorPickerEl = document.getElementById("box-color");

    let lastBoxId = 0;
    const MAX = 100;
    const MIN = 0;

    //Add Listeners to each button

    function onAddElement(event) {
        console.log("Adding SingleElement call from", event.currentTarget.id);
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

    function addFIZZ() {
        console.log("Adding FIZZ");
        //TODO get rid of magic 10
        for (let i = 1; i >= minCount && i <= maxCount; i++) {
            lastBoxId++; //global variable
            const id = "b-id-" + lastBoxId;
            const classList = ["box"];
            //backticks https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
            console.log(`Adding index ${i} id ${id} with `);
            if (i % 3 === 0) {
                classList.push("red-box");
                addElement(innerCont, "div", id, classList, "FIZZ=" + lastBoxId);
            }
        }
    }

    function deleteElements() {
        console.log("Clearing Elements");
        lastBoxId = 0;
        while (innerCont.firstChild) {
            innerCont.removeChild(innerCont.firstChild);
        }
    }

    function onMinChange() {
        // console.log("New value might be", maxCountEl.value);
        //IMPORTANT need to convert to Number instead of String
        const minvalue = parseInt(minCountEl.value);
        //sanity check
        if (minvalue > MAX || minvalue < MIN) return;
        minCount = minvalue;
        console.log("Actually mincount is", minCount);
        console.log(minCount, typeof minCount);
    }

    function onMaxChange() {
        // console.log("New value might be", maxCountEl.value);
        //IMPORTANT need to convert to Number instead of String
        const maxvalue = parseInt(maxCountEl.value);
        //sanity check
        if (maxvalue > MAX || maxvalue < MIN) return;
        maxCount = maxvalue;
        console.log("Actually maxcount is", maxCount);
        console.log(maxCount, typeof maxCount);
    }

    function addEventHandlers() {
        console.log("adding Handlers");
        // const addBtn = document.getElementById("btn-id-add");
        // addBtn.onclick = onAddElement;
        const addFIZZBtn = document.getElementById("btn-id-add-fiz");
        addFIZZBtn.onclick = addFIZZ;
        //we do not even need to save the buttons
        document.getElementById("btn-id-clear").onclick = deleteElements;
        minCountEl.onchange = onMinChange; //this happens when value is finalize
        maxCountEl.onchange = onMaxChange; //this happens when value is finalize
    }
    addEventHandlers();
}
main();