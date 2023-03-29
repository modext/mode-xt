import React from 'react';
import { useRef } from 'react';
import { FooterElem } from './styles/Footer';

function Footer() {
  const { current: links } = useRef([
    { name: 'Github', link: 'https://github.com/modext/' },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/orji-modestus/',
    },
  ]);
  return (
    <FooterElem>
      <div> &#169; Designed and Developed by Modext.</div>
      <div className='list'>
        {links.map((item, idx) => {
          return (
            <div key={idx}>
              <a href={item.link} rel='noreferrer' target='_blank'>
                {item.name}
              </a>
            </div>
          );
        })}
      </div>
    </FooterElem>
  );
}

export default Footer;
