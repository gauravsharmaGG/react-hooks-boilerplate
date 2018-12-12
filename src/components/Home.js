import React from 'react';
import { Link } from 'react-router-dom';

const pStyle0 = {
  "--idx": '0',
  "--slist": '#fdb970,#ff8588',
  "margin-top": "35%"
};

const pStyle1 = {
  "--idx": '1',
  "--slist": '#fff251,#ffb258'
};

const pStyle2 = {
  "--idx": '2',
  "--slist": '#de99cf,#9d5a86'
};

const pStyle3 = {
  "--idx": '3',
  "--slist": '#fc7190,#d2659e'
};

const pStyle4 = {
  "--idx": '4',
  "--slist": '#50ccca,#4aa3b5'
};

const pStyle5 = {
  "--idx": '5',
  "--slist": '#3a3933,#72ff1a'
};

const Home = () => (
  <div>
  <article data-year="Boilerplate" style={pStyle0}>
  <h3>React Hooks</h3>
  <Link to="/example">Hooks</Link>
  <p>A simple Boilerpate template with features as HMR, Unit Testing, SSR, Production Build, Development Environment, Web Server</p>
</article>
<article data-year="Dev Version" style={pStyle1}>
  <h3>npm run dev</h3>
  <p>A Development webpack server with <b>Hot Module Replacement</b> on the go. Use <b>npm build</b> for Production version.</p>
</article>
<article data-year="Transpiling" style={pStyle2}>
  <h3>npm run transpile</h3>
  <p>Transpiling of resources into a build directory using Babel</p>
</article>
<article data-year="SSR" style={pStyle3}>
  <h3>npm run ssr</h3>
  <p>A dev version of running SSR with Universal Hot Reload for HMR.</p>
</article>
<article data-year="Production Build" style={pStyle5}>
  <h3>npm build</h3>
  <p>A Production build for the client version. For SSR Production build use <b>npm run ssrprod</b></p>
</article>
<article data-year="Unit Testing" style={pStyle4}>
  <h3>npm run test</h3>
  <p>Unit testing of the modules with jest framework.</p>
</article>
  </div>
);

export default Home;    