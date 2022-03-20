//creando un arreglo de objetos

let productos=[

    {foto: "img/SpiderbuggyFunko.jpg", nombre:"spiderBuggy", precio:420.000,descripcion:"Figura colecionable, de la empresa Funko, del tan curioso Spider-Buggy de los comics clasicos."},
    {foto: "img/funko_ironSpider.jpg", nombre:"Funko Pop Spiderman Iron Spider Avengers Infinity War 300", precio:69.490,descripcion:"Figura colecionable, de la empresa Funko, del traje de IronSpider aparecido en las recientes peliculas de la serie Home."},
    {foto: "img/mascaracosplay.jpg", nombre:"Máscara de Spiderman XXF Home coming– Máscara de Spiderman Cosplay Hero para adultos (rojo)", precio:128.972,descripcion:"mascara habilitada para el uso del aracnido talla unica."},
    {foto: "img/VideojuegoSpidermanMarvelPS4.jpg", nombre:"Videojuego Marvel Spider-Man PS4 Fisico", precio:126.313,descripcion:"Videojuego original Ganador al premio de juego del año, dirigido a PlayStation 4."},
    {foto: "img/camisetaSpiderman.jpg", nombre:"Camisetas Gimnasio Marvel Lycra Spiderman", precio:85.000,descripcion:"camiseta 3D Marvel"},
    {foto: "img/gold_Spiderman_NoWayHome.jpg", nombre:"Figura De Acción Spiderman Gold No Way Home Marvel Legends", precio:134.900,descripcion:"Figura colecionable, de la empresa Hasbro, del traje de black&gold aparecido en la reciente pelicula de No Way Home."},
    {foto: "img/LansaTelarañas.jpg", nombre:"Lanza Telarañas", precio:34.450,descripcion:"disparadores lansa telarañas, de la empresa Hasbro, disparan pequeños discos de goma con forma de telarañas."},
    {foto: "img/llavero_funko.jpg", nombre:"Llavero Funko Pop: Spider-man", precio:34.900,descripcion:"Figura colecionable, de la empresa Funko, del traje de original de los comics a tamaño llavero incluido como colgante."},
    {foto: "img/noWayHomeCosplay.jpg", nombre:"Traje Cosplay Spiderman No Way Home", precio:179.900,descripcion:"Traje para hombres adultos, cuerpo completo del disfras visto en la pelicula No Way Home."},
    
    {foto: "img/spiderman_WHAT_IF.jpg", nombre:"Spiderman Zombie Hunter Marvel Legends Avenger What If", precio:162.900,descripcion:"Figura colecionable, de la empresa Hasbro, del traje de Zombie Hunter aparecido en la reciente serie de Marvel WHAT IF... "},
    {foto: "img/MilesMoralesPS5.jpg", nombre:"Marvel's Spider-Man: Miles Morales Ultimate Launch Edition Sony PS5 Físico", precio:129.500,descripcion:"Ultimo juego de la franquisia Lanzado para la consola, propia de SONY, PlayStation 5 actualmente disponible para PC."},
    
    
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
foto.classList.add("rounded")
foto.src=producto.foto

//h4 con la clase text-center
let nombre=document.createElement("h4")
nombre.classList.add("text-center")
nombre.textContent=producto.nombre

//un Button en el precio para iniciar compra
let precio=document.createElement("button")
precio.classList.add("btn")
precio.classList.add("btn-primary")
precio.textContent=producto.precio

// BUENO PROFE AQUI IRIA EL EVENTLISTENER PARA POPEAR UN OFFCANVAS O UN COLLAPSE
//YA MUCHOSTUTORIALES Y MIS OJOS ME DUELEN :( Y AUN NO LE COJO LA ONDA

/*precio.addEventListener("click", () =>{
    var myCollapse = document.getElementById("myCollapse");

    myCollapse.addEventListener("hidden.bs.collapse", () =>{
        alert("Collapsible element has been completely closed.");
    });
});*/

//Creamos el desplegable sea un COLLAPSE o un OFFCANVAS que va a contener nuestra descripcion
//OFFCANVAS tambien puede contener un formulario de compra

/*let desplegable=document.createElement("collapse")
desplegable.classList.add("show")*/

//damos la descripcion pa antojar
let descripcion=document.createElement("card")
descripcion.classList.add("card-body")
descripcion.classList.add("card-subtitle")
descripcion.classList.add("text-center")
descripcion.classList.add("mb-2")
descripcion.classList.add("text-muted")
descripcion.textContent=producto.descripcion

//3. padres e hijos
tarjeta.appendChild(foto)
tarjeta.appendChild(nombre)

tarjeta.appendChild(precio)
tarjeta.appendChild(descripcion)
/*tarjeta.appendChild(desplegable)
desplegable.appendChild(descripcion)*/


columna.appendChild(tarjeta)
fila.appendChild(columna)


})