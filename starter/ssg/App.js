import { createElement as h } from "react";

function App() {
  return h(
    "div",
    null,
    h("h1", null, "Static Site Generation with React"),
    h("p", null, "This is a simple static site generated using React.")
  );
}

export default App;
