import { useEffect, useState } from "react";
import "./AppList.scss";
import axios from "axios";

function AppList() {
  let apiUrl = `${process.env.REACT_APP_URL}/apps`;
  const token = localStorage.getItem("token");

  const [appList, setAppList] = useState([]);

  const handleCard = () => {
    console.log("card clicked");
  };

  useEffect(() => {
    try {
      const getApps = async () => {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setAppList(response.data);
      };
      getApps();
    } catch (error) {}
  }, []);
  return (
    <div className="apps">
      <h1>My Apps</h1>
      <div class="centered">
        <section class="cards">
          {appList.map((app) => {
            let url = app.app_link;
            return (
              <div class="app-card" onClick={() => window.open(url, "_blank")}>
                <div className="app-card__img-wrapper">
                  <img
                    src={app.app_img}
                    className="app-card__img"
                    alt="icons"
                  />
                </div>
                <p>{app.app_name}</p>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default AppList;
