import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostCardContainer = styled(Link)`
  max-width: 26rem;
  height: 16.25rem;

  margin-bottom: 2rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;

  border: 1px solid transparent;
  border-radius: 10px;

  text-decoration: none;

  color: ${(props) => props.theme["base-title"]};
  background-color: ${(props) => props.theme["base-post"]};

  &:hover {
    border-color: ${(props) => props.theme["base-label"]};
  }
  &:focus {
    border-color: ${(props) => props.theme.blue};
  }
`;

export const PostCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 1.25rem;

  gap: 1rem;  

  > span {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-wrap: nowrap;

    color: ${(props) => props.theme["base-span"]};
  }
`;

export const PostCardContent = styled.div`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme["base-text"]};
`;
