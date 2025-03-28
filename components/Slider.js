import React, { useRef } from 'react';
import { SliderElem } from './styles/SliderElem';

function Slider() {
  const skills = useRef({
    'Frontend Development': [
      'HTML', 'CSS', 'SASS', 'Tailwind CSS', 'Styled Components',
      'JavaScript', 'TypeScript', 'React JS', 'Next JS', 'React Native',
      'Redux', 'Redux Toolkit', 'Context API', 'Zustand', 'Material UI',
      'GSAP', 'Adobe XD', 'GrapesJS', 'WordPress'
    ],
    'Backend Development': [
      'Node.js', 'Express JS', 'NestJS', 'REST APIs', 'tRPC',
      'MongoDB', 'PostgreSQL', 'Go (Golang)'
    ],
    'Blockchain & Web3': [
      'Solidity', 'Hardhat', 'Ethers.js', 'Web3.js', 'Chainlink',
      'LayerZero', 'Rust (Anchor)', 'Cosmos SDK'
    ],
    'DevOps & Deployment': [
      'GCP', 'Vercel', 'Docker', 'Kubernetes', 'CI/CD'
    ],
    'Testing': [
      'Jest', 'Hardhat', 'Chai', 'Supertest'
    ],
    'Other': [
      'Python'
    ]
  }).current;
  

  return (
    <SliderElem>
      <div>Skills</div>
  
      <div className='skills__wrapper'>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className='skills__category'>
            <div className='skills'>{category}</div>
            <div className='skills__items'>
              {items.map((item, idx) => (
                <span key={idx} className='skills__item'>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SliderElem>
  );
}

export default Slider;
