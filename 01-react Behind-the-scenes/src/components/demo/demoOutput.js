import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOoutput = (props) => {
  console.log("tree");
  return <MyParagraph>{props.show ? "This is new !" : ""}</MyParagraph>;
};

export default React.memo(DemoOoutput);
