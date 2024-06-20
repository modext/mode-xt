import React from 'react';
import { useRef } from 'react';
import { SliderElem } from './styles/SliderElem';

function Slider() {
  const skills = useRef([
    'HTML',
    'CSS',
    'SASS',
    'TAILWIND CSS',
    'STYLED COMPONENTS',
    'JAVASCRIPT',
    'REACT JS',
    'REACT NATIVE',
    'REDUX',
    'CONTEXT API',
    'NEXT JS',
    'GSAP',
    'FIREBASE',
    'ADOBE XD',
    'PYTHON',
    'TYPESCRIPT',
    'WORDPRESS',
    'GCP',
    'BLOCKCHAIN',
    'MATERIAL UI',
    'EXPRESS JS',
  ]).current;
  return (
    <SliderElem>
      <div>Skills</div>
      <div className='skills'>
        {skills.map((item, key) => {
          return <div key={key}>{item}</div>;
        })}
      </div>
    </SliderElem>
  );
}

export default Slider;
