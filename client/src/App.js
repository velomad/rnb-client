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
    ReactGA.initialize("G-J704V5JT61");
  };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    initGA();
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
