function mensaje() {
    swal('Su mensaje ha sido enviado, nos contactaremos a la brevedad','','success')
    window.open('index.html')
    window.close();
}

function borrar(){
    swal('Elementos eliminados','','success');
}

function ingresar(){
    swal('Ingreso Correcto','','success')
    window.open('index.html')
    window.close();


}

function registrar(){
    window.open('registro.html')
    window.close();
}

function registro(){
    swal('Registro exitoso','','success')
    window.open('index.html')
    window.close();
}

function ingrcolaborador(){
    swal('Ingreso Correcto','','success')
    window.open('registro_noticia.html')
    window.close();

}

function ayuda(){
    window.open('ayuda.html')
    window.close();

}

function enviarnot() {
    swal('Su noticia a sido enviada, el administrador revisara y publicara','','success')
    window.open('index.html')
    window.close();
}