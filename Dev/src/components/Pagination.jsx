import React, { useEffect, useMemo, useState } from "react";

const useDebounce = (value, delay) => {
  const [debounceVal, setDebounceVal] = useState(value);
  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setDebounceVal(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value]);
  return debounceVal;
};

const PAGESIZE = 10;
const Pagination = () => {
  const [res, setRes] = useState([]);
  const [curr, setCurr] = useState(0);
  const [search, setSearch] = useState("");
  const debounceVal = useDebounce(search);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://dummyjson.com/products?limit=200")
      .then((res) => res.json())
      .then((data) => setRes(data.products));
  };

  const fltrRes = useMemo(() => {
    if (!debounceVal) return res;
    let searchWords = debounceVal.toLowerCase().split(" ");
    return res.filter((r) => {
      let title = r.title.toLowerCase();
      return searchWords.every((word) => title.includes(word));
    });
  }, [debounceVal,res]);

  const noOfPages = Math.floor(res.length / PAGESIZE);
  const start = curr * PAGESIZE;
  const end = start + PAGESIZE;
  return (
    <div>
      <div>
        {[...Array(noOfPages).keys()].map((n) => {
          return (
            <button key={n} onClick={() => setCurr(n)}>
              {n + 1}
            </button>
          );
        })}
      </div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {fltrRes.slice(start, end).map((r) => {
          return (
            <div
              key={r.id}
              style={{
                border: "1px solid black",
                width: "150px",
                height:"100px",
                padding: "10px",
              }}
            >
              <div>{r.title}</div>
              <img src={r.thumbnail} width={50} height={50} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
