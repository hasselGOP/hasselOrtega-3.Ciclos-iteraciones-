// Programa con do while que evalua el inicio de sesion
//Declaracion de variables 
let usuario = "departamentoTI"
let cont= "384b20f"
let nombreUsuario
let contraseña
let control

do {
    nombreUsuario = prompt("Hola, Ingrese su usuario para iniciar sesion")
    contraseña = prompt ("Ingrese su contraseña")

    if (usuario != usuario || cont!= contraseña){
        alert ("Lo sentimos, su usuario o contraseña no son validos, intente de nuevo")
        control=true // continua 
    }else{  
        cond=false  // se detiene 
        alert("Inicio de sesion correcto")
        }
} while (control);