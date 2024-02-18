import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    setTimeout(resolve, 1500)
}).then(() => import('./AboutPage')));