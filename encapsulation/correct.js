function getTotalOrder(order) {
    let total = 0
    for (const item of order.items) {
        total += item.price * item.quantity
    }
    total += getTaxAmount(order.country)
    return total
}

function getTaxAmount(country) {
    if (country === "US") {
        return 0.07
    }
    if (country === "EU") {
        return 0.20
    } else {
        return 0
    }
}
