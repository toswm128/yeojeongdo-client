import Header from "components/Common/Header/Header";
import Map from "components/Main/Map/Map";
import useAuth from "hooks/redux/useAuth";
import { Token } from "lib/Token";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MainPageStyle } from "./PageStyle";

const Main = () => {
  const history = useHistory();
  const { authState, loadMyInfo } = useAuth();

  useEffect(() => {
    if (!authState.myInfo) {
      loadMyInfo();
    }
  }, [loadMyInfo, authState.myInfo]);

  useEffect(() => {
    if (!authState.myInfo && !authState.loginDone) {
      history.replace("/login");
    }
  }, [authState.myInfo, history, authState.loginDone]);

  return (
    <MainPageStyle>
      <Header />
      <Map />
    </MainPageStyle>
  );
};

export default Main;
