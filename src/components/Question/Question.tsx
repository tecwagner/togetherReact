import { ReactNode } from "react";
import cn from "classnames";
import "./question.scss";

type QuestionsProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  isAnswered?: boolean;
  isHighlighted?: boolean;
  children?: ReactNode;
};

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionsProps) {
  return (
    <div
      className={cn(
        "question",
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered}
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}
