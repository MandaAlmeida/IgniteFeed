import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { CommentProps } from "../types/comment";
import { useState } from "react";

interface CommentsProps extends CommentProps {
  onDeleteComment: (comment: string) => void;
}

export function Comment(props: CommentsProps) {
  const { id, author, publishedAt, content, onDeleteComment } = props;
  const [numberLike, setNumberLike] = useState(0);

  const publishedDateFormattedTitle = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateFormattedTime = format(publishedAt, "dd-MM-yyyy HH:mm:ss");

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleAddNewLike() {
    setNumberLike(numberLike + 1);
  }

  function handleDeleteComment() {
    onDeleteComment(id);
    console.log(id);
  }

  return (
    <section key={id} className={styles.comment}>
      <Avatar hasBorder={false} src={author.avatarUrl} />

      <div className={styles.commentBox}>
        <section className={styles.commentContent}>
          <header>
            <section className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time
                title={publishedDateFormattedTitle}
                dateTime={publishedDateFormattedTime}
              >
                {publishedDateRelativeToNow}
              </time>
            </section>
            <button
              onClick={handleDeleteComment}
              className={styles.buttonDelete}
              title="Deletar comentário"
            >
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </section>
        <footer>
          <button
            onClick={handleAddNewLike}
            className={styles.buttonLike}
            title="Curtir comentário"
          >
            <ThumbsUp size={20} />
            Aplaudir <span>{numberLike}</span>
          </button>
        </footer>
      </div>
    </section>
  );
}
