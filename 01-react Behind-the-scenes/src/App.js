import React from "react";
import { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOoutput from "./components/demo/demoOutput";

function App() {
  console.log("app");
  const [showParagraph, setShowParagrpah] = useState(false);
  const [allowToggling, setAllowToggling] = useState(false);

  const toggleParagraph = useCallback(() => {
    if (allowToggling) {
      setShowParagrpah((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggling]);

  const allowToggleHandler = () => {
    setAllowToggling(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOoutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow toggling</Button>
      <Button onClick={toggleParagraph}>Show Paragraph</Button>
    </div>
  );
}

export default App;
