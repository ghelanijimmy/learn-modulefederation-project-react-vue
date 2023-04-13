import React, { useRef, useEffect } from 'react';
import { mount as DashboardMount } from 'dashboard/DashboardApp';
import { DashboardMountFunction } from '@mf/dashboard/src/bootstrap';

export const DashboardApp = () => {
	const ref = useRef(null);

	useEffect(() => {
		(DashboardMount as DashboardMountFunction)(ref.current);
	}, []);

	return <div ref={ref} />;
};
export default DashboardApp;
