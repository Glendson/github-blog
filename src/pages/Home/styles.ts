import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;

  max-width: 54rem;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 4.5rem;
`;

export const HomeSearch = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;

    > h2 {
      ${(props) => [props.theme["base-subtitle"]]}
    }

    > span {
      ${(props) => [props.theme["base-span"]]}
    }
  }
`;

export const PostContainer = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;
`;
