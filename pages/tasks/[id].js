import { useEffect } from "react/cjs/react.production.min";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import useSWR from "swr";
import { getAllTasksIds, getTaskData } from "../../lib/tasks";
