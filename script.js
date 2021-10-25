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
  }else {
    alert("faltan letras");
  }
};

const fn1 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "") {
    numbers.innerHTML = "1";
  }else {
    alert("faltan números");
  }
};
const fnB2 = () => {
  if (letters.innerHTML == "A") {
    letters.innerHTML += "B"; //letters.innerHTML = letters.innerHTML + "B"
  } else {
    alert("faltan letras");
  }

};
const fn2 =() => {
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

};
const fn3 =() => {
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
};
const fn4 =() => {
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

};
const fn5 =() => {
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

};
const fn6 =() => {
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

};
const fn7 =() => {
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

};
const fn8 =() => {
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

};
const fn9 =() => {
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

};
const fn0 =() => {
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
  if (letters.innerHTML == "") {
    fnA1();
  }else{
    fn1();
  }
};
b2.onclick = () => {
  if (letters.innerHTML =="A") {
    fnB2();
  }else{
    fn2();
  }
};
c3.onclick = () => {
  if (letters.innerHTML =="AB") {
  fnC3();
  }else{
    fn3();
  }
};
d4.onclick = () => {
  if (letters.innerHTML == "ABC") {
  fnD4();
  }else{
    fn4();
  }
};
e5.onclick = () => {
  if (letters.innerHTML == "ABCD") {
  fnE5();
  }else{
    fn5();
  }
};
f6.onclick = () => {
  if (letters.innerHTML == "ABCDE") {
    fnF6();
    }else{
      fn6();
    }
};
g7.onclick = () => {
  if (letters.innerHTML == "ABCDEF") {
    fnG7();
    }else{
      fn7();
    }
};
h8.onclick = () => {
  if (letters.innerHTML == "ABCDEFG") {
    fnH8();
    }else{
      fn8();
    }
};
i9.onclick = () => {
  if (letters.innerHTML == "ABCDEFGH") {
    fnI9();
    }else{
      fn9();
    }
};
j0.onclick = () => {
  if (letters.innerHTML == "ABCDEFGHI") {
    fnJ0();
    }else{
      fn0();
    }
};
cl.onclick = () => {
  fnCL();
};
cn.onclick = () => {
  fnCN();
};
