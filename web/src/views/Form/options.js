const idiom = [
  { value: "Inglês", label: "Inglês" },
  { value: "Espanhol", label: "Espanhol" },
  { value: "Francês", label: "Francês" },
  { value: "Alemão", label: "Alemão" },
  { value: "Italiano", label: "Italiano" },
  { value: "Japonês", label: "Japonês" },
  { value: "Chinês", label: "Chinês" },
  { value: "Russo", label: "Russo" },
  { value: "Coreano", label: "Coreano" },
  { value: "Árabe", label: "Árabe" },
  { value: "Hindi", label: "Hindi" },
];

const programmingLanguages = [
  { value: "JavaScript", label: "JavaScript" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "Python", label: "Python" },
  { value: "C", label: "C" },
  { value: "C++", label: "C++" },
  { value: "Java", label: "Java" },
  { value: "C#", label: "C#" },
  { value: "PHP", label: "PHP" },
  { value: "Go", label: "Go" },
  { value: "Rust", label: "Rust" },
  { value: "Elixir", label: "Elixir" },
];

const knowledge = [
  { value: "Iniciante", label: "Iniciante" },
  { value: "Junior", label: "Junior" },
  { value: "Pleno", label: "Pleno" },
  { value: "Senior", label: "Senior" },
];

const selectFields = [
  {
    title: "Sabe mais algum idioma além do português ?",
    name: "idiom",
    options: idiom,
    placeholder: "Selecione os idiomas que você sabe",
  },
  {
    title: "Linguagem de programação favorita ?",
    name: "languages",
    options: programmingLanguages,
    placeholder: "Linguagem de programação favorita",
  },
  // {
  //   title: "Qual seu nível de conhecimento em programação ?",
  //   name: "knowledge",
  //   options: knowledge,
  //   placeholder: " Nível de conhecimento em programação",
  // },
];

export { idiom, programmingLanguages, knowledge, selectFields };
