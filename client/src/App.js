import { Provider } from "react-redux";
import store from "./store";

import Routes from "./Routes";
import "./assets/scss/index.scss";


const App = () => {
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
};
export default App;
