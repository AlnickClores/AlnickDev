import Cumulus from "../assets/Cumulus.png";
import TodoList from "../assets/TodoList.png";
import Woody from "../assets/Woody.org.png";
import QuoteGenerator from "../assets/QuoteGenerator.png";
import KeyedVigenere from "../assets/KeyedVigenere.png";

export const projects = [
  {
    name: "Keyed Vigenere Cipher",
    image: KeyedVigenere,
    link: "https://vigenereverse.netlify.app/",
    description:
      "A website that encrypts and decrypts messages using the Keyed Vigenère Cipher with a custom key, offering a simple way to secure and decode text.",
    techStack: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Cumulus",
    image: Cumulus,
    link: "https://alnickclores.github.io/Cumulus/",
    description:
      "A web app for monitoring the weather. Using weather API fromOpenWeather.",
    techStack: ["HTML", "CSS", "React", "OpenWeather API"],
  },
  {
    name: "To-Do List",
    image: TodoList,
    link: "https://alnickclores.github.io/todolist-app/",
    description:
      "A web app that helps to boost your productivity by keeping track or managing the tasks you have.",
    techStack: ["HTML", "CSS", "React"],
  },
  {
    name: "Woody.org",
    image: Woody,
    link: "https://alnickclores.github.io/Woody-org_final/WebDev_Defense_/Homepage.html",
    description:
      "The objective of this website is to educate people about self defense and lesses the crime rate in the community.",
    techStack: ["HTML", "CSS", "PHP", "Oracle Database"],
  },
  {
    name: "Quote Generator",
    image: QuoteGenerator,
    link: "https://alnickclores.github.io/QuoteGenerator/year_end_proj/quote.html",
    description:
      "A website that will give you a random motivational quote. The main goal of this website is to motivate people who are struggling with their lives.",
    techStack: ["HTML", "CSS", "Javascript"],
  },
];
