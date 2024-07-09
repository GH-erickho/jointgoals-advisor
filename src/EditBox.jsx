import { useState } from "react";
import { Button, Row } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";
import parse from "html-react-parser";
import Tiptap from "./components/Tiptap";

const EditBox = ({ path, item, itemKey, deleteItem, setItem }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <Row>
      {!editMode && (
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Button
              onClick={() => setEditMode(true)}
              style={{ marginRight: "8px" }}
            >
              <PencilSquare />
            </Button>
            <div>{parse(item[itemKey])}</div>
          </div>
        </Row>
      )}
      {editMode && (
        <Tiptap
          initialContent={item[itemKey]}
          cancel={() => setEditMode(false)}
          save={async (newStatement) => {
            const newItem = { ...item, [itemKey]: newStatement };
            const response = await fetch(`https://jointgoals.vercel.app/${path}`, {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newItem),
            });
            if (response.status === 200) {
              setItem(newItem);
              setEditMode(false);
            } else {
              console.log(response);
            }
          }}
          deleteItem={async () => {
            const response = await fetch(`https://jointgoals.vercel.app/${path}`, {
              method: "DELETE",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(item),
            });
            if (response.status === 200) {
              deleteItem();
            } else {
              console.log(response);
            }
          }}
        />
      )}
    </Row>
  );
};

export default EditBox;
