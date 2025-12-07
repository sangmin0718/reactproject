import React, { useState } from "react";
import Day3_1 from "./screens/Day3_1";
import Day3_2 from "./screens/Day3_2";
import Day3_3 from "./screens/Day3_3";
import Day3_4 from "./screens/Day3_4";

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

  if (page === 3) {
    return (
      <Day3_3
        onPrev={() => setPage(2)}
        onNext={() => setPage(4)}
      />
    );
  }

  return <Day3_4 onPrev={() => setPage(3)} />;
}
