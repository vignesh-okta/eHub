import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserPage from "../UserPage/UserPage";
import axios from "axios";
import CommonTable from "../../../components/component/CommonTable/CommonTable";

function ApplicationsDetailsPage({ appName }) {
  const navigate = useNavigate();
  const [appList, setAppList] = useState([]);
  const [appAssign, setAppAssign] = useState(false);
  const [appUsers, setAppUsers] = useState();
  let baseURL = `${process.env.REACT_APP_URL}/apps/users`;
  const token = localStorage.getItem("token");

  const handleAppAsign = async ({ appName }) => {
    try {
      const response = await axios.get(`${baseURL}?filter=${appName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(appName, response.data);
      setAppUsers(response.data);
      setAppAssign(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!appName) {
      navigate("/applications");
    } else {
      const getAPPList = async () => {
        const response = await axios.get(`${baseURL}?app_name=${appName}`, {
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
      {!appAssign && (
        <>
          {" "}
          <Link to="/applications">Go Back</Link>
          <button
            onClick={() => handleAppAsign({ appName })}
          >{`Assign Users for ${appName}`}</button>
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
        </>
      )}

      {appAssign && (
        <div>
          <Link to={"/applications"}>Go back to applications</Link>
          <h1>{`Assign users for ${appName}`} </h1>
          <CommonTable tableList={appUsers} />
        </div>
      )}
    </div>
  );
}

export default ApplicationsDetailsPage;
