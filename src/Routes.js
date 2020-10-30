import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { WithLayoutRoute } from "./routers";

import { PublicLayout } from "./layouts";
import Loading from "./components/Loading";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));

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
					<WithLayoutRoute
						exact
						path="/product/:id"
						layout={PublicLayout}
						component={ProductPage}
					/>
					<Route path="*" component={() => "404 NOT FOUND"} />
				</Switch>
			</Router>
		</Suspense>
	);
};

export default Routes;
