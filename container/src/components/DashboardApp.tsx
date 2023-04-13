import React, { useRef, useEffect } from 'react';
import { mount as DashboardMount } from 'dashboard/DashboardApp';

export const DashboardApp = () => {
	const ref = useRef(null);

	useEffect(() => {
		(DashboardMount)(ref.current);
	}, []);

	return <div ref={ref} />;
};
export default DashboardApp;
