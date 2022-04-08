import React from "react";

export default function DownloadAsMD(props) {
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([props.mdtxt], {
      type: "text/md"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.md";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div>
      <button onClick={downloadTxtFile}>Download MD</button>
    </div>
  );
}