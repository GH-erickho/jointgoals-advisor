import { useState } from "react";
import { Button, Row } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";
import Tiptap from "./Tiptap";

const EditAction = ({actionResult, setActionResults}) => {
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
            <div>{parse(actionResult.action)}</div>
          </div>
        </Row>
      )}
      {editMode && (
        <Tiptap
          initialContent={item.statement}
          cancel={() => setEditMode(false)}
          save={async (newStatement) => {
            const newActionResult = {...actionResult, action: newStatement};
            const response = await fetch(`https://jointgoals.vercel.app/goal-action-result`, {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newActionResult),
            });
            if (response.status === 200) {
              setItem(newItem);
              setEditMode(false);
            } else {
              console.log(response);
            }

            // const newItem = { ...item, statement: newStatement };
            // const response = await fetch(`https://jointgoals.vercel.app/${path}`, {
            //   method: "PUT",
            //   headers: {
            //     Accept: "application/json",
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify(newItem),
            // });
            // if (response.status === 200) {
            //   setItem(newItem);
            //   setEditMode(false);
            // } else {
            //   console.log(response);
            // }
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
}

export default EditAction;
