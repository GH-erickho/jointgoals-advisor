import { useEffect, useState } from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";
import EditBox from "../EditBox";
import { Plus } from "react-bootstrap-icons";

const TopJointGoalSummary = ({
  precisefp_account_id,
  goal,
  deleteTopJointGoal,
  setTopJointGoal,
}) => {
  const [goalWhats, setGoalWhats] = useState([]);
  const [actionResults, setActionResults] = useState([]);

  useEffect(() => {
    async function fetchGoalWhats() {
      const resGoalWhats = await fetch(
        // `https://jointgoals.vercel.app/goal-whats?precisefp_account_id=${precisefp_account_id}&goal_index=${goal.index}`
        `https://jointgoals.vercel.app/goal-whats?precisefp_account_id=${precisefp_account_id}&goal_index=${goal.index}`
      );
      const dataGoalWhats = await resGoalWhats.json();
      setGoalWhats(dataGoalWhats);
    }
    fetchGoalWhats();

    async function fetchActionResults() {
      const resActionResults = await fetch(
        `https://jointgoals.vercel.app/goal-action-results?precisefp_account_id=${precisefp_account_id}&goal_index=${goal.index}`
      );
      const dataActionResults = await resActionResults.json();
      setActionResults(dataActionResults);
    }
    fetchActionResults();
  }, [precisefp_account_id]);

  return (
    <Stack gap={3}>
      <Row style={{ border: "1px solid black" }}>
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
                `https://jointgoals.vercel.app/top-joint-goal`,
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
        <EditBox
          path="top-joint-goal"
          item={goal}
          itemKey="statement"
          deleteItem={deleteTopJointGoal}
          setItem={setTopJointGoal}
        />
        <h4>Tasks</h4>
        <div style={{ marginBottom: "10px" }}>
          <Stack gap={1}>
            {goalWhats.map((goalWhat, i) => {
              return (
                <EditBox
                  key={`goalWhat${i}`}
                  path="goal-what"
                  item={goalWhat}
                  itemKey="statement"
                  deleteItem={() =>
                    setGoalWhats([
                      ...goalWhats.slice(0, i),
                      ...goalWhats.slice(i + 1),
                    ])
                  }
                  setItem={(newGoalWhat) =>
                    setGoalWhats([
                      ...goalWhats.slice(0, i),
                      newGoalWhat,
                      ...goalWhats.slice(i + 1),
                    ])
                  }
                />
              );
            })}
          </Stack>
          <div style={{ marginLeft: "auto", width: "45px" }}>
            <Button
              onClick={async () => {
                const response = await fetch(
                  `https://jointgoals.vercel.app/goal-whats`,
                  {
                    method: "PUT",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify([
                      ...goalWhats,
                      {
                        precisefp_account_id: parseInt(precisefp_account_id),
                        goal_id: goal.id,
                        goal_index: goal.index + 1,
                        statement: "EDIT THIS STATEMENT",
                        index: goalWhats.length,
                      },
                    ]),
                  }
                );
                if (response.status === 200) {
                  setGoalWhats(await response.json());
                } else {
                  console.log(response);
                }
              }}
              style={{ paddingBottom: "10px" }}
            >
              <Plus />
            </Button>
          </div>
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
                <Col>
                  <EditBox
                    path="goal-action-result"
                    item={actionResult}
                    itemKey="action"
                    deleteItem={() =>
                      setActionResults([
                        ...actionResults.slice(0, i),
                        ...actionResults.slice(i + 1),
                      ])
                    }
                  />
                </Col>
                <Col>
                  <EditBox
                    path="goal-action-result"
                    item={actionResult}
                    itemKey="result"
                    deleteItem={() =>
                      setActionResults([
                        ...actionResults.slice(0, i),
                        ...actionResults.slice(i + 1),
                      ])
                    }
                  />
                </Col>
              </Row>
            );
          })}

          <div style={{ marginLeft: "auto", marginBottom: '10px', width: "45px" }}>
            <Button
              onClick={async () => {
                const response = await fetch(
                  // `https://jointgoals.vercel.app/goal-action-results`,
                  `https://jointgoals.vercel.app/goal-action-results`,
                  {
                    method: "PUT",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify([
                      ...actionResults,
                      {
                        precisefp_account_id: parseInt(precisefp_account_id),
                        goal_id: goal.id,
                        goal_index: goal.index,
                        index: actionResults.length + 1,
                        action: "EDIT THIS STATEMENT",
                        result: "EDIT THIS STATEMENT",
                      },
                    ]),
                  }
                );
                if (response.status === 200) {
                  setActionResults(await response.json());
                } else {
                  console.log(response);
                }
              }}
              style={{ paddingBottom: "10px" }}
            >
              <Plus />
            </Button>
          </div>
        </Stack>
      </Row>
    </Stack>
  );
};

export default TopJointGoalSummary;
