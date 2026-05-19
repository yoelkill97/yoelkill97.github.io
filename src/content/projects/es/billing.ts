import videoSharkie from "../../../assets/videos/sharkie.mp4";

import sharkie0 from "../../../assets/images/projects/sharkie/sharkie-0.webp";
import sharkie1 from "../../../assets/images/projects/sharkie/sharkie-1.webp";
import sharkie2 from "../../../assets/images/projects/sharkie/sharkie-2.webp";
import sharkie3 from "../../../assets/images/projects/sharkie/sharkie-3.webp";
import sharkie4 from "../../../assets/images/projects/sharkie/sharkie-4.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Sistema de Facturación Electrónica",
  theme: "light",
  tags: ["spring", "android", "laravel", "mysql"],
  live: "",
  description:
    "Sistema de facturación electrónica a nivel empresarial y plataforma de geolocalización de flotas desarrollados bajo una arquitectura FullStack.<br/><br/>Diseño y desarrollo de robustas APIs web de backend con Java Spring Boot y PHP Laravel. Construcción de aplicaciones móviles cliente correspondientes mediante Android SDK (patrón MVP), integrando geolocalización de flotas en tiempo real, mapas y pasarelas de pago electrónico.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoSharkie,
        caption: "Demostración del sistema",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie0,
        alt: "Diseño del directorio de facturación de clientes",
        caption: "Diseño del directorio de facturación de clientes",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie1,
        alt: "Pantalla de generación de facturas",
        caption: "Pantalla de generación de facturas",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie2,
        alt: "Mapa en vivo para monitoreo de flotas",
        caption: "Mapa en vivo para monitoreo de flotas",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie3,
        alt: "Panel de transacción exitosa",
        caption: "Panel de transacción exitosa",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie4,
        alt: "Registros de errores del backend y auditoría",
        caption: "Registros de errores del backend y auditoría",
      },
    },
  ],
} as const satisfies ProjectContent;
