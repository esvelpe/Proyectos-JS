const MAYORIA_DE_EDAD=18

var persona1={nombre: 'Esneider', edad: 22}
var persona2={nombre: 'David', edad:15}

const esMayorDeEdad= persona => persona.edad >= MAYORIA_DE_EDAD
// const esMayorDeEdad= ({edad}) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
    if(esMayorDeEdad(persona)){
        console.log(persona.nombre + ' es mayor de edad')
    } else {
        console.log(persona.nombre + ' es menor de edad')
    }
}