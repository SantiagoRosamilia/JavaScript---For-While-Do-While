alert ("Bienvenido a 'Nombre de la pagina' ")
let usuario=(prompt("Cree un nuevo usuario")) 
let contraseña=(prompt("Cree una contraseña"))

console.log (usuario)
console.log (contraseña)

let usuarioCreado=(prompt("Ingrese usuario"))
let contraCreado=(prompt("Ingrese contraseña"))

if (usuarioCreado==usuario && contraCreado==contraseña) {
    alert ("Bienvenido "+ usuario )
    
} 
else if (usuarioCreado!=usuario || contraCreado!=contraseña){
    do {
        alert ("Usuario o contraseña incorrecta, intente de nuevo")
        let usuarioCreado=(prompt("Ingrese usuario"))
        let contraCreado=(prompt("Ingrese contraseña"))
    
        if (usuarioCreado==usuario && contraCreado==contraseña) {
            alert ("Bienvenido "+ usuario )
            break;
        }  
        
    } while (usuarioCreado!=usuario || contraCreado!=contraseña);
}


