import { HeaderContainer } from "./styles";

import coverImg from "../../assets/cover.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={coverImg} alt="" />
    </HeaderContainer>
  );
}
