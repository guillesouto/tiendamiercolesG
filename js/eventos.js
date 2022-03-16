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
    titulo01.textContent="Peter Parker"

    let titulo03=document.getElementById("titulo03")
    titulo03.textContent="el nerd de Queens"
}
function retornarTitulo(){
    let titulo01=document.getElementById("titulo01")
    titulo01.textContent="Spiderman"

    let titulo03=document.getElementById("titulo03")
    titulo03.textContent="El aorprendente hombre araña"
}

