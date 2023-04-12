import React, { FC } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import {
	StylesProvider,
	createGenerateClassName,
} from '@material-ui/core/styles';
import { History } from 'history';
import { MemoryHistory } from 'history';
import SignIn from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
	productionPrefix: 'au',
});

export const App: FC<{
	history: MemoryHistory<unknown> | History;
	onSignIn: () => void;
}> = ({ history, onSignIn }) => {
	return (
		<StylesProvider generateClassName={generateClassName}>
			<Router history={history}>
				<Switch>
					<Route path="/auth/signin">
						<SignIn onSignIn={onSignIn} />
					</Route>
					<Route path="/auth/signup">
						<Signup onSignIn={onSignIn} />
					</Route>
				</Switch>
			</Router>
		</StylesProvider>
	);
};
