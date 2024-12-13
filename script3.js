// Функција за пресметување на површина на круг
function calculateCircleArea() {
    // Земаме го радиусот од input полето
    var radius = document.getElementById("radius").value;

    // Проверка дали е внесен радиус
    if (radius == "") {
        console.log("Молам внесете го радиусот на кругот.");
    } else {
        // Пресметка на површина (π * r^2)
        var area = Math.PI * Math.pow(radius, 2);

        // Испишување на резултатот во конзолата
        console.log("Површина на кругот е: " + area);
    }
}
