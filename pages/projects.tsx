import Layout from '@/components/layout';
import ProjectsItem from '@/components/projects/prohect-item';
import { DATABASE_ID, TOKEN } from '@/config';
import Head from 'next/head';

const Projects = ({ projects }: any) => {
  console.log(projects);
  return (
    <Layout>
      <div className="flex flex-col justify-center min-h-screen mb-10 px-6">
        <Head>
          <title>박지성의 포트폴리오</title>
          <meta name="description" content="오늘도 화이팅!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">
          총 프로젝트 :
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>
        <div className="grid grid-cols-1 md:gird-cols-2 gap-8 xs:w-full m-6 py-10">
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
  };
}
