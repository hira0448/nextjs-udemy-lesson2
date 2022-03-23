import Link from "next/link";
import Cookies from "universal-cookie";

const cookie = new Cookies();

export default function Task({ task }) {
  const deleteTask = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/tasks/${task.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authrization: `JWT ${cookies.get("access_token")}`,
      },
    });
  };

  return (
    <div>
      <span>{task.id}</span>
      {" : "}
      <Link href={`/tasks/${task.id}`} passHref>
        <span className="cursor-pointer text-white border-b border-gray-500 hover:bg-gray-600">
          {task.title}
        </span>
      </Link>
    </div>
  );
}
