import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';
import {RouteProps} from 'react-router-dom';

export enum AppRoutesEnum {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRoutesEnum, string> = {
    [AppRoutesEnum.MAIN]: '/',
    [AppRoutesEnum.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutesEnum, RouteProps> = {
    [AppRoutesEnum.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutesEnum.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
};
