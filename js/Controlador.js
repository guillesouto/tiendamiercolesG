import { llenarTienda } from './llenadoTienda.js'
import { ampliarInfoProducto } from './ampliaInfo.js'

//llamando a Tiendallenado
llenarTienda()

//rutina para ampliar info
let filaContenedora =document.getElementById("fila")
filaContenedora.addEventListener("click", function(evento){

    if(evento.target.classList.contains("btn")){

        let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))
        ampliarInfoProducto(evento)
        modalinfo.show()
    }

})  

//rutina para añadir un producto al carrito de compras
let btnAgrgarCarrito = document.getElementById("botonadd")
btnAgrgarCarrito.addEventListener("click", function(){})