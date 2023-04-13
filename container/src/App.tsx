import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import { createBrowserHistory } from 'history';

import { AppMarker } from './components/AppMarker';
import { Header } from './components/Header';
import { Progress } from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
	productionPrefix: 'co',
});

const history = createBrowserHistory();

export const App = () => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	useEffect(() => {
		if (isSignedIn) {
			history.push('/dashboard');
		}
	}, [isSignedIn]);

	return (
		<Router history={history}>
			<StylesProvider generateClassName={generateClassName}>
				<Header
					isSignedIn={isSignedIn}
					onSignOut={() => setIsSignedIn(false)}
				/>
				<Suspense fallback={<Progress />}>
					<Switch>
						<Route path="/auth">
							<AppMarker appTitle="AuthApp">
								<AuthLazy
									onSignIn={() => setIsSignedIn(true)}
								/>
							</AppMarker>
						</Route>
						<Route path="/dashboard">
							<AppMarker appTitle="DashboardApp">
								{!isSignedIn && <Redirect to="/" />}
								<DashboardLazy />
							</AppMarker>
						</Route>
						<Route path="/">
							<AppMarker appTitle="MarketingApp">
								<MarketingLazy />
							</AppMarker>
						</Route>
					</Switch>
				</Suspense>
			</StylesProvider>
		</Router>
	);
};
