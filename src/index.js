import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import dog_database from './data/dog_database';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App data={dog_database} />, document.getElementById('root'));
registerServiceWorker();
