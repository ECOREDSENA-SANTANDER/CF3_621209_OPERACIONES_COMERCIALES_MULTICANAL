<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 







    separador
    #t_1_1.titulo-segundo.mb-5
      h2 


    separador
    #t_1_1.titulo-segundo.mb-5
      h2


    separador
    #t_1_1.titulo-segundo.mb-5
      h2


    separador
    #t_1_1.titulo-segundo.mb-5
      h2


    separador
    #t_1_1.titulo-segundo.mb-5
      h2


    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg')
      h3.mb-0 


    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg')
      h3.mb-0 



    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg')
      h3.mb-0 



    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg')
      h3.mb-0 



    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg')
      h3.mb-0 



    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg')
      h3.mb-0 


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Tipos de diagnóstico organizacional
        .tabla-a.tab1.mb-3

        figcaption #[b Nota.] 






      
</template>

<script>
export default {
  name: 'Tema5',
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
