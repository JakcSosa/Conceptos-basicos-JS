// if y else, determina si la condicion se cumple o no
// ejemplo1: Mostrar el nombre del profe frontend

let nombreMateria = 'frontend';

if (nombreMateria==='frontend') {
    // mostrar nombre del profe
    console.log(`Nombre del profe: Jorge - ${nombreMateria}`);
}else{
    console.log('No es el nombre del profe');
}

/**
 * ejemplo2: Determinar el ingreso a un bar, solo pueden ingresar los menores de edad
 * 
 */

console.warn('Ejemplo2: Determinar el ingreso');

let edadPersona = 18;

if (edadPersona >= 18) {
    console.log(`Tu edad es: ${edadPersona} - puedes ingresar`);
}else{
    console.log(`Tu edad es: ${edadPersona} - no puedes ingresar`);
}

/**
 * Ejemplo3: Determinar los profes de ingles y frontend, el dia miercoles
 */

console.warn('Ejemplo3: Mostrar profes');

const materia1 = 'frontend';
const materia2 = 'inglés';
let diaMateria = 'Jueves';

if ()