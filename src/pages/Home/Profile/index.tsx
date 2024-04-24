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

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar src="" alt="" />
      <ProfileDescription>
        <ProfileHeader>
          <h1>Cameron Williamson</h1>

          <a href="">Github</a>
        </ProfileHeader>
        <ProfileBio>
          <span>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </span>
        </ProfileBio>

        <ProfileInfo>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </div>
        </ProfileInfo>
      </ProfileDescription>
    </ProfileContainer>
  );
}
