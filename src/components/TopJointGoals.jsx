import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import TopJointGoalSummary from "./TopJointGoalSummary";

function TopJointGoals({ email }) {
  const [topJointGoals, setTopJointGoals] = useState([]);

  useEffect(() => {
    async function fetchTopJointGoals() {
      const resTopJointGoals = await fetch(
        `https://jointgoals.vercel.app/top-joint-goals?email=${email}`
      );
      const dataTopJointGoals = await resTopJointGoals.json();
      setTopJointGoals(dataTopJointGoals);
    }
    fetchTopJointGoals();
  }, [email]);

  return (
    <Stack gap={3} className="p-3 my-2" style={{ border: "1px solid black" }}>
      <h2>Top Joint Goals</h2>
      {topJointGoals?.map((goal, i) => {
        return (
          <TopJointGoalSummary
            key={`topJointGoal${i}`}
            email={email}
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
