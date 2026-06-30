<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos del punto de venta y el #[em merchandising]
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img(src="@/assets/curso/tema1/1.svg", alt="Descripción imagen")
      .col-lg-8
        p.mb-4 El punto de venta es un espacio clave dentro de la actividad comercial, porque permite acercar los productos o servicios al consumidor y facilitar la decisión de compra. En este espacio se integran elementos como la organización del establecimiento, la disposición del mobiliario, la exhibición de productos, la comunicación comercial y la atención al cliente.
        .cajon.color-pri.p-4
          p.mb-0.mt-lg-2.mb-lg-2.mx-lg-2 Para comprender la gestión del punto de venta, es necesario reconocer primero qué es un establecimiento comercial, cuáles son sus tipos, cómo funciona el punto de venta y de qué manera el #[em merchandising] contribuye a mejorar la presentación de los productos. Estos conceptos permiten analizar el espacio comercial como un recurso estratégico que apoya los objetivos de mercadeo de la organización.


    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Establecimiento comercial: concepto y tipos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-4 El establecimiento comercial es el espacio físico o digital donde una empresa realiza actividades de venta, atención al cliente, promoción de productos y transacciones comerciales. En este lugar se genera el contacto entre la oferta de la empresa y las necesidades del consumidor, por lo cual su organización influye en la experiencia de compra y en la percepción de la marca.
        .cajon.color-acento-contenido.p-4.p-lg-5.mb-4
          p.mb-0 Desde el enfoque del #[em marketing], el establecimiento comercial funciona como un punto de contacto entre la empresa y el cliente. Por esta razón, aspectos como la distribución del espacio, la presentación de los productos, la facilidad de acceso, la señalización y la atención ofrecida ayudan a fortalecer la relación comercial y a mejorar la experiencia del consumidor.
        p.mb-0 Los establecimientos comerciales pueden clasificarse según el tipo de productos que ofrecen, el tamaño del negocio, el formato de venta o el canal utilizado para comercializar. Esta clasificación permite diferenciar los modelos de negocio que emplean las empresas para entregar sus productos o servicios al mercado.
      .col-lg-4
        img(src="@/assets/curso/tema1/2.svg", alt="Descripción imagen")

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Tipos de establecimiento comercial
        .tabla-a.tab1.mb-0
          table
            thead
              tr
                th Tipo de establecimiento
                th Características
            tbody
              tr
                td Tienda especializada
                td Comercializa una categoría específica de productos, como prendas de vestir, tecnología, calzado, cosméticos o artículos deportivos.
              tr
                td Supermercado
                td Ofrece variedad de productos de consumo cotidiano organizados por secciones o categorías.
              tr
                td Gran almacén
                td Establecimiento de gran tamaño que integra varias categorías de productos en un mismo espacio comercial.
              tr
                td Centro comercial
                td Espacio que reúne diferentes establecimientos, servicios y zonas de circulación para los consumidores.
              tr
                td Tienda virtual
                td Plataforma digital donde se comercializan productos o servicios mediante canales electrónicos.
        figcaption #[b Nota.] Adaptado de Kotler y Keller (2016).

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg')
      h3.mb-0 Tipos de establecimiento comercial

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/3.svg' alt='AvatarTop')
            h4.text-center.mb-4 Tienda especializada
            p.mb-0.text-center Presenta una categoría específica de productos y facilita que el cliente encuentre alternativas relacionadas con una misma necesidad.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/4.svg' alt='AvatarTop')
            h4.text-center.mb-4 Supermercado
            p.mb-0.text-center Organiza productos de consumo cotidiano por secciones, lo que permite orientar el recorrido del cliente y facilitar la compra.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/5.svg' alt='AvatarTop')
            h4.text-center.mb-4 Gran almacén
            p.mb-0.text-center Integra varias categorías de productos en un mismo espacio, por lo que requiere una distribución clara y señalización comprensible.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/6.svg' alt='AvatarTop')
            h4.text-center.mb-4 Centro comercial
            p.mb-0.text-center Agrupa diferentes establecimientos y servicios, lo que permite ampliar la oferta comercial en un mismo lugar.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/7.svg' alt='AvatarTop')
            h4.text-center.mb-4 Tienda virtual
            p.mb-0.text-center Permite comercializar productos o servicios mediante canales digitales, facilitando el acceso a la oferta desde diferentes ubicaciones.


    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Punto de venta: concepto, tipos y dimensiones
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        img(src='@/assets/curso/tema1/8.png' alt='AvatarTop')
      .col-lg-6
        p.mb-3 El punto de venta es el espacio físico o digital donde se realiza la interacción comercial entre la empresa y el consumidor. En este lugar se presentan los productos, se ofrece información, se aplican acciones promocionales y se concreta la compra. Por esta razón, su organización tiene impacto directo en la experiencia del cliente y en la efectividad de las estrategias comerciales.
        p.mb-0 Desde la perspectiva del #[em marketing], el punto de venta es un elemento importante del canal comercial, porque permite acercar el producto al consumidor y facilitar el proceso de compra. Una adecuada gestión del punto de venta ayuda a ordenar los productos, mejorar la circulación, comunicar promociones y generar ambientes accesibles para diferentes tipos de clientes.

    .bg1.p-4.mb-4 
      p.mb-0 Los puntos de venta pueden clasificarse según el canal utilizado, el nivel de intermediación y la forma de contacto con el consumidor. Esta clasificación permite seleccionar estrategias comerciales acordes con el tipo de producto, el comportamiento del consumidor y los objetivos de la organización.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 2.
          | Tipos de punto de venta
        .tabla-a.tab2.mb-0
          table
            thead
              tr
                th Tipo de punto de venta
                th Características
                th Aplicación comercial
            tbody
              tr.bgr
                td Punto de venta físico
                td Espacio presencial donde el cliente interactúa con productos, personal de atención y elementos de exhibición.
                td Tiendas, supermercados, farmacias o almacenes.
              tr
                td Punto de venta virtual
                td Plataforma digital donde se presentan productos o servicios para realizar compras en línea.
                td Tiendas en línea o catálogos digitales.
              tr.bgr
                td Punto de venta propio
                td Canal directo administrado por la empresa sin intermediarios.
                td Tienda física o virtual de la organización.
              tr
                td Punto de venta intermediado
                td Comercialización realizada mediante distribuidores, minoristas o terceros.
                td Productos ofrecidos en comercios aliados.
              tr.bgr
                td Punto de venta mayorista
                td Venta de productos en grandes cantidades a negocios, distribuidores o  compradores institucionales.
                td Bodegas comerciales o centrales de abastecimiento.
              tr
                td Punto de venta minorista
                td Venta directa al consumidor final en cantidades pequeñas.
                td Tiendas de barrio, minimercados o locales comerciales.
        figcaption #[b Nota.] Adaptado de Kotler y Keller (2016).

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema1/9.png', alt='')
    
    p.mb-4 Las dimensiones del punto de venta hacen referencia al tamaño, proporciones y distribución del espacio comercial. Estas dimensiones influyen en la ubicación del mobiliario, la organización de pasillos, la circulación de las personas y la capacidad de exhibición de los productos. Una planificación adecuada permite aprovechar el espacio disponible y facilitar el acceso a las diferentes zonas del establecimiento.

    p.mb-5 También es importante considerar la accesibilidad del punto de venta. Esto implica contar con pasillos despejados, señalización clara, zonas de circulación seguras y espacios que faciliten el desplazamiento de personas con diferentes necesidades de movilidad. De esta manera, el establecimiento puede ofrecer una experiencia de compra más cómoda, ordenada e incluyente.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .titulo-dos.mb-0
          h4 Entre los factores relacionados con las dimensiones del punto de venta se encuentran:
        .bg2.p-3
          .tarjeta.tarjeta--azul.p-4.pb-0.mb-4
            SlyderA.pb-lg-1.pb-3(tipo="a")
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6
                  img.img-a.img-t(src='@/assets/curso/tema1/11.svg', alt='')
                .col-lg-6
                  h4.mb-4 Tamaño del local: 
                  p.mb-0 Corresponde al espacio total disponible dentro del establecimiento. Este factor permite definir la cantidad de productos a exhibir, las zonas de circulación, las áreas de atención, los puntos de pago y los espacios de almacenamiento.
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6
                  img.img-a.img-t(src='@/assets/curso/tema1/12.svg', alt='')
                .col-lg-6
                  h4.mb-4 Ancho de pasillos: 
                  p.mb-0 Corresponde al espacio destinado para el desplazamiento de los clientes. Un ancho adecuado facilita la circulación, reduce obstáculos y mejora la comodidad durante el recorrido por el establecimiento.
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6
                  img.img-a.img-t(src='@/assets/curso/tema1/13.svg', alt='')
                .col-lg-6
                  h4.mb-4 Distribución del mobiliario: 
                  p.mb-0 Se refiere a la forma como se organizan estanterías, góndolas, vitrinas, mesas de exhibición, mostradores y otros elementos. Una distribución clara permite aprovechar el espacio y facilitar el acceso a los productos.
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6
                  img.img-a.img-t(src='@/assets/curso/tema1/14.svg', alt='')
                .col-lg-6
                  h4.mb-4 Zonas de circulación: 
                  p.mb-0 Son los espacios destinados para orientar el recorrido de las personas dentro del establecimiento. Estas zonas ayudan a organizar el flujo de clientes y a facilitar el acceso a las diferentes categorías de productos.
      .col-lg-4
        img(src='@/assets/curso/tema1/10.png', alt='')

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg')
      h3.mb-0 Dimensiones del punto de venta

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .bg3.p-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              img.img-a.img-t(src='@/assets/curso/tema1/15.svg', alt='Texto que describa la imagen')
            .tarjeta.color-secundario.p-4(x="49.75%" y="5.9%" numero="")
              h5.mb-3 Tamaño del local
              p.mb-0 Define el espacio disponible para ubicar productos, mobiliario, zonas de atención, áreas de pago y espacios de circulación.
            .tarjeta.color-secundario.p-4(x="56.3%" y="18.9%" numero="")
              h5.mb-3 Distribución del mobiliario
              p.mb-0 Organiza los muebles y elementos de exhibición para mejorar el acceso a los productos y aprovechar el espacio.
            .tarjeta.color-secundario.p-4(x="64.7%" y="42.3%" numero="")
              h5.mb-3 Ancho de pasillos
              p.mb-0 Permite facilitar el desplazamiento de las personas y reducir barreras dentro del establecimiento comercial.
            .tarjeta.color-secundario.p-4(x="44.5%" y="66.5%" numero="")
              h5.mb-3 Zonas de circulación 
              p.mb-0 Orientan el recorrido del cliente y facilitan el acceso a las diferentes secciones del punto de venta.
            .tarjeta.color-secundario.p-4(x="54.8%" y="90.4%" numero="")
              h5.mb-3 Accesibilidad
              p.mb-0 Favorece una experiencia de compra incluyente mediante espacios despejados, señalización clara y recorridos seguros.
    

    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.3. #[em Merchandising:] concepto, evolución, tipos, técnicas y aplicabilidad

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bg4.p-lg-5.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5
              img.img-a.img-t(src='@/assets/curso/tema1/16.svg')
            .col-lg-7
              p.mb-4 El #[em merchandising] es el conjunto de técnicas y estrategias aplicadas en el punto de venta para presentar los productos de forma organizada, atractiva y funcional. Su propósito es facilitar la identificación de los productos, orientar la decisión de compra y mejorar la experiencia del cliente dentro del establecimiento comercial.
              p.mb-4 Este concepto se relaciona con la forma como se ubican los productos, la organización del espacio, el uso de iluminación, la señalización, la ambientación, el mobiliario y las acciones promocionales. Al aplicar estrategias de #[em merchandising], la empresa puede fortalecer la presentación de su oferta comercial y generar condiciones más favorables para la compra.
              p.mb-0 El #[em merchandising] ha evolucionado con los cambios del comercio y del comportamiento del consumidor. En sus inicios se centraba principalmente en ubicar productos en estanterías. Con el tiempo, incorporó elementos de diseño, comunicación, análisis del cliente, tecnología y experiencia de compra. Actualmente, integra aspectos físicos y digitales para apoyar la gestión del punto de venta.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 3.
          | Evolución del #[em merchandising]
        .row
          .col-lg-7
            .tabla-a.tab3.mb-0
              table
                thead
                  tr
                    th Etapa
                    th Características
                tbody
                  tr
                    td #[em Merchandising] tradicional
                    td Se enfoca en la ubicación básica de productos dentro del punto de venta.
                  tr
                    td #[em Merchandising] visual
                    td Integra diseño, iluminación, color, organización estética y ambientación del espacio.
                  tr
                    td #[em Merchandising] estratégico
                    td Considera el comportamiento del consumidor, los objetivos comerciales y la rotación de productos.
                  tr
                    td #[em Merchandising] digital
                    td Utiliza recursos tecnológicos, catálogos digitales, pantallas o herramientas interactivas para apoyar la experiencia de compra.
            figcaption #[b Nota.] Adaptado de Kotler y Keller (2016).
          .col-lg-5.d-none.d-lg-block
            img(src="@/assets/curso/tema1/17.png", alt="Descripción imagen")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bg5.p-4 
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-1
              img.img-a.img-t(src='@/assets/curso/tema1/18.svg')
            .col-lg-10
              p.mb-0 El #[em merchandising] puede clasificarse según el enfoque de las acciones utilizadas dentro del punto de venta. Cada tipo cumple una función específica en la presentación de los productos y en la gestión comercial del establecimiento.

    .row
      .col-lg-7.offset-lg-5
        .titulo-sexto.mb-4
          h5 Tabla 4.
          | Tipos de #[em merchandising]
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img(src="@/assets/curso/tema1/19.png", alt="Descripción imagen")
      .col-lg-7
        .tabla-a.tab4.mb-0
          table
            thead
              tr
                th Tipo
                th Descripción
            tbody
              tr.bgr
                td #[em Merchandising] visual
                td Se enfoca en la presentación estética del producto mediante color, iluminación, composición, mobiliario y organización del espacio.
              tr
                td #[em Merchandising] de gestión
                td Analiza la rotación de productos, la ubicación en estanterías, el control del surtido y el aprovechamiento del espacio comercial.
              tr.bgr
                td #[em Merchandising] promocional
                td Utiliza ofertas, descuentos, material promocional y espacios especiales para estimular la compra.
              tr
                td #[em Merchandising] digital
                td Aplica herramientas tecnológicas para apoyar la presentación de productos y la interacción comercial en entornos físicos o digitales.
        figcaption #[b Nota.] Adaptado de Levy y Weitz (2012).

    p.mb-4 Las técnicas de #[em merchandising] son acciones concretas que ayudan a mejorar la presentación de los productos dentro del establecimiento comercial. Entre las más utilizadas se encuentran la ubicación estratégica en estanterías, la señalización clara, la creación de exhibiciones promocionales, la organización por categorías, la iluminación dirigida y la disposición adecuada del mobiliario.

    p.mb-5 Estas técnicas pueden aplicarse en diferentes tipos de establecimientos, como supermercados, farmacias, tiendas de ropa, almacenes de tecnología, tiendas especializadas, grandes superficies y canales digitales. Su aplicación permite fortalecer la comunicación entre la marca y el consumidor, mejorar el orden del punto de venta y facilitar una experiencia de compra más clara, accesible y agradable.

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg')
      h3.mb-0 Técnicas básicas de #[em merchandising]

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4
      .col-lg-7
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0(data-aos="fade-left")
          .row.justify-content-center.align-items-center(titulo="Ubicación estratégica")
            .col-lg-10
              p.mb-0 Consiste en colocar los productos en zonas de mayor circulación o en espacios que faciliten su identificación por parte del cliente.
          .row.justify-content-center.align-items-center(titulo="Señalización clara")
            .col-lg-10
              p.mb-0  Permite comunicar precios, promociones, categorías o información relevante de los productos mediante mensajes breves y comprensibles.
          .row.justify-content-center.align-items-center(titulo="Exhibiciones promocionales")
            .col-lg-10
              p.mb-0 Agrupan productos en espacios especiales para destacar ofertas, temporadas o campañas comerciales.
          .row.justify-content-center.align-items-center(titulo="Organización por categorías")
            .col-lg-10
              p.mb-0 Ordena los productos según su tipo, uso o necesidad que atienden, facilitando la búsqueda dentro del punto de venta.
          .row.justify-content-center.align-items-center(titulo="Iluminación dirigida")
            .col-lg-10
              p.mb-0 Resalta productos, zonas o exhibiciones específicas para mejorar la percepción del espacio comercial.
          .row.justify-content-center.align-items-center(titulo="Disposición del mobiliario")
            .col-lg-10
              p.mb-0 Organiza estanterías, góndolas, vitrinas y mesas de exhibición para facilitar la circulación y el acceso a los productos.
      .col-lg-5.d-none.d-lg-block
        img(src="@/assets/curso/tema1/20.png", alt="Descripción imagen")

    p.mb-4 Para fortalecer la comprensión sobre las técnicas básicas de #[em merchandising], se recomienda acceder al video #[em Merchandising] - Promoción en el punto de venta, en el cual se explica cómo las acciones promocionales apoyan la presentación de productos, la comunicación comercial y la decisión de compra dentro del establecimiento.

    p.mb-5 Durante la revisión del recurso, identifique cómo la promoción en el punto de venta permite destacar productos, comunicar beneficios y generar mayor interés en el cliente. También reconozca la importancia de integrar la exhibición, la señalización, la ambientación y los mensajes promocionales como acciones complementarias para mejorar la experiencia de compra y fortalecer los objetivos comerciales de la organización.

    .cajon.color-primari.p-4.mb-5
      p.mb-0 #[b Acceder al video:] #[em Merchandising] - Promoción en el punto de venta.
    
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2HWT5IqEZds?si=PCNsKcA2ZLHkjzUp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: #[em Merchandising] - Promoción en el punto de venta


</template>

<script>
export default {
  name: 'Tema1',
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
