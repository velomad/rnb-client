import { Provider } from "react-redux";
import store from "./store";

import Routes from "./Routes";
import "./assets/scss/index.scss";
import history from "./utils/history";
import { useState , useEffect} from "react";



const App = () => {
const [test,setTest] = useState("")


	history.listen((location) => {
		setTest(location.search);
	});

	useEffect(()=>{
		console.log("it works bc")
	},[test])

	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
};
export default App;
