import "./Tiptap.scss";

import { Color } from "@tiptap/extension-color";
import FontFamily from "@tiptap/extension-font-family";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Extension } from '@tiptap/react';

const MenuBar = ({ deleteItem }) => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="control-group">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "5px",
        }}
      >
        <div style={{ display: "flex" }}>
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
          <select
            id="font-family"
            onChange={(e) =>
              editor.chain().focus().setFontFamily(e.target.value).run()
            }
          >
            <option value="Serif">Serif</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="monospace">Monospace</option>
            <option value="cursive">Cursive</option>
            <option value="Inter">Inter</option>
          </select>
          <input type="number" id="font-size" name="font-size" step="1" defaultValue={16} onChange={e => editor.chain().focus().setFontSize(e.target.value).run()} />
          <select
            id="color"
            onChange={(e) =>
              editor.chain().focus().setColor(e.target.value).run()
            }
          >
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="violet">Violet</option>
          </select>
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
        <Button variant="danger" onClick={deleteItem}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ({ initialContent, cancel, save, deleteItem }) => {
  const [content, setContent] = useState(initialContent);
  return (
    <Stack gap={3} style={{ marginBottom: "8px", marginTop: "8px" }}>
      {" "}
      <Row>
        <EditorProvider
          slotBefore={<MenuBar deleteItem={deleteItem} />}
          extensions={extensions}
          content={initialContent}
          onUpdate={({ editor }) => setContent(editor.getText())}
        ></EditorProvider>
      </Row>
      <Row>
        <Col>
          <Button
            variant="secondary"
            className="w-100"
            onClick={() => cancel()}
          >
            Cancel
          </Button>
        </Col>
        <Col>
          <Button className="w-100" onClick={() => save(content)}>
            Save
          </Button>
        </Col>
      </Row>
    </Stack>
  );
};

export const FontSize = Extension.create({
  name: 'fontSize',
  addOptions() {
      return {
          types: ['textStyle'],
      };
  },
  addGlobalAttributes() {
      return [
          {
              types: this.options.types,
              attributes: {
                  fontSize: {
                      default: null,
                      parseHTML: element => element.style.fontSize.replace(/['"]+/g, ''),
                      renderHTML: attributes => {
                          if (!attributes.fontSize) {
                              return {};
                          }
                          return {
                              style: `font-size: ${attributes.fontSize}`,
                          };
                      },
                  },
              },
          },
      ];
  },
  addCommands() {
      return {
          setFontSize: fontSize => ({ chain }) => {
              return chain()
                  .setMark('textStyle', { fontSize: fontSize + "px" })
                  .run();
          },
          unsetFontSize: () => ({ chain }) => {
              return chain()
                  .setMark('textStyle', { fontSize: null })
                  .removeEmptyTextStyle()
                  .run();
          },
      };
  },
});

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
  FontFamily,
  FontSize,
];
