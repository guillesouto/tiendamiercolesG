export function llenarTienda(){
    //creando un arreglo de objetos
var productos=[

    {foto: "img/SpiderbuggyFunko.jpg", nombre:"spiderBuggy", precio:420000,descripcion:"Figura colecionable, de la empresa Funko, del tan curioso Spider-Buggy de los comics clasicos."},
    {foto: "img/funko_ironSpider.jpg", nombre:"Funko Pop Spiderman Iron Spider Avengers Infinity War 300", precio:69490,descripcion:"Figura colecionable, de la empresa Funko, del traje de IronSpider aparecido en las recientes peliculas de la serie Home."},
    {foto: "img/mascaracosplay.jpg", nombre:"Máscara de Spiderman XXF Home coming– Máscara de Spiderman Cosplay Hero para adultos (rojo)", precio:128972,descripcion:"mascara habilitada para el uso del aracnido talla unica."},
    {foto: "img/VideojuegoSpidermanMarvelPS4.jpg", nombre:"Videojuego Marvel Spider-Man PS4 Fisico", precio:126313,descripcion:"Videojuego original Ganador al premio de juego del año, dirigido a PlayStation 4."},
    {foto: "img/camisetaSpiderman.jpg", nombre:"Camisetas Gimnasio Marvel Lycra Spiderman", precio:85000,descripcion:"camiseta 3D Marvel"},
    {foto: "img/gold_Spiderman_NoWayHome.jpg", nombre:"Figura De Acción Spiderman Gold No Way Home Marvel Legends", precio:134900,descripcion:"Figura colecionable, de la empresa Hasbro, del traje de black&gold aparecido en la reciente pelicula de No Way Home."},
    {foto: "img/LansaTelarañas.jpg", nombre:"Lanza Telarañas", precio:34450,descripcion:"disparadores lansa telarañas, de la empresa Hasbro, disparan pequeños discos de goma con forma de telarañas."},
    {foto: "img/llavero_funko.jpg", nombre:"Llavero Funko Pop: Spider-man", precio:34900,descripcion:"Figura colecionable, de la empresa Funko, del traje de original de los comics a tamaño llavero incluido como colgante."},
    {foto: "img/noWayHomeCosplay.jpg", nombre:"Traje Cosplay Spiderman No Way Home", precio:179900,descripcion:"Traje para hombres adultos, cuerpo completo del disfras visto en la pelicula No Way Home."},

    {foto: "img/spiderman_WHAT_IF.jpg", nombre:"Spiderman Zombie Hunter Marvel Legends Avenger What If", precio:162900,descripcion:"Figura colecionable, de la empresa Hasbro, del traje de Zombie Hunter aparecido en la reciente serie de Marvel WHAT IF... "},
    {foto: "img/MilesMoralesPS5.jpg", nombre:"Marvel's Spider-Man: Miles Morales Ultimate Launch Edition Sony PS5 Físico", precio:129500,descripcion:"Ultimo juego de la franquisia Lanzado para la consola, propia de SONY, PlayStation 5 actualmente disponible para PC."},
    
    
]

console.log(productos)

// CREO UNA VARIABLE PARA ALMACENAR LA BASE SOBRE LA QUE PINTAR
let fila=document.getElementById("fila")

//COMO RECORRERO UN ARREGLO CON JS
//1. TENER ARREGLO
productos.forEach(function(producto){
 //console.log(producto.nombre)
 //console.log(producto.precio)
 //console.log(producto.foto)

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
foto.classList.add("card-img-top", "h-100","w-100","d-block", "rounded")
foto.src=producto.foto

//h4 con la clase text-center
let nombre=document.createElement("h3")
nombre.classList.add("text-center")
nombre.textContent=producto.nombre

//un Button en el precio para iniciar compra
let precio=document.createElement("h5")
precio.classList.add("text-center")
precio.textContent= producto.precio

//un Button en el precio para iniciar compra
let boton=document.createElement("button")
boton.classList.add("btn", "btn-info", "w-50", "d-block", "mx-auto", "mt-4")
boton.setAttribute("type", "button")
boton.textContent= "ampliar info"

//damos la descripcion pa antojar
let descripcion=document.createElement("p")
descripcion.classList.add("card-body", "card-subtitle", "text-center", "mb-2", "text-muted")
descripcion.textContent=producto.descripcion

//3. padres e hijos
tarjeta.appendChild(foto)
tarjeta.appendChild(nombre)
tarjeta.appendChild(precio)
tarjeta.appendChild(descripcion)
tarjeta.appendChild(boton)

columna.appendChild(tarjeta)
fila.appendChild(columna)


})
}