const automatizacion = {
  img: 'automatizacion.png',
  description: 'Contamos con personal capacitado para automatizar rutinas de tu hogar, taller, empresa, local comercial o club. Se trata de programar tiempos y condiciones para cosas, procesos y más. Ajustamos tu proyecto a medida y a optima funcionalidad.',
  category: 'Automatización',
  works: [
    'Instalación de sensores de luz, humedad, movimiento y tiempo.',
    'Temporizadores y microcontroladores para automatizar procesos y rutinas.',
    'Automatización de piscinas, bombas, riego, portones y tableros.'
  ],
}
const instalaciones = {
  img: 'foco-edit.png',
  description: 'Realizamos revelamientos, instalaciones y ampliaciones para una funcionalidad eficiente y segura de tu instalación eléctrica. También realizamos instalaciones eléctricas desde cero para que tengas un control completo de la red. Asesoramos con las mejores marcas y normas para ajustarlo a tu presupuesto.',
  category: 'Instalaciones Eléctricas',
  works: [
    'Instalaciones completas normalizadas.',
    'Conexiones aéreas embutidas y subterráneas.',
    'Ampliaciones, proyectos, asesoramiento.'
  ],
}
const tierra = {
  img: 'tierra-edit.png',
  description: 'Protegemos de manera segura riesgos eléctricos en toda tu red eléctrica y maquinaria, mediante una instalación completa y segura de Puesta a tierra. Medimos si tu instalación a Puesta a Tierra es funcional y realizamos el mantenimiento de la misma. La seguridad de riesgos eléctricos es nuestra prioridad.',
  category: 'Puesta a Tierra',
  works: [
    'Medición de continuidad y conductividad(certificada).',
    'Instalación de puesta a tierra.',
    'Mantenimiento de puesta a tierra.'
  ],
}
const economia = {
  img: 'dinero-edit.png',
  description: 'Medimos toda tu instalación eléctrica existente y te asesoramos para reducir tu consumo de energía eléctrica y optimizar tus recursos. Nuestras instalaciones te garantizan un ahorro de consumo energético eficiente.',
  category: 'Economía Energética',
  works: [
    'Inspecciones y resolución de fugas de corriente eléctrica.',
    'Cálculo de potencia consumida por sectores y rediseño para optimizar la economía eléctrica.',
    'Inspección de sección de conductores y dimensionamiento de térmicas, disyuntores, relés, contactores, etc.'
  ],
}
const planos = {
  img: 'plano-edit.png',
  description: 'Realizamos planos de control, potencia y de instalaciones eléctricas existentes o proyectadas, de esta manera tendrás un control de tus instalaciones para futuras proyecciones. El plano se realizará en base a tus necesidades y diseños de ubicaciones que prefieras.',
  category: 'Relevamiento y Planos',
  works: [
    'Relevamiento de espacios a Automatizar.',
    'Esquemas y Planos de circuitos eléctricos, neumáticos, mecánicos, etc.',
  ],
}
const setInfoModal = (category) => {
  
  modalServices.innerHTML = `
  
  <div class="modal-info p-4">
    <h3 class="font-weight-normal mb-3">${category.category}</h3>
    <p class="text-muted">${category.description}</p>
    <p class="text-uppercase mb-2"><strong>Trabajos</strong></p>
    <ul class="text-muted mb-4">
    <!-- listItems insetados mas abajo -->
    </ul>
    <span class="d-inline-block d-md-none">Toca para cerrar</span>
  </div>
  <div class="modal-img view">
    <i class="fas fa-times"></i>
    <div class="img-container">
      <img class="img-fluid" src="img/servicios/${category.img}" alt="${category.category} imagen">
    </div>
  </div>

  `

  category.works.forEach((item)=>{
    const listItem = document.createElement('li')
    listItem.innerHTML = item
    modalServices.querySelector('ul').append(listItem)
  })

  modalServices.style.transform = 'translateY(0)'
  modalServices.querySelector('i').addEventListener('click', () => {
    modalServices.style.transform = 'translateY(-1000px)'
  })
}
const itemServices = document.querySelectorAll('.servicios-item')
const modalServices = document.getElementById('modalServices')

modalServices.addEventListener('click', () => {
  modalServices.style.transform = 'translateY(-1000px)'
})

itemServices.forEach((item)=>{
  item.addEventListener('click', () => {
    
    let category = item.dataset.category

    switch(category){
      case'automatizacion': category = automatizacion; break
      case'instalaciones': category = instalaciones; break
      case'tierra': category = tierra; break
      case'economia': category = economia; break
      case'planos': category = planos; break
    }
    console.log(category)
    setInfoModal(category)

  })
})