export function ampliarInfoProducto(evento){
//lanzar modal

    let producto={}    

    //lleno la informacion del producto
    producto.foto = evento.target.parentElement.querySelector("img").src
    producto.nombre =evento.target.parentElement.querySelector("h3").textContent
    producto.precio = evento.target.parentElement.querySelector("h5").textContent
    producto.descripcion = evento.target.parentElement.querySelector("p").textContent


    let fotoinfo=document.getElementById("fotoinfo")
    fotoinfo.src= evento.target.parentElement.querySelector("img").src

    let tituloinfo=document.getElementById("tituloinfo")
    tituloinfo.textContent=evento.target.parentElement.querySelector("h3").textContent

    let textinfo=document.getElementById("textinfo")
    textinfo.textContent=evento.target.parentElement.querySelector("p").textContent

    let precinfo=document.getElementById("precinfo")
    precinfo.textContent=evento.target.parentElement.querySelector("h5").textContent

    //devolver el producto general
    return producto 

}
