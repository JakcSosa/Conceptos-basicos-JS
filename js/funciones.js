/**
 * Hay varios tipos de funciones: tradicional, de flecha, anonima y asincronica
 */

// funcion tradicional sin argumentos
function miNombre(){
    console.log('Mi nombre es: ' + 'Jakcson');
    console.log(`Mi nombre es: ${'Marta'}`);
    console.log('Mi nombre es: ' + 'Tajada');
}

// llamar la funcion
miNombre(); 

// funcion con argumentos
/**
 * 
 * @param {String} apellido 
 */
function miApellido(apellido){
    console.log(`Mi apellido: ${apellido}`);
}

miApellido('Asprilla');