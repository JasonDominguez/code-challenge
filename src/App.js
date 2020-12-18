import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import DataTable from "./components/DataTable";

function App() {
  const [page, setPage] = useState({
    firstSeen: "",
    start: "",
    end: "",
    direction: "next"
  });

  function handleChange(newPage) {
    setPage({
      firstSeen: newPage.firstSeen,
      start: newPage.start,
      end: newPage.end,
      direction: newPage.direction
    });
  };
  
  return (
    <div className="App">
        <h1>Paymerang Code Challenge</h1>
        <DataTable page={page} onClick={handleChange} />
    </div>
  );
}

export default App;
