import { useEffect, useState } from "react";
import "./ApplicationsPage.scss";
import axios from "axios";
import chevronRight from "../../../assets/icons/chevron_right-24px.svg";
import { Link, useNavigate } from "react-router-dom";

function ApplicationsPage({ setAppName }) {
  let apiURL = `${process.env.REACT_APP_URL}/apps/list`;
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleAppClick = (app_name) => {
    setAppName(app_name);
    navigate("/applicationsdetails");
  };

  const [apps, setApps] = useState([]);
  useEffect(() => {
    try {
      const getApps = async () => {
        const response = await axios.get(apiURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setApps(response.data);
      };
      getApps();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <div className="app-table">
        <div className="table__row">
          <div className="table__cell">APP NAME</div>
          <div className="table__cell">APP COUNT</div>
        </div>

        {apps.map((app, i = 0) => {
          return (
            <div key={++i} className="table__row">
              {/* <Link to={`/applicationsdetails`} className="table__link"> */}
              <div
                className="table__cell table__cell--hover"
                onClick={() => {
                  handleAppClick(app.app_name);
                }}
              >
                {app.app_name}
                <img
                  className="table__chevron"
                  src={chevronRight}
                  alt="Chervon-right"
                />
              </div>
              {/* </Link> */}
              <div className="table__cell">{app.count}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ApplicationsPage;
