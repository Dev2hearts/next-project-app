import Link from 'next/link';
import Image from 'next/image';

const ProjectsItem = ({ aProject }: any) => {
  const title = aProject.properties.이름.title[0].text.content;
  const githubLink = aProject.properties.GitHub.rich_text[0]?.href;
  const figmaLink = aProject.properties.Figma.rich_text[0]?.href;
  const description = aProject.properties.Description.rich_text[0].plain_text;
  const coverImage = aProject.cover.file.url;
  const tags = aProject.properties.Stack.multi_select;
  const start = aProject.properties.WorkPeriod.date?.start;
  const end = aProject.properties.WorkPeriod.date?.end;
  const pjUrl = aProject.url;

  const calcPeriod = (start: any, end: any) => {
    if (start || end) {
      const startDateStringArray = start.split('-');
      const endDateStringArray = end.split('-');
      var startDate: any = new Date(
        startDateStringArray[0],
        startDateStringArray[1],
        startDateStringArray[2],
      );
      var endDate: any = new Date(
        endDateStringArray[0],
        endDateStringArray[1],
        endDateStringArray[2],
      );

      const diffInMs = Math.abs(endDate - startDate);
      const result = diffInMs / (1000 * 60 * 60 * 24);

      return result;
    }
  };

  return (
    <div className="project-card">
      <Link href={pjUrl} target="_blank">
        <Image
          className="rounded-t-xl"
          src={coverImage}
          width={500}
          height={300}
          alt="cover imgae"
          layout="responsive"
          objectFit="cover"
          quality={100}
          style={{ maxHeight: '300px' }}
          priority={true}
        />
      </Link>
      <div className="p-4 flex-col flex">
        <h1 className="text-2xl font-bold ">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        {githubLink ? (
          <>
            <Link
              href={githubLink}
              className="mt-3 text-xl font-bold"
              target="_blank"
            >
              깃허브 바로가기 !{' '}
            </Link>
            <Link
              href={figmaLink}
              className="mt-3 text-xl font-bold"
              target="_blank"
            >
              피그마 바로가기 !{' '}
            </Link>
          </>
        ) : null}
        {start && end ? (
          <p className="my-1">
            작업기간 : {start} ~ {end} ({calcPeriod(start, end)}일)
          </p>
        ) : null}
        <div className="flex items-start mt-2 flex-wrap">
          {tags.map((aTag: any) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 mt-2"
              key={aTag.id}
              // style={{ background: `${aTag.color}`, color: 'black' }}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsItem;
