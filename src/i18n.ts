export type Lang = "en" | "es";

export const translations = {
  en: {
    // Navbar
    navChallenge: "Challenge",
    navFormat: "Format",
    navEvaluation: "Evaluation",
    navPrizes: "Prizes",
    register: "Register",
    registerHere: "Register here",
    knowChallenge: "Learn about the challenge",

    // Hero
    heroBadge: "CorTech Labs · 2026",
    heroTitle1: "CorTech Quant",
    heroTitle2: "Hackathon 2026",
    heroSubtitle: "“Read the Market”",
    heroDescription:
      "An intradaily regime and timing challenge on the S&P 500 ETF. Identify the predominant volatility regime and the most favorable trading window using high-frequency data.",
    heroNote: "Statistical prediction, not trading",
    callPeriod: "Call for applications: Aug 11 — 17",
    finalDate: "In-person final: Aug 25 - 26 (Managua)",

    // Countdown
    nextDeadline: "NEXT DEADLINE ·",
    days: "Days",
    hours: "Hours",
    min: "Min",
    sec: "Sec",

    // Deadlines labels
    deadlineConvocatoria: "Call for applications",
    deadlineEnvio: "Challenge release",
    deadlineEntrega: "Submission",
    deadlineFinal: "In-person final",
    deadlineConvocatoriaDesc: "CV and research paper reception",
    deadlineEnvioDesc: "Dataset and instructions",
    deadlineEntregaDesc: "Code, report and AI logger",
    deadlineFinalDesc: "The Day D",

    // Challenge section
    challengeEyebrow: "THE CHALLENGE",
    challengeTitle: "Read the market before it opens.",
    challengeDesc:
      "The challenge is not about guessing where the price will go. It is about understanding when and under which regime it will move.",
    challenge01Title: "Favorable window",
    challenge01Text:
      "Predict which intradaily window will be most favorable: overnight move, first hour, midday or last hour.",
    challenge02Title: "Volatility regime",
    challenge02Text:
      "Estimate the probability that the day belongs to a high-volatility regime using only previously available information.",
    spyTitle: "SPY · 1-second bars",
    spyText:
      "You will work with high-frequency data from the SPY ETF. The goal is to anticipate conditional variance and the temporal structure of returns, following the spirit of modern academic literature.",

    // Audience
    audienceEyebrow: "WHO WE'RE LOOKING FOR",
    audienceTitle: "Quantitative talent.",
    audienceDesc:
      "We are looking for students from master's, PhD, or 5th–4th year programs in fields such as Statistics, Mathematics, Physics, Machine Learning, Systems, Computer Science, Econometrics, or related areas.",
    discStats: "Statistics",
    discStatsDesc: "Modeling, inference and calibration.",
    discMath: "Mathematics",
    discMathDesc: "Quantitative foundations and problem structure.",
    discML: "ML / Computer Science",
    discMLDesc: "Predictive models and engineering.",
    discSystems: "Systems / Computer Engineering",
    discSystemsDesc: "Systems design, software engineering and infrastructure.",
    discEcon: "Econometrics / Finance",
    discEconDesc: "Time series and quantitative analysis.",
    discPhysics: "Physics",
    discPhysicsDesc: "Modeling of complex systems and quantitative methods.",

    audienceWarning:
      "Pure economics or public policy profiles will not be accepted. We look for quantitative and analytical skills.",

    // Timeline
    timelineEyebrow: "THE ROAD",
    timelineTitle: "From dataset to the final.",
    timelineDesc:
      "A hybrid format designed to evaluate research, engineering and defense ability.",
    tl1Title: "Call for applications",
    tl1Text: "Reception of CVs and research papers from applicants.",
    tl2Title: "Challenge release",
    tl2Text: "Team formation and delivery of the dataset with instructions. The submitted solution must be fully replicable.",
    tl3Title: "Solution submission",
    tl3Text: "Deadline to upload code, methodological report, AI usage logger and a fully reproducible project.",
    tl4Title: "Review",
    tl4Text: "Evaluation of deliverables by the organizing committee.",
    tl5Title: "Finalists",
    tl5Text: "Top 4 announcement and delivery of the second challenge.",
    tl6Title: "In-person final",
    tl6Text: "Masterclass, Stress tests.",
    tl7Title: "Awards ceremony",
    tl7Text: "Academic defense, presentations and awards ceremony.",

    deliverablesTitle: "Required deliverables",
    deliverables1: "Source code (fully reproducible)",
    deliverables2: "Methodological report",
    deliverables3: "AI usage logger (prompts + decisions)",
    deliverables4: "List of libraries and exact versions",
    replicabilityNote: "The submitted project must be fully replicable. Incomplete or non-reproducible submissions will be disqualified.",

    // Final day
    finalEyebrow: "THE DAY D",
    finalTitle: "The in-person final.",
    finalDesc:
      "The four best teams face conditions designed to reveal the real robustness of their models.",
    featureInfraTitle: "Global infrastructure",
    featureInfraText:
      "SSH access to high-performance virtual machines hosted in Canada, with equalized resources: 30 GB of RAM per team.",
    featureStressTitle: "Trial by fire",
    featureStressText:
      "Live stress test using synthetic data with Antithetic Variables and Block Bootstrap generated by the organizers.",
    featureDefenseTitle: "Academic defense",
    featureDefenseText:
      "Each team will present and defend their approach before a jury specialized in Mathematics, Statistics, ML and Econometrics.",
    featureEnvTitle: "Controlled environment",
    featureEnvText:
      "Maximum capacity of 25 attendees to guarantee concentration, fairness and compliance with local regulations.",

    // Evaluation
    evalEyebrow: "ASSESSMENT",
    evalTitle: "How do you win?",
    evalDesc:
      "No trading strategy is simulated. Scoring is based on predictive quality and statistical robustness.",
    eval1Title: "Window classification",
    eval1Text: "Confusion matrix, precision, F1 and Cohen’s Kappa.",
    eval2Title: "Regime calibration",
    eval2Text: "Brier Score, Log Loss and Expected Calibration Error.",
    eval3Title: "Statistical validity",
    eval3Text: "Performance against naïve baselines.",
    eval4Title: "Data engineering",
    eval4Text: "Robust data cleaning and error handling.",
    eval5Title: "Validation methodology",
    eval5Text: "Purging, Embargo and Walk-Forward without information leakage.",
    eval6Title: "Report and AI usage",
    eval6Text: "Transparency, documentation and methodological judgment.",

    // AI Policy
    aiEyebrow: "AI POLICY",
    aiTitle: "Human talent + intelligent assistance.",
    aiDesc:
      "AI is allowed. What we evaluate is the human judgment behind its use.",
    ai1: "Document thoroughly the generative tools used.",
    ai2: "Include the prompts used and explain how you integrated their suggestions.",
    ai3: "We do not penalize the use of AI; we penalize the lack of judgment.",

    // Teams
    teamEyebrow: "TEAM COMPOSITION",
    teamTitle: "Four disciplines. One team.",
    teamDesc:
      "Teams will be formed randomly to guarantee multidisciplinarity.",
    team1: "1 Statistician",
    team2: "1 Mathematician / Physicist",
    team3: "1 ML / CS Engineer",
    team4: "1 Econometrician / Finance",
    techEyebrow: "TECHNOLOGICAL FREEDOM",
    techTitle: "Use the tools you master.",
    techDesc:
      "Python, R, Julia, C++, Rust or Google Colab. Code must be reproducible and accompanied by the exact list of libraries and versions.",

    // Prizes
    prizesEyebrow: "PRIZES",
    prizesTitle: "Recognition of quantitative effort.",
    prizesDesc: "Prize per team.",
    place1: "1st",
    place2: "2nd",
    place3: "3rd",
    placeLabel: "PLACE",
    firstPrize: "FIRST PRIZE",

    // CTA
    ctaEyebrow: "READY?",
    ctaTitle1: "Read the Market.",
    ctaTitle2: "Prove your model.",
    ctaDesc:
      "Applications are open from August 11 to 17. The in-person final will take place in Managua.",
    ctaButton: "Register for the Hackathon",

    // Footer
    footerTagline: "“Read the Market”",
    footerDesc:
      "A challenge of statistical prediction, robustness and quantitative thinking.",
    contact: "CONTACT",
    location: "Private venue · Managua (address for finalists)",
    copyright: "© 2026 CorTech Labs. All rights reserved.",
  },

  es: {
    // Navbar
    navChallenge: "Desafío",
    navFormat: "Formato",
    navEvaluation: "Evaluación",
    navPrizes: "Premios",
    register: "Inscríbete",
    registerHere: "Inscríbete aquí",
    knowChallenge: "Conocer el desafío",

    // Hero
    heroBadge: "CorTech Labs · 2026",
    heroTitle1: "CorTech Quant",
    heroTitle2: "Hackathon 2026",
    heroSubtitle: "“Read the Market”",
    heroDescription:
      "Un desafío de régimen intradía y timing sobre el ETF del S&P 500. Identifica el régimen de volatilidad predominante y la ventana de negociación más favorable utilizando datos de alta frecuencia.",
    heroNote: "Predicción estadística, no trading",
    callPeriod: "Convocatoria: 11 — 17 agosto",
    finalDate: "Final presencial: 25 - 26 agosto (Managua)",

    // Countdown
    nextDeadline: "PRÓXIMA FECHA LIMÍTE ·",
    days: "Días",
    hours: "Horas",
    min: "Min",
    sec: "Seg",

    // Deadlines labels
    deadlineConvocatoria: "Convocatoria",
    deadlineEnvio: "Envío del reto",
    deadlineEntrega: "Entrega",
    deadlineFinal: "Final presencial",
    deadlineConvocatoriaDesc: "Recepción de CVs y documentos de investigación",
    deadlineEnvioDesc: "Dataset e instrucciones",
    deadlineEntregaDesc: "Código, reporte y logger de IA",
    deadlineFinalDesc: "El día D",

    // Challenge section
    challengeEyebrow: "EL DESAFÍO",
    challengeTitle: "Lee el mercado antes de que abra.",
    challengeDesc:
      "El reto no consiste en adivinar hacia dónde irá el precio. Consiste en entender cuándo y bajo qué régimen se moverá.",
    challenge01Title: "Ventana favorable",
    challenge01Text:
      "Predecir cuál será la ventana intradía más favorable: movimiento nocturno, primera hora, medio día o última hora.",
    challenge02Title: "Régimen de volatilidad",
    challenge02Text:
      "Estimar la probabilidad de que el día pertenezca a un régimen de alta volatilidad utilizando únicamente información disponible previamente.",
    spyTitle: "SPY · Barras de 1 segundo",
    spyText:
      "Trabajarás con datos de alta frecuencia del ETF SPY. El objetivo es anticipar la varianza condicional y la estructura temporal de los retornos, siguiendo el espíritu de la literatura académica moderna.",

    // Audience
    audienceEyebrow: "A QUIÉN BUSCAMOS",
    audienceTitle: "Talento cuantitativo.",
    audienceDesc:
      "Se busca estudiantes de maestría, doctorado o de 5.º–4.º año de carreras como Estadística, Matemáticas, Física, Machine Learning, Sistemas, Computación, Econometría o carreras afines.",
    discStats: "Estadística",
    discStatsDesc: "Modelado, inferencia y calibración.",
    discMath: "Matemáticas",
    discMathDesc: "Fundamentos cuantitativos y estructura del problema.",
    discML: "ML / Computer Science",
    discMLDesc: "Modelos predictivos e ingeniería.",
    discSystems: "Sistemas / Ingeniería en Computación",
    discSystemsDesc: "Ingeniería de software, diseño de sistemas e infraestructura.",
    discEcon: "Econometría / Finanzas",
    discEconDesc: "Series temporales y análisis cuantitativo.",
    discPhysics: "Física",
    discPhysicsDesc: "Modelado de sistemas complejos y métodos cuantitativos.",

    audienceWarning:
      "No se aceptarán perfiles de economía pura o políticas públicas. Buscamos habilidades cuantitativas y analíticas.",

    // Timeline
    timelineEyebrow: "EL RECORRIDO",
    timelineTitle: "Del dataset a la final.",
    timelineDesc:
      "Un formato híbrido diseñado para evaluar investigación, ingeniería y capacidad de defensa.",
    tl1Title: "Convocatoria",
    tl1Text: "Recepción de CVs y papers de investigación de los postulantes.",
    tl2Title: "Envío del reto",
    tl2Text: "Creación de equipos y envío del dataset junto con las instrucciones. El proyecto de la solución entregada debe ser completamente replicable.",
    tl3Title: "Entrega de soluciones",
    tl3Text: "Límite para subir código, reporte metodológico, logger de uso de IA y un proyecto totalmente reproducible.",
    tl4Title: "Revisión",
    tl4Text: "Evaluación de entregables por el comité organizador.",
    tl5Title: "Finalistas",
    tl5Text: "Anuncio del Top 4 y entrega del 2do desafío.",
    tl6Title: "Final presencial",
    tl6Text: "Masterclass, Stress tests.",
    tl7Title: "Ceremonia de premiación",
    tl7Text: "Defensa académica, presentaciones y ceremonia de premiación.",

    deliverablesTitle: "Entregables obligatorios",
    deliverables1: "Código fuente (totalmente reproducible)",
    deliverables2: "Reporte metodológico",
    deliverables3: "Logger de uso de IA (prompts + decisiones)",
    deliverables4: "Lista de librerías y versiones exactas",
    replicabilityNote: "El proyecto entregado debe ser completamente replicable. Las entregas incompletas o no reproducibles serán descalificadas.",

    // Final day
    finalEyebrow: "FINAL",
    finalTitle: "La final presencial.",
    finalDesc:
      "Los cuatro mejores equipos se enfrentan a condiciones diseñadas para revelar la robustez real de sus modelos.",
    featureInfraTitle: "Infraestructura global",
    featureInfraText:
      "Acceso por SSH a máquinas virtuales de alto rendimiento alojadas en Canadá, con recursos igualados: 30 GB de RAM por equipo.",
    featureStressTitle: "Prueba de fuego",
    featureStressText:
      "Stress test en vivo utilizando datos sintéticos con Variables Antitéticas y Block Bootstrap generados por los organizadores.",
    featureDefenseTitle: "Defensa académica",
    featureDefenseText:
      "Cada equipo presentará y defenderá su enfoque ante un jurado especializado en Matemáticas, Estadística, ML y Econometría.",
    featureEnvTitle: "Entorno controlado",
    featureEnvText:
      "Aforo máximo de 25 asistentes para garantizar concentración, equidad y cumplimiento de la normativa local.",

    // Evaluation
    evalEyebrow: "EVALUACIÓN",
    evalTitle: "¿Cómo se gana?",
    evalDesc:
      "No se simula una estrategia de trading. La puntuación se basa en calidad predictiva y robustez estadística.",
    eval1Title: "Clasificación de ventanas",
    eval1Text: "Matriz de confusión, precisión, F1 y Kappa de Cohen.",
    eval2Title: "Calibración del régimen",
    eval2Text: "Brier Score, Log Loss y Error de Calibración Esperado.",
    eval3Title: "Validez estadística",
    eval3Text: "Desempeño frente a líneas base ingenuas.",
    eval4Title: "Ingeniería de datos",
    eval4Text: "Limpieza robusta de datos y manejo de errores.",
    eval5Title: "Metodología de validación",
    eval5Text: "Purging, Embargo y Walk-Forward sin fugas de información.",
    eval6Title: "Reporte y uso de IA",
    eval6Text: "Transparencia, documentación y criterio metodológico.",

    // AI Policy
    aiEyebrow: "POLÍTICA DE IA",
    aiTitle: "Talento humano + asistencia inteligente.",
    aiDesc:
      "La IA está permitida. Lo que evaluamos es el criterio humano detrás de su utilización.",
    ai1: "Documenta exhaustivamente las herramientas generativas utilizadas.",
    ai2: "Incluye los prompts utilizados y explica cómo integraste sus sugerencias.",
    ai3: "No penalizamos el uso de IA; penalizamos la falta de criterio.",

    // Teams
    teamEyebrow: "COMPOSICIÓN DE EQUIPOS",
    teamTitle: "Cuatro disciplinas. Un equipo.",
    teamDesc:
      "Los equipos se formarán aleatoriamente para garantizar la multidisciplinariedad.",
    team1: "1 Estadístico",
    team2: "1 Matemático / Físico",
    team3: "1 Ingeniero de ML / CS",
    team4: "1 Econometrista / Finanzas",
    techEyebrow: "LIBERTAD TECNOLÓGICA",
    techTitle: "Usa las herramientas que dominas.",
    techDesc:
      "Python, R, Julia, C++, Rust o Google Colab. El código debe ser reproducible y acompañado por la lista exacta de librerías y versiones.",

    // Prizes
    prizesEyebrow: "PREMIOS",
    prizesTitle: "Reconocimiento al esfuerzo cuantitativo.",
    prizesDesc: "Premio por equipo.",
    place1: "1er",
    place2: "2do",
    place3: "3er",
    placeLabel: "LUGAR",
    firstPrize: "PRIMER PREMIO",

    // CTA
    ctaEyebrow: "¿LISTO?",
    ctaTitle1: "Lee el mercado.",
    ctaTitle2: "Demuestra tu modelo.",
    ctaDesc:
      "La convocatoria está abierta del 11 al 17 de agosto. La final presencial será en Managua.",
    ctaButton: "Inscribirme al Hackathon",

    // Footer
    footerTagline: "“Read the Market”",
    footerDesc:
      "Un desafío de predicción estadística, robustez y pensamiento cuantitativo.",
    contact: "CONTACTO",
    location: "Salón privado · Managua",
    copyright: "© 2026 CorTech Labs. Todos los derechos reservados.",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;