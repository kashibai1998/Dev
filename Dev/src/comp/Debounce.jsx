import React, { useEffect, useMemo, useState } from "react";
import useDebounce from "./useDebounce";

const page = 10;

const Debounce = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [curr, setCurr] = useState(0);

  const deebounceVal = useDebounce(search, 300);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=200");
    const data = await res.json();
    setResult(data.products);
  };

  const filtrRes = useMemo(() => {
    console.log("deebounceVal");
    if (!deebounceVal) return result;

    let searchWords = deebounceVal.toLowerCase().split(" ");
    setCurr(0);
    return result.filter((r, id) => {
      let title = r.title.toLowerCase();
      return searchWords.every((word) => title.includes(word));
    });
  }, [deebounceVal, result]);

  const total = result.length;
  const noOfPages = Math.floor(total / page);
  const start = curr * page;
  const end = start + page;

  return (
    <div>
      <h2>Debounce</h2>

      {[...Array(noOfPages)].keys().map((n) => (
        <button key={n} onClick={() => setCurr(n)}>
          {n}
        </button>
      ))}
      <br />
      <br />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filtrRes.slice(start, end).map((r) => {
        return <div key={r.id}>{r.title}</div>;
      })}
    </div>
  );
};

export default Debounce;
