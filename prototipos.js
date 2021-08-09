/*function heredaDe(prototipoHijo,prototipoPadre){
    var fn=function(){}
    fn.prototype=prototipoPadre.prototype
    prototipoHijo.prototype=new fn
    prototipoHijo.prototype.constructor=prototipoHijo
}*/

class Persona {
    constructor(nombre, apellido,altura){
        this.nombre=nombre
        this.apellido=apellido
        this.altura=altura
    }

    saludar(fn /*si no se pone fn como argumento sería undefined, el cuál es falso*/){
        var {nombre,apellido} =this
        console.log('Hola, me llamo ' + this.nombre + ' ' + this.apellido)
        if (fn){
            fn(nombre,apellido)
        }

    }

    soyAlto(){
        return this.altura>1.8
    }

    imprimirSiSoyAlto(){
        if (this.soyAlto===true){
            console.log('Soy alto')
        }else{
            console.log('No soy alto')
        }
    }

}


/*Persona.prototype.saludar=function(){
    
}

Persona.prototype.soyAlto=function(){
    
}

Persona.prototype.imprimirSiSoyAlto=function (){
    
}*/

class Desarrollador extends Persona {
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
    }

    saludar(fn){
        var {nombre,apellido} =this
        console.log('Hola, me llamo ' + this.nombre +' '+ this.apellido + ' y soy desarrollad@r')
        if (fn){
            fn(nombre,apellido, true)
        }
    }

}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev){
        console.log('Ah mirá, no sabía que eras desarrollad@r')
    }
}

//function Desarrollador 

//heredaDe(Desarrollador,Persona)

//Desarrollador.prototype.saludar=function(){}




var esneider = new Persona('Esneider','Vélez',1.85)
var david=new Desarrollador('David','Cordoba',1.7)
var juan=new Persona('Juan','Vélez',1.90)

juan.saludar()
esneider.saludar(responderSaludo)
david.saludar(responderSaludo)
