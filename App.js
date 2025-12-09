import React, { useState } from "react";
import Spring from "./screens/Spring";
import Summer from "./screens/Summer";
import Autumn from "./screens/Autumn";
import Winter from "./screens/Winter";
import Diagram from "./screens/Diagram";
import Day3_1 from "./screens/Day3_1";
import Day3_2 from "./screens/Day3_2";
import Day3_3 from "./screens/Day3_3";
import Day3_4 from "./screens/Day3_4";

export default function App() {
  const [page, setPage] = useState(1);

  if (page === 1) {
    return <Spring onNext={() => setPage(2)} />;
  }

  if (page === 2) {
    return <Summer onNext={() => setPage(3)} />;
  }

  if (page === 3) {
    return <Autumn onNext={() => setPage(4)} />;
  }

  if (page === 4) {
    return <Winter onNext={() => setPage(5)} />;
  }

  if (page === 5) {
    return <Diagram onNext={() => setPage(6)} />;
  }

  if (page === 6) {
    return <Day3_1 onNext={() => setPage(7)} />;
  }

  if (page === 7) {
    return (
      <Day3_2
        onPrev={() => setPage(6)}
        onNext={() => setPage(8)}
      />
    );
  }

  if (page === 8) {
    return (
      <Day3_3
        onPrev={() => setPage(7)}
        onNext={() => setPage(9)}
      />
    );
  }

  if (page === 9) {
    return (
      <Day3_4
        onPrev={() => setPage(8)}
      />
    );
  }

  return null;
}
