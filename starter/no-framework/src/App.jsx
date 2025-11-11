import { Suspense } from "react";
import ServerComponent from "./ServerComponent";
import ClientComponent from "./ClientComponent";

export default function App() {
  console.log("Rendering App server component");

  // you can only make server components children of client components or other server components
  // you cannot make client components children of server components
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1>Notes App</h1>
      <ServerComponent />
      <ClientComponent />
    </Suspense>
  );
}
