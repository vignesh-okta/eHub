import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserPage from "../UserPage/UserPage";
import axios from "axios";

function ApplicationsDetailsPage({ appName }) {
  const navigate = useNavigate();
  const [appList, setAppList] = useState([]);
  let baseURL = `${process.env.REACT_APP_URL}/apps/users?app_name=${appName}`;
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!appName) {
      navigate("/applications");
    } else {
      const getAPPList = async () => {
        const response = await axios.get(baseURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAppList(response.data);
      };
      getAPPList();
    }
  }, []);

  return (
    <div>
      <Link to="/applications">Go Back</Link>
      <button>Assign</button>
      <table className="table">
        {/* Table headers */}
        <thead>
          <tr>
            <th className="table__header">Display Name</th>
            <th className="table__header">Email</th>
            <th className="table__header">Status</th>
            <th className="table__header">Role</th>

            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {/* Render current items */}
          {appList.map((item) => (
            <tr key={item.id}>
              <td className="table__row">
                <div>
                  {item.firstName} {item.lastName}
                </div>
              </td>
              <td className="table__row"> {item.email}</td>
              <td className="table__row">
                {" "}
                <p className={`table__${item.status}`}>{item.status}</p>
              </td>
              <td className="table__row">{item.role}</td>

              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApplicationsDetailsPage;
