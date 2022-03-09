//creando un arreglo de objetos

let productos=[

    {foto: "img/SpiderbuggyFunko.jpg", nombre:"spiderBuggy", precio:420000,descripcion:"spiderBuggy a escala por marca Funko"},
    {foto: "img/camisetaSpiderman.jpg", nombre:"Camisetas Gimnasio Marvel Lycra Spiderman", precio:85000,descripcion:"camiseta 3D Marvel"},
    {foto: "img/mascaracosplay.jpg", nombre:"Máscara de Spiderman XXF Home coming– Máscara de Spiderman Cosplay Hero para adultos (rojo)", precio:128972,descripcion:""},
    {foto: "img/gold_Spiderman_NoWayHome.jpg", nombre:"Figura De Acción Spiderman Gold No Way Home Marvel Legends", precio:134900,descripcion:""},
    {foto: "img/funko_ironSpider.jpg", nombre:"Funko Pop Spiderman Iron Spider Avengers Infinity War 300", precio:69490,descripcion:""},
    {foto: "img/VideojuegoSpidermanMarvelPS4.jpg", nombre:"Videojuego Marvel Spider-Man PS4 Fisico", precio:0,descripcion:""},
    {foto: "img/Gauntes_lanzatelarañas.jpg", nombre:"Guantes Spider Man Con Luces Original Tienda Disney", precio:199000,descripcion:"disparadores con linternas con icono del aracnido favorito"},
    {foto: "img/spiderman_WHAT_IF.jpg", nombre:"Spiderman Zombie Hunter Marvel Legends Avenger What If", precio:162900,descripcion:""},
    {foto: "img/MilesMoralesPS5.jpg", nombre:"Marvel's Spider-Man: Miles Morales Ultimate Launch Edition Sony PS5 Físico", precio:379990,descripcion:""},
    {foto: "img/llavero_funko.jpg", nombre:"Llavero Funko Pop: Spider-man", precio:34900,descripcion:""},
    {foto: "img/noWayHomeCosplay.jpg", nombre:"Traje Cosplay Spiderman No Way Home", precio:129500,descripcion:""}
]

console.log(productos)

// CREO UNA VARIABLE PARA ALMACENAR LA BASE SOBRE LA QUE PINTAR
let fila=document.getElementById("fila")

//COMO RECORRERO UN ARREGLO CON JS
//1. TENER ARREGLO
productos.forEach(function(producto){
    console.log(producto.nombre)
    console.log(producto.precio)
    console.log(producto.foto)

//2.pintando etiquetas


//div con la clase col
let columna=document.createElement("div")
columna.classList.add("col")

//div con las clases card h-100
let tarjeta=document.createElement("div")
tarjeta.classList.add("card")
tarjeta.classList.add("h-100")

//img con la clase card-img-top
let foto=document.createElement("img")
foto.classList.add("card-img-top")
foto.src=producto.foto

//k4 con la clase text-center
let nombre=document.createElement("h4")
nombre.classList.add("text-center")
nombre.textContent=producto.nombre

//3. padres e hijos
tarjeta.appendChild(foto)
tarjeta.appendChild(nombre)

tarjeta.appendChild(precio)
tarjeta.appendChild(descripcion)


columna.appendChild(tarjeta)
fila.appendChild(columna)


})