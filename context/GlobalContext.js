import gsap from 'gsap';
import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const GlobalContext = createContext(null);

function useGlobalContext() {
  return useContext(GlobalContext);
}

function GlobalContextProvider({ children }) {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    window.addEventListener('load', () => {
      gsap.to('body', {
        visibility: 'visible',
        opacity: 1,
        duration: 0.01,
        ease: 'back.out(1.7)',
      });
      setLoad(true);
    });
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        load,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContextProvider, useGlobalContext };
