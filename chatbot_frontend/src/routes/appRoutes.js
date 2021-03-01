import Login from '../containers/Login';
import Dashboard from '../containers/Dashboard';
import Account from '../containers/Account';
import Rule from '../containers/Rule';
import Admin from '../containers/Admin';

const appRoutes = {
  login: {
    url: '/login',
    component: Login,
    private: false,
  },
  changeinfo: {
    url: '/account',
    component: Account,
    private: true,
  },
  rule: {
    url: '/bots/:botId/rules',
    component: Rule,
    private: true,
  },
  dashboard: {
    url: '/dashboard',
    component: Dashboard,
    private: true,
  },
  admin: {
    url: '/admins/accounts',
    component: Admin,
    private: true,
  },
};

export default appRoutes;
