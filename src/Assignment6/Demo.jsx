import React, { useState } from "react";
import useFetch from "./hooks/useFetch";
import useDebounce from "./hooks/useDebounce";
import usePrevious from "./hooks/usePrevious";

function Demo() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);
  const prevCount = usePrevious(count);

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <h2>Custom Hooks Demo</h2>

      {/* usePrevious */}
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <hr />

      {/* useDebounce */}
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Debounced Value: {debouncedSearch}</p>

      <hr />

      {/* useFetch */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data &&
        data.map((user) => <p key={user.id}>{user.name}</p>)}
    </div>
  );
}

export default Demo;
