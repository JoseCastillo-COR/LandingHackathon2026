# CorTech Quant Hackathon 2026

Landing page oficial del **CorTech Quant Hackathon 2026** — *"Read the Market"*.

Un desafío de predicción estadística de régimen intradía y timing sobre el ETF SPY (S&P 500), dirigido a estudiantes de Maestría y Doctorado.

---

## 🚀 Stack tecnológico

- **React 18** + **TypeScript**
- **Vite**
- **Tailwind CSS**
- **lucide-react** (iconos)
- Sistema de i18n propio (EN / ES)

---

## ✨ Características

- Landing page completa y responsive
- Switch de idioma **EN / ES** (por defecto español)
- Countdown dinámico hacia los deadlines
- Timeline del evento
- Sección de entregables con requisito de **replicabilidad**
- Criterios de evaluación
- Política de uso de IA
- Premios
- Navbar fijo + banner superior
- Diseño dark con gradientes cyan → purple

---

## 📅 Fechas clave

| Fase                    | Fecha              |
|-------------------------|--------------------|
| Convocatoria            | 10 — 14 agosto     |
| Envío del reto          | 15 agosto          |
| Entrega de soluciones   | 20 agosto          |
| Revisión                | 21 agosto          |
| Anuncio de finalistas   | 22 agosto          |
| Final presencial        | 24 — 25 agosto     |

---

## 🏆 Premios (por equipo)

| Lugar | Monto  |
|-------|--------|
| 1º    | $800   |
| 2º    | $600   |
| 3º    | $400   |

---

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <url-del-repo>
cd <nombre-del-proyecto>

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build de producción
npm run build
```

## 📁 Estructura principal

```text
src/
├── App.tsx          # Página principal (landing)
├── i18n.ts          # Traducciones EN / ES
├── index.css        # Estilos globales + Tailwind
└── main.tsx         # Entry point
```

---

## 🔗 Formulario de inscripción

El botón de registro apunta a un Google Form.
```typescript
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdvRM-U50JLekn8px7ntk5R--6BkD4wDZlotra_kncpEjZGoQ/viewform?usp=dialog";
```

---

## 🌐 Idiomas

El sistema de traducciones está en src/i18n.ts.

- Idioma por defecto: español ("es")
- Se puede cambiar con el botón EN / ES del navbar

Para agregar o modificar textos, edita el objeto translations.

---

## 👥 Perfil buscado

Estudiantes activos de Maestría o Doctorado en:

- Estadística
- Matemáticas
- ML / Computer Science
- Física
- Econometría / Finanzas

---

## 📋 Entregables obligatorios

- Código fuente (totalmente reproducible)
- Reporte metodológico
- Logger de uso de IA (prompts + decisiones)
- Lista de librerías y versiones exactas

Las entregas incompletas o no reproducibles serán descalificadas

---

## 🛠️ Personalización rápida

| Qué cambiar              | Dónde                          |
|--------------------------|--------------------------------|
| URL del formulario       | `GOOGLE_FORM_URL` en `App.tsx` |
| Textos / traducciones    | `src/i18n.ts`                  |
| Fechas de deadlines      | Array `deadlines` en `App.tsx` |
| Premios                  | Sección Premios en `App.tsx`   |
| Colores / estilos        | Clases de Tailwind             |

---

## 📧 Contacto
dcisneros@cortechnologies.ai

---

## 📄 Licencia
© 2026 CorTech Labs. Todos los derechos reservados.