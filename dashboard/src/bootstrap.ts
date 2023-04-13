export type DashboardMountFunction = (el: Element) => void;

const mount: DashboardMountFunction = (el) => {
	console.log(el);
};

if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#_dashboard-dev-root');

	if (el) {
		mount(el);
	}
}

export { mount };
