document.getElementById("boton1").onclick = function () {

  num1 = parseInt(prompt("Dime el primer numero"));
  num2 = parseInt(prompt("Dime el segundo numero:"));

  resta = num1 - num2;
  multiplicacion = num1 * num2;
  division = num1 / num2;

  alert("Resta: " + resta + "\nMultiplicación: " + multiplicacion);
  alert("División: " + division);
}

document.getElementById("boton2").onclick = function () {

  window.open("https://www.youtube.com", "", "height=550,width=620");
};

document.getElementById("boton3").onclick = function () {

  num1 = parseInt(prompt("Dime el primer numero"));
  num2 = parseInt(prompt("Dime el segundo numero:"));

  if (num1 > num2) {
    alert(" El mayor es " + num1);
  } else if (num2 > num1) {
    alert(" El mayor es " + num2);
  } else {
    alert("Son iguales.");
  }

};

document.getElementById("boton4").onclick = function () {

  num1 = parseInt(prompt("Dime la nota"));

  if (num1 >= 5) {
    alert(" Estas aprobado " + num1);
  } else {
    alert("Estas suspenso ");
  }

};

document.getElementById("boton5").onclick = function () {

  num1 = parseInt(prompt("Dime un numero del 1 al 7 para decirte el dia de la semana"));

  switch (num1) {
    case 1:
      alert("Lunes");
      break;
    case 2:
      alert("Martes");
      break;
    case 3:
      alert("Miercoles");
      break;
    case 4:
      alert("Jueves");
      break;
    case 5:
      alert("Viernes");
      break;
    case 6:
      alert("Sabado");
      break;
    case 7:
      alert("Domingo");
      break;
    default:
      alert("El numero no es valido");
  }

};

document.getElementById("boton6").onclick = function () {

  num1 = parseInt(prompt("Dime  con un numero qué día de la semana es"));

  switch (num1) {
    case 1:
      alert("Laborable");
      break;
    case 2:
      alert("Laborable");
      break;
    case 3:
      alert("Laborable");
      break;
    case 4:
      alert("Laborable");
      break;
    case 5:
      alert("Laborable");
      break;
    case 6:
      alert("Fin de semana");
      break;
    case 7:
      alert("Fin de semana");
      break;
    default:
      alert("El numero no es valido");
  }

};

document.getElementById("boton7").onclick = function () {

  num1 = parseInt(prompt("Dime la 1º calificacion"));
  num2 = parseInt(prompt("Dime la 2º calificacion"));
  num3 = parseInt(prompt("Dime la 3º calificacion"));

  num4 = (num1 + num2 + num3) / 3

  if (num4 >= 5) {
    alert(" Estas aprobado con un " + num4 + " de media");
  } else {
    alert("Estas suspenso con un " + num4 + " de media");
  }

};

document.getElementById("boton8").onclick = function () {

  x = prompt("Dime que mes es");

  switch (true) {
    case x == "enero" || x == "marzo" || x == "mayo" || x == "julio" || x == "agosto" || x == "octubre" || x == "diciembre":
      alert("Tiene 31 dias");
      break;
    case x == "abril" || x == "junio" || x == "septiembre" || x == "noviembre":
      alert("Tiene 30 dias");
      break;
    case x == "febrero":
      alert("Tiene 28 dias");
      break;
    default:
      alert("El mes no es valido");
  }

};

document.getElementById("boton9").onclick = function () {

  x = parseInt(prompt("Dime el numero del mes "));

  switch (x) {
    case 1:
      alert("Enero");
      break;
    case 2:
      alert("Febrero");
      break;
    case 3:
      alert("Marzo");
      break;
    case 4:
      alert("Abril");
      break;
    case 5:
      alert("Mayo");
      break;
    case 6:
      alert("Junio");
      break;
    case 7:
      alert("Julio");
      break;
    case 8:
      alert("Agosto");
      break;
    case 9:
      alert("Septiembre");
      break;
    case 10:
      alert("Octubre");
      break;
    case 11:
      alert("Noviembre");
      break;
    case 12:
      alert("Diciembre");
      break;
    default:
      alert("El numero no es valido");
  }

};

document.getElementById("boton10").onclick = function () {

  x = prompt("Dime que operacion quieres hacer: suma, resta, multiplicación o división");
  x = x.toLowerCase();
  num1 = parseInt(prompt("Dime el primer numero"));
  num2 = parseInt(prompt("Dime el segundo numero:"));

  suma = num1 + num2;
  resta = num1 - num2;
  multiplicacion = num1 * num2;
  division = num1 / num2;

  switch (true) {
    case x == "suma":
      alert(suma);
      break;
    case x == "resta":
      alert(resta);
      break;
    case x == "multiplicacion":
      alert(multiplicacion);
      break;
    case x == "division":
      alert(division);
      break;
    default:
      alert("Vuelve a intentarlo");
  }

};

document.getElementById("boton11").onclick = function () {

  x = prompt("Dime tu nota ");

  if (x >= 5 && x < 6) {
    alert("Suficiente");
  } else if (x >= 6 && x < 7) {
    alert("Bien");
  } else if (x >= 7 && x < 9) {
    alert("Notable");
  } else if (x >= 9 && x < 10) {
    alert("Sobresaliente");
  } else if (x < 5) {
    alert("Insuficiente");
  } else {
    alert("Vuelve a intentarlo");
  }

};

document.getElementById("boton12").onclick = function () {

  do {
    x = prompt("Adivina mi asignatura favorita ");
    if (x == "programacion") {
      alert("Has acertado");
      break;
    } else {
      alert("Vuelve a intentarlo");
    }
  } while (true);

};

document.getElementById("boton13").onclick = function () {

  let tabladiv = document.getElementById("tabladiv");
  let tabla = "";

  for (let i = 1; i <= 10; i++) {
    resultado = 7 * i;
    tabla += "7 x " + i + " = " + resultado + "<br>";
  }

  tabladiv.innerHTML = tabla;

  multiplication = prompt("Dime cuanto es 7 x 3");
  if (multiplication == "21") {
    alert("Has acertado");
  } else {
    alert("Has fallado");
  }
};

document.getElementById("boton14").onclick = function () {

  x = parseInt(prompt("¿Cuantas notas vas a ingresar?"));

  sumanotas = 0;

  for (let i = 0; i < x; i++) {
    notas = parseInt(prompt("¿Dime tu nota?"));
    sumanotas += notas;
  }

  media = sumanotas / x;
  alert("Tu media es : " + media.toFixed(2));

};

document.getElementById("boton15").onclick = function () {

  x = prompt("Dime el ancho del rectangulo");
  y = prompt("Dime el alto del rectangulo");
  let rectangulo = "";

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      rectangulo += "* ";
    }
    rectangulo += "<br>";
  }

  let rectangulodiv = document.getElementById("rectangulodiv");
  rectangulodiv.innerHTML = rectangulo;

};

document.getElementById("boton16").onclick = function () {

  let x = prompt("Dime el alto del triángulo rectángulo");
  let triangulo = "";
  let triangulo2 = "";

  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= i; j++) {
      triangulo += "* ";
      triangulo2 += "* ";
    }
    triangulo2 += "\n"
    triangulo += "<br>";
  }

  let triangulodiv = document.getElementById("triangulodiv");
  triangulodiv.innerHTML = triangulo;
  alert(triangulo2);

};

document.getElementById("boton17").onclick = function () {

  do {
    x = prompt("Dime un numero ");
    if (x >= 0) {
      alert("Dime otro numero");
    } else {
      alert("Has terminado");
      break;
    }
  } while (true);

};

document.getElementById("boton18").onclick = function () {

  while (true) {
    x = confirm("Selecciona Aceptar o Cancelar");

    if (x) {
      alert("Has terminado");
      break;
    } else {
      alert("Error");
    }
  }

};

document.getElementById("boton19").onclick = function () {

  do {
    x = prompt("Adivina mi asignatura favorita ");
    if (x != "programacion") {
      y = prompt("Has fallado, quieres vovler a intentarlo : si/no");
      if (y == "no") {
        alert("Has terminado");
        break;
      }
    } else {
      alert("Has acertado");
      break;
    }
  } while (true);

};


document.getElementById("boton20").onclick = function () {

  var cuadradoDiv = document.getElementById("cuadrado");

  if (boton20.innerText === "Bonus") {
    var size = parseInt(prompt("Dime el tamaño del cuadrado"));
    if (!isNaN(size)) {
      boton20.innerText = "Ocultar";
      showcuadrado(size);
    } else {
      alert("Inténtalo de nuevo");
    }
  } else {
    boton20.innerText = "Bonus";
    hidecuadrado();
  }

  function showcuadrado(size) {
    var cuadrado = "";
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        cuadrado += "* ";
      }
      cuadrado += "<br>";
    }
    cuadradoDiv.innerHTML = cuadrado;
  }

  function hidecuadrado() {
    cuadradoDiv.innerHTML = "";
  }


}

