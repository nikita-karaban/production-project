import {lazy} from 'react';

export const MainPageAsync = lazy(() =>
    new Promise((resolve) => {
        setTimeout(resolve, 1500);
    }).then(() => import('./MainPage')),
);
