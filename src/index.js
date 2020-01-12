import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import IPAddressContainer from './IPAddressContainer';

var dest = document.querySelector('#container');

ReactDom.render (
    <div>
        <IPAddressContainer/>
    </div>,
    dest
);
