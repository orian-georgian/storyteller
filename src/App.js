import { Header, MainContent, Sidebar } from "./components";
import { BrowserRouter as Router } from "react-router-dom";

import MenuContextProvider from "./contexts/menu-context/MenuContextProvider";

import "./App.scss";

function App() {
  return (
    <div className="storyteller-app flex-box flex-column" role="application">
      <Router>
        <MenuContextProvider>
          <Header />
          <div className="storyteller-pages flex-box flex-1">
            <Sidebar />
            <MainContent />
          </div>
        </MenuContextProvider>
      </Router>
    </div>
  );
}

export default App;
