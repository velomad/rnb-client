import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { WithLayoutRoute } from "./routers";

import PublicLayout from "./layouts/PublicLayout";
import Loading from "./components/Loading";

const LandingPage = lazy(() => import("./pages/LandingPage"));

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
					<Route path="*" component={() => "404 NOT FOUND"} />
				</Switch>
			</Router>
		</Suspense>
	);
};

export default Routes;
