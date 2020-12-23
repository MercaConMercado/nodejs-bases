const opmatematicas = {}; // creacion de objeto

function sumar(v1, v2){
    return v1+v2;
}

function restar(v1, v2){
    return v1-v2;

}

function multiplicar(v1, v2){
    return v1*v2;
}

function dividir(v1, v2){
    if(v2==0){
        console.log('You canot divide by 0')
    }else{
        return v1/v2;
    }
    
}


/**exports.sumar = sumar;// exporta la funcion
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.dividir = dividir;*/

opmatematicas.sumar = sumar;// exporta el objeto de otra manera, se le agrega propiedades
opmatematicas.restar = restar;
opmatematicas.multiplicar = multiplicar;
opmatematicas.dividir = dividir;
opmatematicas.modul = modul;

module.exports = opmatematicas;