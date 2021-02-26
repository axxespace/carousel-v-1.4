import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Rand from './Rand';

// you can add or delete in CONTENT any html content you want to have in your carousel
const CONTENT = [
  <div className="colorPage" style={{ backgroundColor: '#0000FF' }} key="1"><h1>Blue</h1></div>,
  <div className="colorPage" style={{ backgroundColor: '#708090' }} key="2"><h1>Slate</h1></div>,
  <div className="colorPage" style={{ backgroundColor: '#87ceeb' }} key="3"><h1>Sky</h1></div>,
  <div className="colorPage" style={{ backgroundColor: '#0A1172' }} key="4"><h1>Navy</h1></div>,
  <div className="colorPage" style={{ backgroundColor: '#4B0082' }} key="5"><h1>Indigo</h1></div>,
  <div className="colorPage" style={{ backgroundColor: '#0047ab' }} key="6"><h1>Cobalt</h1></div>,
  <div className="colorPage" style={{ backgroundColor: '#008080' }} key="7"><h1>Teal</h1></div>,
  <div className="colorPage" style={{ backgroundColor: '#006699' }} key="8"><h1>Ocean</h1></div>,
  <div className="colorPage" style={{ backgroundColor: '#005f69' }} key="9"><h1>Peacock</h1></div>,
  <div className="colorPage" style={{ backgroundColor: '#007FFF' }} key="10"><h1>Azure</h1></div>,
  <div className="colorPage" style={{ backgroundColor: '#007ba7' }} key="11"><h1>Cerulean</h1></div>,
  <div className="colorPage" style={{ backgroundColor: '#26619c' }} key="12"><h1>Lapis</h1></div>,
  <div className="colorPage" style={{ backgroundColor: '#44575c' }} key="13"><h1>Spruce</h1></div>,
  <div className="colorPage" style={{ backgroundColor: '#888c8d' }} key="14"><h1>Stone</h1></div>,
  <div className="colorPage" style={{ backgroundColor: '#468fa2' }} key="15"><h1>Aegean</h1></div>,
  <div className="colorPage" style={{ backgroundColor: '#4f86f7' }} key="16"><h1>Berry</h1></div>,
  <div className="colorPage" style={{ backgroundColor: '#1560bd' }} key="17"><h1>Denim</h1></div>,
  <div className="colorPage" style={{ backgroundColor: '#2c3863' }} key="18"><h1>Admiral</h1></div>,
  <div className="colorPage" style={{ backgroundColor: '#0f52ba' }} key="19"><h1>Sapphire</h1></div>,
  <div className="colorPage" style={{ backgroundColor: '#5ea3b3' }} key="20"><h1>Arctic</h1></div>,
  <Rand key="21" />, // random text paragraph
];

ReactDOM.render(<App CONTENT={CONTENT} />, document.getElementById('root'));
