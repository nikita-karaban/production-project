import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';
import {NotFoundPage} from 'pages/NotFoundPage';
import {RouteProps} from 'react-router-dom';

enum AppRoutesEnum {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutesEnum, string> = {
    [AppRoutesEnum.MAIN]: '/',
    [AppRoutesEnum.ABOUT]: '/about',
    [AppRoutesEnum.NOT_FOUND]: '*',
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
    [AppRoutesEnum.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
