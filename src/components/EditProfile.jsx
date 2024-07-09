import { useEffect, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TopJointGoals from "./TopJointGoals";

function EditProfile() {
  const { precisefp_account_id } = useParams();

  const [household, setHousehold] = useState({});
  const [financialGoals, setFinancialGoals] = useState([]);
  const [lifeGoals, setLifeGoals] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [realEstate, setRealEstate] = useState([]);
  const [savings, setSavings] = useState([]);
  const [expense, setExpense] = useState([]);
  const [debts, setDebts] = useState([]);

  useEffect(() => {
    async function fetchHousehold() {
      const res = await fetch(
        `https://jointgoals.vercel.app/household?precisefp_account_id=${precisefp_account_id}`
      );
      const data = await res.json();
      setHousehold(data);
    }
    fetchHousehold();

    async function fetchFinancialGoals() {
      const res = await fetch(
        `https://jointgoals.vercel.app/financial-goals?precisefp_account_id=${precisefp_account_id}`
      );
      const data = await res.json();
      setFinancialGoals(data);
    }
    fetchFinancialGoals();

    async function fetchLifeGoals() {
      const res = await fetch(
        `https://jointgoals.vercel.app/life-goals?precisefp_account_id=${precisefp_account_id}`
      );
      const data = await res.json();
      setLifeGoals(data);
    }
    fetchLifeGoals();

    async function fetchIncomes() {
      const res = await fetch(
        `https://jointgoals.vercel.app/incomes?precisefp_account_id=${precisefp_account_id}`
      );
      const data = await res.json();
      setIncomes(data);
    }
    fetchIncomes();

    async function fetchRealEstate() {
      const res = await fetch(
        `https://jointgoals.vercel.app/real-estate?precisefp_account_id=${precisefp_account_id}`
      );
      const data = await res.json();
      setRealEstate(data);
    }
    fetchRealEstate();

    async function fetchSavings() {
      const res = await fetch(
        `https://jointgoals.vercel.app/savings?precisefp_account_id=${precisefp_account_id}`
      );
      const data = await res.json();
      setSavings(data);
    }
    fetchSavings();

    async function fetchExpenses() {
      const res = await fetch(
        `https://jointgoals.vercel.app/expense?precisefp_account_id=${precisefp_account_id}`
      );
      const data = await res.json();
      setExpense(data);
    }
    fetchExpenses();

    async function fetchDebts() {
      const res = await fetch(
        `https://jointgoals.vercel.app/debts?precisefp_account_id=${precisefp_account_id}`
      );
      const data = await res.json();
      setDebts(data);
    }
    fetchDebts();
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
            checked={household.has_spouse}
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
                  `https://jointgoals.vercel.app/household?precisefp_account_id=${precisefp_account_id}`
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
                fetch("https://jointgoals.vercel.app/household", {
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
                  `https://jointgoals.vercel.app/financial-goals?precisefp_account_id=${precisefp_account_id}`
                );
                const data = await res.json();
                setFinancialGoals(data);
              }}
            >
              Cancel
            </Button>
            <Button
              className="w-100"
              onClick={() => {
                fetch("https://jointgoals.vercel.app/financial-goals", {
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
      <Stack gap={3} className="p-3 my-2" style={{ border: "1px solid black" }}>
        <h2>Life Goals</h2>
        {lifeGoals?.map((goal, i) => {
          return (
            <Row key={`lifeGoal${i}`} className="align-items-center">
              <Form.Group as={Col} controlId="formGridLifeGoalName">
                <Form.Label>Statement</Form.Label>
                <Form.Control
                  value={goal.statement || ""}
                  onChange={(e) => {
                    const newGoal = { ...goal, statement: e.target.value };
                    setLifeGoals([
                      ...lifeGoals.slice(0, i),
                      newGoal,
                      ...lifeGoals.slice(i + 1),
                    ]);
                  }}
                  placeholder="Statement"
                />
              </Form.Group>
              <Col className="col-2">
                <Button
                  onClick={() =>
                    setLifeGoals([
                      ...lifeGoals.slice(0, i),
                      ...lifeGoals.slice(i + 1),
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
              setLifeGoals([
                ...lifeGoals,
                { statement: "", precisefp_account_id },
              ])
            }
          >
            Add Life Goal
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
                  `https://jointgoals.vercel.app/life-goals?precisefp_account_id=${precisefp_account_id}`
                );
                const data = await res.json();
                setLifeGoals(data);
              }}
            >
              Cancel
            </Button>
            <Button
              className="w-100"
              onClick={() => {
                fetch("https://jointgoals.vercel.app/life-goals", {
                  method: "PUT",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(lifeGoals),
                });
              }}
            >
              Save
            </Button>
          </div>
        </Row>
      </Stack>
      <Stack gap={3} className="p-3 my-2" style={{ border: "1px solid black" }}>
        <h2>Incomes</h2>
        {incomes?.map((income, i) => {
          return (
            <Row key={`income${i}`} className="align-items-center">
              <Form.Group as={Col} controlId="formGridIncomeName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={income.name || ""}
                  onChange={(e) => {
                    const newIncome = { ...income, name: e.target.value };
                    setIncomes([
                      ...incomes.slice(0, i),
                      newIncome,
                      ...incomes.slice(i + 1),
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
                  value={income.amount || ""}
                  type="number"
                  onChange={(e) => {
                    const newIncome = { ...income, amount: e.target.value };
                    setIncomes([
                      ...incomes.slice(0, i),
                      newIncome,
                      ...incomes.slice(i + 1),
                    ]);
                  }}
                  placeholder="Amount"
                />
              </Form.Group>
              <Col className="col-2">
                <Button
                  onClick={() =>
                    setIncomes([
                      ...incomes.slice(0, i),
                      ...incomes.slice(i + 1),
                    ])
                  }
                >
                  Delete Income
                </Button>
              </Col>
            </Row>
          );
        })}
        <div style={{ marginLeft: "auto" }}>
          <Button
            onClick={() =>
              setIncomes([
                ...incomes,
                { name: "", amount: 0, precisefp_account_id },
              ])
            }
          >
            Add Income
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
                  `https://jointgoals.vercel.app/incomes?precisefp_account_id=${precisefp_account_id}`
                );
                const data = await res.json();
                setIncomes(data);
              }}
            >
              Cancel
            </Button>
            <Button
              className="w-100"
              onClick={() => {
                fetch("https://jointgoals.vercel.app/incomes", {
                  method: "PUT",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(incomes),
                });
              }}
            >
              Save
            </Button>
          </div>
        </Row>
      </Stack>
      <Stack gap={3} className="p-3 my-2" style={{ border: "1px solid black" }}>
        <h2>Real Estate</h2>
        {realEstate?.map((place, i) => {
          return (
            <div
              key={`income${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 20,
              }}
            >
              <Stack gap={3}>
                <Row>
                  <Form.Group as={Col} controlId="formGridRealEstateName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      value={place.name || ""}
                      onChange={(e) => {
                        const newIncome = { ...place, name: e.target.value };
                        setIncomes([
                          ...incomes.slice(0, i),
                          newIncome,
                          ...incomes.slice(i + 1),
                        ]);
                      }}
                      placeholder="Name"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridRealEstateType">
                    <Form.Label>Type</Form.Label>
                    <Form.Select aria-label="Real Estate Type">
                      <option
                        value="Primary"
                        onSelect={() => {
                          const newPlace = { ...place, type: "Primary" };
                          setRealEstate([
                            ...realEstate.slice(0, i),
                            newPlace,
                            ...realEstate.slice(i + 1),
                          ]);
                        }}
                      >
                        Primary
                      </option>
                      <option
                        value="Secondary"
                        onSelect={() => {
                          const newPlace = { ...place, type: "Secondary" };
                          setRealEstate([
                            ...realEstate.slice(0, i),
                            newPlace,
                            ...realEstate.slice(i + 1),
                          ]);
                        }}
                      >
                        Secondary
                      </option>
                      <option
                        value="Investment"
                        onSelect={() => {
                          const newPlace = { ...place, type: "Investment" };
                          setRealEstate([
                            ...realEstate.slice(0, i),
                            newPlace,
                            ...realEstate.slice(i + 1),
                          ]);
                        }}
                      >
                        Investment
                      </option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="formGridRealEstateValue"
                    className="col-2"
                    style={{ padding: 0 }}
                  >
                    <Form.Label>Value</Form.Label>
                    <Form.Control
                      value={place.value || ""}
                      type="number"
                      onChange={(e) => {
                        const newPlace = { ...place, value: e.target.value };
                        setRealEstate([
                          ...realEstate.slice(0, i),
                          newPlace,
                          ...realEstate.slice(i + 1),
                        ]);
                      }}
                      placeholder="Value"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridRealEstateOwner">
                    <Form.Label>Owner</Form.Label>
                    <Form.Control
                      value={place.owner || ""}
                      onChange={(e) => {
                        const newPlace = { ...place, owner: e.target.value };
                        setRealEstate([
                          ...realEstate.slice(0, i),
                          newPlace,
                          ...realEstate.slice(i + 1),
                        ]);
                      }}
                      placeholder="Owner"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    as={Col}
                    controlId="formGridRealEstateMortgageBalance"
                  >
                    <Form.Label>Mortgage Balance</Form.Label>
                    <Form.Control
                      value={place.mortgage_balance || ""}
                      type="number"
                      onChange={(e) => {
                        const newPlace = {
                          ...place,
                          mortgage_balance: e.target.value,
                        };
                        setRealEstate([
                          ...realEstate.slice(0, i),
                          newPlace,
                          ...realEstate.slice(i + 1),
                        ]);
                      }}
                      placeholder="Mortgage Balance"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="formGridRealEstateMonthlyPayment"
                  >
                    <Form.Label>Monthly Payment</Form.Label>
                    <Form.Control
                      value={place.monthly_payment || ""}
                      type="number"
                      onChange={(e) => {
                        const newPlace = {
                          ...place,
                          monthly_payment: e.target.value,
                        };
                        setRealEstate([
                          ...realEstate.slice(0, i),
                          newPlace,
                          ...realEstate.slice(i + 1),
                        ]);
                      }}
                      placeholder="Monthly Payment"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="formGridRealEstateInterestRate"
                  >
                    <Form.Label>Interest Rate</Form.Label>
                    <Form.Control
                      value={place.interest_rate || ""}
                      type="number"
                      onChange={(e) => {
                        const newPlace = {
                          ...place,
                          interest_rate: e.target.value,
                        };
                        setRealEstate([
                          ...realEstate.slice(0, i),
                          newPlace,
                          ...realEstate.slice(i + 1),
                        ]);
                      }}
                      placeholder="Interest Rate"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridRealEstateDuration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control
                      value={place.duration || ""}
                      type="number"
                      onChange={(e) => {
                        const newPlace = {
                          ...place,
                          duration: e.target.value,
                        };
                        setRealEstate([
                          ...realEstate.slice(0, i),
                          newPlace,
                          ...realEstate.slice(i + 1),
                        ]);
                      }}
                      placeholder="Duration"
                    />
                  </Form.Group>
                </Row>
              </Stack>
              <Col className="col-2">
                <Button
                  onClick={() =>
                    setIncomes([
                      ...incomes.slice(0, i),
                      ...incomes.slice(i + 1),
                    ])
                  }
                >
                  Delete Place
                </Button>
              </Col>
            </div>
          );
        })}
        <div style={{ marginLeft: "auto" }}>
          <Button
            onClick={() =>
              setRealEstate([
                ...realEstate,
                {
                  name: "",
                  type: "Secondary",
                  value: 0,
                  owner: "",
                  mortgage_balance: 0,
                  monthly_payment: 0,
                  interest_rate: 0,
                  duration: 0,
                  precisefp_account_id,
                },
              ])
            }
          >
            Add Place
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
                  `https://jointgoals.vercel.app/real-estate?precisefp_account_id=${precisefp_account_id}`
                );
                const data = await res.json();
                setRealEstate(data);
              }}
            >
              Cancel
            </Button>
            <Button
              className="w-100"
              onClick={() => {
                fetch("https://jointgoals.vercel.app/real-estate", {
                  method: "PUT",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(realEstate),
                });
              }}
            >
              Save
            </Button>
          </div>
        </Row>
      </Stack>
      <Stack gap={3} className="p-3 my-2" style={{ border: "1px solid black" }}>
        <h2>Savings</h2>
        {savings?.map((saving, i) => {
          return (
            <div
              key={`saving${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 20,
              }}
            >
              <Stack gap={3}>
                <Row>
                  <Form.Group as={Col} controlId="formGridRealEstateType">
                    <Form.Label>Type</Form.Label>
                    <Form.Select aria-label="Savings Type">
                      <option
                        value="Checking"
                        onSelect={() => {
                          const newSaving = { ...saving, type: "Checking" };
                          setSavings([
                            ...savings.slice(0, i),
                            newSaving,
                            ...savings.slice(i + 1),
                          ]);
                        }}
                      >
                        Checking
                      </option>
                      <option
                        value="Savings"
                        onSelect={() => {
                          const newSaving = { ...saving, type: "Savings" };
                          setSavings([
                            ...savings.slice(0, i),
                            newSaving,
                            ...savings.slice(i + 1),
                          ]);
                        }}
                      >
                        Savings
                      </option>
                      <option
                        value="Taxable"
                        onSelect={() => {
                          const newSaving = { ...saving, type: "Taxable" };
                          setSavings([
                            ...savings.slice(0, i),
                            newSaving,
                            ...savings.slice(i + 1),
                          ]);
                        }}
                      >
                        Taxable
                      </option>
                      <option
                        value="IRA"
                        onSelect={() => {
                          const newSaving = { ...saving, type: "IRA" };
                          setSavings([
                            ...savings.slice(0, i),
                            newSaving,
                            ...savings.slice(i + 1),
                          ]);
                        }}
                      >
                        IRA
                      </option>
                      <option
                        value="401K"
                        onSelect={() => {
                          const newSaving = { ...saving, type: "401K" };
                          setSavings([
                            ...savings.slice(0, i),
                            newSaving,
                            ...savings.slice(i + 1),
                          ]);
                        }}
                      >
                        401K
                      </option>
                      <option
                        value="Brokerage"
                        onSelect={() => {
                          const newSaving = { ...saving, type: "Brokerage" };
                          setSavings([
                            ...savings.slice(0, i),
                            newSaving,
                            ...savings.slice(i + 1),
                          ]);
                        }}
                      >
                        Brokerage
                      </option>
                      <option
                        value="Other"
                        onSelect={() => {
                          const newSaving = { ...saving, type: "Other" };
                          setSavings([
                            ...savings.slice(0, i),
                            newSaving,
                            ...savings.slice(i + 1),
                          ]);
                        }}
                      >
                        Other
                      </option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridSavingName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      value={saving.name || ""}
                      onChange={(e) => {
                        const newSaving = { ...saving, name: e.target.value };
                        setSavings([
                          ...savings.slice(0, i),
                          newSaving,
                          ...savings.slice(i + 1),
                        ]);
                      }}
                      placeholder="Name"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridSavingsLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      value={saving.location || ""}
                      onChange={(e) => {
                        const newSaving = {
                          ...saving,
                          location: e.target.value,
                        };
                        setSavings([
                          ...savings.slice(0, i),
                          newSaving,
                          ...savings.slice(i + 1),
                        ]);
                      }}
                      placeholder="Location"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="formGridSavingsValue"
                    className="col-2"
                    style={{ padding: 0 }}
                  >
                    <Form.Label>Value</Form.Label>
                    <Form.Control
                      value={saving.value || ""}
                      type="number"
                      onChange={(e) => {
                        const newSaving = { ...saving, value: e.target.value };
                        setSavings([
                          ...savings.slice(0, i),
                          newSaving,
                          ...savings.slice(i + 1),
                        ]);
                      }}
                      placeholder="Value"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridSavingsOwner">
                    <Form.Label>Owner</Form.Label>
                    <Form.Control
                      value={saving.owner || ""}
                      onChange={(e) => {
                        const newSaving = { ...saving, owner: e.target.value };
                        setSavings([
                          ...savings.slice(0, i),
                          newSaving,
                          ...savings.slice(i + 1),
                        ]);
                      }}
                      placeholder="Owner"
                    />
                  </Form.Group>
                </Row>
              </Stack>
              <Col className="col-2">
                <Button
                  onClick={async () => {
                    const response = await fetch(
                      `https://jointgoals.vercel.app/savings`,
                      {
                        method: "DELETE",
                        headers: {
                          Accept: "application/json",
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(saving),
                      }
                    );
                    if (response.status === "200") {
                      setSavings([
                        ...savings.slice(0, i),
                        ...savings.slice(i + 1),
                      ]);
                    } else {
                      console.error(response)
                    }
                  }}
                >
                  Delete Saving
                </Button>
              </Col>
            </div>
          );
        })}
        <div style={{ marginLeft: "auto" }}>
          <Button
            onClick={() =>
              setSavings([
                ...savings,
                {
                  precisefp_account_id,
                  type: "Checking",
                  name: "",
                  location: "",
                  value: 0,
                  owner: "",
                },
              ])
            }
          >
            Add Saving
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
                  `https://jointgoals.vercel.app/savings?precisefp_account_id=${precisefp_account_id}`
                );
                const data = await res.json();
                setSavings(data);
              }}
            >
              Cancel
            </Button>
            <Button
              className="w-100"
              onClick={() => {
                fetch("https://jointgoals.vercel.app/savings", {
                  method: "PUT",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(savings),
                });
              }}
            >
              Save
            </Button>
          </div>
        </Row>
      </Stack>
      <Stack gap={3} className="p-3 my-2" style={{ border: "1px solid black" }}>
        <h2>Expenses</h2>
        <Row>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formGridExpensesCore"
          >
            <Form.Label column sm="2">
              Core Expenses
            </Form.Label>
            <Col sm="2">
              <Form.Control
                value={expense.core || ""}
                type="number"
                onChange={(e) =>
                  setExpense({ ...expense, core: e.target.value })
                }
                placeholder="Core Expenses"
              />
            </Col>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formGridExpensesDiscretionary"
          >
            <Form.Label column sm="2">
              Discretionary Savings
            </Form.Label>
            <Col sm="2">
              <Form.Control
                value={expense.savings || ""}
                type="number"
                onChange={(e) =>
                  setExpense({ ...expense, savings: e.target.value })
                }
                placeholder="Discretionary Savings"
              />
            </Col>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formGridExpensesOther"
          >
            <Form.Label column sm="2">
              Other Expenses
            </Form.Label>
            <Col sm="2">
              <Form.Control
                value={expense.other || ""}
                type="number"
                onChange={(e) =>
                  setExpense({ ...expense, other: e.target.value })
                }
                placeholder="Other Expenses"
              />
            </Col>
          </Form.Group>
        </Row>
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
                  `https://jointgoals.vercel.app/expense?precisefp_account_id=${precisefp_account_id}`
                );
                const data = await res.json();
                setExpense(data);
              }}
            >
              Cancel
            </Button>
            <Button
              className="w-100"
              onClick={() => {
                fetch("https://jointgoals.vercel.app/expense", {
                  method: "PUT",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(expense),
                });
              }}
            >
              Save
            </Button>
          </div>
        </Row>
      </Stack>
      <Stack gap={3} className="p-3 my-2" style={{ border: "1px solid black" }}>
        <h2>Debts</h2>
        {debts?.map((debt, i) => {
          return (
            <div
              key={`debt${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 20,
              }}
            >
              <Stack gap={3}>
                <Stack direction="horizontal" gap={2}>
                  <Form.Group as={Col} controlId="formGridDebtName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      value={debt.name || ""}
                      onChange={(e) => {
                        const newDebt = { ...debt, name: e.target.value };
                        setDebts([
                          ...debts.slice(0, i),
                          newDebt,
                          ...debts.slice(i + 1),
                        ]);
                      }}
                      placeholder="Name"
                    />
                  </Form.Group>
                  <Form.Group
                    className="col-2"
                    as={Col}
                    controlId="formGridDebtType"
                  >
                    <Form.Label>Type</Form.Label>
                    <Form.Select aria-label="Debt Type">
                      <option
                        value="Student"
                        onSelect={() => {
                          const newDebt = { ...debt, type: "Student" };
                          setDebts([
                            ...debts.slice(0, i),
                            newDebt,
                            ...debts.slice(i + 1),
                          ]);
                        }}
                      >
                        Student
                      </option>
                      <option
                        value="Credit Card"
                        onSelect={() => {
                          const newDebt = { ...debt, type: "Credit Card" };
                          setDebts([
                            ...debts.slice(0, i),
                            newDebt,
                            ...debts.slice(i + 1),
                          ]);
                        }}
                      >
                        Credit Card
                      </option>
                      <option
                        value="Car"
                        onSelect={() => {
                          const newDebt = { ...debt, type: "Car" };
                          setDebts([
                            ...debts.slice(0, i),
                            newDebt,
                            ...debts.slice(i + 1),
                          ]);
                        }}
                      >
                        Car
                      </option>
                      <option
                        value="Other"
                        onSelect={() => {
                          const newDebt = { ...debt, type: "Other" };
                          setDebts([
                            ...debts.slice(0, i),
                            newDebt,
                            ...debts.slice(i + 1),
                          ]);
                        }}
                      >
                        Other
                      </option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="formGridDebtBalance"
                    className="col-2"
                    style={{ padding: 0 }}
                  >
                    <Form.Label>Loan Balance</Form.Label>
                    <Form.Control
                      value={debt.balance || ""}
                      type="number"
                      onChange={(e) => {
                        const newDebt = { ...debt, balance: e.target.value };
                        setDebts([
                          ...newDebt.slice(0, i),
                          newDebt,
                          ...newDebt.slice(i + 1),
                        ]);
                      }}
                      placeholder="Loan Balance"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="formGridDebtPayment"
                    className="col-2"
                    style={{ padding: 0 }}
                  >
                    <Form.Label>Monthly Payment</Form.Label>
                    <Form.Control
                      value={debt.payment || ""}
                      type="number"
                      onChange={(e) => {
                        const newDebt = { ...debt, payment: e.target.value };
                        setDebts([
                          ...newDebt.slice(0, i),
                          newDebt,
                          ...newDebt.slice(i + 1),
                        ]);
                      }}
                      placeholder="Monthly Payment"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="formGridDebtInterestRate"
                    className="col-2"
                    style={{ padding: 0 }}
                  >
                    <Form.Label>Interest Rate %</Form.Label>
                    <Form.Control
                      value={debt.interest_rate || ""}
                      type="number"
                      onChange={(e) => {
                        const newDebt = {
                          ...debt,
                          interest_rate: e.target.value,
                        };
                        setDebts([
                          ...newDebt.slice(0, i),
                          newDebt,
                          ...newDebt.slice(i + 1),
                        ]);
                      }}
                      placeholder="Interest Rate %"
                    />
                  </Form.Group>
                </Stack>
              </Stack>
              <Col className="col-2">
                <Button
                  onClick={() =>
                    setDebts([...debts.slice(0, i), ...debts.slice(i + 1)])
                  }
                >
                  Delete Debt
                </Button>
              </Col>
            </div>
          );
        })}
        <div style={{ marginLeft: "auto" }}>
          <Button
            onClick={() =>
              setDebts([
                ...debts,
                {
                  precisefp_account_id,
                  name: "",
                  type: "Other",
                  balance: 0,
                  payment: 0,
                  interest_rate: 0,
                },
              ])
            }
          >
            Add Debt
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
                  `https://jointgoals.vercel.app/debts?precisefp_account_id=${precisefp_account_id}`
                );
                const data = await res.json();
                setDebts(data);
              }}
            >
              Cancel
            </Button>
            <Button
              className="w-100"
              onClick={() => {
                fetch("https://jointgoals.vercel.app/debts", {
                  method: "PUT",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(savings),
                });
              }}
            >
              Save
            </Button>
          </div>
        </Row>
      </Stack>
      <TopJointGoals precisefp_account_id={precisefp_account_id} />
    </div>
  );
}

export default EditProfile;
