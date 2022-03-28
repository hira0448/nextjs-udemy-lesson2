import { useContext } from "react/cjs/react.production.min";
import { StateContext } from "../context/StateContext";
import Cookies from "universal-cookie";

const cookie = new Cookies();

export default function TaskForm({ taskCreated }) {
  const { SelectedTask, setSelectedTask } = useContext(StateContext);
}

const create = async (e) => {
  e.preventDefault();
  await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/tasks`, {
    method: "POST",
    body: JSON.stringify({ title: SelectedTask.title }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${cookie.get("access_token")}`,
    },
  }).then((res) => {
    if (res.status === 401) {
      alert("JWT Taken not valid");
    }
  });
  setSelectedTask({ id: 0, title: "" });
  taskCreated();
};

const update = async (e) => {
  e.preventDefault();
};
