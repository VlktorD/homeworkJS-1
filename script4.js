// Функција за пресметување на цената на 30 телефони
function calculateTotalPrice() {
    // Цена на еден телефон
    var phonePrice = 119.95;
    
    // Даночна стапка (5%)
    var taxRate = 0.05;

    // Број на телефони
    var phoneCount = 30;

    // Пресметка на вкупната цена на 30 телефони без данок
    var totalPriceWithoutTax = phonePrice * phoneCount;

    // Пресметка на данок
    var taxAmount = totalPriceWithoutTax * taxRate;

    // Вкупна цена со данок
    var totalPriceWithTax = totalPriceWithoutTax + taxAmount;

    // Испишување на резултатите во конзолата
    console.log("Цена на 30 телефони без данок: $" + totalPriceWithoutTax);
    console.log("Данок (5%): $" + taxAmount);
    console.log("Вкупна цена со данок: $" + totalPriceWithTax);
}
