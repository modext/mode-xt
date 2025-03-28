import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cursor from '../Cursor';
import Footer from '../Footer';
import Hero from './Hero';
import ShowCase from './ShowCase';
import Slider from '../Slider';

function Main({ projects: data }) {
  const headerRef = useRef([]);
  const [innerWidth, setInnerWidth] = useState(0);
  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  return (
    <>
      {innerWidth < 768 ? null : <Cursor reference={headerRef}></Cursor>}
      <Hero ref={headerRef}></Hero>

      
      <Slider></Slider>
      <div className='root-container'>
        {data.map((item, idx) => {
          return (
            <ShowCase
              key={idx}
              item={{ ...item, index: idx + 1, length: data.length }}
            ></ShowCase>
          );
        })}
      </div>
      
      <Footer></Footer>
    </>
  );
}

export default Main;
