import React, { useRef, useEffect } from 'react';
import { mount as AuthMount } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';
import { AuthMountFunction } from '@mf/auth/src/bootstrap';

export const AuthApp = (props: { onSignIn: () => void }) => {
	const ref = useRef(null);
	const history = useHistory();

	useEffect(() => {
		const { onParentNavigate } = (AuthMount as AuthMountFunction)(
			ref.current,
			{
				onNavigate: ({ pathname: nextPathname }) => {
					const { pathname } = history.location;
					if (pathname !== nextPathname) history.push(nextPathname);
				},
				initialPath: history.location.pathname,
				onSignIn: props.onSignIn,
			},
		);
		history.listen(onParentNavigate);
	}, []);

	return <div ref={ref} />;
};
export default AuthApp;
