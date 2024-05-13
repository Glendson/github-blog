import Markdown from "react-markdown";
import { dateFormatter } from "../../../../utils/formatter";
import { PostCardContainer, PostCardContent, PostCardHeader } from "./styles";

interface PostCardProps {
  body: string;
  date: string;
  title: string;
  number: number;
}

export function PostCard({ body, date, title, number }: PostCardProps) {
  return (
    <PostCardContainer to={`/post/${number}`}>
      <PostCardHeader>
        <h2>{title}</h2>

        <span>{`Há ${dateFormatter(date)}`}</span>
      </PostCardHeader>

      <PostCardContent>
        <p>
          <Markdown>{body}</Markdown>
        </p>
      </PostCardContent>
    </PostCardContainer>
  );
}
