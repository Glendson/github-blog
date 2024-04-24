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

  background-color: ${props => props.theme["base-profile"]}
`;

export const Avatar = styled.img`

    width: 9.25rem;
    height: 9.25rem;

    border-radius: 0.5rem;

`

export const ProfileDescription = styled.div``

export const ProfileHeader = styled.header``

export const ProfileBio = styled.div``
export const ProfileInfo = styled.div``