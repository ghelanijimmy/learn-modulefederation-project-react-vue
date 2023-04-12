declare module 'marketing/MarketingApp' {
  import { MarketingMountFunction } from '@mf/marketing/src/bootstrap';
  const mount: MarketingMountFunction;
}

declare module 'auth/AuthApp' {
  import { AuthMountFunction } from '@mf/auth/src/bootstrap';
  const mount: AuthMountFunction;
}
