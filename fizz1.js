function main() {
    //Add Listeners to each button
    const innerCont = document.getElementById("id-inner-cont");
    const minCountEl = document.getElementById("min-count");
    const maxCountEl = document.getElementById("max-count");

    let minCount = 1; //we use to cache minCountEl.value
    let maxCount = 100; //we use to cache maxCountEl.value

    let lastBoxId = 0;
    const MAX = 100;
    const MIN = 0;

    function addElement(parent, tag, id, classList, content) {
        const newEl = document.createElement(tag);
        if (id !== null) newEl.id = id;
        newEl.classList.add(...classList);
        newEl.innerText = content;
        parent.appendChild(newEl);
    }

    function addFizElements() {
        console.log("Adding Fizz Elements");
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

    function addBuzElements() {
        console.log("Adding Buzz Elements");
    }

    function addFizBuzElements() {
        console.log("Adding Default Elements");
    }

    function deleteElements() {
        console.log("Clearing Elements");
        lastBoxId = 0;
        while (innerCont.firstChild) {
            innerCont.removeChild(innerCont.firstChild);
        }
    }

    function addEventHandlers() {
        console.log("adding Handlers");
        const addFizbtn = document.getElementById("btn-id-add-fiz");
        addFizbtn.onclick = addFizElements;
        const addBuzBtn = document.getElementById("btn-id-add-buz");
        addBuzBtn.onclick = addBuzElements;
        const addFizBuzBtn = document.getElementById("btn-id-add-fiz-buz");
        addFizBuzBtn.onclick = addFizBuzElements;
        const addDefaultBtn = document.getElementById("btn-id-add-default");
        addDefaultBtn.onclick = addFizBuzElements;
        const clearBtn = document.getElementById("btn-id-clear");
        clearBtn.onclick = deleteElements;
        //add event handlers here
        //you will need to find the elements
    }

    addEventHandlers();
}
main();