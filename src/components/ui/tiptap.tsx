"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <EditorContent
      className="bg-white text-black p-5 rounded-s text-2xl"
      editor={editor}
    />
  );
};

export default Tiptap;
