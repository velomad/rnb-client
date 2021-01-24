import { Provider } from "react-redux";
import store from "./store";
import ReactGA from "react-ga";
import Routes from "./Routes";

import "./assets/scss/index.scss";
import history from "./utils/history";
import { useState, useEffect } from "react";

const App = () => {
  const [test, setTest] = useState("");

  history.listen((location) => {
    setTest(location.search);
  });

  const initGA = () => {
    ReactGA.initialize("G-F1J0DYDF27");
  };

  useEffect(() => {
    initGA();
    ReactGA.pageview(window.location.pathname);
    console.log("Listning...");
  }, [test]);
  // G-J704V5JT61

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
export default App;
