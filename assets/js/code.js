// #region codigo
function operaciones(num1, num2, operacion) {
  let resultado;

  switch (operacion) {
    case "suma":
      resultado = num1 + num2;
      break;
    case "resta":
      resultado = num1 - num2;
      break;
    case "division":
      resultado = num1 / num2;
      break;
    case "multiplicacion":
      resultado = num1 * num2;
      break;
    default:
      resultado = "Operación no válida";
  }

  return resultado;
}

// #region Ejemplo de uso:
console.log(operaciones(5, 3, "suma")); // 8
console.log(operaciones(5, 3, "resta")); // 2
console.log(operaciones(5, 3, "division")); // 1.6666666666666667
console.log(operaciones(5, 3, "multiplicacion")); // 15
console.log(operaciones(5, 0, "division")); // Infinity
console.log(operaciones(5, 0, "multiplicacion")); // 0
