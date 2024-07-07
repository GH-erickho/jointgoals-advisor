import { useState } from "react";
import { PencilSquare } from "react-bootstrap-icons";
import parse from "html-react-parser";
import Tiptap from "./Tiptap";
import { Button } from "react-bootstrap";

const TopJointGoalSummary = ({ goal, setTopJointGoal }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "col",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {!editMode && (
          <>
            <Button onClick={() => setEditMode(true)}>
              <PencilSquare />
            </Button>
            <div>{parse(goal.statement)}</div>
          </>
        )}
        {editMode && (
          <Tiptap
            initialContent={goal.statement}
            cancel={() => setEditMode(false)}
            save={async (newStatement) => {
              const newGoal = { ...goal, statement: newStatement };
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
          />
        )}
      </div>
    </div>
  );
};

export default TopJointGoalSummary;
