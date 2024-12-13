// Функција за пресметување на површина на правоаголник
function calculateArea() {
    // Земаме ги вредностите од input полињата
    var length = document.getElementById("length").value;
    var width = document.getElementById("width").value;

    // Проверка дали се внесени вредности
    if (length == "" || width == "") {
        console.log("Молам внесете ги должината и ширината.");
    } else {
        // Пресметка на површина (а * b)
        var area = length * width;

        // Испишување на резултатот во конзолата
        console.log("Површина на правоаголникот е: " + area);
    }
}
