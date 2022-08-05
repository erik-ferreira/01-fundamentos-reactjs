import { ThumbsUp, Trash } from "phosphor-react";

import styles from "./Comment.module.scss";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/erik-ferreira.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Erik Ferreira</strong>

              <time title="11 de Maio ás 08:13" dateTime="2022-08-03 22:54:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
