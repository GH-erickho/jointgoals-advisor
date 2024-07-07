import { useState } from "react";
import { Button, Row } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";
import parse from "html-react-parser";
import Tiptap from "./components/Tiptap";

const EditBox = ({item, deleteItem}) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <Row>
      {!editMode && (
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "8px",
            }}
          >
            <h4
              style={{
                marginTop: "8px",
              }}
            >
              Summary Statement
            </h4>
            <Button
              variant="danger"
              onClick={async () => {
                const response = await fetch(
                  `http://localhost:8000/top-joint-goal`,
                  {
                    method: "DELETE",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(item),
                  }
                );
                if (response.status === 200) {
                  deleteItem();
                } else {
                  console.log(response);
                }
              }}
            >
              Delete
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Button
              onClick={() => setEditMode(true)}
              style={{ marginRight: "8px" }}
            >
              <PencilSquare />
            </Button>
            <div>{parse(item.statement)}</div>
          </div>
        </Row>
      )}
      {editMode && (
        <Tiptap
          initialContent={item.statement}
          cancel={() => setEditMode(false)}
          save={async (newStatement) => {
            const newGoal = { ...item, statement: newStatement };
            const response = await fetch(
              `http://localhost:8000/top-joint-goal`,
              {
                method: "PUT",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newGoal),
              }
            );
            if (response.status === 200) {
              setTopJointGoal(newGoal);
              setEditMode(false);
            } else {
              console.log(response);
            }
          }}
          deleteItem={async () => {
            const response = await fetch(
              `http://localhost:8000/top-joint-goal`,
              {
                method: "DELETE",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(goal),
              }
            );
            if (response.status === 200) {
              deleteTopJointGoal();
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
