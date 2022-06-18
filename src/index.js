import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import MainContent from "./MainContent";

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
