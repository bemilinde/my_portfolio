import React, { useEffect } from 'react';
import '../styles/page/AboutMe.css';

const AboutMe = () => {
  useEffect(() => {
    const $sky = document.querySelector(".sky");

    // 브라우저 창 크기에 따른 별 생성
    const makeStars = () => {
      // 브라우저 가장 큰 크기
      const maxSize = Math.max(window.innerWidth, window.innerHeight);

      // 랜덤한 X 위치 값
      const getRandomX = () => Math.random() * maxSize;

      // 랜덤한 Y 위치 값
      const getRandomY = () => Math.random() * maxSize;

      // 랜덤한 크기 (circle는 반지름이 크기)
      const randomRadius = () => Math.random() * 0.7 + 0.6;

      // 임의의 값
      const _size = Math.floor(maxSize / 2);

      const htmlDummy = new Array(_size).fill().map((_, i) => {
        return `<circle class='star'
        cx=${getRandomX()}
        cy=${getRandomY()}
        r=${randomRadius()}
        className="star" />`;
      }).join('');

      $sky.innerHTML = htmlDummy;
    };

    // 브라우저 창 크기 변경 시 별 생성 함수 호출
    const handleResize = () => {
      makeStars();
    };

    // 최초 로드 시 별 생성 함수 호출
    makeStars();

    // 리사이즈 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    // 언마운트 시 리사이즈 이벤트 리스너 해제
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="backSky">
      <svg className="sky"></svg>
    </div>
  );
};

export default AboutMe;
