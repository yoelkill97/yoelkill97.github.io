import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";
import thumbnailStreakon from "../../../assets/thumbnails/streakon.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "MoneyPath AI",
    slug: "moneypath",
    thumbnail: thumbnailStreakon,
    description: "Aplicación de administración de gastos impulsada por IA",
  },
  {
    title: "Banco Pichincha Móvil",
    slug: "pichincha",
    thumbnail: thumbnailCubeWar,
    description: "Modernización y refuerzo de seguridad en aplicación bancaria",
  },
  {
    title: "Optimización de Logística",
    slug: "logistics",
    thumbnail: thumbnailQuibbo,
    description: "Aplicación de rastreo y optimización de rutas logísticas",
  },
  {
    title: "Sistema de Facturación Electrónica",
    slug: "billing",
    thumbnail: thumbnailSharkie,
    description: "Plataforma de facturación electrónica y sistema empresarial",
  },
  {
    title: "Qunay Mobile UI",
    slug: "qunay",
    thumbnail: thumbnailPokedex,
    description: "Interfaces móviles adaptativas usando Compose y Flutter",
  },
] as const satisfies ProjectPreview[];
