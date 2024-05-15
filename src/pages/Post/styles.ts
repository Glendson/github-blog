import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;

  max-width: 54rem;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 4.5rem;
`;

export const PostInfo = styled.div`
  width: 100%;
  position: relative;
  height: 10.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: -5rem;
  border-radius: 0.625rem;

  padding: 2rem;

  background-color: ${(props) => props.theme["base-profile"]};
`;

export const PostNavigation = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const PostHeaderLink = styled(Link)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  text-transform: uppercase;

  color: ${(props) => props.theme.blue};

  &:hover {
    text-decoration: underline;
  }

  svg {
    width: 12px;
    height: 12px;
    margin-top: -4px;
  }
`;

export const PostTitle = styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 0.5rem;
  font-size: 24px;
  line-height: 1.3;
  text-wrap: wrap;
  text-overflow: ellipsis;
  overflow-wrap: break-word;

  color: ${(props) => props.theme["base-title"]};
  word-wrap: break-word;
`;

export const PostUserInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.25rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${props => props.theme["base-span"]};
    
    > svg {
      margin-top: -1px;
      color: ${props => props.theme["base-label"]};
    }
  }
`;

export const PostContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem;
  gap: 1.5rem;

  text-wrap: wrap;

  color: ${props => props.theme["base-text"]};

`

export const StyledMarkdown = styled(Markdown)`

  display: flex;
  flex-direction: column;
  gap: 1.5rem;


  pre {
    display: flex;
    gap: 0.5rem;
    padding: 1rem;

    font-size: 16px;
    font-family: Nunito, sans-serif;

    background-color: ${props => props.theme["base-post"]};
    color: ${props => props.theme["base-text"]};
  }

`