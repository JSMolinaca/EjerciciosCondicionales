//Ejercicio 1

/*let numero1 = (prompt("Ingrese el primer número:"));
let numero2 = (prompt("Ingrese el segundo número:"));

if (numero1 > numero2) {
    console.log("El primer número es mayor que el segundo.");
} else if (numero1 < numero2) {
    console.log("El primer número es menor que el segundo.");
} else {
    console.log("Ambos números son iguales.");
}*/

//Ejercicio 2
/*let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Uno o ambos valores ingresados no son números válidos.");
} else {
    if (numero1 === numero2) {
        console.log("Ambos números son iguales.");
    } else {
        console.log("Los números son diferentes.");
    }
}*/

//Ejercicio 3
/*let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Uno o ambos valores ingresados no son números válidos.");
} else {
    if (numero1 > numero2) {
        console.log("El primer número (" + numero1 + ") es mayor que el segundo número (" + numero2 + ").");
    } else if (numero1 < numero2) {
        console.log("El segundo número (" + numero2 + ") es mayor que el primer número (" + numero1 + ").");
    } else {
        console.log("Ambos números son iguales.");
    }
}*/

//Ejercicio 4
/*let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    console.log("Uno o más valores ingresados no son números válidos.");
} else {
    let menor = numero1;

    if (numero2 < menor) {
        menor = numero2;
    }

    if (numero3 < menor) {
        menor = numero3;
    }

    console.log("El número más pequeño es: " + menor);
}*/

//Ejercicio 5 
/*let nombre1 = prompt("Ingrese el nombre de la primera persona:");
let edad1 = parseInt(prompt("Ingrese la edad de la primera persona:"));
let altura1 = parseFloat(prompt("Ingrese la altura de la primera persona (en metros):"));

let nombre2 = prompt("Ingrese el nombre de la segunda persona:");
let edad2 = parseInt(prompt("Ingrese la edad de la segunda persona:"));
let altura2 = parseFloat(prompt("Ingrese la altura de la segunda persona (en metros):"));

let persona1 = {
    nombre: nombre1,
    edad: edad1,
    altura: altura1
};

let persona2 = {
    nombre: nombre2,
    edad: edad2,
    altura: altura2
};

if (isNaN(persona1.edad) || isNaN(persona1.altura) || isNaN(persona2.edad) || isNaN(persona2.altura)) {
    console.log("Uno o más valores ingresados no son válidos.");
} else {
    if (persona1.altura > persona2.altura) {
        console.log(persona1.nombre + " es más alto(a) que " + persona2.nombre + ".");
    } else if (persona1.altura < persona2.altura) {
        console.log(persona2.nombre + " es más alto(a) que " + persona1.nombre + ".");
    } else {
        console.log(persona1.nombre + " y " + persona2.nombre + " tienen la misma altura.");
    }

    if (persona1.edad > persona2.edad) {
        console.log(persona1.nombre + " es mayor que " + persona2.nombre + ".");
    } else if (persona1.edad < persona2.edad) {
        console.log(persona2.nombre + " es mayor que " + persona1.nombre + ".");
    } else {
        console.log(persona1.nombre + " y " + persona2.nombre + " tienen la misma edad.");
    }
}*/


//Ejercicio 6
/*let nombre = prompt("Ingresa tu nombre:");

let edad = parseInt(prompt("Ingresa tu edad:"))
let altura = parseFloat(prompt("Ingresa tu altura en centímetros:"));
let vision = parseFloat(prompt("Ingresa tu visión en una escala de 1 a 10:"));
if (edad >= 18 && altura > 150 && vision >= 8) {
    console.log(`${nombre}, estás capacitado para conducir.`);
} else {
    console.log(`${nombre}, no cumples con los requisitos para conducir.`);
}*/

//Ejercicio 7
/*let nombre = prompt("Ingresa tu nombre:");

let tienePase = prompt("¿Tienes pase? (vip o normal):").toLowerCase();

let tieneEntrada = prompt("¿Tienes entrada? (si o no):").toLowerCase();
if (tieneEntrada === 's') {
    tieneEntrada = 'si';
} else if (tieneEntrada === 'n') {
    tieneEntrada = 'no';
}

if (nombre === "ChatGPT" || tienePase === "vip") {
    console.log(`Bienvenido, ${nombre}!`);
    if (tieneEntrada === 'si') {
        let usarEntrada = prompt("¿Deseas utilizar tu entrada? (si o no):").toLowerCase();
        if (usarEntrada === 'si') {
            console.log(`Bienvenido, ${nombre}! Disfruta del evento.`);
        } else {
            console.log(`Bienvenido, ${nombre}!`);
        }
    }
} else {
    let comprarEntrada = prompt("¿Deseas comprar una entrada? (si o no):").toLowerCase();
    if (comprarEntrada === 'si') {
        let dineroDisponible = parseFloat(prompt("Ingresa el dinero disponible:"));
        if (dineroDisponible >= 1000) {
            console.log(`Venta de entrada realizada. Bienvenido, ${nombre}!`);
        } else {
            console.log(`Lo siento, ${nombre}, no tienes suficiente dinero para comprar una entrada.`);
        }
    } else {
        console.log(`Adiós, ${nombre}.`);
    }
}*/

//Ejercicio 8 
/*let numeroIncognita = Math.floor(Math.random() * 10) + 1;
let intentos = 3;

let numeroIngresado1 = parseInt(prompt(`Intento 1/3: Ingresa un número del 1 al 10:`));
if (numeroIngresado1 === numeroIncognita) {
    console.log("¡Ganaste, haz adivinado el número!");
} else if (numeroIngresado1 < numeroIncognita) {
    console.log("El número ingresado es menor. Vuelve a intentarlo.");
    let numeroIngresado2 = parseInt(prompt(`Intento 2/3: Ingresa un número del 1 al 10:`));
    if (numeroIngresado2 === numeroIncognita) {
        console.log("¡Ganaste, haz adivinado el número!");
    } else if (numeroIngresado2 < numeroIncognita) {
        console.log("El número ingresado es menor. Vuelve a intentarlo.");
        let numeroIngresado3 = parseInt(prompt(`Intento 3/3: Ingresa un número del 1 al 10:`));
        if (numeroIngresado3 === numeroIncognita) {
            console.log("¡Ganaste, haz adivinado el número!");
        } else {
            console.log(`Lo siento, se acabaron los intentos. El número era ${numeroIncognita}.`);
        }
    } else {
        console.log("El número ingresado es mayor. Vuelve a intentarlo.");
        let numeroIngresado3 = parseInt(prompt(`Intento 3/3: Ingresa un número del 1 al 10:`));
        if (numeroIngresado3 === numeroIncognita) {
            console.log("¡Ganaste, haz adivinado el número!");
        } else {
            console.log(`Lo siento, se acabaron los intentos. El número era ${numeroIncognita}.`);
        }
    }
} else {
    console.log("El número ingresado es mayor. Vuelve a intentarlo.");
    let numeroIngresado2 = parseInt(prompt(`Intento 2/3: Ingresa un número del 1 al 10:`));
    if (numeroIngresado2 === numeroIncognita) {
        console.log("¡Ganaste, haz adivinado el número!");
    } else if (numeroIngresado2 < numeroIncognita) {
        console.log("El número ingresado es menor. Vuelve a intentarlo.");
        let numeroIngresado3 = parseInt(prompt(`Intento 3/3: Ingresa un número del 1 al 10:`));
        if (numeroIngresado3 === numeroIncognita) {
            console.log("¡Ganaste, haz adivinado el número!");
        } else {
            console.log(`Lo siento, se acabaron los intentos. El número era ${numeroIncognita}.`);
        }
    } else {
        console.log("El número ingresado es mayor. Vuelve a intentarlo.");
        let numeroIngresado3 = parseInt(prompt(`Intento 3/3: Ingresa un número del 1 al 10:`));
        if (numeroIngresado3 === numeroIncognita) {
            console.log("¡Ganaste, haz adivinado el número!");
        } else {
            console.log(`Lo siento, se acabaron los intentos. El número era ${numeroIncognita}.`);
        }
    }
}*/

//Ejercicio 9
/*let edad = parseInt(prompt("Ingresa tu edad:"));

if (edad >= 0 && edad <= 12) {
    console.log("Eres un infante.");
} else if (edad >= 13 && edad <= 18) {
    console.log("Eres un adolescente.");
} else if (edad >= 19 && edad <= 45) {
    console.log("Eres un mayor joven.");
} else if (edad > 45 && edad <= 100) {
    console.log("Eres un anciano.");
} else if (edad > 100) {
    let confirmacion = prompt(`¿Realmente tienes ${edad} años? (responde si o no)`).toLowerCase();
    if (confirmacion === 'si') {
        console.log(`¡Wow! Eres una persona longeva. Saludos.`);
    } else {
        console.log("Edad ingresada incorrecta.");
    }
} else {
    console.log("Edad ingresada incorrecta.");
}*/

//Ejercicio 10
/*let jugador1 = prompt("Jugador 1, ingresa tu jugada (PIEDRA, PAPEL o TIJERAS):").toUpperCase();

let jugador2 = prompt("Jugador 2, ingresa tu jugada (PIEDRA, PAPEL o TIJERAS):").toUpperCase();

if ((jugador1 === "PIEDRA" || jugador1 === "PAPEL" || jugador1 === "TIJERAS") &&
    (jugador2 === "PIEDRA" || jugador2 === "PAPEL" || jugador2 === "TIJERAS")) {
    if (jugador1 === jugador2) {
        console.log("¡Empate!");
    } else if (
        (jugador1 === "PIEDRA" && jugador2 === "TIJERAS") ||
        (jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
        (jugador1 === "TIJERAS" && jugador2 === "PAPEL")
    ) {
        console.log("¡Jugador 1 ha ganado!");
    } else {
        console.log("¡Jugador 2 ha ganado!");
    }
} else {
    console.log("Uno de los jugadores ha hecho trampa. Ingresa solo PIEDRA, PAPEL o TIJERAS.");
}*/

//Ejercicio 11
/*let color = prompt("Ingresa un color (Blanco, Negro, Verde, Azul, Amarillo, Rojo, Marrón):").toLowerCase();

switch (color) {
    case "blanco":
    case "negro":
        console.log("Falta de color.");
        break;
    case "verde":
        console.log("El color de la naturaleza.");
        break;
    case "azul":
        console.log("El color del agua.");
        break;
    case "amarillo":
        console.log("El color del sol.");
        break;
    case "rojo":
        console.log("El color del fuego.");
        break;
    case "marrón":
        console.log("El color de la tierra.");
        break;
    default:
        console.log("Excelente elección, no lo teníamos pensado.");
        break;
}*/

//Ejercicio 12
/*let valor1 = parseFloat(prompt("Ingresa el primer valor numérico:"));
let valor2 = parseFloat(prompt("Ingresa el segundo valor numérico:"));
let operacion = prompt("Ingresa la operación a realizar (suma, resta, multiplicación, división):").toLowerCase();

let resultado;

switch (operacion) {
    case "suma":
        resultado = valor1 + valor2;
        console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);
        break;
    case "resta":
        resultado = valor1 - valor2;
        console.log(`La resta de ${valor1} y ${valor2} es igual a ${resultado}.`);
        break;
    case "multiplicación":
        resultado = valor1 * valor2;
        console.log(`La multiplicación de ${valor1} por ${valor2} es igual a ${resultado}.`);
        break;
    case "división":
        if (valor2 !== 0) {
            resultado = valor1 / valor2;
            console.log(`La división de ${valor1} entre ${valor2} es igual a ${resultado}.`);
        } else {
            console.log("ERROR: No se puede dividir por cero.");
        }
        break;
    default:
        console.log("Operación ingresada no válida. Por favor ingresa suma, resta, multiplicación o división.");
        break;
}*/

//Ejercicio 13
let nombre = prompt("Ingresa tu nombre:");
let apellido = prompt("Ingresa tu apellido:");
let dniNumero = prompt("Ingresa tu número de DNI:");
let dniFechaExpiracion = prompt("Ingresa la fecha de expiración de tu DNI:");
let dniLugarExpedicion = prompt("Ingresa el lugar de expedición de tu DNI:");

console.log("Datos ingresados:");
console.log(`Nombre: ${nombre}`);
console.log(`Apellido: ${apellido}`);
console.log(`Número de DNI: ${dniNumero}`);
console.log(`Fecha de expiración: ${dniFechaExpiracion}`);
console.log(`Lugar de expedición: ${dniLugarExpedicion}`);

let confirmacion = prompt("¿Son correctos los datos ingresados? (responde si o no)").toLowerCase();

if (confirmacion === 'si') {
    let dni = {
        nombre: nombre,
        apellido: apellido,
        numero: dniNumero,
        fechaExpiracion: dniFechaExpiracion,
        lugarExpedicion: dniLugarExpedicion
    };
    console.log("Registro exitoso. Los datos de tu DNI son:");
    console.table(dni);
} else {
    console.log("Vuelve a intentarlo en 1 mes.");
}

