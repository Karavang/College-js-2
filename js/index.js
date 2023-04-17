document.getElementById("sub-1").onclick = function (e) {
  e.preventDefault();
  const input = document.querySelector(".inp-1");
  const output = document.getElementById("out-1");
  if (input.value > 17) {
    output.textContent = "Доброго вечора";
  } else {
    output.textContent = "Доброго дня";
  }
};

document.getElementById("sub-2").onclick = function (e) {
  e.preventDefault();
  const input = document.querySelector(".inp-2");
  const output = document.getElementById("out-2");
  if (input.value === "Jonh") {
    output.textContent = "Привіт, Jonh";
  } else {
    output.textContent = "Я вас не знаю";
  }
};

document.getElementById("sub-3").onclick = function (e) {
  e.preventDefault();
  console.log(1);
  const inputName = document.querySelector(".inp-31");
  const inputPass = document.querySelector(".inp-32");
  const output = document.getElementById("out-3");
  if (inputName.value === "ivan" && inputPass.value === "333ssss") {
    output.textContent = "Ласкаво просимо";
  } else {
    output.textContent = "Користувач не знайдений";
  }
};

document.getElementById("sub-4").onclick = function (e) {
  e.preventDefault();
  const num1 = document.querySelector(".inp-41").value;
  const num2 = document.querySelector(".inp-42").value;
  const num3 = document.querySelector(".inp-43").value;

  const output = document.getElementById("out-4");
  if (num1 > num2 && num1 > num3) {
    console.log("Максимальне число: " + num1);
    output.textContent = `Максимальне число:${num1}`;
  } else if (num2 > num1 && num2 > num3) {
    output.textContent = `Максимальне число:${num2}`;
  } else if (num3 > num1 && num3 > num2) {
    output.textContent = `Максимальне число:${num3}`;
  } else {
    output.textContent = "Введені числа рівні.";
  }
};
