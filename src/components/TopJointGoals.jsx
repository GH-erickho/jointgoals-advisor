import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import TopJointGoalSummary from "./TopJointGoalSummary";

function TopJointGoals({ precisefp_account_id }) {
  const [focuses, setFocuses] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [topJointGoals, setTopJointGoals] = useState([]);

  useEffect(() => {
    async function fetchTopJointGoals() {
      const resTopJointGoals = await fetch(
        `https://jointgoals.vercel.app/top-joint-goals?precisefp_account_id=${precisefp_account_id}`
      );
      const dataTopJointGoals = await resTopJointGoals.json();
      setTopJointGoals(dataTopJointGoals);
    }
    fetchTopJointGoals();

    //   async function fetchFocuses() {
    //     const res = await fetch(
    //       `https://jointgoals.vercel.app/focuses?precisefp_account_id=${precisefp_account_id}`
    //     );
    //     const data = await res.json();
    //     setFocuses(data);
    //   }
    //   fetchFocuses();

    //   async function fetchOpportunities() {
    //     const res = await fetch(
    //       `https://jointgoals.vercel.app/opportunities?precisefp_account_id=${precisefp_account_id}`
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
            precisefp_account_id={precisefp_account_id}
            goal={goal}
            deleteTopJointGoal={() =>
              setTopJointGoals([
                ...topJointGoals.slice(0, i),
                ...topJointGoals.slice(i + 1),
              ])
            }
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
