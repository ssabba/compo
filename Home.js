import React from 'react';
import './index.css'
import { useRef } from 'react';
import {Helmet} from 'react-helmet'
import { useState } from 'react';

import {
  config,
  state,
  runPageLeg,
  docs,
  increaseLeg,
  decreaseLeg,
  legInputChange,
  legInputKeyPress,
  openFullscreen,
  start,
  leftScrollLegShow,
  rightScrollLegShow,
  checkSliders,
  hideElement,
  unhideElement,
  showElement,
  createTopInput,
  // Other functions here
}  from './Game'
const Home = () => {
  

    const containerRef = useRef(null);
    const startPageRef = useRef(null);
    const legInputRef= useRef(null);
    const menuPageRef= useRef(null);
    const runPageRef = useRef(null);
    const resultPageRef = useRef(null);
    const resultRefe = useRef(null);
    const ghostLegCrtRef = useRef(null);
    const oldMenuPageRef = useRef(null);
    const runPageCopyRef = useRef(null);
    const resultPageCopyRef = useRef(null);
  const  easterEggRef = useRef (null);
    <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Helmet>

const style ={
enableBackground: 'new 0 0 15 15'
}
const svgStyle = {
    strokeLinejoin: 'round',
    fillRule: 'evenodd',
    stroke: '#333333',
    strokeLinecap: 'round',
    strokeWidth: 3.125,
    fill: '#b3b3b3',
  };
  const svgStyle2 ={
    transform: 'scaleX(-1)'
  }
  const svgStyle3 = {
    fill: 'none',
    stroke: '#000000',
    strokeWidth: 2.64583,
    strokeLinecap: 'round',
    strokeLinejoin: 'miter',
    strokeDasharray: 'none',
    strokeOpacity: 1,
  };
  const path3 ={
    fill: '#000000', strokeWidth: 0.264583
}
const svgStyle4 = {
    fill: 'none',
    stroke: '#000000',
    strokeWidth: 2.64583,
    strokeLinecap: 'round',
    strokeLinejoin: 'miter',
    strokeDasharray: 'none',
    strokeOpacity: 1,
  };
  const path2 ={
    fill: '#000000', strokeWidth: 0.264583
  }
  const pathstyle ={
    fill: '#000000' , strokeWidth: 0.264583
  }



  return (
    <div id="container" className="container" ref={containerRef}>
      <div id="start-page" className="start-page" ref={startPageRef} >
        <h1 
        // onClick={openFullscreen} 
        className="title">
          Ghost Leg
        </h1>
        <form className="leg-count-container">
          <svg
            // onClick={increaseLeg}
            id="increase-btn"
            className="change-btn increase-btn"
            viewBox="0 0 15 15"
            style= {style}
          >
            <path
              fill="orange"
              stroke="#000000"
              strokeWidth="0.5"
              d="M7.5385,2 C7.2437,2,7.0502,2.1772,6.9231,2.3846l-5.8462,9.5385C1,12,1,12.1538,1,12.3077C1,12.8462,1.3846,13,1.6923,13h11.6154 C13.6923,13,14,12.8462,14,12.3077c0-0.1538,0-0.2308-0.0769-0.3846L8.1538,2.3846C8.028,2.1765,7.7882,2,7.5385,2z"
            />
          </svg>
          <input
            id="leg-input"
            className="leg-input"
            type="number"
            min="2"
            value="5"
            max="20"
            // ref={legInputRef}
          />
          <svg
            // onClick={decreaseLeg}
            id="decrease-btn"
            className="change-btn decrease-btn"
            viewBox="0 0 15 15"
            style={style}
          >
            <path
              fill="orange"
              stroke="#000000"
              strokeWidth="0.5"
              d="M7.5385,2 C7.2437,2,7.0502,2.1772,6.9231,2.3846l-5.8462,9.5385C1,12,1,12.1538,1,12.3077C1,12.8462,1.3846,13,1.6923,13h11.6154 C13.6923,13,14,12.8462,14,12.3077c0-0.1538,0-0.2308-0.0769-0.3846L8.1538,2.3846C8.028,2.1765,7.7882,2,7.5385,2z"
            />
          </svg>
        </form>
        <button id="start-btn" 
        onClick={start}
        className="start-btn">
          Start!
        </button>
      </div>
      <div id="menu-page" 
      useRef={menuPageRef}
      className="menu-page">
        <table className="home-container" 
        // onClick={goToStart}
        >
          <td>
            <svg
              className="home-btn"
              viewBox="0 0 60 60"
              version="1.0"
              y="0"
              x="0"
            >
              <path
                style={svgStyle}
                d="m55.78 30.357c0.149-14.104-11.187-25.651-25.291-25.8-14.104-0.1491-25.651 11.156-25.8 25.26-0.1491 14.104 11.156 25.682 25.26 25.831s25.682-11.187 25.831-25.291zm-20.208-18.84l-0.145 13.656-0.242 11.092-0.137 12.968-18.613-18.979 19.137-18.737z"
                
              />
            </svg>
          </td>
          <td>
            <h1 className="home-title">Home</h1>
          </td>
        </table>

        <div className="main" id="main">
          <div id="mobile-leg" className="mobile-leg">
            <button
              // onClick={slideMobileLegRight}
              id="mobile-scroll-right"
              className="mobile-scroll mobile-scroll-right"
            >
              <svg
                width="23px"
                height="67px"
                viewBox="0 0 46.766148 134.79156"
                xmlns="http://www.w3.org/2000/svg"
                style={svgStyle2}
              >
                <path
                  id="path4732"
                  style={svgStyle3}
                  d="M 45.443236,67.442855 7.323221,133.46865 m 0,-132.145734 38.120015,66.025798 M 39.44293,67.442854 1.322915,133.46865 m 0,-132.145735 38.120015,66.025798"
                />
              </svg>
            </button>
            <div className="leg-and-btns">
              <div className="leg-show-container">
                <div className="scroll-btn">
                  <svg
                    id="scroll-btn-p"
                    className="scroll-btn-p"
                    onClick={rightScrollLegShow}
                    width="20px"
                    height="60px"
                    viewBox="0 0 7.9374995 23.812502"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      style={pathstyle}

                      id="path169"
                      d="M 102.39429,93.625713 67.516647,73.879471 32.639006,54.133227 l 34.539567,-20.3318 34.539567,-20.331802 0.33807,40.078043 z"
                      transform="matrix(0.11431581,6.215622e-4,-9.9997083e-4,0.29707138,-3.6770228,-4.0646643)"
                    />
                  </svg>
                </div>

                <table 
                // onScroll={checkSliders}
                 id="leg-show" className="leg-show">
                  <tbody>
                    <tr id="top-input-row" className="top-input-row"></tr>
                    <tr id="middle-connect-line" className="middle-connect-line"></tr>
                    <tr id="bottom-input-row" className="bottom-input-row"></tr>
                  </tbody>
                </table>
                <div className="scroll-btn">
                  <svg
                    id="scroll-btn-n"
                    className="scroll-btn-n"
                    // onClick={leftScrollLegShow}
                    width="20px"
                    height="60px"
                    viewBox="0 0 7.9374995 23.812502"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                    
                      style={path2}

                      

                      id="path169"
                      d="M 102.39429,93.625713 67.516647,73.879471 32.639006,54.133227 l 34.539567,-20.3318 34.539567,-20.331802 0.33807,40.078043 z"
                      transform="matrix(-0.11431581,-6.215622e-4,9.9997083e-4,-0.29707138,11.614523,27.877164)"
                    />
                  </svg>
                </div>
              </div>
              <div className="start-game-btn-container">
                <button 
                // onClick={gotoRunPage} 
                className="start-game-btn">
                  Generate
                </button>
                <button className="start-game-btn"
                //  onClick={shuffle}
                 >
                  Shuffle
                </button>
              </div>
            </div>
          </div>
          <div className="button-mobile">
            <button
              // onClick={slideMobileLegLeft}
              id="mobile-scroll-left"
              className="mobile-scroll mobile-scroll-left"
            >
              <svg
                width="23px"
                height="67px"
                viewBox="0 0 46.766148 134.79156"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="path4732"
                 style={svgStyle4}
                
                  d="M 45.443236,67.442855 7.323221,133.46865 m 0,-132.145734 38.120015,66.025798 M 39.44293,67.442854 1.322915,133.46865 m 0,-132.145735 38.120015,66.025798"
                />
              </svg>
            </button>
            <div className="entry-table-container">
              <div className="entry-table">
                <div>Top</div>
                <div>Bottom</div>
                <div id="top-input-cont" className="td-input-field"></div>
                <div id="bottom-input-cont" className="td-input-field"></div>
              </div>
              <button
                // onClick={slideMobileLegLeft}
                id="insert-btn"
                className="start-game-btn"
              >
                Insert
              </button>
              <h2 className="lines-inp-text">
                Number of horizontal lines created per interval
              </h2>
              <div className="h-line-inputs" id="h-line-inputs">
                <input
                  type="number"
                  placeholder="2"
                  className="h-line-input h-line-min"
                  id="h-line-min"
                  min="0"
                  max="8"
                  maxLength="1"
                />
                <input
                  type="number"
                  placeholder="8"
                  className="h-line-input h-line-max"
                  id="h-line-max"
                  min="0"
                  max="8"
                  maxLength="1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="run-page" 
      useRef={runPageRef}
      className="run-page">
        <div className="ghost-leg">
          <div className="ghost-scroll-btn-container">
            <svg
              id="ghost-scroll-btn-p"
              className="ghost-scroll-btn ghost-scroll-btn-p"
              // onClick={runRightScrollLegShow}
              width="20px"
              height="60px"
              viewBox="0 0 7.9374995 23.812502"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
            
                style={path3}
                id="path169"
                d="M 102.39429,93.625713 67.516647,73.879471 32.639006,54.133227 l 34.539567,-20.3318 34.539567,-20.331802 0.33807,40.078043 z"
                transform="matrix(0.11431581,6.215622e-4,-9.9997083e-4,0.29707138,-3.6770228,-4.0646643)"

              />
            </svg>
          </div>
          <div
            onscroll="runCheckSliders()"
            id="ghost-leg-container"
            // useRef={ghostLegCrtRef}
            className="ghost-leg-container"
          ></div>

          <div className="ghost-scroll-btn-container">
            <svg
              id="ghost-scroll-btn-n"
              className="ghost-scroll-btn ghost-scroll-btn-n"
              // onClick={runLeftScrollLegShow}
              width="20px"
              height="60px"
              viewBox="0 0 7.9374995 23.812502"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
               
                style={path3}
                id="path169"
                d="M 102.39429,93.625713 67.516647,73.879471 32.639006,54.133227 l 34.539567,-20.3318 34.539567,-20.331802 0.33807,40.078043 z"
                transform="matrix(-0.11431581,-6.215622e-4,9.9997083e-4,-0.29707138,11.614523,27.877164)"
               
              />
            </svg>
          </div>

          <div>
      <div className="btns">
        <button className="goto-results-btn" 
        // onClick={(e) => gotoResult(e.target)}
        >
          Results
        </button>
        <button className="regen" 
        // onClick={reGenerate}
        >
          Regenerate
        </button>
      </div>
      <div id="result-page"
      useRef={resultPageRef}
       className="result-page">
        <div className="result-page-container">
          <div id="results" 
          // useRef={resultRefe}
          className="results"></div>
          <div className="btns">
            <button className="restart" 
            // onClick={restart}
            >
              🔄Restart
            </button>
          </div>
        </div>
      </div>
      <div id="easterEgg-page" className="easterEgg-page" useRef={easterEggRef}></div>
    </div>
      </div>
    </div>
    </div>
  );
};


export default Home;
