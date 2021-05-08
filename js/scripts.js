
function registrar(){

    var contraseña1 = document.getElementById("txtPassword").Value;
    var contraseña2 = document.getElementById("txtContraseña").value;

    if(contraseña1 != contraseña2){
        swal('contraseñas deben ser iguales','','error')
        return false;
    }
   
    
    
}

function mensaje() {
    swal('Su mensaje ha sido enviado, nos contactaremos a la brevedad','','success')
    return false;
    
}

function borrar(){
    swal('Elementos eliminados','','success');
}

function irregistrar(){
    window.open('registro.html')
    window.close();
}

function ingresar(){
    swal('Ingreso Correcto','','success')
    window.open('index.html')
    window.close();


}

function ayuda(){
    window.open('ayuda.html')
    window.close();
}

function ingrcolaborador(){
    swal('Ingreso Correcto','','success')
    window.open('registro_noticia.html')
    window.close();

}

function enviarnot() {
    swal('Su noticia a sido enviada, el administrador revisara y publicara','','success')
    return false;
}