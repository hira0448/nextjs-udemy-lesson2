import { useEffect } from "react/cjs/react.production.min";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import useSWR from "swr";
import { getAllTasksIds, getTaskData } from "../../lib/tasks";

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
