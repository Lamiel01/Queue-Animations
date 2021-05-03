// Functions

// Listeners
document.addEventListener('DOMContentLoaded', function () {
    const item = document.getElementById('add');
    const read = document.getElementById('read');

    // const stack = document.getElementById('flex-stack');

    const addButton = document.getElementById('add-queue');
    const readButton = document.getElementById('read-queue');
    const removeButton = document.getElementById('remove-queue');

    addButton.onclick = addQueue;
    removeButton.onclick = removeQueue;


    function addQueue() {
        if (item.value == '') {
            console.error('XD');
        } else {
            var element2 = document.createElement("div");
            element2.appendChild(document.createTextNode(`${item.value}`))
            document.getElementById('table').appendChild(element2);
        }
    }

    function removeQueue() {
        console.log('Working');
        if ($('.table:empty').is(':empty')) {
            console.error('XD');
        }
    }
})
