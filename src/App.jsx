import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Divider from "./components/Divider";
import Experties from "./components/Experties";
import Repos from "./components/Repos";
import ContactMe from "./components/ContactMe";

import GithubState from "./context/github/GithubState";

function App() {
  return (
    <GithubState>
      <Header />
      <AboutMe />
      <Divider />
      <Experties />
      <Divider />
      <Repos />
      <Divider />
      <ContactMe />
    </GithubState>
  );
}

export default App;
