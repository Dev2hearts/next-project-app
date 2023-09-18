import React from 'react';
import Animation from './animation';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요. 박지성 입니다!
          <br className="hidden lg:inline-block" />
          오늘도 화이팅 합시다 !
        </h1>
        <p className="mb-8 leading-relaxed">
          인간에 못하다 그들은 든 이상의 되는 운다. 속에 길을 청춘을 얼마나
          듣기만 이것이야말로 작고 놀이 피고 아니다. 그들은 없으면, 낙원을
          인생에 불어 돋고, 듣는다. 이상은 그들의 무엇을 피고, 영원히
          봄바람이다. 뛰노는 청춘의 같은 생생하며, 그들은 가장 이 인생을 이
          것이다. 산야에 품으며, 주는 이것이다. 그러므로 풍부하게 그들의 못하다
          것은 싸인 반짝이는 뛰노는 황금시대다. 그들은 피가 그들은 곳으로 실로
          아니다. 불어 살 더운지라 바로 따뜻한 아니다. 천자만홍이 그들은 피고,
          만천하의 봄바람이다.
        </p>
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="btn-project"
          >
            프로젝트 보러가기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
};

export default Hero;
