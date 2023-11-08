import Layout from '@/components/layout';
import ProjectsItem from '@/components/projects/project-item';
import { DATABASE_ID, TOKEN } from '@/config';
import Head from 'next/head';

const Projects = ({ projects }: any) => {
  console.log(projects);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <Head>
          <title>박지성의 포트폴리오</title>
          <meta name="description" content="오늘도 화이팅!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-5xl">
          총 프로젝트 :
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>
        <h2 className='pt-5 text-xl'>이미지 클릭시 해당 프로젝트 상세페이지로 이동합니다 !</h2>
        <div
          className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2"
          style={{ maxWidth: '1400px' }}
        >
          {projects.results.map((aProject: any) => (
            <ProjectsItem aProject={aProject} key={aProject.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

// 빌드 타임에 호출 됨. SSG
export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
      sorts: [
        {
          timestamp: 'last_edited_time',
          direction: 'ascending',
        },
      ],
    }),
  };
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options,
  );
  // .then(response => response.json())
  // .then(response => console.log(response))
  // .catch(err => console.log(err));
  const projects = await res.json();

  return {
    props: { projects },
    revalidate: 60, // 데이터 변경이 있으면 갱신 1초 마다 - 갱신 주기 설정 가능
  };
}
