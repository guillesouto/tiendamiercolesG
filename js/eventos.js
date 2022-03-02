let etiquetaBoton=document.getElementById("boton")

etiquetaBoton.addEventListener("click",cambiarFoto)

function cambiarFoto(){
    let titulo2=document.getElementById("titulo2")
    titulo2.textContent="Buenos dias Señor"
}

let pasarXFoto=document.getElementById("calistenic")

pasarXFoto.addEventListener("mouseover", cambiarTitulo)
pasarXFoto.addEventListener("mouseleave",retornarTitulo)

function cambiarTitulo(){
    let titulo01=document.getElementById("titulo01")
    titulo01.textContent="ONE BAR SIN SOPORTE"
}
function retornarTitulo(){
    let titulo01=document.getElementById("titulo01")
    titulo01.textContent="INTRODUCCION A LA CALISTENIA Y GIMNASIA"
}

