rotulo1.innerHTML = "Inserte precio unitario del producto: ";
rotulo2.innerHTML = "Inserte cantidad del producto en cifras: ";
rotulo3.innerHTML = "Inserte mes actual en cifras: ";

let btnEnv = document.getElementById("BtnEnviar");

btnEnv.addEventListener("click", () => {
  let precio1: number = Number(precio.value);
  let cantidad1: number = Number(cantidad.value);
  let mes1: number = Number(mes.value);
  let cantidad2: number = precio1 * cantidad1;
  let total: number = cantidad2 * 0.15;
  let descuento: number = cantidad2 - total;

  if (mes1 === 10) {
    console.log("El cliente obtiene un descuento, precio final:", descuento);
  } else {
    console.log("El cliente no obtiene descuento, precio final:", cantidad2);
  }
});
