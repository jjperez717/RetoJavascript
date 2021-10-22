//campos de letras y numeros
const letters = document.getElementById("letters");
const numbers = document.getElementById("numbers");

//botones
const a1 = document.getElementById("a1");
const b2 = document.getElementById("b2");
const c3 = document.getElementById("c3");
const d4 = document.getElementById("d4");
const e5 = document.getElementById("e5");
const f6 = document.getElementById("f6");
const g7 = document.getElementById("g7");
const h8 = document.getElementById("h8");
const i9 = document.getElementById("i9");
const j0 = document.getElementById("j0");
const cl = document.getElementById("cl");
const cn = document.getElementById("cn");

//funciones
const fnA1 = () => {
  if (letters.innerHTML == "") {
    letters.innerHTML = "A";
  }

  if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "") {
    numbers.innerHTML = "1";
  }
};
const fnB2 = () => {
  if (letters.innerHTML == "A") {
    letters.innerHTML += "B"; //letters.innerHTML = letters.innerHTML + "B"
  } else {
    alert("faltan letras");
  }

  if (numbers.innerHTML == "1") {
    numbers.innerHTML += "2";
  } else {
    alert("faltan números");
  }
};

const fnC3 = () => {
  if (letters.innerHTML == "AB") {
    letters.innerHTML += "C";
  } else {
    alert("faltan letras");
  }

  if (numbers.innerHTML == "12") {
    numbers.innerHTML += "3";
  } else {
    alert("faltan números");
  }
};

const fnD4 = () => {
  if (letters.innerHTML == "ABC") {
    letters.innerHTML += "D";
  } else {
    alert("faltan letras");
  }

  if (numbers.innerHTML == "123") {
    numbers.innerHTML += "4";
  } else {
    alert("faltan números");
  }
};
const fnE5 = () => {
  if (letters.innerHTML == "ABCD") {
    letters.innerHTML += "E";
  } else {
    alert("faltan letras");
  }

  if (numbers.innerHTML == "1234") {
    numbers.innerHTML += "5";
  } else {
    alert("faltan números");
  }
};
const fnF6 = () => {
  if (letters.innerHTML == "ABCDE") {
    letters.innerHTML += "F";
  } else {
    alert("faltan letras");
  }

  if (numbers.innerHTML == "12345") {
    numbers.innerHTML += "6";
  } else {
    alert("faltan números");
  }
};
const fnG7 = () => {
  if (letters.innerHTML == "ABCDEF") {
    letters.innerHTML += "G";
  } else {
    alert("faltan letras");
  }

  if (numbers.innerHTML == "123456") {
    numbers.innerHTML += "7";
  } else {
    alert("faltan números");
  }
};
const fnH8 = () => {
  if (letters.innerHTML == "ABCDEFG") {
    letters.innerHTML += "H";
  } else {
    alert("faltan letras");
  }

  if (numbers.innerHTML == "1234567") {
    numbers.innerHTML += "8";
  } else {
    alert("faltan números");
  }
};
const fnI9 = () => {
  if (letters.innerHTML == "ABCDEFGH") {
    letters.innerHTML += "I";
  } else {
    alert("faltan letras");
  }

  if (numbers.innerHTML == "12345678") {
    numbers.innerHTML += "9";
  } else {
    alert("faltan números");
  }
};
const fnJ0 = () => {
  if (letters.innerHTML == "ABCDEFGHI") {
    letters.innerHTML += "J";
  } else {
    alert("faltan letras");
  }

  if (numbers.innerHTML == "123456789") {
    numbers.innerHTML += "0";
  } else {
    alert("faltan números");
  }
};
const fnCL = () => {
  letters.innerHTML = "";
};
const fnCN = () => {
  letters.innerHTML = "";
};

//eventos
a1.onclick = () => {
  fnA1();
};
b2.onclick = () => {
  fnB2();
};
c3.onclick = () => {
  fnC3();
};
d4.onclick = () => {
  fnD4();
};
e5.onclick = () => {
  fnE5();
};
f6.onclick = () => {
  fnF6();
};
g7.onclick = () => {
  fnG7();
};
h8.onclick = () => {
  fnH8();
};
i9.onclick = () => {
  fnI9();
};
j0.onclick = () => {
  fnJ0();
};
cl.onclick = () => {
  fnCL();
};
cn.onclick = () => {
  fnCN();
};
