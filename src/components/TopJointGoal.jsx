import { useEffect, useState } from "react";
import { PencilSquare } from "react-bootstrap-icons";
import parse from "html-react-parser";
import { Button, Col, Row, Stack } from "react-bootstrap";
import EditBox from "../EditBox";

const TopJointGoalSummary = ({
  precisefp_account_id,
  goal,
  deleteTopJointGoal,
  setTopJointGoal,
}) => {
  const [editMode, setEditMode] = useState(false);

  const [goalWhats, setGoalWhats] = useState([]);
  const [actionResults, setActionResults] = useState([]);

  useEffect(() => {
    async function fetchGoalWhats() {
      const resGoalWhats = await fetch(
        `http://localhost:8000/goal-whats?precisefp_account_id=${precisefp_account_id}&goal_index=${goal.index}`
      );
      const dataGoalWhats = await resGoalWhats.json();
      setGoalWhats(dataGoalWhats);
    }
    fetchGoalWhats();

    async function fetchActionResults() {
      const resActionResults = await fetch(
        `http://localhost:8000/goal-action-results?precisefp_account_id=${precisefp_account_id}&goal_index=${goal.index}`
      );
      const dataActionResults = await resActionResults.json();
      setActionResults(dataActionResults);
    }
    fetchActionResults();
  }, [precisefp_account_id]);

  return (
    <Stack gap={3}>
      <Row style={{ border: "1px solid black" }}>
        <EditBox item={goal} deleteItem={deleteTopJointGoal} />
        {/* {!editMode && (
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
                      body: JSON.stringify(goal),
                    }
                  );
                  if (response.status === 200) {
                    deleteTopJointGoal();
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
              <div>{parse(goal.statement)}</div>
            </div>
          </Row>
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
        )} */}
        <h4>Tasks</h4>
        <div style={{ marginBottom: "10px" }}>
          <Stack gap={1}>
            {goalWhats.map((goalWhat) => {
              return (
                <Row
                  key={`goalWhat${goalWhat.id}`}
                  style={{ marginBottom: "5px" }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Button
                      onClick={() => setEditMode(true)}
                      style={{ marginRight: "8px" }}
                    >
                      <PencilSquare />
                    </Button>
                    <div>{parse(goalWhat.statement)}</div>
                  </div>
                </Row>
              );
            })}
          </Stack>
        </div>

        <Stack gap={1}>
          <Row>
            <Col>
              <h4>Actions</h4>
            </Col>
            <Col>
              <h4>Results</h4>
            </Col>
          </Row>
          {actionResults.map((actionResult) => {
            return (
              <Row key={`actionResult${actionResult.id}`}>
                <Col>{parse(actionResult.action)}</Col>
                <Col>{parse(actionResult.result)}</Col>
              </Row>
            );
          })}
        </Stack>
      </Row>
    </Stack>
  );
};

export default TopJointGoalSummary;
