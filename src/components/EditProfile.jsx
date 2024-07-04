import { useEffect, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";

function EditProfile() {
  const { precisefp_account_id } = useParams();

  const [household, setHousehold] = useState({});
  const [financialGoals, setFinancialGoals] = useState([]);
  const [lifeGoals, setLifeGoals] = useState([]);

  useEffect(() => {
    async function fetchHousehold() {
      const res = await fetch(
        `http://localhost:8000/household?precisefp_account_id=${precisefp_account_id}`
      );
      const data = await res.json();
      setHousehold(data);
    }
    fetchHousehold();

    async function fetchFinancialGoals() {
      const res = await fetch(
        `http://localhost:8000/financial-goals?precisefp_account_id=${precisefp_account_id}`
      );
      const data = await res.json();
      setFinancialGoals(data);
    }
    fetchFinancialGoals();

    async function fetchFinancialGoals() {
      const res = await fetch(
        `http://localhost:8000/financial-goals?precisefp_account_id=${precisefp_account_id}`
      );
      const data = await res.json();
      setFinancialGoals(data);
    }
    fetchFinancialGoals();
  }, [precisefp_account_id]);

  return (
    <div style={{ textAlign: "left" }}>
      <h1 className="my-4">Profile</h1>
      <Stack gap={3} className="p-3 my-2" style={{ border: "1px solid black" }}>
        <div></div>
        <h2>Couple</h2>
        <Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              value={household.first_name || ""}
              onChange={(e) =>
                setHousehold({ ...household, first_name: e.target.value })
              }
              placeholder="First Name"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              value={household.last_name || ""}
              onChange={(e) =>
                setHousehold({ ...household, last_name: e.target.value })
              }
              placeholder="Last Name"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridSex">
            <Form.Label>Sex</Form.Label>
            <div>
              <Form.Check
                inline
                type="radio"
                label="Female"
                name="sex"
                id="Female"
                checked={household.sex === "Female"}
                onChange={() => setHousehold({ ...household, sex: "Female" })}
              />
              <Form.Check
                inline
                type="radio"
                label="Male"
                name="sex"
                id="Male"
                checked={household.sex === "Male"}
                onChange={() => setHousehold({ ...household, sex: "Male" })}
              />
            </div>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridDateOfBirth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              value={household.date_of_birth || ""}
              onChange={(e) =>
                setHousehold({ ...household, date_of_birth: e.target.value })
              }
              placeholder="MM/DD/YYYY"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Check
            type="checkbox"
            id="has_spouse"
            label="Has Spouse?"
            value={household.has_spouse}
            onChange={(e) =>
              setHousehold({ ...household, has_spouse: e.target.checked })
            }
          />
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridSpouseFirstName">
            <Form.Label>Spouse First Name</Form.Label>
            <Form.Control
              value={household.spouse_first_name || ""}
              onChange={(e) =>
                setHousehold({
                  ...household,
                  spouse_first_name: e.target.value,
                })
              }
              placeholder="Spouse First Name"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridSpouseLastName">
            <Form.Label>Spouse Last Name</Form.Label>
            <Form.Control
              value={household.spouse_last_name || ""}
              onChange={(e) =>
                setHousehold({ ...household, spouse_last_name: e.target.value })
              }
              placeholder="Spouse Last Name"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridSpouseSex">
            <Form.Label>Spouse Sex</Form.Label>
            <div>
              <Form.Check
                inline
                type="radio"
                label="Female"
                name="spouse_sex"
                id="Female"
                checked={household.spouse_sex === "Female"}
                onChange={() =>
                  setHousehold({ ...household, spouse_sex: "Female" })
                }
              />
              <Form.Check
                inline
                type="radio"
                label="Male"
                name="spouse_sex"
                id="Male"
                checked={household.spouse_sex === "Male"}
                onChange={() =>
                  setHousehold({ ...household, spouse_sex: "Male" })
                }
              />
            </div>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridDateOfBirth">
            <Form.Label>Spouse Date of Birth</Form.Label>
            <Form.Control
              value={household.spouse_date_of_birth || ""}
              onChange={(e) =>
                setHousehold({
                  ...household,
                  spouse_date_of_birth: e.target.value,
                })
              }
              placeholder="MM/DD/YYYY"
            />
          </Form.Group>
        </Row>
        <h2>Children</h2>
        {household?.children?.map((child, i) => {
          return (
            <Row key={`child${i}`}>
              <Form.Group as={Col} controlId="formGridChildFirstName">
                <Form.Label>Child First Name</Form.Label>
                <Form.Control
                  value={child.first_name || ""}
                  onChange={(e) => {
                    const newChild = { ...child, first_name: e.target.value };
                    setHousehold({
                      ...household,
                      children: [
                        ...household.children.slice(0, i),
                        newChild,
                        ...household.children.slice(i + 1),
                      ],
                    });
                  }}
                  placeholder="Child First Name"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridChildLastName">
                <Form.Label>Child Last Name</Form.Label>
                <Form.Control
                  value={child.last_name || ""}
                  onChange={(e) => {
                    const newChild = { ...child, last_name: e.target.value };
                    setHousehold({
                      ...household,
                      children: [
                        ...household.children.slice(0, i),
                        newChild,
                        ...household.children.slice(i + 1),
                      ],
                    });
                  }}
                  placeholder="Child Last Name"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridChildSex">
                <Form.Label>Sex</Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="Female"
                    name={`child_sex${i}`}
                    id="Female"
                    checked={child.sex === "Female"}
                    onChange={() => {
                      const newChild = { ...child, sex: "Female" };
                      setHousehold({
                        ...household,
                        children: [
                          ...household.children.slice(0, i),
                          newChild,
                          ...household.children.slice(i + 1),
                        ],
                      });
                    }}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Male"
                    name={`child_sex${i}`}
                    id="Male"
                    checked={child.sex === "Male"}
                    onChange={() => {
                      const newChild = { ...child, sex: "Male" };
                      setHousehold({
                        ...household,
                        children: [
                          ...household.children.slice(0, i),
                          newChild,
                          ...household.children.slice(i + 1),
                        ],
                      });
                    }}
                  />
                </div>
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formGridChildAge"
                className="col-2"
                style={{ padding: 0 }}
              >
                <Form.Label>Age</Form.Label>
                <Form.Control
                  className="w-50"
                  value={child.age || ""}
                  type="number"
                  onChange={(e) => {
                    const newChild = { ...child, age: e.target.value };
                    setHousehold({
                      ...household,
                      children: [
                        ...household.children.slice(0, i),
                        newChild,
                        ...household.children.slice(i + 1),
                      ],
                    });
                  }}
                  placeholder="Age"
                />
              </Form.Group>
              <Col className="col-2">
                <Button
                  onClick={() =>
                    setHousehold({
                      ...household,
                      children: [
                        ...household.children.slice(0, i),
                        ...household.children.slice(i + 1),
                      ],
                    })
                  }
                >
                  Delete Child
                </Button>
              </Col>
            </Row>
          );
        })}
        <div style={{ marginLeft: "auto" }}>
          <Button
            onClick={() =>
              setHousehold({
                ...household,
                children: [
                  ...household.children,
                  { first_name: "", last_name: "", age: 0, sex: "Female" },
                ],
              })
            }
          >
            Add Child
          </Button>
        </div>
        <Row>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <Button
              variant="secondary"
              className="w-100"
              onClick={async () => {
                const res = await fetch(
                  `http://localhost:8000/household?precisefp_account_id=${precisefp_account_id}`
                );
                const data = await res.json();
                setHousehold(data);
              }}
            >
              Cancel
            </Button>
            <Button
              className="w-100"
              onClick={() => {
                fetch("http://localhost:8000/household", {
                  method: "PUT",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(household),
                });
              }}
            >
              Save
            </Button>
          </div>
        </Row>
      </Stack>
      <Stack gap={3} className="p-3 my-2" style={{ border: "1px solid black" }}>
        <h2>Financial Goals</h2>
        {financialGoals?.map((goal, i) => {
          return (
            <Row key={`financialGoal${i}`} className="align-items-center">
              <Form.Group as={Col} controlId="formGridFinancialGoalName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={goal.name || ""}
                  onChange={(e) => {
                    const newGoal = { ...goal, name: e.target.value };
                    setFinancialGoals([
                      ...financialGoals.slice(0, i),
                      newGoal,
                      ...financialGoals.slice(i + 1),
                    ]);
                  }}
                  placeholder="Name"
                />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formGridFinancialGoalAmount"
                className="col-2"
                style={{ padding: 0 }}
              >
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  value={goal.amount || ""}
                  type="number"
                  onChange={(e) => {
                    const newGoal = { ...goal, amount: e.target.value };
                    setFinancialGoals([
                      ...financialGoals.slice(0, i),
                      newGoal,
                      ...financialGoals.slice(i + 1),
                    ]);
                  }}
                  placeholder="Amount"
                />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formGridFinancialGoalDueDate"
                className="col-3"
              >
                <Form.Label>Due Date (MM/DD/YYYY)</Form.Label>
                <Form.Control
                  value={goal.due_date || ""}
                  onChange={(e) => {
                    const newGoal = { ...goal, due_date: e.target.value };
                    setFinancialGoals([
                      ...financialGoals.slice(0, i),
                      newGoal,
                      ...financialGoals.slice(i + 1),
                    ]);
                  }}
                  placeholder="MM/DD/YYYY"
                />
              </Form.Group>
              <Col className="col-2">
                <Button
                  onClick={() =>
                    setFinancialGoals([
                      ...financialGoals.slice(0, i),
                      ...financialGoals.slice(i + 1),
                    ])
                  }
                >
                  Delete Goal
                </Button>
              </Col>
            </Row>
          );
        })}
        <div style={{ marginLeft: "auto" }}>
          <Button
            onClick={() =>
              setFinancialGoals([
                ...financialGoals,
                { name: "", amount: 0, due_date: "", precisefp_account_id },
              ])
            }
          >
            Add Financial Goal
          </Button>
        </div>

        <Row>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <Button
              variant="secondary"
              className="w-100"
              onClick={async () => {
                const res = await fetch(
                  `http://localhost:8000/household?precisefp_account_id=${precisefp_account_id}`
                );
                const data = await res.json();
                setHousehold(data);
              }}
            >
              Cancel
            </Button>
            <Button
              className="w-100"
              onClick={() => {
                console.log(JSON.stringify(financialGoals))
                fetch("http://localhost:8000/financial-goals", {
                  method: "PUT",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(financialGoals),
                });
              }}
            >
              Save
            </Button>
          </div>
        </Row>
      </Stack>
    </div>
  );
}

export default EditProfile;
