import {
  sablier,
  panier,
  postgresqlname,
  docker,
  python,
  java,
  feijaoada,
  biginformatique,
} from "../assets/images";
import {
  upwork,
  sonelgaz,
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nodejs,
  pricewise,
  react,
  snapgram,
  summiz,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },

  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },

  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: postgresqlname,
    name: "PostgreSQL",
    type: "Database",
  },

  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Devops",
  },
];

export const experiences = [
  {
    title: "Data Science",
    company_name: "Sonelgaz",
    icon: sonelgaz,
    iconBg: "#accbe1",
    date: "Janv 2023 - Juil 2023",
    points: [
      "Collecter, Nettoyer, analyser et interpréter des données de plusieurs années de consommation de gaz en fonction de la température.",
      "Classification des données en utilisant l'algorithme K-means.",
      "Prendre des décisions basées sur les données après traitement des données pour créer des modèles d'apprentissages à l'aide de  Recurrent Neural Network et  Convolutional Neural Network.",
    ],
  },

  {
    title: "Développeur mobile  ",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#b7e4c7",
    date: "Oct 2022 - Mai 2023",
    points: [
      "Conception de l’architecture de l'application en utilisant le modèle MVC (Modèle-Vue-Contrôleur)",
      "Implémentation de la partie front-end avec flutter et back-end de l'application",
      "Réalisation des différents tests unitaires.",
    ],
  },

  {
    title: "Développeur Fullstack",
    company_name: "Big Informatique",
    icon: biginformatique,
    iconBg: "#ffffff",
    date: "Mars 2021 - Juil 2021",
    points: [
      "Développement from scratch côté front et back de l'application.",
      "Développement du module de gestion de stock.",
      "Développement de la gestion de la facturation.",
      "Participation au cérémonie agile scrum.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: threads,
    theme: "btn-back-red",
    name: "Application mobile de rencontres",
    description:
      "J'ai développé une application de rencontres offrant une plateforme interactive, favorisant des connexions authentiques et significatives, le tout avec une interface conviviale et des fonctionnalités innovantes.",
    link: "https://github.com/Mehdiaribi23/oosra",
  },
  {
    iconUrl: panier,
    theme: "btn-back-green",
    name: "Full stack e-commerce",
    description:
      "J'ai développé un site web e-commerce dédié à la mode, offrant une expérience de shopping en ligne fluide, avec une variété de vêtements tendance et des fonctionnalités conviviales pour une expérience d'achat optimale.",
    link: "https://github.com/Mehdiaribi23/E-commerceApp",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-blue",
    name: "Application mobille FoodCalories",
    description:
      "DzFoodCalories, une application Android développée en Java avec TensorFlow Lite, permet aux utilisateurs de prendre des photos d'aliments pour obtenir une classification rapide et des informations nutritionnelles. Conviviale et efficace, elle simplifie la reconnaissance alimentaire.",
    link: "https://github.com/Mehdiaribi23/DzFoodCalories-",
  },
  {
    iconUrl: sablier,
    theme: "btn-back-pink",
    name: "Full Stack Time Manager ",
    description:
      "j'ai conçu une application de gestion du temps dans le cadre d'un projet académique. Cette application offre une solution dédiée à la planification et à la gestion efficace du temps, répondant aux besoins spécifiques de l'environnement académique d'Epitech.",
    link: "https://github.com/Mehdiaribi23/Time-Manager",
  },
];
