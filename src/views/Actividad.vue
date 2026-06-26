<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Gestión del punto de venta.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de la gestión del punto de venta, el <em>merchandising</em>, la exhibición comercial, el <em>layout</em>, la comunicación, el plan de exhibición y las herramientas de verificación.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué función cumple el punto de venta en la gestión comercial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar la atención al cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Presentar productos, orientar al cliente y facilitar la compra.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la organización de productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir solo el precio final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál situación corresponde a un establecimiento comercial virtual?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una plataforma digital para ofrecer productos o servicios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un pasillo destinado al almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una caja sin información comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una vitrina ubicada en una tienda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es el propósito principal del <em>merchandising</em>?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ocultar los productos al cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir el control de inventario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Presentar productos de forma organizada y atractiva.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar la promoción en el punto de venta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué aspecto se relaciona con la accesibilidad del punto de venta?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Colores sin relación comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mensajes poco claros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Productos ubicados sin criterio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Pasillos despejados, señalización clara y circulación segura.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué caracteriza a una zona caliente?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alta circulación y mayor exposición de productos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Uso exclusivo para almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ausencia de productos destacados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Baja relación con la estrategia comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál situación representa una exhibición vertical?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Agrupar productos en una isla.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ubicar productos en un solo nivel.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Distribuir productos en varios niveles del mueble.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Colocar productos solo en cajas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Por qué el nivel de los ojos es estratégico?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reduce la identificación del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilita el reconocimiento y favorece la compra.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo se usa para productos pesados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Impide comparar alternativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué describe una exhibición cruzada?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Separar productos complementarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ubicar productos sin relación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Presentar productos solo en vitrinas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Agrupar productos relacionados para compras complementarias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es la función principal del <em>layout</em> comercial?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar espacios, pasillos y zonas de exhibición.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar la exhibición por almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar el acceso del cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir solo nombres de categorías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Para qué sirve un planograma?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la reposición de productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Indicar ubicación, cantidad y posición de productos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir la comunicación comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir solo la decoración exterior.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué diferencia a la planimetría del planograma?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La planimetría solo registra ventas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El planograma elimina la exhibición.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ambos significan lo mismo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La planimetría organiza el espacio y el planograma ubica productos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué acción corresponde al <em>visual merchandising</em>?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar pagos sin analizar la exhibición.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ocultar los productos al cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Usar color, iluminación y señalización para presentar productos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar vitrinas y promociones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué propósito cumple el vitrinismo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comunicar identidad, destacar productos y motivar el ingreso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Guardar productos sin intención comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar el plan de exhibición.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Impedir el reconocimiento de promociones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Cuál ejemplo aplica <em>marketing</em> sensorial?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar música, aromas e iluminación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Integrar aromas, sonidos, luz y texturas en la experiencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ubicar productos sin considerar emociones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usar solo reportes de ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué color puede apoyar una promoción con sentido de urgencia?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un color sin relación con el mensaje.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un color usado solo en bodega.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un tono sin contraste visual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rojo, porque llama la atención y destaca la oferta.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué debe caracterizar al material promocional?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mensajes confusos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Textos extensos sin relación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Claridad, legibilidad y coherencia comercial.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ausencia de ubicación definida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cómo apoya un <em>software</em> de gestión en el punto de venta?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registra ventas, controla inventarios y genera reportes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elimina la revisión de existencias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Impide conocer la rotación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sirve solo para decorar el local.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué recurso de apoyo orienta al cliente en el establecimiento?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un espacio sin mensajes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un reporte interno no consultable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una zona de almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Señalización clara sobre categorías, precios o promociones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué etapa del plan de exhibición revisa resultados y mejoras?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Improvisación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ocultamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evaluación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Desorganización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Para qué sirven las herramientas de verificación?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar el seguimiento de actividades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Revisar cumplimiento, detectar fallas y apoyar mejoras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar indicadores y listas de chequeo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar la comunicación por suposiciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
    },
  }),
}
</script>
