const num1 = +prompt("Enter number 1");
if (Number.isNaN(num1)) {
  alert("Шкода, що Ви не захотіли ввести число");
}
const num2 = +prompt("Enter number 2");
if (Number.isNaN(num2)) {
  alert("Шкода, що Ви не захотіли ввести число");
}
const num3 = +prompt("Enter number 3");
if (Number.isNaN(num3)) {
  alert("Шкода, що Ви не захотіли ввести число");
}

if (Number.isNaN(num1) || Number.isNaN(num2) || Number.isNaN(num3)) {
  alert("Шкода, що Ви не захотіли ввести число");
} else {
  alert((num1 + num2 + num3) / 3);
}
