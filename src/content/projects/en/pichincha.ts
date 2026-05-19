import videoCubeWar from "../../../assets/videos/cubewar.mp4";

import cubewar0 from "../../../assets/images/projects/cubewar/cubewar-0.webp";
import cubewar1 from "../../../assets/images/projects/cubewar/cubewar-1.webp";
import cubewar2 from "../../../assets/images/projects/cubewar/cubewar-2.webp";
import cubewar3 from "../../../assets/images/projects/cubewar/cubewar-3.webp";
import cubewar4 from "../../../assets/images/projects/cubewar/cubewar-4.webp";
import cubewar5 from "../../../assets/images/projects/cubewar/cubewar-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Banco Pichincha Mobile",
  theme: "dark",
  tags: ["kotlin", "android", "architecture"],
  videoBorder: false,
  live: "",
  description:
    "Refactoring and modernization of the Android application for Banco Pichincha, migrating the codebase from Java to Kotlin and improving security standards.<br/><br/>Redesigned crucial user flows such as fund transfers and bill payments. Implemented high-level security controls including mobile SSL pinning, code encryption, and integration of secure authentication APIs (DetectID, Appdome, Insolutions).",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoCubeWar,
        caption: "Application Walkthrough",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar0,
        alt: "Secure Login & Biometrics Flow",
        caption: "Secure Login & Biometrics Flow",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar1,
        alt: "Fund Transfers & Contact-Based Pay",
        caption: "Fund Transfers & Contact-Based Pay",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar2,
        alt: "Bill Payments Screen",
        caption: "Bill Payments Screen",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar3,
        alt: "Responsive Banking UI",
        caption: "Responsive Banking UI",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar4,
        alt: "Digital Piggy Bank (Alcancía Digital)",
        caption: "Digital Piggy Bank (Alcancía Digital)",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar5,
        alt: "Security Auditing and Controls",
        caption: "Security Auditing and Controls",
      },
    },
  ],
} as const satisfies ProjectContent;
