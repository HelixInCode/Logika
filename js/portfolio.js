//Agregamos listener para las imagenes

const overlayServicios = document.getElementById('overlayServicios');

document.querySelectorAll('.serv .contenedor-servicios img').forEach((elemento)=>{
    elemento.addEventListener('click',() =>{
        const ruta = elemento.getAttribute('src');
        const titulo = elemento.parentNode.dataset.categoria ;
        const descripcion = elemento.parentNode.dataset.descripcion;
        const imagen = elemento.parentNode.dataset.imagen;
        const primero = elemento.parentNode.dataset.primero;
        const segundo = elemento.parentNode.dataset.segundo;
        const tercero = elemento.parentNode.dataset.tercero;

        
        

    
        overlayServicios.classList.add('activo');
        document.querySelector('#overlayServicios img').src = "img/servicios/" + imagen;
        document.querySelector('#overlayServicios .font-weight-normal').innerHTML = titulo;
        document.querySelector('#overlayServicios .text-muted').innerHTML = descripcion;
        document.querySelector('#overlayServicios .list-unstyled .primero').innerHTML = primero;
        document.querySelector('#overlayServicios .list-unstyled .segundo').innerHTML = segundo;
        document.querySelector('#overlayServicios .list-unstyled .tercero').innerHTML = tercero;
        

    })

});

//EventListener del botom cerrar
document.querySelector('#btn-cerrar-popup').addEventListener('click', () =>{
    overlayServicios.classList.remove('activo');

})

//eventlistener del la pagina para cerrar

// selecciono solo los target que tengan el id overlayServicios, si es asi que cierre la clase, sino no hace nada
overlayServicios.addEventListener('click', (evento) => {

    evento.target.id === 'overlayServicios' ? overlayServicios.classList.remove('activo') : '';


});