import { createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';

import { AppNavigator } from '@/routes/navigator';

export const routerReducer = createNavigationReducer(AppNavigator);

export const routerMiddleware = createReactNavigationReduxMiddleware(state => state.router);
