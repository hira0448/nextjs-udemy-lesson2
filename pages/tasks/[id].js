import { useEffect } from "react/cjs/react.production.min";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import useSWR from "swr";
import { getAllTasksIds, getTaskData } from "../../lib/tasks";

const fetcher = (url) => fetcher(url).then((res) => res.json());

export default function Post({ staticTask, id }) {
  const router = useRouter();
  const { data: task, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-task/${id}`,
    fetcher,
    { initialData: staticTask }
  );
  useEffect(() => {
    mutate();
  }, []);
  if (router.isFallback || !task) {
    return <div>Loading...</div>;
  }
  return (
    <Layout title={task.title}>
      <span className="mb-4">
        {"ID : "}
        {task.id}
      </span>
      <p className="mb-4 text-xl font-bold">{task.title}</p>
      <p className="mb-12">{task.created_at}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllTasksIds();

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { task: staticTask } = await getTaskData(params.id);

  return {
    props: {
      id: staticTask.id,
      staticTask,
    },
    revalidate: 3,
  };
}
