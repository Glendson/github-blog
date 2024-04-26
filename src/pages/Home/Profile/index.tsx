import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  ProfileBio,
  ProfileContainer,
  ProfileDescription,
  ProfileHeader,
  ProfileInfo,
} from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { useGithubAPI } from "../../../hooks/useGithub";

export function Profile() {
  const { userData } = useGithubAPI();

  return (
    <ProfileContainer>
      <Avatar src={userData?.avatar_url} alt="" />
      <ProfileDescription>
        <ProfileHeader>
          <h1>{userData?.name}</h1>

          <a href={userData?.html_url}>Github</a>
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
            <span>{userData?.followers}</span>
          </div>
        </ProfileInfo>
      </ProfileDescription>
    </ProfileContainer>
  );
}
