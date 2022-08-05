import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.scss";
import styles from "./App.module.scss";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ad, laborum soluta nesciunt provident eius doloremque odit dolorem, modi iste cupiditate veniam inventore velit illum eaque atque commodi pariatur laboriosam!"
          />

          <Post author="Erik" content="Um novo post muito legal" />
        </main>
      </div>
    </div>
  );
}
