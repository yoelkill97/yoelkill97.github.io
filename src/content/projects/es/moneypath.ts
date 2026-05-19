import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";
import streakon1 from "../../../assets/images/projects/streakon/streakon-1.webp";
import streakon2 from "../../../assets/images/projects/streakon/streakon-2.webp";
import streakon3 from "../../../assets/images/projects/streakon/streakon-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "MoneyPath AI",
  theme: "dark",
  tags: ["flutter", "dart", "openai"],
  videoBorder: false,
  live: "",
  description:
    "MoneyPath AI es una aplicación móvil inteligente diseñada para registrar y administrar gastos personales mediante integraciones de la API de OpenAI.<br/><br/>Las características clave incluyen la categorización intuitiva de gastos mediante comandos conversacionales, gráficos financieros interactivos construidos con el paquete Fl_chart de Flutter, y una arquitectura limpia MVVM para independizar la presentación de la lógica de negocio.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "Interfaz de chat IA para ingreso de gastos",
        caption: "Interfaz de chat IA para ingreso de gastos",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "Gráficos financieros interactivos",
        caption: "Gráficos financieros interactivos",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon2,
        alt: "Categorización automática de gastos",
        caption: "Categorización automática de gastos",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon3,
        alt: "Panel de sugerencias personalizadas",
        caption: "Panel de sugerencias personalizadas",
      },
    },
  ],
} as const satisfies ProjectContent;
