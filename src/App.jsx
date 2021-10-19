import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import MenuIcon from "@material-ui/icons/Menu";
import Routes from "./Config/Routes";
import { IconButton } from "@material-ui/core";
import { MainContentStyled } from "./Components/MainContent/styled";

export default function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />

      <div className="theme">
        
      </div>

      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>
        <Routes />
      </MainContentStyled>
    </div>
  );
}
