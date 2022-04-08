import Split from "react-split";
import Editor from "./Editor";

export default function App() {
  return (
    <Split
      sizes={[30, 20, 50]}
      direction="horizontal"
      className="split"
      gutterAlign="center"
    >
      <div className="p1">
      
      </div>
      <div className="p2">
        <p>React Split</p>
      </div>
      <div className="p3">
        <Editor/>
      </div>
    </Split>
  );
}
