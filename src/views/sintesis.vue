<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La correcta exhibición de productos en un punto de venta es vital para el éxito comercial, ya que afecta la decisión de compra del cliente. Una organización estratégica y una presentación eficaz no solo optimizan el espacio, sino que también mejoran la experiencia de compra y pueden incrementar las ventas. Una planificación adecuada en la disposición del surtido es clave para captar la atención del consumidor y facilitar su búsqueda de productos. A continuación, se presenta la temática relacionada con el componente: 

    .row.justify-content-center
      .col-lg-12
        .bg1.p-1.mb-5
          figure.my-3
            img(src="@/assets/curso/sintesis.png", alt="El diagrama aborda la temática exhibición y vitrinismo en el Formato Comercial y está dividido en tres secciones principales. La primera sección, Retail, se enfoca en el establecimiento comercial, definido como el lugar físico donde se lleva a cabo la venta de productos al consumidor final, y en la arquitectura del establecimiento, que abarca la estructura y diseño del espacio, así como la distribución de los productos. Además, incluye los formatos comerciales, que hacen referencia a los diferentes tipos de establecimientos, como tiendas departamentales y supermercados. La segunda sección, Surtido, abarca aspectos como la estructura del surtido, que se refiere a la organización y variedad de productos disponibles, y el layout, relacionado con la disposición de productos y muebles para facilitar la compra. También incluye el vitrinismo o visual merchandising, que se centra en las técnicas de diseño y decoración de vitrinas para promocionar productos y marcas, la señalización comercial, que utiliza señales y letreros para guiar al consumidor, y el planograma o planimetría, que muestra la ubicación y disposición de los productos en el establecimiento. Esta sección se complementa con temas como el merchandising, enfocado en las estrategias para promocionar y vender productos, y los dispositivos de seguridad, que protegen los productos y previenen robos. Finalmente, la tercera sección, Muebles en el Punto de Venta, trata sobre los diferentes tipos de muebles utilizados, como estanterías y mostradores, la codificación de productos mediante sistemas de códigos para identificarlos y clasificarlos, la rotación de categorías como estrategia para atraer la atención del consumidor, y el precio, que representa la cantidad de dinero que se cobra por los productos. Este contenido destaca la importancia de la organización y presentación en el punto de venta para maximizar las ventas y mejorar la experiencia del cliente.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
