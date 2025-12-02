import React, { useState } from "react";
import Day3_1 from "./screens/Day3_1";
import Day3_2 from "./screens/Day3_2";
import Day3_3 from "./screens/Day3_3";

export default function App() {
  const [page, setPage] = useState(1);

  if (page === 1) {
    return <Day3_1 onNext={() => setPage(2)} />;
  }
  if (page === 2) {
    return (
      <Day3_2
        onPrev={() => setPage(1)}
        onNext={() => setPage(3)}
      />
    );
  }
  return <Day3_3 onPrev={() => setPage(2)} />;
}
