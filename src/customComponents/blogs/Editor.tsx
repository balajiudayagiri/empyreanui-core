import React from "react";
import "react-quill/dist/quill.snow.css";
import "./blogs.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export interface EditorProps {
  onChangeText: (content: string) => void;
  text?: string;
}

const Editor: React.FC<EditorProps> = ({ onChangeText, text }) => {
  const handleChange = (value: string) => {
    onChangeText(value);
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      [{ direction: "rtl" }],
      [{ color: [] }, { background: [] }],
      ["link", "image"],
      ["code-block"],
      ["clean"],
    ],
  };

  const formats = [
    "size",
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "script",
    "indent",
    "align",
    "direction",
    "color",
    "background",
    "link",
    "image",
    "video",
    "code-block",
  ];

  return (
    <div className="p-0 blogs">
      <ReactQuill
        theme="snow"
        value={text}
        onChange={handleChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
