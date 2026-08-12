export default {
  global: {
    Name: 'Gestión del punto de venta',
    Description:
      'El componente formativo Gestión del punto de venta aborda la presentación de productos dentro del establecimiento comercial como estrategia para fortalecer la promoción de ventas. Analiza elementos como el punto de venta, el <em>merchandising</em>, las técnicas de exhibición, el layout y el <em>visual merchandising</em>, con el propósito de mejorar la experiencia del cliente y estimular la decisión de compra.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.svg',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos del punto de venta y el <em>merchandising</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Establecimiento comercial: concepto y tipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Punto de venta: concepto, tipos y dimensiones',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              '<em>Merchandising</em>: concepto, evolución, tipos, técnicas y aplicabilidad',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Exhibición comercial de productos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Exhibición: concepto, zonas, tipos, niveles, técnicas y usos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Estrategias de exhibición: concepto, tipos y clasificación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Mobiliario comercial: concepto, disposición, usos y clasificación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Organización del espacio comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              '<em>Layout</em> o distribución en planta: concepto, aplicación y función',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Planogramas y planimetría: concepto, beneficios y usos ',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              '<em>Visual merchandising:</em> concepto, tipos y estrategias',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Experiencia y comunicación en el punto de venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Vitrinismo: concepto, tipos e importancia',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              '<em>Marketing</em> sensorial: concepto, tipos, funciones y beneficios',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Teoría del color: concepto y clasificación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Comunicación comercial: concepto, clases, usos y tipos de material promocional',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Gestión, apoyo y control de la exhibición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: '<em>Software</em> de gestión en el punto de venta',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Recursos de apoyo: concepto, tipos y beneficios',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Plan de exhibición: concepto, estructura y etapas',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Herramientas de verificación: concepto, tipos y beneficios',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/621209_CF03_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acceso',
      significado:
        'Punto de entrada o zona de ingreso al establecimiento comercial que facilita la  circulación de los clientes dentro del punto de venta.',
    },
    {
      termino: 'Accesibilidad',
      significado:
        'Condición que permite que diferentes personas puedan desplazarse, comprender la   información y participar en la experiencia de compra de manera segura y cómoda.',
    },
    {
      termino: 'Actividades promocionales',
      significado:
        'Acciones planificadas para incentivar la compra de productos o servicios mediante promociones, campañas, descuentos, demostraciones o recursos de comunicación comercial.     ',
    },
    {
      termino: 'Dimensiones del punto de venta',
      significado:
        'Medidas y proporciones del espacio comercial que influyen en la distribución del  mobiliario, la circulación de los clientes y la capacidad de exhibición de productos.',
    },
    {
      termino: 'Escenografía comercial',
      significado:
        'Diseño del espacio de exhibición mediante iluminación, decoración, color,      ambientación y recursos visuales para destacar productos o campañas comerciales.',
    },
    {
      termino: 'Establecimiento comercial',
      significado:
        'Espacio físico o digital donde una empresa ofrece productos o servicios al consumidor y desarrolla actividades de venta, atención y promoción.',
    },
    {
      termino: 'Estrategias de exhibición',
      significado:
        'Acciones planificadas para presentar productos de forma organizada, funcional y  atractiva dentro del punto de venta.',
    },
    {
      termino: 'Exhibición',
      significado:
        'Forma en que los productos se presentan y organizan dentro del establecimiento   comercial para facilitar su identificación y apoyar la decisión de compra.',
    },
    {
      termino: 'Herramientas de verificación',
      significado:
        'Instrumentos utilizados para revisar, controlar y validar el cumplimiento de      actividades comerciales, como listas de chequeo, formatos, indicadores, auditorías y reportes.',
    },
    {
      termino: 'Imagen del punto de venta',
      significado:
        'Percepción que genera el establecimiento comercial a partir de su organización,  ambientación, señalización, limpieza, diseño y presentación de productos.',
    },
    {
      termino: 'Inventario',
      significado:
        'Registro y control de los productos disponibles en un establecimiento comercial,  incluyendo entradas, salidas, existencias y necesidades de reposición.',
    },
    {
      termino: '<em>Layout</em>',
      significado:
        'Distribución del espacio dentro del punto de venta, incluyendo pasillos, mobiliario, zonas de exhibición, áreas de circulación y puntos de atención.',
    },
    {
      termino: 'Material promocional',
      significado:
        'Recurso físico, digital o audiovisual utilizado para comunicar información comercial, destacar productos, presentar promociones o apoyar campañas en el punto de venta.',
    },
    {
      termino: '<em>Marketing sensorial</em>',
      significado:
        'Estrategia que utiliza estímulos como colores, aromas, sonidos, texturas, iluminación o degustaciones para influir en la experiencia de compra del consumidor.',
    },
    {
      termino: '<em>Merchandising</em>',
      significado:
        'Conjunto de técnicas y estrategias aplicadas en el punto de venta para mejorar la presentación de productos, facilitar su identificación y estimular la compra.',
    },
    {
      termino: 'Mobiliario comercial',
      significado:
        'Conjunto de muebles, estructuras y soportes utilizados para exhibir, organizar,  almacenar o presentar productos dentro del establecimiento.',
    },
    {
      termino: 'Plan de exhibición',
      significado:
        'Documento o propuesta que organiza la ubicación, distribución, presentación,      señalización, recursos de apoyo y seguimiento de los productos en el punto de venta.',
    },
    {
      termino: 'Planograma',
      significado:
        'Representación gráfica que indica la ubicación específica de los productos en    estanterías, góndolas o espacios de exhibición.',
    },
    {
      termino: 'Planimetría',
      significado:
        'Representación gráfica de la distribución general del establecimiento comercial, incluyendo pasillos, mobiliario, zonas de circulación, áreas de exhibición y puntos de      pago.',
    },
    {
      termino: 'Promoción de ventas',
      significado:
        'Estrategia comercial que utiliza incentivos temporales, como descuentos, ofertas o beneficios, para estimular la compra de productos o servicios.',
    },
    {
      termino: 'Punto de venta',
      significado:
        'Lugar físico o digital donde se realiza la interacción comercial entre la empresa y el consumidor, se presentan productos y se concreta la compra.',
    },
    {
      termino: 'Recursos de apoyo',
      significado:
        'Herramientas, materiales, medios o personas que fortalecen la presentación,      comunicación y comercialización de productos o servicios en el punto de venta.',
    },
    {
      termino: 'Reposición',
      significado:
        'Acción de ubicar nuevamente productos en el espacio de exhibición para mantener  disponibilidad, orden y continuidad en la oferta comercial.',
    },
    {
      termino: 'Señalización',
      significado:
        'Conjunto de elementos gráficos, textuales o visuales que orientan al cliente,     comunican información y facilitan la identificación de productos, precios o      promociones.',
    },
    {
      termino: '<em>Software</em> de gestión en el punto de venta',
      significado:
        'Herramienta tecnológica utilizada para registrar ventas, controlar inventarios,  gestionar pagos y generar reportes comerciales.',
    },
    {
      termino: 'Teoría del color',
      significado:
        'Estudio del uso de los colores y su influencia en la percepción, emociones y      decisiones de compra dentro del entorno comercial.',
    },
    {
      termino: '<em>Visual merchandising</em>',
      significado:
        'Estrategia que utiliza recursos visuales como color, iluminación, vitrinas,      composición, señalización y decoración para mejorar la presentación del punto de venta.     ',
    },
    {
      termino: 'Vitrinismo',
      significado:
        'Técnica de exhibición aplicada al diseño y montaje de vitrinas o escaparates para destacar productos, comunicar identidad comercial y motivar el ingreso al      establecimiento.',
    },
    {
      termino: 'Zonas de exhibición',
      significado:
        'Áreas del punto de venta destinadas a ubicar productos según la circulación del  cliente, el propósito comercial y la estrategia de presentación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aaker, D. A. (2014). Construir marcas fuertes. Editorial Gestión 2000.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2017). Fundamentos de marketing (13.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2016). Dirección de marketing (15.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Levy, M., & Weitz, B. A. (2012). Retailing management (8th ed.). McGraw-Hill/Irwin.',
      link: '',
    },
    {
      referencia:
        'Martínez, D. (2017). Merchandising. Fundación Universitaria del Área Andina.',
      link: '',
    },
    {
      referencia:
        'Martínez Cruz, H. (2018). El arte de seducir: merchandising. ECOE Ediciones.',
      link: '',
    },
    {
      referencia:
        'Ríos Quiñónez, M. B. (2024). Análisis del merchandising visual como estrategia de diseño y disposición de productos en farmacias independientes del DMQ. Res Non Verba Revista Científica, 14(1), 1–17.',
      link: '',
    },
    {
      referencia:
        'Rivera Camino, J., Arellano Cueva, R., & Molero Ayala, V. (2013). Conducta del consumidor: estrategias y políticas aplicadas al marketing. ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Sainz de Vicuña, J. M. (2020). El plan de marketing en la práctica (23.ª ed.). ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Solomon, M. R. (2018). Consumer behavior: Buying, having, and being (12th ed.). Pearson.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Alfonso Morales Cabrera',
          cargo: 'Experto Temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico – Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth González Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
