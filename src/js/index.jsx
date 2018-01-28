import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';
import App from './components/App';
import '../css/fonts.css';

const renderApp = () => {
  ReactDOM.render(
    <HashRouter>
      <div>
        <Reboot />
        <App />
      </div>
    </HashRouter>,
    document.getElementById('app')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp();
  });
}
