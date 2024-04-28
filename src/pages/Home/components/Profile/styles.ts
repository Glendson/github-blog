import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  position: relative;
  height: 13.25rem;

  display: flex;
  gap: 2rem;
  margin: 0 auto;
  margin-top: -6rem;
  border-radius: 0.625rem;

  background-color: ${(props) => props.theme["base-profile"]};
`;

export const Avatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 0.5rem;

  margin: 2rem 2.5rem;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 0.5rem;

  > div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;

  margin: 2.5rem 2.5rem 0 0;

  color: ${(props) => props.theme["base-title"]};
`;

export const HeaderLink = styled(Link)`
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

export const ProfileBio = styled.div`
  display: flex;
  margin-right: 2.5rem;

  color: ${(props) => props.theme["base-text"]};
`;

export const ProfileInfo = styled.footer`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;

  > span {
    color: ${(props) => props.theme["base-subtitle"]};
  }

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  svg {
    color: ${(props) => props.theme["base-label"]};
  }
`;
