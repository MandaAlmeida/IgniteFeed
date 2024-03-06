import { Header } from "./components/Header";
import styles from "./App.module.css";
import { SiderBar } from "./components/Siderbar";
import { PostProps } from "./@types/post";
import { Post } from "./components/Post";

const posts: PostProps[] = [
  {
    id: "1",
    author: {
      avatarUrl: "https://github.com/Mandaalmeida.png",
      name: "Amanda Almeida",
      role: "Dev Front-End",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
      { type: "ref", content: "#novoprojeto" },
      { type: "ref", content: "#nlw" },
      { type: "ref", content: "#rocketseat" },
    ],
    publishedAt: new Date("2024-03-01 09:00:00"),
  },
  {
    id: "2",
    author: {
      avatarUrl: "https://github.com/Mandaalmeida.png",
      name: "Amanda Almeida",
      role: "Dev Front-End",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
      { type: "ref", content: "#novoprojeto" },
      { type: "ref", content: "#nlw" },
      { type: "ref", content: "#rocketseat" },
    ],
    publishedAt: new Date("2024-03-01 09:00:00"),
  },
];
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SiderBar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
