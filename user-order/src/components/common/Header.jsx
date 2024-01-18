import { HeaderStyle } from "../../styles/layout";
import { HeaderLogoWrapper } from "../../styles/wrapper";

import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderLogoWrapper>
        <img src={logo} alt="꾸다 로고" />
      </HeaderLogoWrapper>
    </HeaderStyle>
  );
};

export default Header;
