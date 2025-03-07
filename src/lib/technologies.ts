import Astro from "../components/icons/Astro.astro";
import PHP from "../components/icons/PHP.astro";
import React from "../components/icons/React.astro";
import Tailwind from "../components/icons/Tailwind.astro";
import MySQL from "../components/icons/MySQL.astro";
import Bootstrap from "../components/icons/Bootstrap.astro";
import GraphQL from "../components/icons/GraphQL.astro";
import Expo from "../components/icons/Expo.astro";
import CSS from "../components/icons/CSS.astro";
import JQuery from "../components/icons/JQuery.astro";
export const Technologies = {
  Tailwind,
  Astro,
  PHP,
  React,
  MySQL,
  Bootstrap,
  Expo,
  GraphQL,
  CSS,
  JQuery,
};
export type TechnologiesType = keyof typeof Technologies;
