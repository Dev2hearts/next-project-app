import React from 'react';
import Animation from './animation';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          트랜디한 개발자 박지성의 포트폴리오 !
          <br className="hidden lg:inline-block" />
          Next.js를 사용한 포트폴리오 소개 페이지 입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          전문지식과 열정을 바탕으로 사용자와 기업에게 가치를 전달하고, 웹
          서비스와 애플리케이션을 통해 작품 속 인터렉션을 배후에서 조종하는 이
          공간에서 기술력과 행복을 동시에 창조하고자 합니다. SI 기업에서
          정부사업에 참여하며 운영팀의 일원으로 총체적인 프로젝트 관리 경험을
          쌓아왔습니다. 이를 통해 고객사의 기능 요청과 디자인, 작업 계획 등을
          구성하고 팀원들과 긴밀하게 협업하는 중요성을 깨닫게 되었습니다. 이러한
          과정에서 프론트엔드 개발자로의 꿈이 점점 구체화되면서 AI와 데이터
          분석에 대한 열정도 불어나게 되었습니다. 사용자 경험에 초점을 맞춘
          프론트엔드 개발자로 성장하기 위해, React와 같은 강력한 프레임워크를
          사용해 구조적이고 유연한 웹 애플리케이션을 개발하고자 합니다. 컴포넌트
          기반의 설계와 상태 관리 도구를 통한 상태 관리 방법론과 같은 프론트엔드
          관련 기술을 익히고 팀 및 백엔드 개발자와의 협업을 통해 프로젝트를
          완성해 나가는 경험이 있습니다. 빠르게 흐르는 웹개발 트렌드와 기술을
          따라잡는 것은 중요하다고 생각합니다. 따라서 지속적인 학습과 연구를
          통해 최신 개발 동향에 적극 대응하며, 사용자의 니즈를 충족시키는 최고의
          웹 애플리케이션을 설계할 수 있는 UI/UX 능력을 쌓아가려 합니다.
          프론트엔드 분야뿐만 아니라, 백엔드와 인프라에 대한 이해도 필수적이라고
          생각해 파이썬, 자바 같은 프로그래밍 언어와 서버와 관련된 기술을
          공부하는데 주력하고 있습니다. 마지막으로, 웹 이외에 앱 개발에 대한
          열정도 가지고 있어 충분한 개발 경험을 쌓아 좀 더 원활한 시너지를 내기
          위해 Flutter, React Native, Kotlin, Swift 등 관련 기술 학습에 몰두하고
          있습니다. 웹, 앱, 그리고 데이터 분석을 아울러 가치를 창출해 내려는
          저의 꿈은 대화상자 사이에서 세상을 만드는 것입니다. 기술력을 높이고
          사용자 경험을 개선해 사용자와 함께 성장하는 데 기여할 수 있는 미래의
          프론트엔드 개발자 박지성이 되기 위해 부단한 노력 외에도 청신호를 잊지
          않겠습니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
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
