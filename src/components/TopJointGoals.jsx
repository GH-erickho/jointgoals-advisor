import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import TopJointGoalSummary from "./TopJointGoal";

function TopJointGoals({ precisefp_account_id }) {
  const [focuses, setFocuses] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [topJointGoals, setTopJointGoals] = useState([]);
  const [goalWhats, setGoalWhats] = useState([]);
  const [actionResults, setActionResults] = useState([]);

  useEffect(() => {
    async function fetchTopJointGoals() {
      const resTopJointGoals = await fetch(
        `http://localhost:8000/top-joint-goals?precisefp_account_id=${precisefp_account_id}`
      );
      const dataTopJointGoals = await resTopJointGoals.json();
      setTopJointGoals(dataTopJointGoals);
      dataTopJointGoals.forEach(async (goal) => {
        const resGoalWhats = await fetch(
          `http://localhost:8000/goal-whats?precisefp_account_id=${precisefp_account_id}&goal_index=${goal.index}`
        );
        const dataGoalWhats = await resGoalWhats.json();
        setGoalWhats([...goalWhats, dataGoalWhats]);
        const resActionResults = await fetch(
          `http://localhost:8000/goal-action-results?precisefp_account_id=${precisefp_account_id}&goal_index=${goal.index}`
        );
        const dataActionResults = await resActionResults.json();
        setActionResults([...actionResults, dataActionResults]);
      });
    }
    fetchTopJointGoals();

    //   async function fetchFocuses() {
    //     const res = await fetch(
    //       `http://localhost:8000/focuses?precisefp_account_id=${precisefp_account_id}`
    //     );
    //     const data = await res.json();
    //     setFocuses(data);
    //   }
    //   fetchFocuses();

    //   async function fetchOpportunities() {
    //     const res = await fetch(
    //       `http://localhost:8000/opportunities?precisefp_account_id=${precisefp_account_id}`
    //     );
    //     const data = await res.json();
    //     setOpportunities(data);
    //   }
    //   fetchOpportunities();
  }, [precisefp_account_id]);

  return (
    <Stack gap={3} className="p-3 my-2" style={{ border: "1px solid black" }}>
      <h2>Top Joint Goals</h2>
      {topJointGoals?.map((goal, i) => {
        return (
          <TopJointGoalSummary
            key={`topJointGoal${i}`}
            goal={goal}
            setTopJointGoal={(newTopJointGoal) =>
              setTopJointGoals([
                ...topJointGoals.slice(0, i),
                newTopJointGoal,
                ...topJointGoals.slice(i + 1),
              ])
            }
          />
        );
      })}
    </Stack>
  );
}

export default TopJointGoals;
