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


alert ("Ahora, un ejemplo de for")
let numero1= (parseInt(prompt("Ingrese un numero")))
let numero2= (parseInt(prompt("Ingrese otro numero")))

if (numero1>numero2) {

    for (let i=0;i<=5;i++) {
        let multiplo= numero1 * numero2 *i;
        console.log("El número es " + multiplo);
    } 

}
else if(numero1<numero2) {

    for (let i=0;i<=5;i++) {
        let division= numero1 / numero2;
        let resultdiv= division / i;
        console.log("El número es " + resultdiv);
    } 

}
   
    



