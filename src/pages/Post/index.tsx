import {
  PostContainer,
  PostContent,
  PostHeaderLink,
  PostInfo,
  PostNavigation,
  PostTitle,
  PostUserInfo,
  StyledMarkdown,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faComment,
  faCalendarDay,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../../contexts/BlogContext";
import { dateFormatter } from "../../utils/formatter";

export function Post() {
  const { issueNumber } = useParams();
  const { issuesData } = useContext(BlogContext);

  const currentIssue = issuesData.find(
    (issue) => issue.number === parseInt(issueNumber || "")
  );

  return (
    <PostContainer>
      <PostInfo>
        <PostNavigation>
          <PostHeaderLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>voltar</span>
          </PostHeaderLink>
          <>
            {currentIssue?.user.login && (
              <PostHeaderLink to={currentIssue.html_url}>
                <span>ver no github</span>
                {"   "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </PostHeaderLink>
            )}
          </>
        </PostNavigation>
        <PostTitle>
          <h3>{currentIssue?.title}</h3>
        </PostTitle>
        <PostUserInfo>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{currentIssue?.user.login}</span>
          </div>
          {currentIssue?.created_at && (
            <div>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>{`Há ${dateFormatter(currentIssue?.created_at)}`}</span>
            </div>
          )}
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{currentIssue?.comments} comentários</span>
          </div>
        </PostUserInfo>
      </PostInfo>

      <PostContent>
        <StyledMarkdown>{currentIssue?.body}</StyledMarkdown>
      </PostContent>
    </PostContainer>
  );
}
