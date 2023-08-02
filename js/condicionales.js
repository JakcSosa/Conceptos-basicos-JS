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

let edadPersona = 18;

if (edadPersona >= 18) {
    console.log(`Tu edad es: ${edadPersona} - puedes ingresar`);
}else{
    console.log(`Tu edad es: ${edadPersona} - no puedes ingresar`);
}