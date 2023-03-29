import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Links({ href, src: Component }) {
  return (
    <Link passHref href={href}>
      <a
        style={{
          marginLeft: '6rem',
        }}
        rel='noreferrer'
        target='_blank'
      >
        {typeof Component !== 'string' ? (
          <Component
            style={{
              width: '24px',
              height: '24px',
              fill: 'white',
            }}
          ></Component>
        ) : (
          <Image alt='' src={Component} width='23px' height='23px' />
        )}
      </a>
    </Link>
  );
}

export default Links;
