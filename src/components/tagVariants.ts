export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "kotlin"
  | "android"
  | "compose"
  | "flutter"
  | "dart"
  | "spring"
  | "php"
  | "laravel"
  | "mysql"
  | "openai"
  | "architecture";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  kotlin: "Kotlin",
  android: "Android SDK",
  compose: "Jetpack Compose",
  flutter: "Flutter",
  dart: "Dart",
  spring: "Spring Boot",
  php: "PHP",
  laravel: "Laravel",
  mysql: "MySQL",
  openai: "OpenAI",
  architecture: "Clean Arch",
} as const satisfies Record<TagVariant, string>;
