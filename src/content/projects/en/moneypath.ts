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
    "MoneyPath AI is a smart mobile application designed to track and manage personal expenses using OpenAI API integrations.<br/><br/>Key features include intuitive expense categorization from conversational inputs, interactive charts built with Flutter's Fl_chart package, and clean MVVM architecture to separate UI layout from business logic layers.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "AI Chat Interface for Expense Input",
        caption: "AI Chat Interface for Expense Input",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "Interactive Financial Graphs",
        caption: "Interactive Financial Graphs",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon2,
        alt: "Expense Categorization",
        caption: "Expense Categorization",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon3,
        alt: "Personalized Insights Panel",
        caption: "Personalized Insights Panel",
      },
    },
  ],
} as const satisfies ProjectContent;
