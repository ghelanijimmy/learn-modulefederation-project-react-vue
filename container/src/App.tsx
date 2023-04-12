import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AppMarker } from './components/AppMarker';
import { Header } from './components/Header';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import { Progress } from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
	productionPrefix: 'co',
});

export const App = () => {
	const [isSignedIn, setIsSignedIn] = useState(false);
	return (
		<BrowserRouter>
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
						<Route path="/">
							<AppMarker appTitle="MarketingApp">
								<MarketingLazy />
							</AppMarker>
						</Route>
					</Switch>
				</Suspense>
			</StylesProvider>
		</BrowserRouter>
	);
};
