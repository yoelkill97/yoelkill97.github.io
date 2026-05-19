import videoCubeWar from "../../../assets/videos/cubewar.mp4";

import cubewar0 from "../../../assets/images/projects/cubewar/cubewar-0.webp";
import cubewar1 from "../../../assets/images/projects/cubewar/cubewar-1.webp";
import cubewar2 from "../../../assets/images/projects/cubewar/cubewar-2.webp";
import cubewar3 from "../../../assets/images/projects/cubewar/cubewar-3.webp";
import cubewar4 from "../../../assets/images/projects/cubewar/cubewar-4.webp";
import cubewar5 from "../../../assets/images/projects/cubewar/cubewar-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Banco Pichincha Móvil",
  theme: "dark",
  tags: ["kotlin", "android", "architecture"],
  videoBorder: false,
  live: "",
  description:
    "Refactorización y modernización de la aplicación móvil de Banco Pichincha, migrando el código fuente de Java a Kotlin y reforzando los estándares de seguridad.<br/><br/>Rediseño de flujos de usuario clave como transferencias monetarias y pago de servicios. Implementación de controles de seguridad avanzados como certificate pinning, cifrado de código local e integración de APIs de autenticación segura (DetectID, Appdome, Insolutions).",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoCubeWar,
        caption: "Demostración de la aplicación",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar0,
        alt: "Inicio de sesión seguro y biometría",
        caption: "Inicio de sesión seguro y biometría",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar1,
        alt: "Transferencias y transferencias basadas en contactos",
        caption: "Transferencias y transferencias basadas en contactos",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar2,
        alt: "Pantalla de pago de servicios",
        caption: "Pantalla de pago de servicios",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar3,
        alt: "Diseño responsivo de banca",
        caption: "Diseño responsivo de banca",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar4,
        alt: "Módulo de Alcancía Digital",
        caption: "Módulo de Alcancía Digital",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar5,
        alt: "Auditoría de seguridad y controles de OWASP",
        caption: "Auditoría de seguridad y controles de OWASP",
      },
    },
  ],
} as const satisfies ProjectContent;
