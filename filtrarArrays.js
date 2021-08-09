function Personas (nombre, apellido, altura,cantidadDeLibros) {
    this.nombre=nombre;
    this.apellido=apellido;
    this.altura=altura;
    this.cantidadDeLibros=cantidadDeLibros;
}


persona1=new Personas("Sacha","Lifszyc",1.80,10)
persona2=new Personas("Esneider","Vélez",1.70,1)
persona3=new Personas("David","Córdoba",1.65,80)
persona4=new Personas("Eleanor","Gutierrez",1.90,12)
persona5=new Personas("Paula","Lopez",1.85,15)
persona6=new Personas("Eliana","Zapata",1.50,30)

personas=[persona1,persona2,persona3,persona4,persona5,persona6]
 console.log(personas)

var personasAltas=personas.filter(function (persona) {return persona.altura <= 1.8})

//MAP

const pasarAlturaACms= persona => ({
    ...persona,
    altura: persona.altura*100
})

var personasCms=personas.map(pasarAlturaACms)

//console.log(personasCms)

//REDUCE

const reducer=(acum,{cantidadDeLibros}) =>{
    return acum+cantidadDeLibros
}

var totalDeLibros = personas.reduce(reducer, 0)

console.log('En total todos tienen ' + totalDeLibros + ' libros')