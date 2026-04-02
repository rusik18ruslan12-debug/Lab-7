let name = prompt("Введите ваше имя:");

if (name !== null && name !== "") {
    alert("Привет, " + name + "!");
} else {
    alert("Вы не ввели имя");
}

function doubleNumber() {
    let number = document.getElementById("numberInput").value;

    if (number === "") {
        console.log("Введите число!");
        return;
    }

    let result = number * 2;

    console.log("Удвоенное число: ", result);
}
