let angle = prompt(`Яка довжина катетів? (в форматі х-х)`);
let fin = "";
let angleComponents = angle.split("-");
if (angleComponents.length !== 2) {
  alert("Неправильно введені дані");
} else if (Number.isNaN(angleComponents[0])) {
  alert("Шкода, що Ви не захотіли ввести катет");
} else if (Number.isNaN(angleComponents[1])) {
  alert("Шкода, що Ви не захотіли ввести катет");
} else {
  let = resolution1 = angleComponents[0] ** 2 + angleComponents[1] ** 2;
  const sqrt = (value) => {
    for (let i = 0; i <= value; i++) {
      if (i * i === value) return i;
    }
    return "this number has no integer root";
  };
  fin = `Гіпотенуза без Math: ${sqrt(resolution1)}\n`;
}

let = resolution2 = Math.sqrt(
  angleComponents[0] * angleComponents[0] +
    angleComponents[1] * angleComponents[1]
);
fin = fin + `Гіпотинуза з Math: ${resolution2}`;

alert(fin);
