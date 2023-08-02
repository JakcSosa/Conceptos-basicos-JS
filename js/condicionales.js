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
let diaMateria = 'jueves';

if (materia1 ==='frontend' && materia2==='inglés' && diaMateria === 'jueves') {
    console.log('Los profes son: Jorge' + ' - ' + 'Fabiola');
}else{
    console.log('No son los profes');
}

// condicional switch, tambien se basa por una condicionn y se utiliza varios case
// ejemplo4: Mostrar las actividades que realizan dependiendo del dia

const diaActividad = 'sabado';

switch (diaActividad) {
    case 'lunes':
        console.log('Trabajo');
        console.log('Juegp PC');
        console.log('Toco guitarra');

        break;
    case 'martes':
        console.log('Trabajo');
        console.log('Juegp PC');
        console.log('Toco guitarra');

        break;
    case 'miercoles':
        console.log('Toco guitarra');
        console.log('Juegp PC');
        console.log('Estudio');
        

        break;
    case 'jueves':
        console.log('Trabajo');
        console.log('Juegp PC');
        console.log('Toco guitarra');

        break;
    case 'viernes':
        console.log('Trabajo');
        console.log('Juegp PC');
        console.log('Estudio');

        break;
    case 'sabado':
        console.log('Trabajo');
        console.log('Duermo');
        console.log('en la noche unas politas suaves');

        break;
    case 'domingo':
        console.log('Hago trabajos');
        console.log('Duermo');
        console.log('Voy al cine');

        break;

    default:
        console.log('Error en sintaxis del dia');
        break;
}