import videoQuibbo from "../../../assets/videos/quibbo.mp4";

import quibbo0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";
import quibbo1 from "../../../assets/images/projects/quibbo/quibbo-1.webp";
import quibbo2 from "../../../assets/images/projects/quibbo/quibbo-2.webp";
import quibbo3 from "../../../assets/images/projects/quibbo/quibbo-3.webp";
import quibbo4 from "../../../assets/images/projects/quibbo/quibbo-4.webp";
import quibbo5 from "../../../assets/images/projects/quibbo/quibbo-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Logistics Optimization App",
  theme: "light",
  tags: ["kotlin", "android", "architecture"],
  videoBorder: true,
  description:
    "Logistics tracking and routing optimization app developed under NTT Data for complex enterprise client operations.<br/><br/>Built using Kotlin and Android SDK with modern architectural components. Designed and developed custom modules, introduced Kotlin Coroutines for asynchronous work, and leveraged Koin for dependency injection. Collaborated in a SCRUM team, reviewing pull requests and managing a sub-team of developers.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoQuibbo,
        caption: "Dispatcher Dashboard",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo0,
        alt: "Driver Profile & Vehicle Config",
        caption: "Driver Profile & Vehicle Config",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo1,
        alt: "Real-time Route Mapping",
        caption: "Real-time Route Mapping",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo2,
        alt: "Task Scheduling Modules",
        caption: "Task Scheduling Modules",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo3,
        alt: "Delivery Status Variations",
        caption: "Delivery Status Variations",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo4,
        alt: "Tablet and Mobile Layouts",
        caption: "Tablet and Mobile Layouts",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo5,
        alt: "Dark Theme for Night Shifts",
        caption: "Dark Theme for Night Shifts",
      },
    },
  ],
} as const satisfies ProjectContent;
