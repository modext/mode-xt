import React, { forwardRef } from 'react';
import styles from '../styles/cursor.module.css';
import gsap from 'gsap';
import { lerp, getMousePos, getSiblings } from '../helpers/utils';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';

function Cursor({ reference }) {
  const mouseState = useRef({ x: 0, y: 0 }).current;
  const cursor = useRef(null);
  const curssorConfigs = useRef({
    x: { prev: 0, current: 0, amt: 0.24 },
    y: { prev: 0, current: 0, amt: 0.24 },
  }).current;

  function render() {
    curssorConfigs.x.current = mouseState.x;
    curssorConfigs.y.current = mouseState.y;
    for (const key in curssorConfigs) {
      curssorConfigs[key].prev = lerp(
        curssorConfigs[key].prev,
        curssorConfigs[key].current,
        curssorConfigs[key].amt
      );
    }
    cursor.current.style.transform = `translateX(${curssorConfigs.x.prev}px) translateY(${curssorConfigs.y.prev}px)`;
  }

  const scaling = useCallback((e) => {
    const targetElem = e.target;
    if (targetElem.classList.contains('root__play')) {
      cursor.current.classList.add(styles['add']);
      cursor.current.children[0].classList.add(styles['color']);
      animationScale(cursor.current.children[0], 0.23);
      return;
    }

    if (targetElem.classList.contains('title-head__outer')) {
      cursor.current.children[0].classList.add(styles['outline']);
      document.querySelector(`.${styles['arrow-cursor']}`).style.opacity = 1;
      cursor.current.classList.add(styles['add']);
      animationScale(cursor.current.children[0], 0.25);
      cursor.current.classList.add(styles['media-blend']);
      return;
    }
    cursor.current.classList.add(styles['media-blend']);
    animationScale(cursor.current.children[0], 0.38);
  }, []);

  const notScaled = useCallback((e) => {
    const targetElem = e.target;
    if (targetElem.classList.contains('root__play')) {
      cursor.current.classList.remove(styles['add']);
      cursor.current.children[0].classList.remove(styles['color']);
      animationScale(cursor.current.children[0], 0);
      return;
    }

    if (targetElem.classList.contains('title-head__outer')) {
      cursor.current.children[0].classList.remove(styles['outline']);
      document.querySelector(`.${styles['arrow-cursor']}`).style.opacity = 0;
      cursor.current.classList.remove(styles['add']);
      animationScale(cursor.current.children[0], 0);
      cursor.current.classList.remove(styles['media-blend']);
      return;
    }
    cursor.current.classList.remove(styles['media-blend']);
    animationScale(cursor.current.children[0], 0);
  }, []);

  function toggleListeners(element, mouse, classTag = null) {
    let elems = classTag
      ? reference.current
      : document.querySelectorAll(element);

    elems.forEach((item) => {
      item.addEventListener(
        mouse,
        mouse === 'mouseenter' ? scaling : notScaled
      );
    });
  }

  function mouseScale() {
    reference.current.forEach((item) => {
      if (item.matches(':hover')) {
        animationScale(cursor.current.children[0], 0.38);
      }
    });
    toggleListeners('.root__play', 'mouseenter');
    toggleListeners('.root__play', 'mouseleave');
    toggleListeners('.title-head__outer', 'mouseenter');
    toggleListeners('.title-head__outer', 'mouseleave');
    toggleListeners(reference.current, 'mouseenter', true);
    toggleListeners(reference.current, 'mouseleave', true);
  }

  function animationScale(elem, amount) {
    gsap.to(elem, {
      duration: 1.5,
      scale: amount,
      ease: 'back.out(1.7)',
    });
  }
  function onMouseMove() {
    curssorConfigs.x.prev = curssorConfigs.x.current = mouseState.x;
    curssorConfigs.y.prev = curssorConfigs.y.current = mouseState.y;
    gsap.to(`.${styles.cursor}`, {
      duration: 3,
      ease: 'back.out(1.7)',
      opacity: 1,
    });
    mouseScale();
    requestAnimationFrame(() => render());
  }

  function mouseReg(ev) {
    let val = getMousePos(ev);
    mouseState.x = val.x;
    mouseState.y = val.y;
    onMouseMove();
  }
  useEffect(() => {
    window.addEventListener('mousemove', mouseReg);
  }, []);

  return (
    <div ref={cursor} className={styles.cursor}>
      <div className={styles['cursor-media']}>
        <div></div>
        <div className={styles['arrow-cursor']}>
          <img src='/images/arrow.png' alt='' />
        </div>
      </div>
    </div>
  );
}

export default Cursor;
