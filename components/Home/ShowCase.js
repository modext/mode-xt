import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { ShowcaseRoot } from '../styles/ShowcaseRoot';
import LinksElem from './LinksElem';
import linksData from '../linksfile.json'; 

function ShowCase({
  item: {
    title,
    fallback_url,
    type,
    typeApp,
    url = '/videos/video1.mp4',
    index,
    developmentTech,
    designTech,
    length,
    platform = 'web',
    poster,
  },
}) {
  gsap.registerPlugin(ScrollTrigger);
  const root = useRef(null);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: root.current,
        start: `top center`,
        onEnter: () => {
          document.querySelector(`.root__vid-cont--${index} video`).play();
          setClicked(true);
        },
        onEnterBack: () => {
          document.querySelector(`.root__vid-cont--${index} video`).play();
          setClicked(true);
        },
        onLeave: () => {
          document.querySelector(`.root__vid-cont--${index} video`).pause();
          setClicked(false);
        },
        onLeaveBack: () => {
          document.querySelector(`.root__vid-cont--${index} video`).pause();
          setClicked(false);
        },
        end: '+=1200',
      },
    });
    timeline
      .to(`.root__keys--${index}`, {
        y: 0,
        stagger: 0.09,
        duration: 0.25,
        ease: 'back.out(1.7)',
      })
      .to(`.root__text--${index}`, {
        opacity: 1,
      })
      .to(
        `.root__num--${index}`,
        {
          opacity: 1,
        },
        '-=1.4'
      )
      .to(
        `.root__vid-cont--${index}`,
        {
          scale: 1,
          opacity: 1,
          ease: 'back.out(1.7)',
        },
        '-=1.6'
      )
      .to(
        `.root__vid-cont--${index}`,
        {
          border: '0.6rem solid #DDD1C7',
        },
        '-=1.2'
      )
      .to(`.root__wrapper--${index}`, {
        opacity: 1,
        stagger: 0.2,
      });
  }, []);

  const itemLinks = linksData[index] || [];

  return (
    <ShowcaseRoot ref={root}>
      <div className={`root__num root__num--${index}`}>
        <span>{index}</span>/<span>{length}</span>
      </div>
      <div className='title-head'>
        <a
          rel='noreferrer'
          target={platform === 'mobile' ? '_self' : '_blank'}
          href={platform === 'mobile' ? '#' : itemLinks[0]?.link}
        >
          <h1 className={`title-head__outer root__hidden`}>
            {title.split('').map((i, k) => {
              return (
                <span key={k} className={`root__keys root__keys--${index}`}>
                  {i}
                </span>
              );
            })}
          </h1>
        </a>

        <div>
          <div className={`root__heading root__hidden`}>
            <div className={`root__text root__text--${index}`}>{type}</div>
          </div>
          <div className={`title-head__inner root__hidden`}>
            {typeApp.split(' ').map((i, k) => {
              return (
                <span
                  key={k}
                  className={`root__keys root__keys--modifier root__keys--${index}`}
                >
                  {i}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          if (!clicked) {
            setClicked(true);
            document.querySelector(`.root__vid-cont--${index} video`).play();
            return;
          }
          if (clicked) {
            setClicked(false);
            document.querySelector(`.root__vid-cont--${index} video`).pause();
            return;
          }
        }}
        className={`root__vid-cont ${
          platform === 'mobile' ? 'root__vid-cont--mobile' : ''
        } root__vid-cont--${index}`}
      >
        <div
          style={{
            visibility: clicked ? 'hidden' : 'visible',
          }}
          className={`root__play root__play--${index}`}
        >
          <img src='/images/play.png' alt='' />
        </div>

        <video preload='auto' poster={poster} muted className='root__vid'>
          <source src={fallback_url} />
          <source src={url} />
        </video>
      </div>
      <div className='root__bottom'>
        <div className={`root__wrapper root__wrapper--${index}`}>
          <div className='root__heading root__heading--1'>Development :</div>
          <div className='root__elements root__elements--dev'>
            {developmentTech.map((elem, idx) => {
              return (
                <div key={idx} className='root__heading root__heading--2'>
                  {elem.toLowerCase()}
                  {idx === developmentTech.length - 1 ? '' : ','} &nbsp;
                </div>
              );
            })}
          </div>
        </div>
        <div className={`root__wrapper root__wrapper--${index}`}>
          <div className='root__heading root__heading--1'>Design :</div>
          <div className='root__elements'>
            {designTech.map((elem, idx) => {
              return (
                <div key={idx} className='root__heading root__heading--2'>
                  {elem}
                  {idx === designTech.length - 1 ? '' : ','} &nbsp;
                </div>
              );
            })}
          </div>
        </div>
        <div className={`root__wrapper root__wrapper--${index}`}>
          <div className='root__heading root__heading--1'>Links :</div>
        
          <LinksElem links={itemLinks} title={title}></LinksElem>
        </div>
      </div>
    </ShowcaseRoot>
  );
}

export default ShowCase;
