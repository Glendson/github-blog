import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  HeaderLink,
  ProfileBio,
  ProfileContainer,
  ProfileDescription,
  ProfileHeader,
  ProfileInfo,
} from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useGithubAPI } from "../../../../hooks/useGithub";

export function Profile() {
  const { userData } = useGithubAPI();

  return (
    <ProfileContainer>
      <Avatar src={userData?.avatar_url} alt="" />
      <ProfileDescription>
        <ProfileHeader>
          <h1>{userData?.name}</h1>

          <>
            {userData?.html_url && (
              <HeaderLink to={userData.html_url}>
                <span>Github</span>
                {"   "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </HeaderLink>
            )}
          </>
        </ProfileHeader>
        <ProfileBio>
          <span>{userData?.bio}</span>
        </ProfileBio>

        <ProfileInfo>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{userData?.login}</span>
          </div>
          {userData?.company && (
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{userData.company}</span>
            </div>
          )}
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{userData?.followers} seguidores</span>
          </div>
        </ProfileInfo>
      </ProfileDescription>
    </ProfileContainer>
  );
}
