function hola(nombre, callback){
    setTimeout(function (){
        console.log('Hola '+nombre)
        callback()
    },1000);
}

let adios = function() {
    console.log('Adios')
};

hola('alí', adios);

