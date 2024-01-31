const personaTres = {
    nombre:"Maria Fernanda",
    edad: 16,
    email:"Mariafer@gmail.com",
    escasada: false,
    ubicacion:{
        pais:"El Salvador",
        departamento:"Chalatenango"
    },

    mascotas:["Pacheci", "ROCKIE", "Pochi"],
    nombreedad: function () { 
        return `${this.nombre} - ${this.edad} `; }
       
        ,
    saludar: function () {
          return "hola como estas";
    },
    decirnombre: function () {
        return `hola, mi nombre es ${this.nombre}`; // la palabra reservada this siempre hace referecia a el objeto que esta ejecutando la funcion o a la propiedad 

    }
    ,
    Obtenermascota: function(indice) {
        if (indice >= this.mascotas.length ){
         return `ingrese un indice valido, intenta con un numero menor ${this.mascotas.length}`;
        }
        if (indice < 0){

            return `ingrese un indice valido, intenta con un numero mayor a ${0}`;
        }
        
        return `${this.mascotas[indice]}`;
    }
    , obtenere: function (indice)
};

console.log (personaTres.saludar());
console.log (personaTres.decirnombre());
console.log(personaTres.nombreedad());
console.log(personaTres.Obtenermascota(-1));