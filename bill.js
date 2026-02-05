const items = JSON.parse(localStorage.getItem("billItems")) || [];
const total = localStorage.getItem("billTotal");

const billItems = document.getElementById("billItems");
const billTotal = document.getElementById("billTotal");
const dateEl = document.getElementById("date");

dateEl.textContent = new Date().toLocaleString();

let rows = "";

items.forEach(item => {
    rows += `
        <tr>
            <td>${item.name}</td>
            <td>${item.qty}</td>
            <td>${item.price}</td>
            <td>${item.qty * item.price}</td>
        </tr>
    `;
});

billItems.innerHTML = rows;
billTotal.textContent = total;
