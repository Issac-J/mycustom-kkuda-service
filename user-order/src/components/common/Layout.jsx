import { MainStyle } from "../../styles/layout";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <MainStyle>{props.children}</MainStyle>
      <Footer />
    </>
  );
};

export default Layout;
