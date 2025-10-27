import { createElement as h, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return h(
    "div",
    null,
    h("h1", null, "Server-Side Rendering with React"),
    h("p", null, "This page is rendered on the server using React."),
    h("button", { onClick: () => setCount(count + 1) }, `Count: ${count}`)
  );
}

export default App;
