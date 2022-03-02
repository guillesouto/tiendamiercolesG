//creando un arreglo de objetos

let productos=[

    {nombre:"spiderBuggy", precio:420000,descripcion:"spiderBuggy a escala por marca Funko"},
    {nombre:"camiseta spiderman", precio:75000,descripcion:"camiseta original Marvel"},
    {nombre:"Face Shield", precio:135000,descripcion:"estructura facial para llevar debajo de la mascara"},
    {nombre:"Figura De Acción Spiderman Gold No Way Home Marvel Legends", precio:134900,descripcion:""},
    {nombre:"Buzo Capucha Unisex Spiderman", precio:75000,descripcion:""},
    {nombre:"Videojuego Marvel Spider-Man PS5 Fisico", precio:0,descripcion:""},
    {nombre:"", precio:0,descripcion:""},
    {nombre:"", precio:0,descripcion:""},
    {nombre:"", precio:0,descripcion:""},
    {nombre:"", precio:0,descripcion:""}
]

console.log(productos)

//COMO RECORRERO UN ARREGLO CON JS
//1. TENER ARREGLO
productos.forEach(function(productos){
    console.log(productos.nombre)
})