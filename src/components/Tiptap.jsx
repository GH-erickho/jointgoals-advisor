import "./Tiptap.scss";

import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useState } from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="control-group">
      <div className="button-group">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          Strike
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          Redo
        </button>
      </div>
    </div>
  );
};

const CancelOrSave = () => {
  return (
    <Row>
      <Col>
        <Button>Cancel</Button>
      </Col>
      <Col>
        <Button>Save</Button>
      </Col>
    </Row>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];

export default ({initialContent, cancel, save}) => {
  const [content, setContent] = useState(initialContent);
  return (
    <Stack gap={3} className="p-3 my-2" style={{ border: "1px solid black" }}>
      {" "}
      <Row>
        <EditorProvider
          slotBefore={<MenuBar />}
          extensions={extensions}
          content={initialContent}
          onUpdate={({editor}) => setContent(editor.getText())}
        ></EditorProvider>
      </Row>
      <Row>
        <Col>
          <Button variant="secondary" className="w-100" onClick={() => cancel()}>Cancel</Button>
        </Col>
        <Col>
          <Button className="w-100" onClick={() => save(content)}>Save</Button>
        </Col>
      </Row>
    </Stack>
  );
};
