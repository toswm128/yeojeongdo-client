import useAuth from "hooks/redux/useAuth";
import { HeaderContainer } from "./headerStyles";

const Header = () => {
  const { logout } = useAuth();

  return (
    <>
      <HeaderContainer>
        <h1 className="header-title">여정도</h1>
        <ul className="header-options">
          <li className="logout" onClick={logout}>
            로그아웃
          </li>
        </ul>
      </HeaderContainer>
    </>
  );
};

export default Header;
