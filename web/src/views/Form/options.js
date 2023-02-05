const idiom = [
  { value: "en", label: "Inglês" },
  { value: "es", label: "Espanhol" },
];

const programmingLanguages = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "c", label: "C" },
  { value: "c++", label: "C++" },
  { value: "java", label: "Java" },
  { value: "c#", label: "C#" },
  { value: "php", label: "PHP" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "elixir", label: "Elixir" },
];

const frameworks = [
  { value: "react", label: "React" },
  { value: "react-native", label: "React Native" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
  { value: "flutter", label: "Flutter" },
  { value: "node", label: "Node" },
  { value: "django", label: "Django" },
  { value: "laravel", label: "Laravel" },
  { value: "spring", label: "Spring" },
  { value: "express", label: "Express" },
  { value: "rails", label: "Rails" },
];

const selectFields = [
  {
    title: "Sabe mais algum idioma além do português ?",
    name: "idiom",
    options: idiom,
    placeholder: "Selecione os idiomas que você sabe",
  },
  {
    title: "Linguagens que você já trabalhou ?",
    name: "languages",
    options: programmingLanguages,
    placeholder: "Selecione as linguagens que você sabe",
  },
  {
    title: "Frameworks que você já trabalhou ?",
    name: "frameworks",
    options: frameworks,
    placeholder: "Selecione os frameworks que você sabe",
  },
];

export { idiom, programmingLanguages, frameworks, selectFields };
