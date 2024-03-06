import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { PostProps } from "../types/post";
import { FormEvent, useState } from "react";
import { CommentProps } from "../types/comment";

export function Post(props: PostProps) {
  const { id, author, content, publishedAt } = props;
  const [comments, setComments] = useState<CommentProps[]>([]);

  const [newCommentText, setNewCommentText] = useState("");

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

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    const newComment = {
      id: (comments.length + 1).toString(),
      author: {
        avatarUrl: author.avatarUrl,
        name: author.name,
        role: author.role,
      },
      content: newCommentText,
      publishedAt: new Date(publishedAt),
    };
    setComments([...comments, newComment]);
    setNewCommentText("");
  }

  function handleNewCommentChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    event?.target?.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function deleteComment(commentToDelete: string) {
    const commentwithoutDeletedOne = comments.filter((comment) => {
      return comment.id != commentToDelete;
    });
    setComments(commentwithoutDeletedOne);
  }

  const isNewCommentInput = newCommentText.length === 0;

  return (
    <article key={id} className={styles.post}>
      <header>
        <figure className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <figcaption className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </figcaption>
        </figure>

        <time
          title={publishedDateFormattedTitle}
          dateTime={publishedDateFormattedTime}
        >
          Publicado {publishedDateRelativeToNow}
        </time>
      </header>
      <main className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          } else if (line.type === "ref") {
            return (
              <span key={line.content}>
                <a href="#">{line.content} </a>
              </span>
            );
          }
        })}
      </main>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário "
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button
            className={styles.buttonForm}
            type="submit"
            disabled={isNewCommentInput}
          >
            Publicar
          </button>
        </footer>
      </form>
      <section className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              author={comment.author}
              publishedAt={comment.publishedAt}
              content={comment.content}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </section>
    </article>
  );
}
