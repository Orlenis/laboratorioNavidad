let num1 = 0;
let num2 = 0;
let operacion = "";

function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: No se puede dividir por cero.";
        }
        return num1 / num2;
    } else {
        return "Error: Operación no válida.";
    }
}

while (true) {
    operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division) o 'salir' para terminar:");

    if (operacion === "salir") {
        alert("Gracias por usar la calculadora. ¡Hasta pronto!");
        break;
    }

    if (operacion !== "suma" && operacion !== "resta" && operacion !== "multiplicacion" && operacion !== "division") {
        alert("Operación no válida. Inténtelo de nuevo.");
        continue;
    }

    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Debe ingresar valores numéricos válidos.");
        continue;
    }

    const resultado = realizarOperacion(num1, num2, operacion);
    alert(`El resultado de la operación "${operacion}" es: ${resultado}`);
}
