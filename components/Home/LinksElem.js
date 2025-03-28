import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

function LinksElem({ links, title }) {
  return (
    <div className='root__elements root__elements--1'>
      {links.map((elem, idx) => {
        return (
          <>
            <div key={idx} className='root__heading root__heading--2'>
              <Image alt='' src={elem.icons}  width={20} height={20} />
              <Link href={elem.link} target="_blank" rel="noreferrer">
                <div>{elem.link}</div>
              </Link>

            </div>
          </>
        );
      })}
      {title === 'Brance-Admin.' ? (
        <div className='root__cred'>
          Use Credentials: <br />
          Email: <span>jamesadmin123@gmail.com</span>
          <br />
          Password: <span>Admin123</span>
          <br />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default LinksElem;
