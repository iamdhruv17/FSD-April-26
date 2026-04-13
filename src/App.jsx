import { useContext } from "react";
import { ThemeContext, UserContext, LangContext } from "./Context";

const App = () => {
  const {theme, toogleTheme} = useContext(ThemeContext);
  const {user, setUser} = useContext(UserContext);
  const {lang, setLang} = useContext(LangContext);
  return (
  <div>
    <p>Theme:{theme}</p>
     <p>User:{user.name}</p>
     <p>Language:{lang}</p>

     <button onClick={toogleTheme}>ThemeChange</button>
  </div>
  );
};
export default App;