import NavBar from "./NavBar";
import classes from "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { navItems } from "../../utils/constants";
import { FooterItems } from "../../utils/footerconstants";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

function Layout(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
  return (
    <div>
      <Header  />
      <main className={classes.main}>{props.children}</main>
      <Footer footerItems={FooterItems}  />
    </div>
  );
}

export default Layout;