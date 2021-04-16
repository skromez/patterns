function getTotalOrder(order) {
    let total = 0
    for (const item of order.items) {
        total += item.price * item.quantity
    }

    if (order.country === "US") {
        total =+ total * 0.07
    } else if (order.country === "EU") {
        total =+ total * 0.20
    }
    return total
}
