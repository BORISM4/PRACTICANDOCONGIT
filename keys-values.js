//const personaUno = ["PACHECO MENDOZA", 23, "pachanga@gmail.com", ["Bogota", "Colombia"]];
//const personaDos = ["PACHECO MENDOZA", 23, "pachanga@gmail.com", ["Bogota", "Colombia"]];
const personaTres = {
    nombre:"Maria Fernanda",
    edad: 16,
    email:"Mariafer@gmail.com",
    escasada: false,
    ubicacion:{
        pais:"El Salvador",
        departamento:"Chalatenango"
    },

    mascotas:["Pachanga", "ROCKIE"]
};
personaTres.nombre; //sirve para encontrar un valor dentro de la key en este caso se busco el nombre

console.log(personaTres.nombre);
console.log(personaTres.edad);
console.log(personaTres.mascotas[0]);
console.log(personaTres["email"]); //esta es otra manera de acceder a los datos dentro de una key y siendo especifico
console.log(personaTres.ubicacion.departamento);