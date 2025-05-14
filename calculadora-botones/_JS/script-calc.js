let operacion = ""

function press(valor) {
  if (operacion === "Error") operacion = ""
  operacion += valor
  actualizarPantalla()
}

/* Función que se ejecuta cuando se pulsa el botón IGUAL (=) */
function calculate() {
  try {
    operacion = eval(operacion).toString()
  } catch {
    operacion = "Error"
  }
  actualizarPantalla()
}


function clearDisplay() {
  operacion = ""
  actualizarPantalla()
}

/*  Función para mostrar el resultado de la operación */
function actualizarPantalla() {
  document.getElementById("pantalla").textContent = operacion || "0"
}
