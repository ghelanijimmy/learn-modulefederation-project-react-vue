import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

export type DashboardMountFunction = (el: Element) => void;

const mount: DashboardMountFunction = (el) => {
	const app = createApp(Dashboard);
	app.mount(el);
};

if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#_dashboard-dev-root');

	if (el) {
		mount(el);
	}
}

export { mount };
