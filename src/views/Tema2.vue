<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Exhibición comercial de productos
    
    .bg6.mb-0
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema2/1.svg', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            p.mb-4 La exhibición comercial de productos permite organizar la oferta dentro del punto de venta para facilitar su identificación, comparación y selección. Esta acción hace parte del #[em merchandising] y contribuye a que el cliente comprenda mejor la propuesta comercial del establecimiento, encuentre los productos con mayor facilidad y tome decisiones de compra de manera más cómoda.
            p.mb-0 Una exhibición adecuada integra la ubicación de los productos, la organización del mobiliario, la iluminación, la señalización, las zonas de circulación y los recursos promocionales. Por esta razón, es importante analizar las zonas, los tipos, los niveles, las técnicas y las estrategias de exhibición que pueden aplicarse en diferentes establecimientos comerciales.


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Exhibición: concepto, zonas, tipos, niveles, técnicas y usos
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        p.mb-3 La exhibición es la forma en que los productos se presentan dentro del establecimiento comercial para facilitar su identificación, destacar sus características y estimular la compra. Esta estrategia implica organizar el mobiliario, ubicar los productos de manera funcional, utilizar recursos de iluminación y crear espacios que comuniquen la oferta comercial de forma clara y atractiva.
        .bg7.p-4.mb-lg-3.mb-4 
          p.mb-0 Una exhibición adecuada permite que el cliente reconozca los productos disponibles, compare alternativas y tome decisiones de compra de forma más ágil. También contribuye a mejorar el orden del punto de venta, fortalecer la identidad comercial del establecimiento y generar una experiencia de compra más agradable.
        p.mb-0 Las zonas de exhibición corresponden a los espacios del punto de venta donde se ubican los productos según el recorrido del cliente, el nivel de circulación y el propósito comercial. Estas zonas ayudan a orientar la ubicación de los productos y a definir qué artículos pueden tener mayor exposición dentro del establecimiento.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/2.png', alt='')

    .tit.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/tema1/sub.svg')
      h3.mb-0 Zonas de exhibición en el punto de venta

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bg8.p-4.p-lg-5
          ImagenInfografica.color-primario
            template(v-slot:imagen)
              img.img-a.img-t(src='@/assets/curso/tema2/3.jpg', alt='Texto que describa la imagen')
            .tarjeta.color-secundario.p-4(x="65.8%" y="41%" numero="")
              h5.mb-3 Zona caliente
              p.mb-0 Es el área con mayor circulación de clientes. En esta zona se ubican productos estratégicos, promociones o artículos de alta rotación, porque tienen mayor posibilidad de ser identificados durante el recorrido comercial.
            .tarjeta.color-secundario.p-4(x="48.2%" y="29.8%" numero="")
              h5.mb-3 Zona fría
              p.mb-0 Es el espacio con menor circulación o menor atención por parte de los clientes. Para aprovechar esta zona, pueden utilizarse señalización clara, iluminación adecuada o productos de interés que motiven el desplazamiento hacia ese punto.
            .tarjeta.color-secundario.p-4(x="49.1%" y="54.5%" numero="")
              h5.mb-3  Zona de impulso
              p.mb-0 Suele ubicarse cerca de las cajas o puntos de pago. En esta zona se presentan productos de compra rápida, complementaria o no planificada.
            .tarjeta.color-secundario.p-4(x="17.6%" y="34.3%" numero="")
              h5.mb-3 Zona promocional
              p.mb-0 Es el espacio destinado a productos con ofertas, descuentos, lanzamientos o campañas comerciales. Su propósito es destacar una propuesta específica y motivar la acción de compra.
            .tarjeta.color-secundario.p-4(x="29.5%" y="72.4%" numero="")
              h5.mb-3 Zona de circulación
              p.mb-0 Corresponde a los recorridos internos del establecimiento. Su organización debe facilitar el desplazamiento, evitar obstáculos y permitir el acceso a las diferentes secciones del punto de venta.
              p.mb-0 La exhibición puede adoptar diferentes formas según el tipo de producto, el espacio disponible y la estrategia comercial definida. Entre los principales tipos de exhibición se encuentran la horizontal, vertical, masiva y temática.

    .tit.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/tema1/sub.svg')
      h3.mb-0 Tipos de exhibición comercial

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/4.png', alt='')
      .col-lg-8
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Exhibición horizontal")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Los productos se organizan a lo largo de un mismo nivel de estantería, uno al lado del otro. Este tipo de exhibición permite comparar marcas, presentaciones o referencias de una misma categoría.
          .tarjeta.color-a.p-4(titulo="Exhibición vertical")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Los productos se distribuyen en varios niveles de la estantería, desde la parte superior hasta la inferior. Esta organización facilita que una categoría tenga presencia en diferentes alturas del mueble de exhibición.
          .tarjeta.color-a.p-4(titulo="Exhibición masiva")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Consiste en agrupar una gran cantidad de productos en un mismo espacio para generar impacto comercial y comunicar abundancia. Es frecuente en promociones, temporadas especiales o lanzamientos.
          .tarjeta.color-a.p-4(titulo="Exhibición temática")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 Organiza productos según temporadas, celebraciones, eventos o campañas comerciales. Este tipo de exhibición permite crear ambientes relacionados con una necesidad o momento específico de compra.
                p.mb-0 Los niveles de exhibición corresponden a la altura en la que se ubican los productos dentro de estanterías, góndolas o muebles comerciales. Cada nivel tiene un efecto diferente en la identificación del producto y en la posibilidad de compra.

    .row(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 5.
          | Niveles de exhibición

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7.mb-lg-0.mb-4
        .tabla-a.tab2.mb-0
          table
            thead
              tr
                th Nivel
                th Características
            tbody
              tr.bgr
                td Nivel superior
                td Ubicación elevada con menor visibilidad para el cliente.
              tr
                td Nivel de los ojos
                td Área con mayor visibilidad y mayor probabilidad de compra.
              tr.bgr
                td Nivel de las manos
                td Fácil acceso para el cliente.
              tr
                td Nivel inferior
                td Zona con menor atención visual.
        figcaption #[b Nota.] Adaptado de Kotler y Armstrong (2017).
      .col-lg-5
        .bg9.p-4.p-lg-5
          p.mb-0 Las técnicas de exhibición son acciones aplicadas para mejorar la presentación de los productos dentro del punto de venta. Estas técnicas ayudan a organizar la oferta comercial, destacar productos específicos y facilitar la experiencia de compra.

    .tit.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/tema1/sub.svg')
      h3.mb-0 Técnicas de exhibición de productos

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-3.d-none.d-lg-block
        img(src="@/assets/curso/tema2/5.png", alt="Descripción imagen")
      .col-lg-9
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0
          .row.justify-content-center.align-items-center(titulo="Organización estratégica en estanterías")
            .col-lg-11
              p.mb-0.mx-lg-3 Permite ubicar los productos según categoría, rotación, tamaño, peso o prioridad comercial.
          .row.justify-content-center.align-items-center(titulo="Iluminación dirigida")
            .col-lg-11
              p.mb-0.mx-lg-3 Ayuda a destacar productos, zonas promocionales o espacios específicos dentro del establecimiento.
          .row.justify-content-center.align-items-center(titulo="Ubicación de productos complementarios")
            .col-lg-11
              p.mb-0.mx-lg-3 Consiste en ubicar juntos productos que pueden utilizarse de manera relacionada, con el fin de facilitar compras adicionales.
          .row.justify-content-center.align-items-center(titulo="Material promocional")
            .col-lg-11
              p.mb-0.mx-lg-3 Incluye piezas informativas, señalización, etiquetas, habladores, afiches o recursos digitales que apoyan la comunicación del producto en el punto de venta.
          .row.justify-content-center.align-items-center(titulo="Orden y reposición")
            .col-lg-11
              p.mb-0.mx-lg-3 Permite mantener los productos disponibles, organizados y en condiciones adecuadas para la compra.
              p.mb-4.mx-lg-3 La exhibición se utiliza en diferentes tipos de establecimientos comerciales, como supermercados, farmacias, tiendas especializadas, grandes superficies, tiendas de tecnología, comercios de moda y canales digitales. Su aplicación permite mejorar la organización del punto de venta, fortalecer las estrategias de #[em marketing] y facilitar el contacto entre el cliente y los productos.
              p.mb-4.mx-lg-3 Para fortalecer la comprensión sobre los tipos de exhibición comercial, se recomienda acceder al video Tipos de exhibición, en el cual se explican diferentes formas de presentar productos dentro del punto de venta, de acuerdo con el espacio disponible, el mobiliario, la ubicación en góndolas y los objetivos de rotación comercial.
              p.mb-0.mx-lg-3 Durante la revisión del recurso, identifique cómo la exhibición vertical, horizontal, por bloques, especial, en islas, en ganchos y en zona de pago o #[em check out] permite organizar los productos de manera estratégica. También reconozca la importancia de planear la ubicación de lineales, góndolas, vitrinas, escaparates y muebles comerciales para aprovechar el espacio interno del establecimiento y facilitar la decisión de compra.

    //.cajon.color-primari.p-4.mb-5(data-aos="fade-left")
      p.mb-0 #[b Acceder al video:] Tipos de exhibición.
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/eOHIU9dCUuY?si=rFblp5fFL-OEHmt_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Tipos de exhibición


    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Estrategias de exhibición: concepto, tipos y clasificación

    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema2/6.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 Las estrategias de exhibición son acciones planificadas que permiten presentar los productos de forma organizada, funcional y atractiva dentro del punto de venta. Estas estrategias hacen parte del #[em merchandising] y ayudan a mejorar la experiencia de compra, aumentar la rotación de productos y fortalecer los objetivos comerciales de la organización.
            br
            br
            p.mb-0 Una estrategia de exhibición no se limita a ubicar productos en un mueble. También implica definir qué productos se destacan, en qué zona se ubican, qué mensaje los acompaña, qué recursos de apoyo se utilizan y cómo se facilita el recorrido del cliente dentro del establecimiento.

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg')
      h3.mb-0 Tipos de estrategias de exhibición

    TabsB.color-acento-contenido.mb-5(data-aos="fade-left")
      .py-4.py-md-5(titulo="Exhibición por categorías" :icono="require_src('@/assets/curso/tema2/7.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-9.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/9.png', alt='Texto que describa la imagen')
          .col-lg-6
            p.mb-0 Consiste en organizar los productos según su tipo, función o necesidad que atienden. Esta estrategia facilita la búsqueda y permite que el cliente compare alternativas dentro de una misma categoría.
      .py-4.py-md-5(titulo="Exhibición promocional" :icono="require_src('@/assets/curso/tema2/7.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-9.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/10.png', alt='Texto que describa la imagen')
          .col-lg-6
            p.mb-0 Se utiliza para destacar productos en oferta, lanzamientos, campañas o temporadas comerciales. Puede apoyarse en señalización, material promocional, iluminación o espacios especiales.
      .py-4.py-md-5(titulo="Exhibición cruzada" :icono="require_src('@/assets/curso/tema2/7.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-9.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/11.png', alt='Texto que describa la imagen')
          .col-lg-6
            p.mb-4 Consiste en ubicar productos complementarios en un mismo espacio para facilitar compras adicionales. Por ejemplo, se pueden agrupar productos principales con accesorios, insumos o artículos de uso relacionado.
            p.mb-0 Las estrategias de exhibición también pueden clasificarse según el tiempo de permanencia o el propósito comercial. Esta clasificación permite definir si la exhibición hará parte de la organización habitual del punto de venta o si responderá a una campaña específica.

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg')
      h3.mb-0 Clasificación de las estrategias de exhibición

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .row.justify-content-center.align-items-stretch
          .col-md-6.col-xl.mb-4.mb-lg-0.mb-md-4
            .tarjeta-numerada.color-acento-contenido.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 1
              p.mb-4.text-center.mx-3 #[b Exhibición permanente]
              p.text-center.mx-2 Corresponde a la organización habitual de los productos dentro del establecimiento. Permite que el cliente reconozca la ubicación de las categorías y realice su recorrido con mayor facilidad.
          .col-md-6.col-xl.mb-4.mb-lg-0.mb-md-4
            .tarjeta-numerada.color-secundario.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 2
              p.mb-4.text-center.mx-3 #[b Exhibición temporal]
              p.text-center.mx-2 Se utiliza durante campañas, temporadas, lanzamientos o fechas comerciales específicas. Su propósito es destacar productos durante un periodo determinado.
          .col-md-6.col-xl.mb-4.mb-lg-0.mb-md-0
            .tarjeta-numerada.color-primario.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 3
              p.mb-4.text-center.mx-3 #[b Exhibición de impulso]
              p.text-center.mx-2 Se ubica en zonas estratégicas, como puntos de pago o áreas de alta circulación. Busca motivar compras rápidas, complementarias o no planificadas.
          .col-md-6.col-xl.mb-0.mb-lg-0.mb-md-0
            .tarjeta-numerada.color-acento-botones.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 4
              p.mb-4.text-center.mx-3 #[b Exhibición institucional]
              p.text-center.mx-2 Comunica la identidad del establecimiento, sus valores comerciales o una línea de productos representativa. Puede apoyar el posicionamiento de la marca o del negocio.


    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Mobiliario comercial: concepto, disposición, usos y clasificación

    .bg6.p-lg-5.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-0(data-aos="fade-right")
          img.img-a.img-t.mb-lg-0.mb-4(src='@/assets/curso/tema2/12.svg', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-0
            p.mb-4 El mobiliario comercial corresponde al conjunto de muebles, estructuras y soportes utilizados dentro del establecimiento para exhibir, organizar, almacenar y presentar productos. Estos elementos cumplen una función importante en la experiencia de compra, porque facilitan el acceso a los artículos, organizan el espacio y apoyan la aplicación de estrategias de #[em merchandising.]
            p.mb-0 La disposición del mobiliario comercial hace referencia a la forma en que se organizan los muebles dentro del punto de venta. Esta distribución debe considerar el tamaño del local, el tipo de productos, las zonas de circulación, las necesidades de accesibilidad, la seguridad del cliente y los objetivos de exhibición definidos por la organización.

    p.mb-5(data-aos="fade-right") El mobiliario comercial se utiliza para exhibir productos de manera ordenada, facilitar el acceso a los artículos, aprovechar el espacio disponible, apoyar la promoción comercial y orientar el recorrido dentro del establecimiento. Su uso adecuado contribuye a una experiencia de compra más clara, cómoda e incluyente.

    .tit.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/tema1/sub.svg')
      h3.mb-0 Clasificación del mobiliario comercial

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/13.svg' alt='AvatarTop')
            h4.text-center.mb-4 Estanterías
            p.mb-0.text-center Estructuras utilizadas para organizar productos en diferentes niveles. Permiten clasificar artículos por categoría, tamaño, referencia o uso.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/14.svg' alt='AvatarTop')
            h4.text-center.mb-4 Góndolas
            p.mb-0.text-center Muebles comunes en establecimientos de autoservicio. Permiten exhibir productos por ambos lados y organizar pasillos de circulación.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/15.svg' alt='AvatarTop')
            h4.text-center.mb-4 Vitrinas
            p.mb-0.text-center Estructuras cerradas que protegen productos y permiten destacarlos dentro del punto de venta. Son útiles para artículos delicados, pequeños o de mayor valor.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/16.svg' alt='AvatarTop')
            h4.text-center.mb-4 Mesas de exhibición
            p.mb-0.text-center Superficies utilizadas para presentar productos de manera accesible. Facilitan la interacción del cliente con los artículos y apoyan exhibiciones temporales o temáticas.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/17.svg' alt='AvatarTop')
            h4.text-center.mb-4 Mostradores
            p.mb-0.text-center Muebles ubicados en zonas de atención, asesoría o pago. Permiten apoyar la comunicación directa entre el personal del establecimiento y el cliente.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/18.svg' alt='AvatarTop')
            h4.text-center.mb-4 Exhibidores promocionales
            p.mb-0.text-center Estructuras diseñadas para destacar productos, campañas, descuentos o lanzamientos. Pueden ubicarse en zonas calientes, zonas promocionales o puntos de alta circulación.


</template>

<script>
export default {
  name: 'Tema2',
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
