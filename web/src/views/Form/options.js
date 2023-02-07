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

const selectFields = [
  {
    title: "Sabe mais algum idioma além do português ?",
    name: "idiom",
    options: idiom,
    placeholder: "Selecione os idiomas que você sabe",
  },
  {
    title: "Linguagens favoritas de programação ?",
    name: "languages",
    options: programmingLanguages,
    placeholder: "Linguagens favoritas de programação",
  },
];

export { idiom, programmingLanguages, selectFields };
