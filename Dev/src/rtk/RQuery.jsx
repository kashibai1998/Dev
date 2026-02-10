import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useGetTodosQuery } from "./RTKQuery";
const fetchTodos = async () => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );

  return res.data;
};

export default function RQuery() {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["todos"],
  //   queryFn: fetchTodos,
  // });

  const { data, isLoading, error } = useGetTodosQuery("", {
    // pollingInterval:10000
    // refetchOnReconnect:()=<{}
  });

  if (isLoading) return <div>Loading..</div>;

  return (
    <div>
      <h2>React - Query</h2>
      {data.map((t) => (
        <div key={t.id}>{t.title}</div>
      ))}
    </div>
  );
}
