import videoPokedex from "../../../assets/videos/pokedex.mp4";

import pokedex0 from "../../../assets/images/projects/pokedex/pokedex-0.webp";
import pokedex1 from "../../../assets/images/projects/pokedex/pokedex-1.webp";
import pokedex2 from "../../../assets/images/projects/pokedex/pokedex-2.webp";
import pokedex3 from "../../../assets/images/projects/pokedex/pokedex-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Qunay Mobile UI Library",
  theme: "light",
  tags: ["compose", "flutter", "android"],
  live: "",
  description:
    "Interfaces móviles adaptativas y de alto rendimiento diseñadas e implementadas para QUNAY, siguiendo las especificaciones de Material Design.<br/><br/>Desarrollo de sistemas de componentes reutilizables en Flutter y vistas avanzadas en Jetpack Compose en Android nativo. Refactorización de código heredado en Android nativo para migrarlo a Flutter, mejorando la mantenibilidad general y la consistencia visual.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoPokedex,
        caption: "Demostración de interacción de UI",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex0,
        alt: "Vista principal de componentes",
        caption: "Vista principal de componentes",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex1,
        alt: "Interacciones de búsqueda y filtrado",
        caption: "Interacciones de búsqueda y filtrado",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex2,
        alt: "Adaptabilidad en múltiples pantallas",
        caption: "Adaptabilidad en múltiples pantallas",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex3,
        alt: "Optimización de listas de carga perezosa",
        caption: "Optimización de listas de carga perezosa",
      },
    },
  ],
} as const satisfies ProjectContent;
