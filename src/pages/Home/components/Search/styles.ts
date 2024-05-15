import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;

  > input {
    width: 100%;
    border: 0;
    border-radius: 0.375rem;
    border: 1px solid ${(props) => props.theme["base-border"]};

    display: flex;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:focus {
      border-color: ${(props) => props.theme.blue};
      background: ${(props) => props.theme["base-input"]};
    }
  }
`;
