import { llenarTienda } from './llenadoTienda.js'
import { ampliarInfoProducto } from './ampliaInfo.js'


//creo un controlador vacio
let producto = {}

//llamando a Tiendallenado
llenarTienda()

//rutina para ampliar info
let filaContenedora =document.getElementById("fila")

filaContenedora.addEventListener("click", function(evento){

    if(evento.target.classList.contains("btn")){

        let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))
        producto = ampliarInfoProducto(evento)
        console.log(producto)
        modalinfo.show()
    }

})

//rutina para añadir un producto al carrito de compras
let carrito = []

let btnAgrgarCarrito = document.getElementById("botonadd")
btnAgrgarCarrito.addEventListener("click", function(){

    carrito.push(producto)
    console.log(carrito)

})