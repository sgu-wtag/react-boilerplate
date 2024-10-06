import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import { home, settings } from './paths';

function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path={home} Component={() => 'Home'} />
      <Route path={settings} Component={() => 'Settings'} />
    </ReactRouterRoutes>
  );
}

export default Routes;
