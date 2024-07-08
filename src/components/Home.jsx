import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const [couples, setCouples] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jointgoals.vercel.app/couple");
      const data = await res.json();
      setCouples(data);
    }
    fetchData();
  }, []);

  console.log(couples);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>PreciseFP Account ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Sex</th>
          <th>Date of Birth</th>
          <th>Spouse First Name</th>
          <th>Spouse Last Name</th>
          <th>Spouse Sex</th>
          <th>Spouse Date of Birth</th>
          <th>Has Children?</th>
        </tr>
      </thead>
      <tbody>
        {couples.map((couple, i) => {
          return (
            <tr key={couple + i}>
              <td>
                <Link to={`/edit-profile/${couple.precisefp_account_id}`}>
                  {couple.precisefp_account_id}
                </Link>
              </td>
              <td>{couple.first_name}</td>
              <td>{couple.last_name}</td>
              <td>{couple.sex}</td>
              <td>{couple.date_of_birth}</td>
              <td>{couple.spouse_first_name}</td>
              <td>{couple.spouse_last_name}</td>
              <td>{couple.spouse_sex}</td>
              <td>{couple.spouse_date_of_birth}</td>
              <td>{couple.has_children ? "Yes" : "No"}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Home;
