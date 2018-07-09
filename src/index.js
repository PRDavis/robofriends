import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { robots } from './robots';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render( 
    <
        CardList robots = {robots}
    />
, document.getElementById('root'));
registerServiceWorker();
