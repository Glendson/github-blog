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

export const HomeInputContent = styled.input`
  width: 100%;
  border: 0;
  border-radius: 0.375rem;
  border: 1px solid ${props => props.theme["base-border"]};

  display: flex;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme["base-input"]};

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus {
    border-color: ${props => props.theme.blue};
  } 
`;
