import React, { FC } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
	StylesProvider,
	createGenerateClassName,
} from '@material-ui/core/styles';
import { History } from 'history';
import Landing from './components/Landing';
import Pricing from './components/Pricing';
import { MemoryHistory } from 'history';

const generateClassName = createGenerateClassName({
	productionPrefix: 'ma',
});

export const App: FC<{ history: MemoryHistory<unknown> | History }> = ({
	history,
}) => {
	return (
		<StylesProvider generateClassName={generateClassName}>
			<Router history={history}>
				<Switch>
					<Route exact path="/pricing" component={Pricing} />
					<Route path="/" component={Landing} />
				</Switch>
			</Router>
		</StylesProvider>
	);
};
