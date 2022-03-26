import { useContext } from "react/cjs/react.production.min";
import { StateContext } from "../context/StateContext";
import Cookies from "universal-cookie";

const cookie = new Cookies();

export default function TaskForm({ taskCreated }) {
  const { SelectedTask, setSelectedTask } = useContext(StateContext);
}

const create = async (e) => {
  e.preventDefault();
};
