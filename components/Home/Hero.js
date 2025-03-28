import Image from 'next/image';
import React from 'react';
import { useRef } from 'react';
import { HeroElem } from '../styles/HeroElem';
import gsap from 'gsap';
import { useEffect } from 'react';
import { forwardRef } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';

function Hero(props, headerRef) {
  const timeline = useRef(gsap.timeline()).current;
  const { load } = useGlobalContext();
  useEffect(() => {
    if (load)
      timeline
        .to('.img__container', {
          opacity: 1,
          scale: 1.032,
          duration: 1.3,
          ease: 'slow(0.7, 0.7, false)',
        })
        .to(
          '.heading',
          {
            stagger: { each: 0.68, from: 'edges' },
            duration: 0.55,
            scale: 1,
            opacity: 1,
            ease: 'back.out(1.7)',
            y: 0,
          },
          '-=.3'
        )
        .to(
          '.front',
          {
            width: '100%',
            duration: 1.1,
            ease: 'power4.out',
          },
          '-=.1'
        )

        .to(
          '.logo',
          {
            opacity: 1,
          },
          '-=.2'
        )
        .to(
          '.links',
          {
            opacity: 1,
          },
          '-=.2'
        )
        .to(
          '.navbar',
          {
            width: '100%',
            opacity: 1,
            duration: 1.1,
            ease: 'power4.out',
          },
          '-=.5'
        )
        .to(
          '.img__container',
          window.innerWidth < 768
            ? {}
            : {
                repeat: -1,
                duration: 8,
                y: '2%',
                ease: 'power4.out',
                yoyo: true,
              }
        );
  }, [timeline, load]);

  return (
    <HeroElem>
      <div className='front'></div>
      <div className='back'></div>
      <div className='title'>
        <div>
          <h1 ref={(ref) => (headerRef.current[0] = ref)} className='heading'>
            Hi, I&apos;m Orji Modestus, 
          </h1>
        </div>
        <div>
          <h1 ref={(ref) => (headerRef.current[1] = ref)} className='heading'>
            a Software  Engineer.
          </h1>
        </div>
      </div>
      <div className='img__container'>
        <Image
          alt=''
          src={'/images/hand.webp'}
          width={550}
          height={550}
          objectFit='cover'
        ></Image>
      </div>
    </HeroElem>
  );
}

export default forwardRef(Hero);
