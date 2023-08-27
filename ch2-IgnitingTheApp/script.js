/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement (itself reload server)
 * File Watcher algorithm - C++ (Execute File when changes occur)
 * 
 * BUNDLING
 * MINIFY
 * Cleaning our Code 
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev [Example - npx parcel index.html --https]
 * Port Number [Example - If port number using in localhost then it will change in port number in another project running on localhost]
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking  (remove unwanted code)
 * 
 *
 * Transitive Dependencies
 * 
 * we should put parcel.cache in our gitignore because anything which can be auto-generated will we put inside gitignore (anything which we can generate on server put inside gitignore)
 */


import React from 'react';
import ReactDOM from 'react-dom/client';

const h1 = React.createElement('h1', {
    id: 'title',
    key: 'h1',
    style: {
        color: 'red',
        backgroundColor: 'skyblue',
        fontFamily: 'cursive',
    }
}, "Namaste Everyone!!");

const h2 = React.createElement('h2', {
    id: 'head2',
    key: 'h2',
    style: {
        color: 'red',
    }
}, "Heading 2 from parcel");

const div = React.createElement('div', { 
    className: "container",
}, [h1, h2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);