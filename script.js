function updateQuantity(itemId, change) {
    const quantityElement = document.getElementById(`${itemId}-quantity`);
    let quantity = parseInt(quantityElement.innerText);
    quantity += change;

    if (quantity < 1) {
        quantity = 1;
    }
    quantityElement.innerText = quantity;
    // Update totals dynamically
    updateTotals();
}

function updateTotals() {
    const item1Quantity = parseInt(document.getElementById('item1-quantity').innerText);
    const item2Quantity = parseInt(document.getElementById('item2-quantity').innerText);

    const itemTotal = (item1Quantity * 320) + (item2Quantity * 320);
    const deliveryFee = 20;
    const taxes = 2;
    const totalAmount = itemTotal + deliveryFee + taxes;

    document.getElementById('item-total').innerText = `₹ ${itemTotal}`;
    document.getElementById('total-amount').innerText = `₹ ${totalAmount}`;
}