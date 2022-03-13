import fetch from "node-fetch";

export async function getAllTasksData() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`)
  );
  const tasks = await res.json();
  const filteredPosts = tasks.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  return filteredTasks;
}

export async function getAllTasksIds() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`)
  );
  const tasks = await res.json();
  return {
    params: {
      id: String(task.id),
    },
  };
}
