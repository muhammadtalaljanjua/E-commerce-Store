import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/007 crown.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <Logo className="logo" />
        </Link>
        <div className="nav-menu">
          <Link className="nav-link" to={"shop"}>
            SHOP
          </Link>
          <Link className="nav-link" to={"sign-in"}>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
