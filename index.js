import './SomeComponent.js';
import {Router} from './vaadin-router.js';
import  './GameComponent.js';
import './GiftsComponent.js';

const outlet = document.querySelector('main');
const router = new Router(outlet);
router.setRoutes([
  {path: '/',     component: 'some-component'},
  {path: '/gifts',  component: 'gifts-component'},
  {path: '/game', component: 'game-component'},
  {path: '/users/:id', component: 'some-component'}
]);


