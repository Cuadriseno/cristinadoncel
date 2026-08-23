# Cristina Doncel — Sitio web oficial

Sitio web profesional de **Cristina Doncel**, calígrafa artesanal afincada en Málaga. La web presenta sus servicios de caligrafía para marcas y agencias, bodas y eventos, y formación, con el objetivo de transmitir la identidad de marca y facilitar el contacto con clientes potenciales.

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Lenguaje | TypeScript 5 |
| Estilos | Tailwind CSS 4 |
| Animaciones | Framer Motion 13 |
| Componentes UI | Radix UI (NavigationMenu, Dialog, Accordion, Tooltip) |
| Fuentes | Google Fonts via `next/font` — Marcellus, Ms Madi, Noto Sans |
| Email de contacto | [Resend](https://resend.com) |
| Suscripción newsletter | MailerLite |
| Validación | Zod |
| Markdown | marked |
| Despliegue | Vercel |

---

## Instalación y ejecución

**Requisitos previos:** Node.js ≥ 18 y npm.

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/cristinadoncel.git
cd cristinadoncel

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con las claves de Resend y MailerLite

# 4. Arrancar el servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

### Otros comandos

```bash
npm run build        # Compilación de producción
npm run start        # Servidor de producción (requiere build previo)
npm run lint         # Linting con ESLint
npm run typecheck    # Comprobación de tipos sin emitir archivos
npm run format       # Formatear código con Prettier
```

---

## Estructura del proyecto

```
src/
├── app/                    # Rutas y páginas (Next.js App Router)
│   ├── layout.tsx          # Layout raíz: fuentes, Navbar, Footer, CookieBanner
│   ├── page.tsx            # Página de inicio
│   ├── globals.css         # Variables de color, tokens de diseño, estilos globales
│   ├── robots.ts           # Generación dinámica de robots.txt
│   ├── sitemap.ts          # Generación dinámica del sitemap
│   ├── api/
│   │   ├── contact/        # Endpoint POST para el formulario de contacto (Resend)
│   │   └── subscribe/      # Endpoint POST para suscripción a newsletter (MailerLite)
│   ├── sobre-mi/
│   ├── marcas-y-agencias/
│   ├── bodas-y-eventos/
│   ├── branding/
│   └── [páginas legales]/  # Aviso legal, privacidad, cookies, términos, devoluciones
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navegación principal con dropdown (Radix NavigationMenu)
│   │   └── Footer.tsx      # Pie de página con enlaces legales y redes sociales
│   ├── sections/           # Secciones reutilizables de la homepage
│   │   ├── Hero.tsx        # Hero full-width con imagen de fondo y overlay
│   │   ├── Services.tsx    # Tres tarjetas de servicio
│   │   ├── ClientLogos.tsx # Logos de marcas clientes + banner de portfolio
│   │   ├── HowIWork.tsx    # Sección "Cómo trabajo" en layout de 3 columnas
│   │   ├── ContactCTA.tsx  # Llamada a la acción de contacto
│   │   └── Reveal.tsx      # Wrapper de animación de entrada con Framer Motion
│   ├── legal/
│   │   └── LegalPage.tsx   # Renderizador de contenido legal en Markdown
│   ├── ContactForm.tsx     # Formulario de contacto con validación y hCaptcha
│   ├── NewsletterForm.tsx  # Formulario de suscripción al newsletter
│   ├── CookieBanner.tsx    # Banner de consentimiento de cookies
│   └── JsonLd.tsx          # Structured data (Schema.org) para SEO
│
├── content/                # Toda la copia y datos del sitio, separados del código
│   ├── pages/              # Textos por página (home, sobre-mi, servicios…)
│   ├── portfolio.ts        # Referencias a imágenes del portfolio
│   ├── services.ts         # Datos de las tarjetas de servicio
│   ├── clients.ts          # Logos y datos de clientes
│   └── legal/              # Contenido legal en archivos Markdown
│
├── lib/
│   └── metadata.ts         # Helper para generar metadatos SEO por página
│
public/
└── images/
    ├── brand/              # Logotipos e identidad visual
    ├── portfolio/          # Imágenes de trabajos
    └── clients/            # Logos de marcas clientes
```

La separación entre `content/` y `components/` permite actualizar textos e imágenes sin tocar la lógica de presentación.

---

## Funcionalidades

- **SEO on-page**: metadatos dinámicos por página, Open Graph, sitemap y robots.txt generados en tiempo de build.
- **Structured data**: JSON-LD (Schema.org `LocalBusiness`) para posicionamiento local.
- **Formulario de contacto**: envío de email mediante Resend con validación Zod y protección anti-spam con hCaptcha.
- **Newsletter**: suscripción integrada con MailerLite directamente desde la web.
- **Cookie banner**: gestión de consentimiento compatible con RGPD, con lógica persistida en `localStorage`.
- **Animaciones de entrada**: componente `Reveal` basado en Framer Motion con `IntersectionObserver` para animar secciones al hacer scroll.
- **Navbar responsiva**: menú de escritorio con dropdown accesible (Radix NavigationMenu) y menú móvil animado.
- **Páginas legales en Markdown**: el contenido legal se almacena en archivos `.md` y se renderiza con `marked`, facilitando su actualización sin tocar código.
- **Optimización de imágenes**: todas las imágenes usan `next/image` con `sizes` correctos para servir el formato y tamaño óptimos según el dispositivo.

---

## Login

No es necesario un login en esta web ya que es una web estática. MailerLite se manejará en un principio desde su propia web, y aún no hay pensamiento de migrar las funcionalidades de pago en la web - ya que puede que no se siga usando en un futuro.

---

## Presentación

https://docs.google.com/presentation/d/1mRSdQzSHu7F5Cma9_x6y1yuUHFTR1C_oBPDkTgnDhco/edit?usp=sharing

---

## Vídeo

https://www.loom.com/share/c26579cb207a42a596731f58882d9f4d

## Site url

https://cristinadoncel.vercel.app/