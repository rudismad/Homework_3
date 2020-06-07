console.log("Started Clearing js");

//Add Listeners to each button

function addFizElements() {
    console.log("Adding Fizz Elements");
}

function addBuzElements() {
    console.log("Adding Buzz Elements");
}

function addFizBuzElements() {
    console.log("Adding Default Elements");
}

function deleteElements() {
    console.log("Clearing Elements");
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