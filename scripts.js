// Listeners
document.addEventListener('DOMContentLoaded', function () {
    const item = document.getElementById('add');
    const addButton = document.getElementById('add-queue');
    const removeButton = document.getElementById('remove-queue');

    addButton.onclick = addQueue;
    removeButton.onclick = removeQueue;

    function addQueue() {
        if (item.value == '') {
            console.error('Error, cadena vacía');
        } else {
            var el = document.createElement("div");
            el.appendChild(document.createTextNode(`${item.value}`))
            document.getElementById('table').appendChild(el);
    }}

    function removeQueue() {
        if (document.getElementById('table').innerHTML === "") {
            console.log('Error, tabla vacía');
        } else {
            var table = document.getElementById('table');
            table.removeChild(table.firstElementChild);
        }
    }
})
