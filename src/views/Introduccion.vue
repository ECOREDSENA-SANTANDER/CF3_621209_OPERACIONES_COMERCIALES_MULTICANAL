<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/intro/1.png", alt="Descripción imagen")
      .col-lg-8
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-10.pe-lg-0
            p.mb-0 El componente formativo Gestión del punto de venta aborda el espacio comercial como un elemento estratégico para la promoción de ventas y la experiencia del cliente. En este contexto, el punto de venta se entiende como el lugar físico o digital donde los productos se presentan, se comunican y se acercan al consumidor para facilitar su decisión de compra. Por esta razón, la organización del establecimiento, la disposición de los productos, la ambientación y las estrategias de exhibición cumplen una función importante en la gestión comercial.
          .col-lg-2.d-none.d-lg-block
            img.img-a.img-t(src="@/assets/curso/intro/2.svg", alt="Descripción imagen")
        .cajon.color-primario.p-4
          p.mb-0 Este componente es importante porque permite comprender cómo las empresas pueden mejorar la presentación de sus productos, orientar el recorrido del cliente y fortalecer la identidad de marca dentro del establecimiento comercial. Para el aprendiz, estos conocimientos son útiles porque le permiten participar en acciones relacionadas con el surtido, la exhibición, el mobiliario, el uso del espacio, la comunicación en el punto de venta y la aplicación de estrategias de #[em merchandising] acordes con los objetivos de mercadeo de la organización.
    
    p.mb-0(data-aos="fade-left") El desarrollo temático se abordará a partir de conceptos, herramientas y ejemplos aplicados sobre establecimiento comercial, punto de venta, #[em merchandising], exhibición, #[em layout,] planogramas, mobiliario comercial y #[em visual merchandising.] También se integran temas como vitrinismo, #[em marketing ]sensorial, teoría del color, comunicación comercial, recursos de apoyo, #[em software] de gestión, plan de exhibición y herramientas de verificación, con el propósito de comprender cómo se diseñan, implementan y mejoran las acciones de exhibición comercial en el punto de venta.
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
