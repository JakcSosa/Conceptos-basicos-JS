// Los arreglos sirven para contener variables
// sintaxis se declara como una variable let o const

const auto = [];// array o arreglo vacio 
let Auto = ['Deportivo', 'rojo', 'automatico', 250000000];

//mostrar los datos del arreglo
console.log(auto);
console.log({Auto});

// ejemplo 2
const movies = ['Flash', 'Indiana Jones:5', 'Destino Final'];
// mostar todas las pelis
console.log(movies);
// mostrar solo la pelicula indiana
console.log(movies[1]);

// combinar arreglos
let libros = [
    'Sistemas',
    'Contabilidad',
    25000,
    37000,
    25000*0.2,
    ['Wilson', 'Pedro', true, '14/07/23']
];

// mostrar toda la informacion de los libros
console.log(libros); 
// mostrar la fecha 
console.log(libros[5][3]);

// muestra el ultimo valor de arreglo
let ultimoValor = libros[libros.length - 1];
console.log('El ultimo valor es: ', ultimoValor);

// cuantos valores tiene el arrar de libros
console.log('Los valores: ', libros.length);

// agregar nuevo elemento al array de libros
let nuevoLibro = libros.push('El Principito');
console.log({nuevoLibro, libros});

// Agregar un nuevo elemento al principio del array de libros
let elementoLibroPrincipito = libros.unshift('Crimen y Castigo');