/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';
import Game from './routes/Game'

import './index.css';
import App from './App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => ( 
  <Router>
    <Route path='/' component={App} />
    <App />
    <Route path='/cryptogame' component={Game}/>
  </Router>
), root!);