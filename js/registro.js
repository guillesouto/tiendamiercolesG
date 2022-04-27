import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"


let botonSingIn=document.getElementById("Registrobutton")
//hacemos el modal del NavBar para desplegar el Formulario
let registromodal= new bootstrap.Modal(document.getElementById('popupRegistro'))

botonSingIn.addEventListener("click", function(){
    console.log("se abrio el modal")
    registromodal.show()
})

let boton=document.getElementById("botonRegistro")
//para agregar un modal se coloca el new bootstrap.Modal()
let modalregistro= new bootstrap.Modal(document.getElementById('mensajeinformativo'))
let textoModal=document.getElementById("mensajemodalinfo")

boton.addEventListener("click", function(evento){
    evento.preventDefault()
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("exito en el registro")
        textoModal.textContent="Exito en el Registro"
        modalregistro.show()

        let formulario=document.getElementById("formularioregistro")
        formulario.reset()

        //hacemos que el formulario este unos 2 segundos antes de ocultarce (tiempo en milisegundos 1000=1segundo)
        setTimeout(function(){
            modalregistro.hide()
        },2000)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log("Fallo "+ errorMessage)
        textoModal.textContent="Fallo en el Registro: "+ errorMessage
        modalregistro.show()
        setTimeout(function(){
            modalregistro.hide()
        },2000)
    });

})