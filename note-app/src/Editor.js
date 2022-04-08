import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import DownloadAsMD from "./DounloadAsMD";

export default function Editor() {
  const [value, setValue] = useState("**Hello World!**");

  return <div>
    <DownloadAsMD mdtxt={value}/>
    <MDEditor className="container" value={value} onChange={setValue} height="80vh"/>;
  </div> 
}
