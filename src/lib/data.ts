import { createElement } from "react";
import { FaVuejs, FaLaravel } from "react-icons/fa";
import twoTalkImg from "@@/public/2talk.png";
import portifolioImg from "@@/public/portifolio.png";
import paintImg from "@@/public/paint.png";
import { TProjects } from "./types";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Desenvolvedor Front-End",
    company: "2Talk",
    description:
      "Estou trabalhando com desenvolvdor front-end, desenvolvendo um aplicativo voip e comunicação via chat ou sms, utiizando Vue, TypeScript, VueUse e Boostrap.",
    icon: createElement(FaVuejs),
    date: "01/2022",
  },
  {
    title: "Desenvolvedor Front-End",
    company: "Agrosolos",
    description:
      "Neste projeto foi desenvolvido um aplicativo voltado para agronegócio, utilizando Vue.",
    icon: createElement(FaVuejs),
    date: "08/2021-11/2021",
  },
  {
    title: "Desenvolvedor Full-Stack",
    company: "Bulldesk",
    description:
      "Neste projeto dava manutenção e criação de novas funcionalidades em um CRM  de marketing, utilizando Laravel e Vue.",
    icon: createElement(FaLaravel),
    date: "03/2021-08/2021",
  },
] as const;

export const projectsData: TProjects[] = [
  {
    title: "Portifólio",
    description:
      "Projeto pessoal para apresentar meu portifólio, experiência e conhecimento.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    imageUrl: portifolioImg,
    github: "https://github.com/desdiogo/portifolio"
  },
  {
    title: "2Talk",
    description:
      "Estou trabalhando neste projeto a quase dois anos, o aplicativo tem como foco a comunicação via Voip e a troca de mensagem via chat ou sms.",
    tags: ["Vue", "VueUse", "TypeScript", "Bootstrap", "Pinia"],
    imageUrl: twoTalkImg,
    site: "https://app.2talk.com"
  },
  {
    title: "Paint",
    description:
      "Projeto pessoal de desenho e pintura.",
    tags: ["TypeScript", "HTML", "CSS"],
    imageUrl: paintImg,
    site: "https://desdiogo.com.br/paint",
    github: "https://github.com/desdiogo/paint"
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Vue",
  "Nuxt.js",
  "React",
  "Next.js",
  "Node.js",
  "Nest.js",
  "Php",
  "Laravel",
  "Git",
  "Tailwind",
  "Prisma",
] as const;
