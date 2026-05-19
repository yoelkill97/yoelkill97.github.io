import videoQuibbo from "../../../assets/videos/quibbo.mp4";

import quibbo0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";
import quibbo1 from "../../../assets/images/projects/quibbo/quibbo-1.webp";
import quibbo2 from "../../../assets/images/projects/quibbo/quibbo-2.webp";
import quibbo3 from "../../../assets/images/projects/quibbo/quibbo-3.webp";
import quibbo4 from "../../../assets/images/projects/quibbo/quibbo-4.webp";
import quibbo5 from "../../../assets/images/projects/quibbo/quibbo-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Optimización de Logística",
  theme: "light",
  tags: ["kotlin", "android", "architecture"],
  videoBorder: true,
  description:
    "Aplicación de rastreo y optimización de rutas logísticas desarrollada bajo NTT Data para la gestión de operaciones de clientes corporativos.<br/><br/>Construida en Kotlin y Android SDK con componentes de arquitectura modernos. Diseño y desarrollo de nuevos módulos, introducción de corutinas de Kotlin para procesos asíncronos y Koin para inyección de dependencias. Liderazgo de un equipo de 3 desarrolladores y colaboración ágil SCRUM.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoQuibbo,
        caption: "Panel de control del despachador",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo0,
        alt: "Configuración de perfil de conductor y vehículo",
        caption: "Configuración de perfil de conductor y vehículo",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo1,
        alt: "Mapeo de rutas en tiempo real",
        caption: "Mapeo de rutas en tiempo real",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo2,
        alt: "Módulos de programación de tareas",
        caption: "Módulos de programación de tareas",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo3,
        alt: "Estados y variaciones de entrega",
        caption: "Estados y variaciones de entrega",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo4,
        alt: "Diseño para tabletas y móviles",
        caption: "Diseño para tabletas y móviles",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo5,
        alt: "Tema oscuro para turnos nocturnos",
        caption: "Tema oscuro para turnos nocturnos",
      },
    },
  ],
} as const satisfies ProjectContent;
