// ENTRADA DEL PROBLEMA (comentario de linea)
/*
comentario 
de
bloque
//ENTRADAS==VARIABLES==CONSTANTES
let nombreProducto='mascara'
let precioProducto=80000
let pesoProducto=2.4
let tieneDescuento=true
let descripcionProducto='Mascara de spiderman clasico en distintos tamaños, no incluye faceshield'
let telefonoVendedor="3226516658"

const NOMBRE_CLIENTE="Juan José"

//ARREGLOS UNIDIMENCIONALES (vectores)
//Sirve para almacenar varios elementos en 1 sola variable
let productos=['mascara', 'funco', 'disfraz', 'camisa', 'videojuego']
let productos2=Array('mascara', 'funco', 'disfraz', 'camisa', 'videojuego')

//SALIDAS
console.log("buenas")
console.log(nombreProducto)
console.log("su nombre es: "+NOMBRE_CLIENTE+"y su producto e:s "+nombreProducto)
console.log(`su nombre es: ${NOMBRE_CLIENTE} y su producto en ${nombreProducto}`)
console.log('*******************************************************************')
console.log(productos)
console.log(productos2[0])
*/

//controlando etiquetas

//1. crear una variable para guardar etiqueT 
/*let etiquetaTitulo = document.getElementById("titulo")
console.log(etiquetaTitulo)

//2 COMO MODIFICAR ETIQUETAs
etiquetaTitulo.textContent="rojo vos no existis"

//prueba NavBar
let etiquetaNavbar = document.getElementById("icono")
etiquetaNavbar.textContent="Spider-Ham"

//editar foto
let etiquetaFoto = document.getElementById("fotospider")
etiquetaFoto.src="img/dT9rbg8ac.png"

//cambiar el estilo de la etiqueta
etiquetaTitulo.classList.add("text-center")
etiquetaTitulo.classList.add("text-danger")*/

//TIENDA----------------------------------------------------------------------------------------------------------------------------------------------- 
let productosNombre=["Spiderbuggy","camiseta spiderman"]
let productosPrecio=[350000,80000]
let productosPromocion=[true,false]

console.log(productosNombre)
console.log(productosNombre[1])

//creando objetos con JS
let usuario={

    nombre:"Bruno diaz",
    edad:"14",
    amigos:["gatubela", "Mr freeze", "joker"]

}

console.log(usuario)
console.log(usuario.amigos[1])
