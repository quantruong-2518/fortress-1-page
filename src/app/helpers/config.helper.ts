import { of } from 'rxjs/internal/observable/of';

import { HeaderItem } from '../entities';

export const getHeaderItems = (): HeaderItem => {
  return of([
    'Welcome',
    'The Platform',
    'Clients',
    'About us',
    'Articles',
    'News',
    `Let's talk`,
  ]);
};
