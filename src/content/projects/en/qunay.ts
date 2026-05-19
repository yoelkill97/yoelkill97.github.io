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
    "Responsive, interactive mobile interfaces designed and implemented for QUNAY, following strict Material Design specifications.<br/><br/>Built reusable custom widget systems in Flutter and advanced Jetpack Compose views in native Android. Refactored pre-existing native Android code to Flutter, improving cross-platform frontend consistency and code maintainability.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoPokedex,
        caption: "UI Interaction Walkthrough",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex0,
        alt: "Default UI View & Components",
        caption: "Default UI View & Components",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex1,
        alt: "Search and Filter Interaction",
        caption: "Search and Filter Interaction",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex2,
        alt: "Responsive Multi-screen Adaptation",
        caption: "Responsive Multi-screen Adaptation",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex3,
        alt: "Lazy-loaded Grid Performance",
        caption: "Lazy-loaded Grid Performance",
      },
    },
  ],
} as const satisfies ProjectContent;
