import type { TechnologiesType } from "./technologies.ts";
interface project {
  title: string;
  subtitle: string;
  description: string[];
  img: string;
  video?: string;
  alt: string;
  technologies: TechnologiesType[];
  mobile?: boolean;
  github?: string;
  link?: string;
}
const IMG_PATH = "/assets/";
export const projects: project[] = [
  {
    title: "Sistema de Inventario",
    subtitle: "Fundación Centro Médico Wesley",
    description: [
      "Es un sistema de gestión de inventario médico para las distintas sedes alrededor del país del Centro Médico Wesley.",
      "Éste sistema cumple con la administración de todo tipo de inventario y transacciones entre sedes.",
    ],
    img: IMG_PATH + "inventario_wesley.webp",
    video: IMG_PATH + "inventario_wesley.webm",
    alt: "Work Project Inventario Wesley",
    technologies: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    title: "App de Inventario",
    subtitle: "Aplicación móvil para el manejo de inventario",
    description: [
      "Es una aplicación móvil hecha para mejorar la portabilidad del Sistema de manejo de Inventario de la Fundación Centro Médico Wesley.",
      "En ésta aplicación se le permite al usuario revisar el inventario disponible por cada sede, productos dañados, empleados, donaciones, transferencias, compras y ventas.",
    ],
    github: "https://github.com/ricardojparram/app-inventario-wesley",
    img: IMG_PATH + "app-inventario-wesley.webp",
    video: IMG_PATH + "app-inventario-wesley.webm",
    alt: "Work project App de Inventario",
    technologies: ["Expo", "React", "Jest"],
    mobile: true,
  },
  {
    title: "RJPM.UI",
    subtitle: "Easy-to-Use Tailwind CSS Agnostic Components",
    description: [
      "Es una librería de componentes UI hechos con TailwindCSS.",
      "Se pueden encontrar botones, cards, tipografias y mucho más.",
      "Posee versiones de los componentes tanto para React como Astro.",
    ],
    link: "https://rjpm-ui.vercel.app/",
    github: "https://github.com/ricardojparram/rjpm-ui-components",
    img: IMG_PATH + "rjpm-ui.webp",
    video: IMG_PATH + "rjpm-ui.webm",
    alt: "Personal project rjpm.ui",
    technologies: ["Astro", "React", "Tailwind"],
  },
  {
    title: "Cambio Rápido",
    subtitle: "Conversión del dólar en Venezuela",
    description: [
      "Es una aplicación móvil la cual se encarga de mostrar la conversión actual del dolar en Venezuela.",
      "Posee las tres tasas de cambio principales en el país: BCV, Paralelo y Promedio.",
    ],
    technologies: ["Expo", "React", "GraphQL"],
    link: "https://cambio-rapido.vercel.app//",
    img: IMG_PATH + "cambio-rapido.webp",
    video: IMG_PATH + "cambio-rapido.webm",
    alt: "Personal project Cambio Rápido",
    mobile: true,
  },
  {
    title: "NETEST",
    subtitle: "Check Your Internet Speed in Seconds",
    description: [
      "Es una prueba de velocidad de internet inspirada en la simplicidad de fast.com.",
      "Al igual que tiene la funcionalidad de mostrar tu ip e informacion del ASN.",
    ],
    link: "https://netest-three.vercel.app/",
    github: "https://github.com/ricardojparram/network-test-app",
    img: IMG_PATH + "netest.webp",
    video: IMG_PATH + "netest.webm",
    alt: "Personal project NETEST",
    technologies: ["Astro", "React", "Tailwind"],
  },
  {
    title: "Chat Room",
    subtitle: "A websocket chat easy to host",
    description: [
      'Es un chat hecho utilizando PHP vanilla y la libería de websockets "Rachet".',
      "Tiene autenticación de usuarios para evitar el spam.",
      "La interfaz busca tener un estilo brutalista y animado.",
    ],
    github: "https://github.com/ricardojparram/ChatRoom",
    img: IMG_PATH + "chat-room.webp",
    alt: "Personal project ChatRoom",
    technologies: ["PHP", "MySQL", "CSS", "JQuery"],
  },
];
