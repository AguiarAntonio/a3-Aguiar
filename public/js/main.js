// FRONT-END (CLIENT) JAVASCRIPT HERE

let x = 0;

const submit = async function( event ) {
    // stop form submission from trying to load
    // a new .html page for displaying results...
    // this was the original browser behavior and still
    // remains to this day
    event.preventDefault()

    const form = document.getElementById("theForm");
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log(data)

    await fetch("/click-handler", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            contentType: "application/json",
        },

    })
        .then((response) => response.json())
        .then((data) => {

            console.log(data)

            const table = document.getElementById("myTable");
            const newRow = table.insertRow();
            const cell1 = newRow.insertCell();
            const cell2 = newRow.insertCell();


            const num = data[x].indexOf(',"genre":')

            cell1.textContent = data[x].substring(12, num-1)
            cell2.textContent = data[x].substring(num+10, data[x].length - 2)

            cell1.style.border = "2px solid lightcyan"
            cell2.style.border = "2px solid lightcyan"
            cell1.style.width = "1em"
            cell2.style.width = "1em"
            cell1.style.borderCollapse = "collapse"
            cell2.style.borderCollapse = "collapse"
            cell1.style.textAlign = "center"
            cell2.style.textAlign = "center"

            x++;
        }).catch((error) => {
            console.log(error);
        })


}

window.onload = function() {
    const button = document.getElementById("submitButton");
    button.onclick = submit;
}
