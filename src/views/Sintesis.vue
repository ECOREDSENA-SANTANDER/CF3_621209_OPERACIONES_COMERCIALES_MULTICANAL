<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4(data-aos="fade-right") El componente formativo Gestión del punto de venta aborda el establecimiento comercial y el punto de venta como espacios estratégicos para la presentación, promoción y comercialización de productos. En este contexto, se estudian aspectos relacionados con los tipos de establecimientos comerciales, las dimensiones del punto de venta, la accesibilidad, la organización del espacio y la aplicación del #[em merchandising] como herramienta para mejorar la experiencia de compra. También se analizan las técnicas de exhibición, las zonas, los niveles, el mobiliario comercial y las estrategias que permiten presentar los productos de manera clara, ordenada y coherente con los objetivos de mercadeo.

    p.mb-5(data-aos="fade-left") Asimismo, el componente integra herramientas y acciones relacionadas con el #[em layout], los planogramas, la planimetría, el #[em visual merchandising], el vitrinismo, el #[em marketing] sensorial, la teoría del color y la comunicación comercial en el punto de venta. Estos elementos permiten fortalecer la identidad del establecimiento, orientar el recorrido del cliente y apoyar la decisión de compra. Finalmente, se abordan el #[em software] de gestión, los recursos de apoyo, el plan de exhibición y las herramientas de verificación, como medios para organizar, implementar, controlar y mejorar las acciones de exhibición comercial en diferentes contextos empresariales.
    
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-11.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual sobre la gestión del punto de venta. Presenta cinco ejes principales: fundamentos del punto de venta y el merchandising, exhibición comercial de productos, organización del espacio comercial, experiencia y comunicación en el punto de venta, y gestión, apoyo y control de la exhibición. El mapa concluye que estos elementos permiten lograr productos mejor ubicados, espacios más accesibles, exhibiciones más claras, comunicación comercial efectiva y mejor experiencia del cliente.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
