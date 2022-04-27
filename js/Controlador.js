import { llenarTienda } from './llenadoTienda.js'
import { ampliarInfoProducto } from './ampliaInfo.js'

//creo un producto vacio
let producto={}

//llamando a Tiendallenado
llenarTienda()

//referencia al modal
let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))
let modalcompra = new bootstrap.Modal(document.getElementById('resumencompra'))

//rutina para ampliar info
let filaContenedora =document.getElementById("fila")
filaContenedora.addEventListener("click", function(evento){

    if(evento.target.classList.contains("btn")){

        producto=ampliarInfoProducto(evento)
        console.log(producto)
        modalinfo.show()
    }

})  

//rutina para añadir un producto al carrito de compras
let carrito = []
let btnAgregarCarrito = document.getElementById("botonadd")
btnAgregarCarrito.addEventListener("click", function(){


    //Debo capturar la cantidad y agregarla al producto
    let cantidad = document.getElementById("contadorProductos").value
    producto.cantidad=cantidad
    console.log(cantidad)

    //agrego el producto al carrito
    carrito.push(producto)
    
    //pintar la capsula en el carrito 
    let suma=0
    carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
    })
    console.log(suma)
    let capsula = document.getElementById("capsula")
    capsula.textContent=suma
    capsula.classList.remove("invisible")
  
    console.log(carrito)
    modalinfo.hide()

})

//rutina para limpiar el carrito
let btnLimpiarCarrito = document.getElementById("botonlimp")
btnLimpiarCarrito.addEventListener("click", function(){

    carrito=[]

    let capsula = document.getElementById("capsula")
    capsula.classList.add("invisible")

})

//rutina para ver el carrito
let btnVerCarrito = document.getElementById("vercarrito")
btnVerCarrito.addEventListener("click", function(){

    //recorrer el carrito y pintar los producto
    let base=document.getElementById("basecarro")

    base.innerHTML=""
    
    carrito.forEach(function(producto){

        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-8")

        let foto=document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src=producto.foto

        let name=document.createElement("h5")  
        name.classList.add("text-center")
        name.textContent= producto.nombre

        let costo=document.createElement("h6")
        costo.textContent= "precio: " + producto.precio

        let cantidad=document.createElement("h6")
        cantidad.textContent= "cantidad: "+ producto.cantidad

        let subtotal=document.createElement("h6")
        subtotal.textContent = "sub-total: "+ (producto.cantidad * producto.costo)

        //PADRE E HIJOS
        columna1.appendChild(foto)
        columna2.appendChild(name)
        columna2.appendChild(costo)

        columna2.appendChild(cantidad)
        columna2.appendChild(subtotal)
        
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        base.appendChild(fila)

    })

    /*let total=document.getElementById("TotalTienda")
    total.textContent= */
    
    modalcompra.show()


})