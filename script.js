// Функција што се активира кога ќе се кликне на копчето
function convert() {
    // Земање на вредноста од input поле за стапки
    var feet = document.getElementById("inputFeet").value;

    // Проверка дали не е внесена празна вредност
    if (feet == "") {
        console.log("Молам внесете вредност за стапки.");
    } else {
        // Пресметка на метри од стапки (1 стапка = 0.3048 метри)
        var meters = feet * 0.3048;

        // Испишување на резултатот во конзолата
        console.log(feet + " стапки е " + meters + " метри.");
    }
}