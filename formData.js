const FORM_CONFIG = {
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbzb17R_p-c8055YXAjahviaz2VthA1f5TAbhBku6G5kw7qaceWpCbqCoVLvtYkMORcH/exec",  
  whatsappNumber: "34670863944",
  whatsappMessage: "Hola Abigeil, he completado mi Espejo de Verdad SÉA. Me encantaría que charláramos un ratito para conocernos y agendar nuestra sesión de sintonía.",
  waitlistMessage: "Hola Abigeil, he completado mi Espejo de Verdad y me encantaría que me guardases plaza prioritaria sin compromiso para la próxima ronda de SÉA.",
  instagramUrl: "#",

  buttons: {
    defaultNext: "Siguiente",
    intro: "Empezar el viaje 💎",
    userData: "Vamos",
    summary: "Más",
    q8: "Mi Espejo 🪞",
    result: "Vamos",
    pause: "Siguiente",
    restart: "Volver a empezar"
  },

  validationMessages: {
    userData: "Completa tu nombre y correo electrónico para continuar.",
    question: "Selecciona al menos una opción o escribe tu verdad para continuar.",
    truth: "Has abierto “Mi Verdad...”. Escribe tu respuesta para continuar."
  },

  labels: {
    back: "Atrás",
    requiredSymbol: "*",
    name: "Nombre:",
    email: "Correo electrónico:",
    whatsapp: `<em>WhatsApp:</em> <span style="font-weight:400"><em>(opcional, para enviarte un mensajito de bienvenida o por si quieres hablar directamente conmigo...)</em></span>`,
    truthButton: "Mi Verdad...",
    truthPlaceholder: "Escribe aquí tu verdad..."
  },

  introScreen: {
    title: "Exploración SÉA:<br>UN ESPEJO DE TU VERDAD",
    paragraphs: [
      "<em>Esto no es una evaluación ni un diagnóstico.</em><br><strong>Nadie conoce tu camino mejor que tú misma.</strong>",
      "<em>Esto es un espejo.</em><br>Un espacio de 5 minutos para bajar el volumen del ruido mental, respirar y observar el momento que habitas hoy con total amabilidad.",
      "<em>Siéntete en absoluta libertad.</em><br>En cada paso, podrás seleccionar una o varias respuestas, o escribir tus propias palabras si lo que lees no te define del todo.",
      "Al terminar, la pantalla te devolverá tus reflexiones ordenadas para que te observes con perspectiva. Tú misma elegirás qué medicina le vendría mejor a tu vida hoy.<br>Te enviaré un PDF con ideas y recursos prácticos para empezar a integrarla y la oportunidad de que miremos juntas tu momento actual.",
      "Bienvenida 🐚"
    ]
  },

  userDataScreen: {
    title: "Para preparar tu espejo personalizado",
    subtitle: "<em>y que yo pueda enviarte tu PDF con la medicina que elijas al final, cuéntame:</em>"
  },

  summaryScreen: {
    titlePrefix: "Tu Espejo de Verdad está totalmente limpio, ",
    paragraphsBeforeAnswers: [
      "No hay etiquetas para tí aquí, porque <strong>nadie sabe mejor que tú cómo estás viviendo.</strong>",
      "Al leer tus respuestas, has declarado con total honestidad que hoy:"
    ],
    answerLabels: {
      q1: "Tu mente transita un estado de",
      q2: "Ante las decisiones difíciles, sientes que",
      q3: "Tu relación contigo misma se caracteriza por",
      q4: "Tus espacios de autocuidado se sienten como",
      q5: "El malestar que más notas en tu rutina es",
      q6: "Experimenta el silencio de forma",
      q7: "Tu espacio físico te devuelve"
    },
    paragraphsAfterAnswers: [
      "Quédate un instante con esta radiografía.",
      "Respírala sin juzgarte.",
      "No está bien ni mal; es simplemente el <em>clima actual de tu vida.</em> <strong>Es tu punto de partida.</strong>"
    ]
  },

  resultScreen: {
    title: "Has tomado una decisión soberana y has declarado que el anclaje que priorizas convocar hoy es:",
    paragraphs: [
      "En breves momentos recibirás en tu correo electrónico un documento con sugerencias profundas, ideas y recursos prácticos para empezar a integrar esta medicina en tu día a día.",
      "<em>Mientras el documento viaja a tu bandeja de entrada...</em>"
    ],
    results: {
      calma: "CALMA. Para vaciar: Necesito bajar el ritmo de mi cabeza, simplificar mis días y concederme momentos de quietud para volver a escucharme.",
      estructura: "ESTRUCTURA. Para asentar: Necesito aprender a poner límites amables, ordenar mi tiempo y mis prioridades para tener claridad y enfoque en mi día a día.",
      disfrute: "DISFRUTE. Para sentir: Necesito reconectar con el placer, la intuición, apreciar lo que realmente quiero y aprender a vivir a mi propio ritmo, sin culpa.",
      soberania: "SOBERANÍA. Para accionar: Necesito avivar mi fuerza interior, adueñarme de mis elecciones y tomar decisiones firmes y honestas con lo que siento."
    }
  },

  pauseScreen: {
    paragraphs: [
      "<strong><em>Antes de llegar al final de este viaje, hagamos una pequeña pausa aquí.</em></strong>",
      "<strong><em>SÉA es un proceso uno a uno muy íntimo, artesanal y limitado.<br>Para mí es fundamental que sintamos que este es nuestro momento y que estamos completamente en la misma sintonía para caminar juntas.</em></strong>",
      "<strong><em>Las siguientes dos preguntas son para valorar, con total honestidad, si estamos en el punto perfecto para acompañarte...</em></strong>"
    ]
  },

  finalScreens: {
    ideal: {
      titlePrefix: "Tu Espejo y tu Medicina ya están claros, ",
      heading: "SÉA es un acompañamiento uno a uno muy exclusivo.<br>Tras leer tus respuestas, siento que estás en el momento ideal para que caminemos juntas.",
      body: "<em>Me encantaría que me escribas por WhatsApp para que nos conozcamos un poquito más de cerca.</em><br>Si lo sientes, podemos agendar un primer encuentro gratuito (una charla íntima de 15 minutos, sin ningún tipo de compromiso) para sentir si estamos en total sintonía y valorar juntas si este es tu espacio.",
      linkText: "Escribir a Abigeil por WhatsApp 🐚",
      linkType: "whatsapp",
      footer: "Tu PDF personalizado con tu Medicina ya está viajando a tu bandeja de entrada.<br>Deseo que sus rituales e ideas te traigan muchísima luz hoy."
    },

    instagram: {
      titlePrefix: "Gracias de corazón por abrirte en este espejo, ",
      heading: "Tu PDF personalizado con tu Medicina ya está viajando a tu bandeja de entrada. Deseo que sus rituales e ideas te traigan muchísima luz hoy.",
      body: "Aunque sintamos que este no es el momento ideal para iniciar el proceso uno a uno de SÉA, me encantaría que sigamos compartiendo espacio.<br><em>Te espero en mi Instagram para seguir habitando esta calma juntas.</em>",
      linkText: "Ir a Instagram de SÉA 🐚",
      linkType: "instagram",
      footer: ""
    },

    waitlist: {
      titlePrefix: "Honrando tus ritmos y tu momento, ",
      heading: "SÉA es, ante todo, un espacio de respeto absoluto a tus tiempos.<br>Si sientes que ahora no es el momento pero tienes claro que es un viaje en el que quieres comprometerte un poquito más adelante, podemos cuidar tu lugar desde ya.",
      body: "Las plazas para cada edición son muy limitadas.<br>Para que no pierdas tu lugar y pueda guardarte la prioridad de cara a la próxima ronda de SÉA (de forma totalmente gratuita y sin ningún tipo de compromiso), me encantaría que me dejes un mensajito por WhatsApp para dejar tu plaza pre-reservada en la lista de espera preferente.",
      linkText: "Reservar mi plaza preferente sin compromiso 🐚",
      linkType: "waitlist",
      footer: "Tu PDF personalizado con tu Medicina ya está viajando a tu bandeja de entrada.<br>Deseo que sus rituales e ideas te traigan muchísima luz hoy."
    }
  },

  finalLogic: {
    q9A_q10A: "ideal",
    q9A_q10B: "instagram",
    q9B_q10A: "waitlist",
    q9B_q10B: "instagram",
    q9C_q10A: "ideal",
    q9C_q10B: "instagram",
    fallback: "ideal"
  },

  screens: [
    { type: "intro" },
    { type: "userData" },

    {
      type: "question",
      id: "q1",
      multiple: true,
      title: `<strong>1. ¿Cómo te sientes la mayor parte del tiempo en tu día?</strong><br><em>Siente tu estado actual. Puedes marcar varias opciones o matizar tu respuesta en la última casilla.</em>`,
      options: [
        "Noto que mi rutina se mueve a un ritmo muy rápido; tiendo a encadenar una tarea con otra y a veces me cuesta concederme el permiso de parar de forma natural.",
        "Siento que tengo mucha claridad mental sobre lo que me ocurre y lo que necesito, pero a veces me resulta difícil trasladar esa teoría a mis acciones diarias.",
        "Transito mis días en una inercia sutil, cumpliendo con las responsabilidades cotidianas casi de forma mecánica, sin pararme demasiado a decidir el rumbo.",
        "Me cuido y soy consciente de mi camino, pero siento que me vendría bien asentar mis decisiones cotidianas con mayor firmeza y seguridad."
      ]
    },

    {
      type: "question",
      id: "q2",
      multiple: true,
      title: `<strong>2. Si hoy tuvieras que tomar una decisión difícil para priorizarte (poner un límite amable, decir "no", delegar...):</strong><br><em>¿Cómo te relacionas con ese espacio de decisión?</em>`,
      options: [
        "Tiendo a postergar mis necesidades y a sobrecargarme para cuidar de las necesidades o expectativas de los demás, postergando mi propio espacio.",
        "Le doy muchas vueltas en mi cabeza antes de dar el paso; busco el momento ideal analizando pros y contras y al final me cuesta concretar la acción.",
        "A veces permito que las circunstancias o las indicaciones de otras personas marquen el camino, evitando tomar una postura activa por mí misma.",
        "Tomo la decisión, pero me resulta complejo proteger ese límite y sostenerlo en el tiempo frente a las exigencias o la inercia diaria."
      ]
    },

    {
      type: "question",
      id: "q3",
      multiple: true,
      title: `<strong>3. Cuando te miras al espejo o piensas en quién eres hoy, ¿cómo te sientes contigo misma?</strong>`,
      options: [
        "Suelo exigirme bastante para sostener que todo está bajo control y que todo marcha bien, descuidando a veces mi espacio para mostrar vulnerabilidad o cansancio.",
        "Me observo de forma muy analítica, conozco bien mis procesos internos, pero a veces me cuesta aceptar mi imagen y mi momento físico actual con total ternura.",
        "Siento cierta distancia; es como si la forma en que me presento ante el mundo perteneciera más al pasado o a un rol aprendido que a mi yo actual.",
        "Me reconozco y valoro el camino de consciencia que he recorrido, aunque busco ganar más confianza para proyectar mi soberanía con seguridad."
      ]
    },

    {
      type: "question",
      id: "q4",
      multiple: true,
      title: `<strong>4. En tu rutina diaria, ¿cómo experimentas tus momentos de autocuidado?</strong>`,
      options: [
        "A veces se sienten como un pendiente más en mi lista; hago yoga, entreno o me cuido pero con cierta prisa mental y pensando en lo siguiente.",
        "Conozco perfectamente qué hábitos y rutinas me benefician, pero me resulta difícil bajarlas al cuerpo y sostenerlas con disfrute real de cuello para abajo.",
        "Suelen quedar relegados al final; si me queda un espacio libre, tiendo a consumirlo de forma pasiva en redes o atendiendo cosas de casa o de otros.",
        "Intenciono y disfruto mis espacios de bienestar, pero a menudo siento que el entorno o las obligaciones diarias acaban invadiendo ese rincón de calma."
      ]
    },

    {
      type: "question",
      id: "q5",
      multiple: true,
      title: `<strong>5. Si te detienes a observar tu momento actual, ¿cuál es el tipo de malestar o frustración que notas más presente en tu día a día?</strong>`,
      options: [
        "La sensación de ir siempre un paso por delante de mí misma y la dificultad de relajarme de verdad o de sostener la calma en cuanto decido parar.",
        "La frustración de tener la teoría impecable en la cabeza, pero sentir que me falta el impulso físico para llevarlo a la práctica con soltura.",
        "Una inercia apagada, sintiendo que los días pasan idénticos y que me cuesta tomar decisiones reales sobre mi propio bienestar.",
        "Una brecha entre mis procesos de crecimiento interno y cómo se materializan de forma firme y sostenida en mi entorno y mis rutinas."
      ]
    },

    {
      type: "question",
      id: "q6",
      multiple: true,
      title: `<strong>6. ¿Qué experimentas cuando te detienes un momento en absoluto silencio y quietud?</strong> <em>Quédate en silencio 10 segundos ahora mismo. ¿Qué te dice tu cuerpo?</em>`,
      options: [
        "Percibo agitación física (como una prisa eléctrica o tensión acumulada) que me invita a volver a moverme o a buscar algo que hacer.",
        "Noto que vivo muy concentrada en mis pensamientos, costándome registrar con nitidez las sensaciones y necesidades reales de mi cuerpo físico.",
        "Siento un cansancio muy profundo acumulado o pesadez, como si transitara mi rutina flotando y sin pisar la tierra de verdad.",
        "Siento las señales físicas y las tensiones del día a día, y busco aprender a sostenerlas y descifrarlas con mayor amabilidad y consciencia."
      ]
    },

    {
      type: "question",
      id: "q7",
      multiple: true,
      title: `<strong>7. Mira a tu alrededor ahora mismo, en el rincón donde sueles descansar o trabajar en casa. ¿Qué te devuelve ese espacio?</strong>`,
      options: [
        "Cierto ruido visual o acumulación de cosas, lo que me refleja la velocidad y la falta de espacio de calma que a veces llevo dentro.",
        "Un entorno ordenado y funcional, pero que siento un poco frío o rígido, sin esa alma que me invite a recargarme y a ser yo misma.",
        "Un espacio que apenas ha cambiado con los años y que representa a una versión de mí que siento que ya no soy, como un pasado que me pesa.",
        "Un hogar armónico, pero que deseo intencionar activamente como un espacio que sostenga mis procesos y mi evolución diaria."
      ]
    },

    { type: "summary" },
    
    {
      type: "question",
      id: "q8",
      multiple: false,
      noTruth: true,
      title: `Después de observar tu ESPEJO DE VERDAD y sabiendo que solo tú sabes lo que necesitas, <strong><br>8. ¿cuál de estos cuatro anclajes o medicina sientes que quieres priorizar en tu día?</br></strong><br><em>(Selecciona solo una opción)</em>`,
      button: "Mi Espejo 🪞",
      options: [
        "CALMA. Para vaciar: Necesito bajar el ritmo de mi cabeza, simplificar mis días y concederme momentos de quietud para volver a escucharme.",
        "ESTRUCTURA. Para asentar: Necesito aprender a poner límites amables, ordenar mi tiempo y mis prioridades para tener claridad y enfoque en mi día a día.",
        "DISFRUTE. Para sentir: Necesito reconectar con el placer, la intuición, apreciar lo que realmente quiero y aprender a vivir a mi propio ritmo, sin culpa.",
        "SOBERANÍA. Para accionar: Necesito avivar mi fuerza interior, adueñarme de mis elecciones y tomar decisiones firmes y honestas con lo que siento."
      ]
    },

    { type: "result" },
    { type: "pause" },

    {
      type: "question",
      id: "q9",
      multiple: false,
      noTruth: true,
      title: `<strong>9. ¿En qué momento de tu vida te encuentras para iniciar este viaje de transformación interna de 3 meses?</strong>`,
      options: [
        "Estoy lista para priorizarme, comprometerme conmigo misma y dar el paso ahora.",
        "Siento que podría ser mi camino, pero prefiero esperar unos meses.",
        "Solo quería hacer la exploración por curiosidad."
      ]
    },

    {
      type: "question",
      id: "q10",
      multiple: false,
      noTruth: true,
      title: `<strong>10. Para que estemos completamente alineadas desde el principio: el programa 1 a 1 SÉA (ronda de verano con precio especial de 6 sesiones) requiere una inversión de entre 550€ y 650€, según la modalidad de pago.<br>¿Estás en disposición de asumir esta inversión en tí para transitar este proceso?</strong>`,
      options: [
        "Sí, entiendo el valor de mi bienestar y estoy (o estaré más adelante) lista para invertir en mí.",
        "En este momento (o a medio plazo) no puedo asumir un compromiso económico de este tipo."
      ]
    },

    { type: "final" }
  ]
};
