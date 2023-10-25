import { BrowserRouter } from "react-router-dom";
import User from "./components/user/User";
import Users from "./components/users/Users";
import Router from "./router/Router";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Router/>
		</BrowserRouter>
	);
};

export default App;
