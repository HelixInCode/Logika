var portafolio = document.querySelectorAll('#portafolio > .portafolio-container > .portafolio-item')
console.log('hola')

function cerrarItem (item, imagen, descripcion, overlay){

  item.style.zIndex = "0"
  imagen.style.transform = "translateY(0px)"
  descripcion.style.transform = "translateY(0px)"
  overlay.style.transform = "translateY(0px)"
}
function abrirItem (item, imagen, descripcion, overlay){
  
  item.style.zIndex = "3"
  imagen.style.transform = "translateY(-50%)"
  descripcion.style.transform = "translateY(50%)"
  overlay.style.transform = "translateY(-50%)"
}

for (let i = 0; i < portafolio.length; i++) {
  
  portafolio[i].addEventListener('click', () => {
    

    if (portafolio[i].style.zIndex == "") {
  
      abrirItem( 
        portafolio[i], 
        portafolio[i].children[0], 
        portafolio[i].children[1],
        portafolio[i].children[2])
  
    }else  if (portafolio[i].style.zIndex == "0") {
  
      abrirItem( 
        portafolio[i], 
        portafolio[i].children[0], 
        portafolio[i].children[1],
        portafolio[i].children[2])
      
    }else if(portafolio[i].style.zIndex == "3"){
  
      cerrarItem( 
        portafolio[i], 
        portafolio[i].children[0], 
        portafolio[i].children[1],
        portafolio[i].children[2])

    }
    for (let i2 = 0; i2 < portafolio.length; i2++) {

      if(portafolio[i2].style.zIndex == "3" && i2 != i ){
        cerrarItem( 
          portafolio[i2], 
          portafolio[i2].children[0], 
          portafolio[i2].children[1],
          portafolio[i2].children[2])
      }
    }
  })
  
}

//---------------------FORMULARIO SCRIPT-------------------//

//-------------VARIABLES
//const nombre = document.querySelector('#nombre');
//const email = document.querySelector('#email');
//const telefono = document.querySelector('#telefono');
//const asunto = document.querySelector('#asunto');
//const mensajes = document.querySelector('#mensaje-form');
//const btnEnviar = document.querySelector('#btn-enviar');
//const img = document.querySelector('#img-check');

//--------------EVENTLISTENERS
//eventListeners();

//function eventListeners() {
    //inicia la app y desabilita el boton enviar
  //  document.addEventListener('DOMContentLoaded', iniciaApp);

    //validar campos
    //nombre.addEventListener('blur', validarCampo);
    //telefono.addEventListener('blur', validarCampo);
    //email.addEventListener('blur', validarCampo);
    //asunto.addEventListener('blur', validarCampo);
    //mensajes.addEventListener('blur', validarCampo);

    //habilitar boton enviar
   // btnEnviar.addEventListener('click', enviarEmail);
 // }
//-------------FUNCTION
//function iniciaApp(){
 // btnEnviar.disabled = true;
//}

//function validarCampo(){
  //validarLongitud(this);

  //let correcto;

  //validar solo email
 // if(this.type === 'email'){
   //   validarEmail(this);
 // }

  //if (email.value.length > 3 && nombre.value.length > 3 && mensajes.value.length > 3){
    //  btnEnviar.disabled = false;
    //  console.log('mensaje enviado')
  //}
//}

//function enviarEmail(e){
  //e.preventDefault();
  
  //console.log('email enviado');
  //setTimeout(function () {
    //  img.style.display = 'block';
      //img.classList.add('bounceIn');
 //}, 2000);

  

//}


//function validarLongitud(campo){
 // if(campo.value.length > 3){
   //   campo.style.borderBottom = '1px solid green';
  //}else{
    //  campo.style.borderBottom = '1px solid red';
 // }
//}

//function validarEmail(email){
  //let position = email.value.indexOf('@');

 // if(position !== -1){
   //   email.style.borderBottom = '1px solid green';
     // correcto = true;
 // }else{
   //   email.style.borderBottom = '1px solid red';
 // }
//}
