/* eslint-disable react/prop-types */
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { ThumbsDown, ThumbsUp, Trash } from "phosphor-react";

export function Comment({ comment, deleteComment }) {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  function handleCommentDelete() {
    deleteComment(comment);
  }

  function handleLikeComment() {
    const newLikeCount = likeCount + 1;
    setLikeCount(newLikeCount);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/felipespinassi.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Felipe Augusto Spinassi</strong>
              <time
                title="11 de Junho às 08:13h"
                dateTime="2023-06-14 11:24:55"
              >
                Cerca de 6 meses atrás
              </time>
            </div>
            <button onClick={handleCommentDelete} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>
        <footer>
          <button className={styles.like} onClick={handleLikeComment}>
            <ThumbsUp /> Curtir <span>{likeCount}</span>
          </button>
          <button
            className={styles.dislike}
            onClick={() => setDislikeCount(likeCount + 1)}
          >
            <ThumbsDown />
            Não Curtir <span>{dislikeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
