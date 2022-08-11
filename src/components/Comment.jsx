import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "./Avatar";

import styles from "./Comment.module.scss";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((prevLikeCount) => prevLikeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/erik-ferreira.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Erik Ferreira</strong>

              <time title="11 de Maio ás 08:13" dateTime="2022-08-03 22:54:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
