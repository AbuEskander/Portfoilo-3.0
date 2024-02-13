import TodoList from "../assets/TodoListProject.jpeg";
import Calculator from "../assets/Calculator.png";
import PigGame from "../assets/Pig_Game.png";
import CellCall from "../assets/CellCall.png";
import TinDog from "../assets/TindogW.png";
import MyBlog from "../assets/MyBlog.png";
import ReactPorto from "../assets/ReactProject.png";
const MyProjects = [
  {
    id: 2,
    title: "Calculator",
    desc: "Calculator is a simple web application that allows you to do simple calculations. It is built using React.JS and styled using Pure CSS.",
    Image: Calculator,
    link: "https://github.com/AbuEskander/Calculator",
    technologies: ["React.JS"],
  },
  {
    id: 7,
    title: "First Portfolio",
    desc: "My first portfolio is a simple web website to practice React Js and it my first try on using React Js.",
    Image: ReactPorto,
    technologies: ["React.JS", "Node.js", "Express"],
    link: "https://github.com/AbuEskander/ReactP",
  },

  {
    id: 4,
    title: "Cell Call",
    desc: `Cell Call is a Web Application and my first try on Creating a Social media App. It is built using Node.js,ExpressJS and MongoDB in the Back-end
     and EJS mixed with HTML and CSS in the Front-end.`,
    Image: CellCall,
    link: "https://github.com/AbuEskander/CellCall",
    technologies: ["Node.js", "Express", "MongoDB", "EJS"],
  },
  {
    id: 6,
    title: "My Blog",
    desc: "My Blog is a simple web website to practice EJS and Node.js.",
    Image: MyBlog,
    technologies: ["Node.js", "Express", "EJS"],
    link: "https://github.com/AbuEskander/MyBlog",
  },
  {
    id: 1,
    title: "Todo List",
    desc: "Todo List is a simple web application that allows you to add and delete . It is built using Node.js and styled using Bootstrap 5.",
    Image: TodoList,
    link: "https://github.com/AbuEskander/TodoList",
    technologies: ["Node.js", "Express", "MongoDB", "Bootstrap 5"],
  },
  {
    id: 3,
    title: "Pig Game",
    desc: "Pig Game is a simple game that you can play with a friend. It is built using only JavaScript and styled using Pure CSS.",
    Image: PigGame,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "TinDog",
    desc: "TinDog is a simple web website to practice Bootstrap . This was my first project in the web development journey.",
    Image: TinDog,
    technologies: ["Bootstrap 5"],
  },
];

export default MyProjects;
