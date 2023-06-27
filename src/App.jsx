import { Post } from "./components/Post";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import Sidebar from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      name: "Diego Fernandes",
      avatarUrl: "https://github.com/diego3g.png",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala devs beleza!" },
      {
        type: "paragraph",
        content:
          "Eu estou fazendo um post, para chamar vocês para a próxima Next Level Week que acontecerá nas proximas semanas, fiquem atentos ao horário!",
      },
      { type: "link", content: "diego.design/doctorcare" },
    ],
    publishedAt: new Date("2023-06-11 08:13:27"),
  },
  {
    id: 2,
    author: {
      name: "João Marcos Gonçalves",
      avatarUrl: "https://avatars.githubusercontent.com/u/54587537?v=4",
      role: "Programador Supremo",
    },
    content: [
      { type: "paragraph", content: "Bom diaaaa!" },
      {
        type: "paragraph",
        content: "Caioooooooo, não dê commit na maaaaaiiinnn",
      },
      { type: "link", content: "joao.design/expedy" },
    ],
    publishedAt: new Date("2023-06-12 08:13:27"),
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
