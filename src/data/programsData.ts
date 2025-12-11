export interface Program {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  imagePosition?: string;
  gallery: string[];
  specialImage?: {
    url: string;
    caption: string;
  };
}

export const programs: Program[] = [
  {
    id: "recreacion-deporte",
    title: "Recreación y Deporte",
    category: "Recreación",
    description: "Promovemos hábitos saludables, trabajo en equipo y convivencia comunitaria a través de actividades deportivas, recreativas y creativas.",
    fullDescription: "Promovemos hábitos saludables, trabajo en equipo y convivencia comunitaria a través de actividades deportivas, recreativas y creativas. Niños, jóvenes y adultos participan en torneos de fútbol, básquetbol, juegos tradicionales y actividades al aire libre en Los Jarros y Clara Córdova. Además, desarrollamos talleres de manualidades, dibujo, pintura y arte donde los participantes expresan su creatividad y descubren nuevos talentos. Nuestro club de ajedrez ha sido una herramienta fundamental para desarrollar el pensamiento estratégico, la concentración y la toma de decisiones en los niños y jóvenes, ayudándoles a mejorar su rendimiento escolar y a enfrentar los desafíos diarios con mayor claridad mental. Estas actividades no solo mejoran su condición física y habilidades artísticas, sino que les brindan un espacio seguro para alejarse de riesgos como la violencia y las adicciones. Organizamos eventos recreativos donde las familias se unen, fortaleciendo lazos comunitarios y fomentando valores como el respeto, la disciplina y el compañerismo. El deporte, el arte, el ajedrez y la recreación son nuestras herramientas para construir una comunidad más sana, creativa y unida.",
    image: "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763426047/WhatsApp_Image_2025-11-17_at_6.27.06_PM_1_rvqq4n.jpg",
    imagePosition: "center 30%",
    gallery: [
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797128/WhatsApp_Image_2025-11-20_at_12.13.40_PM_tewqxv.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797125/WhatsApp_Image_2025-11-20_at_12.29.43_PM_ygihbw.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797029/WhatsApp_Image_2025-11-20_at_12.09.09_PM_1_sndozx.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797022/WhatsApp_Image_2025-11-20_at_12.09.11_PM_k094gf.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763450714/recreacion_y_deporte_foto_uddhoh.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763426047/WhatsApp_Image_2025-11-17_at_6.29.25_PM_hwcn1f.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763426047/WhatsApp_Image_2025-11-17_at_6.28.12_PM_bmiysy.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763026694/WhatsApp_Image_2025-11-13_at_2.50.04_AM_2_elr67t.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763426047/WhatsApp_Image_2025-11-17_at_6.27.06_PM_1_rvqq4n.jpg"
    ]
  },
  {
    id: "fisioterapia",
    title: "Fisioterapia",
    category: "Salud",
    description: "Brindamos servicios de fisioterapia para atender lesiones, mejorar la movilidad y prevenir problemas físicos.",
    fullDescription: "Brindamos servicios de fisioterapia para atender lesiones, mejorar la movilidad y prevenir problemas físicos en niños y adultos de la comunidad. Nuestro equipo trabaja casos de rehabilitación por accidentes, dolores crónicos y problemas posturales que afectan la calidad de vida de las familias. Muchas personas en las comunidades que atendemos no tienen acceso a estos servicios por falta de recursos o lejanía de centros de salud. A través de sesiones personalizadas, terapias físicas y brigadas médicas, ayudamos a recuperar la funcionalidad del cuerpo y a prevenir complicaciones futuras, permitiendo que cada persona pueda trabajar, estudiar y vivir sin limitaciones físicas.",
    image: "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763426047/WhatsApp_Image_2025-11-17_at_6.27.06_PM_qn8ree.jpg",
    gallery: [
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797095/WhatsApp_Image_2025-11-20_at_12.17.51_PM_3_rhid7l.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797091/WhatsApp_Image_2025-11-20_at_12.15.29_PM_tikdof.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797079/WhatsApp_Image_2025-11-20_at_12.14.47_PM_3_s7vgjb.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797072/WhatsApp_Image_2025-11-20_at_12.14.46_PM_2_hpcmf1.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797014/WhatsApp_Image_2025-11-20_at_12.11.11_PM_1_lmsltd.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763426047/WhatsApp_Image_2025-11-17_at_6.27.06_PM_qn8ree.jpg"
    ]
  },
  {
    id: "nutricion",
    title: "Nutrición",
    category: "Salud",
    description: "Ofrecemos talleres de nutrición donde enseñamos a las familias a preparar comidas balanceadas.",
    fullDescription: "La buena alimentación es fundamental para el desarrollo integral. Ofrecemos talleres de nutrición donde enseñamos a las familias a preparar comidas balanceadas con los recursos disponibles en su comunidad. Trabajamos con madres de familia para que aprendan a identificar alimentos nutritivos, planificar menús semanales y aprovechar al máximo cada ingrediente. También realizamos brigadas de salud donde evaluamos el estado nutricional de niños y adultos, detectando casos de desnutrición o sobrepeso. Nuestro objetivo es que cada familia tenga acceso a información práctica que les permita cuidar su salud desde la cocina, previniendo enfermedades y mejorando su calidad de vida.",
    image: "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797034/WhatsApp_Image_2025-11-20_at_12.09.07_PM_1_qwgowa.jpg",
    gallery: [
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797107/WhatsApp_Image_2025-11-20_at_12.17.54_PM_o0jtme.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797105/WhatsApp_Image_2025-11-20_at_12.17.52_PM_n64cra.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797036/WhatsApp_Image_2025-11-20_at_12.09.06_PM_ckkcuw.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797034/WhatsApp_Image_2025-11-20_at_12.09.07_PM_1_qwgowa.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797027/WhatsApp_Image_2025-11-20_at_12.09.09_PM_qdekhw.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763450297/WhatsApp_Image_2025-11-18_at_1.17.53_AM_r1wphp.jpg"
    ]
  },
  {
    id: "gastronomia",
    title: "Gastronomía",
    category: "Capacitación",
    description: "Jóvenes y adultos aprenden técnicas culinarias que se convierten en oportunidades de empleo y emprendimiento.",
    fullDescription: "En nuestros talleres de gastronomía, jóvenes y adultos aprenden técnicas culinarias que se convierten en oportunidades de empleo y emprendimiento. Enseñamos desde preparación de alimentos básicos hasta repostería, panadería y creación de productos artesanales. Este programa forma parte de nuestro proyecto \"Las Delicias de Jarros\", donde elaboramos salsas, mermeladas, postres y conservas utilizando productos del campo local como chiles y peras. Los participantes desarrollan habilidades que pueden convertir en un negocio propio o en ingresos adicionales para sus familias. Más que cocinar, estamos construyendo autonomía económica y dignidad laboral que transforma la vida de familias completas.",
    image: "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797024/WhatsApp_Image_2025-11-20_at_12.09.10_PM_rjhnkh.jpg",
    gallery: [
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1765244187/WhatsApp_Image_2025-11-20_at_12.29.41_PM_durxmx.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797120/WhatsApp_Image_2025-11-20_at_12.29.42_PM_1_myf3zq.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797118/WhatsApp_Image_2025-11-20_at_12.29.42_PM_2_lklwdl.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797116/WhatsApp_Image_2025-11-20_at_12.29.42_PM_3_kuyq9q.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797114/WhatsApp_Image_2025-11-20_at_12.17.57_PM_gk8bu3.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797111/WhatsApp_Image_2025-11-20_at_12.17.57_PM_1_r6ouni.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797024/WhatsApp_Image_2025-11-20_at_12.09.10_PM_rjhnkh.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797020/WhatsApp_Image_2025-11-20_at_12.11.10_PM_drdjsa.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797017/WhatsApp_Image_2025-11-20_at_12.11.11_PM_2_ur9nd6.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763026694/WhatsApp_Image_2025-11-13_at_2.50.04_AM_1_r2fbml.jpg"
    ]
  },
  {
    id: "proyecto-productivo",
    title: "Proyecto Productivo",
    category: "Sustentabilidad",
    description: "Transformamos un terreno sin uso en un huerto comunitario que alimenta familias y enseña sustentabilidad.",
    fullDescription: "En la comunidad de Los Jarros, transformamos un terreno sin uso en un huerto comunitario que hoy alimenta familias y enseña sustentabilidad. Jóvenes, adultos y niños aprenden técnicas de siembra, cuidado de cultivos, cosecha y aprovechamiento de recursos naturales. Cultivamos verduras, hortalizas y hierbas aromáticas que las familias llevan a sus hogares, reduciendo sus gastos en alimentos y mejorando su nutrición. Este proyecto no solo provee comida fresca y saludable, sino que enseña el valor del trabajo colectivo, la paciencia y el cuidado del medio ambiente. Algunos miembros de la comunidad han comenzado a vender sus excedentes en mercados locales, generando ingresos extras. De la tierra árida surgió abundancia; de las manos vacías, nacieron semillas de esperanza y autosuficiencia.",
    image: "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797057/WhatsApp_Image_2025-11-20_at_12.13.44_PM_1_jf1ua9.jpg",
  specialImage: {
      url: "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797081/WhatsApp_Image_2025-11-20_at_12.14.47_PM_2_yx68se.jpg",
      caption: "Ingeniero Agrónomo Ubaldo Velásquez Esquivel - Asesor del proyecto"
    },
    gallery: [
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797109/WhatsApp_Image_2025-11-20_at_12.17.56_PM_1_rths4k.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797102/WhatsApp_Image_2025-11-20_at_12.17.51_PM_swoyuk.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797100/WhatsApp_Image_2025-11-20_at_12.17.51_PM_1_vavjxs.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797097/WhatsApp_Image_2025-11-20_at_12.17.51_PM_2_iwtuqx.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797088/WhatsApp_Image_2025-11-20_at_12.14.49_PM_wixn5b.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797084/WhatsApp_Image_2025-11-20_at_12.14.47_PM_1_ujhpca.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797075/WhatsApp_Image_2025-11-20_at_12.14.46_PM_1_cgdiou.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797068/WhatsApp_Image_2025-11-20_at_12.14.44_PM_1_zwyok1.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797061/WhatsApp_Image_2025-11-20_at_12.13.45_PM_ilklzx.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797064/WhatsApp_Image_2025-11-20_at_12.14.44_PM_2_autojt.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797057/WhatsApp_Image_2025-11-20_at_12.13.44_PM_1_jf1ua9.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797040/WhatsApp_Image_2025-11-20_at_12.08.32_PM_zds535.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797031/WhatsApp_Image_2025-11-20_at_12.09.07_PM_lxz7no.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763026693/WhatsApp_Image_2025-11-13_at_2.50.05_AM_3_jgdgm8.jpg"
    ]
  },
  {
    id: "apoyo-familias",
    title: "Apoyo a Familias",
    category: "Familia",
    description: "Brindamos acompañamiento integral que incluye orientación psicológica, asesoría y entrega de despensas.",
    fullDescription: "Entendemos que para transformar la vida de un niño, necesitamos fortalecer a toda su familia. Por eso brindamos acompañamiento integral que incluye orientación psicológica, asesoría en trámites, entrega de despensas, ropa y útiles escolares. Realizamos visitas domiciliarias para conocer las necesidades reales de cada hogar y diseñar estrategias personalizadas de apoyo. Organizamos eventos especiales como Día de Reyes (donde atendemos hasta 500 personas), Día del Niño, brigadas médicas y entrega de útiles escolares. También gestionamos becas educativas para que niños y jóvenes continúen sus estudios a pesar de las carencias económicas. Atendemos a 150 familias de forma permanente en Los Jarros y Clara Córdova. Nuestro compromiso es estar presentes en los momentos difíciles y celebrar juntos cada logro.",
    image: "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797093/WhatsApp_Image_2025-11-20_at_12.15.31_PM_fueggu.jpg",
    gallery: [
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797093/WhatsApp_Image_2025-11-20_at_12.15.31_PM_fueggu.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1764060586/atencion_familias_wmvjjk.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797045/WhatsApp_Image_2025-11-20_at_12.05.38_PM_1_q5urw2.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763452464/se%C3%B1ora_en_la_cocina_wqbw9m.png",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763427013/Captura_de_pantalla_2025-11-17_184915_u4qvf4.png",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763797049/WhatsApp_Image_2025-11-20_at_12.05.38_PM_3_ggxohk.jpg",
      "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763026694/WhatsApp_Image_2025-11-13_at_2.50.05_AM_or368k.jpg"
    ]
  }
];
