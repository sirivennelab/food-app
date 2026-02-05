let cart = [];

const inputs = document.querySelectorAll('input[type="number"]');
const cartItems = document.getElementById("cartItems");
const totalEl = document.getElementById("total");

inputs.forEach(input => {
    input.addEventListener("change", updateCart);
});

function updateCart() {
    cart = [];
    let total = 0;
    cartItems.innerHTML = "";

    inputs.forEach(input => {
        let qty = Number(input.value);
        if (qty > 0) {
            let name = input.dataset.name;
            let price = Number(input.dataset.price);
            let itemTotal = qty * price;

            cart.push({ name, price, qty });

            cartItems.innerHTML += `
                <li>${name} × ${qty} = ₹${itemTotal}</li>
            `;
            total += itemTotal;
        }
    });

    totalEl.textContent = total;
}

function submitOrder() {
    if (cart.length === 0) {
        alert("Please select items!");
        return;
    }

    localStorage.setItem("billItems", JSON.stringify(cart));
    localStorage.setItem("billTotal", totalEl.textContent);
    window.location.href = "bill.html";
}
