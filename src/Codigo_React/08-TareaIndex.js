import React from 'react';
import {createRoot} from 'react-dom/client';
import CounterApp from './CounterApp';
import './index.css';

const valorNumber = <CounterApp value={1998} />;
const container = document.querySelector('#root');
const root = createRoot(container);

root.render(valorNumber);