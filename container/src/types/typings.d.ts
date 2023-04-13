declare module 'marketing/MarketingApp' {
	import { MarketingMountFunction } from '@mf/marketing/src/bootstrap';
	export const mount: MarketingMountFunction;
}

declare module 'auth/AuthApp' {
	import { AuthMountFunction } from '@mf/auth/src/bootstrap';
	export const mount: AuthMountFunction;
}

declare module 'dashboard/DashboardApp' {
	export const mount: (el: Element) => void;
}
