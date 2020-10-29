import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { WithLayoutRoute } from "./routers";

import { PublicLayout} from "./layouts";
import Loading from "./components/Loading";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));

const Routes = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Router>
				<Switch>
					<WithLayoutRoute
						exact
						path="/"
						layout={PublicLayout}
						component={LandingPage}
					/>
					<WithLayoutRoute
						exact
						path="/products"
						layout={PublicLayout}
						component={ProductsPage}
					/>
					<Route path="*" component={() => "404 NOT FOUND"} />
				</Switch>
			</Router>
		</Suspense>
	);
};

export default Routes;
