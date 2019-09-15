import Router from './routes';
import { Home, Contacts, Exam } from '../features';
import '../../styles/common.scss';

const routes = {
  '/': () => {
    new Home('#root').load();
  },
  '/contacts': () => {
    new Contacts('#root').load();
  },
  '/exam': () => {
    new Exam('#root').load();
  }
};

new Router().bootstrap(routes);
