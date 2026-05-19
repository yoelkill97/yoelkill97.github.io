import videoSharkie from "../../../assets/videos/sharkie.mp4";

import sharkie0 from "../../../assets/images/projects/sharkie/sharkie-0.webp";
import sharkie1 from "../../../assets/images/projects/sharkie/sharkie-1.webp";
import sharkie2 from "../../../assets/images/projects/sharkie/sharkie-2.webp";
import sharkie3 from "../../../assets/images/projects/sharkie/sharkie-3.webp";
import sharkie4 from "../../../assets/images/projects/sharkie/sharkie-4.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Electronic Billing Platform",
  theme: "light",
  tags: ["spring", "android", "laravel", "mysql"],
  live: "",
  description:
    "An enterprise-level electronic billing system and fleet tracking platform developed using a FullStack architecture.<br/><br/>Designed and implemented robust backend web APIs with Java Spring Boot and PHP Laravel. Built corresponding mobile applications for dispatchers using Android SDK (MVP pattern), integrating third-party APIs for geolocalized vehicle tracking, map routing, and electronic payment gateways.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoSharkie,
        caption: "System Demo",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie0,
        alt: "Client Billing Directory Layout",
        caption: "Client Billing Directory Layout",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie1,
        alt: "Invoice Generation Screen",
        caption: "Invoice Generation Screen",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie2,
        alt: "Fleet Tracking Live Maps",
        caption: "Fleet Tracking Live Maps",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie3,
        alt: "Successful Transaction Panel",
        caption: "Successful Transaction Panel",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie4,
        alt: "Backend Error Logs & Auditing",
        caption: "Backend Error Logs & Auditing",
      },
    },
  ],
} as const satisfies ProjectContent;
