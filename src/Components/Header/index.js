import React from "react";
import "./styles.css";

import logo from "../../assets/img/logo_insta.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="headerWrapper">
      <Link to="/">
        <img src={logo} alt="Logo do Instagram" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <span className="material-icons">home</span>
            </Link>
          </li>

          <li>
            <Link to="/create-post">
              <span className="material-icons">add</span>
            </Link>
          </li>

          <li>
            <Link to="/">
              <img
                src="https://lh3.googleusercontent.com/a-/AOh14Gjpptpc_dpU1ipAvGoLeASf5C0vFpQNLFYrz86h=s88-c-k-c0x00ffffff-no-rj-mo"
                alt="Imagem de perfil"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
