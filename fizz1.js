function main() {
    //Add Listeners to each button
    const innerCont = document.getElementById("id-inner-cont");
    const maxCountEl = document.getElementById("max-count");
    let minCount = 0; //we use to cache maxCountEl.value
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

    function deleteElements() {
        console.log("Clearing Elements");
        lastBoxId = 0;
        while (innerCont.firstChild) {
            innerCont.removeChild(innerCont.firstChild);
        }
    }

    function addFizElements() {
        // Clears everyting before function addFizElements is executed
        deleteElements();
        console.log("Adding Fizz Elements");
        for (let i = 1; i >= minCount && i <= maxCount; i++) {
            lastBoxId++; //global variable
            const id = "b-id-" + lastBoxId;
            const classList = ["box"];
            console.log(`Adding index ${i} id ${id} with `);
            if (i % 3 === 0) {
                classList.push("fiz-box");
                addElement(innerCont, "div", id, classList, "FIZZ=" + lastBoxId);

            }
        }
    }

    function addBuzElements() {
        // Clears everyting before function addBuzElements is executed
        deleteElements();
        console.log("Adding Buzz Elements");
        for (let i = 1; i >= minCount && i <= maxCount; i++) {
            lastBoxId++; //global variable
            const id = "b-id-" + lastBoxId;
            const classList = ["box"];
            console.log(`Adding index ${i} id ${id} with `);
            if (i % 5 === 0) {
                classList.push("buz-box");
                addElement(innerCont, "div", id, classList, "BUZZ=" + lastBoxId);
            }
        }
    }

    function addFizBuzElements() {
        // Clears everyting before function addFizzBuzzElements is executed
        deleteElements();
        console.log("Adding Default Elements");
        for (let i = 1; i >= minCount && i <= maxCount; i++) {
            lastBoxId++; //global variable
            const id = "b-id-" + lastBoxId;
            const classList = ["box"];
            console.log(`Adding index ${i} id ${id} with `);
            if (i % 3 === 0 && i % 5 === 0) {
                classList.push("fiz-buz-box");
                addElement(innerCont, "div", id, classList, "FIZZ-BUZZ=" + lastBoxId);
            }
        }
    }

    function addDefaultElements() {
        // Clears everyting before function addDefaultElements is executed
        deleteElements();
        console.log("Adding Default Elements");
        for (let i = 1; i >= minCount && i <= maxCount; i++) {
            lastBoxId++; //global variable
            const id = "b-id-" + lastBoxId;
            const classList = ["box"];
            console.log(`Adding index ${i} id ${id} with `);
            if (i % 3 === 0 && i % 5 === 0) {
                classList.push("fiz-buz-box");
                addElement(innerCont, "div", id, classList, "FIZZ-BUZZ=" + lastBoxId);
            } else if (i % 5 === 0) {
                classList.push("buz-box");
                addElement(innerCont, "div", id, classList, "BUZZ=" + lastBoxId);
            } else if (i % 3 === 0) {
                classList.push("fiz-box");
                addElement(innerCont, "div", id, classList, "FIZZ=" + lastBoxId);
            }
            if (i % 3 !== 0 && i % 5 !== 0) {
                classList.push("none-box");
                addElement(innerCont, "div", id, classList, lastBoxId);
            }
        }

    }

    function onMinMaxChange() {
        const maxvalue = parseInt(maxCountEl.value);
        //sanity check
        if ((maxvalue > MAX || maxvalue < MIN)) return;
        else {
            maxCount = maxvalue;
            console.log("Actually maxcount is", maxCount);
            console.log(maxCount, typeof maxCount);
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
        addDefaultBtn.onclick = addDefaultElements;
        maxCountEl.onchange = onMinMaxChange;
        const clearBtn = document.getElementById("btn-id-clear");
        clearBtn.onclick = deleteElements;
    }

    addEventHandlers();
}
main();