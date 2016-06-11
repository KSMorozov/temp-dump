// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getHooks } from 'utils/hooks';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getHooks factory
  const { injectReducer, injectSagas } = getHooks(store);

  return [
    {
      onEnter: (nextState, replace) => replace({ pathname: '/portfolio', state: { nextPathname: nextState.location.pathname } }),
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage/reducer'),
          System.import('containers/HomePage/sagas'),
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/portfolio',
      name: 'portfolio',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Portfolio/reducer'),
          System.import('containers/Portfolio/sagas'),
          System.import('containers/Portfolio'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('portfolio', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/portfolio/:id',
      name: 'portfolio',
      getComponent(nextState, cb) {
        System.import('containers/Product')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/about',
      name: 'about',
      getComponent(nextState, cb) {
        System.import('containers/About')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/contacts',
      name: 'contacts',
      getComponent(nextState, cb) {
        System.import('containers/Contacts')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('components/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
