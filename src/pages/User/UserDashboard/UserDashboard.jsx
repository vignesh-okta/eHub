import AppList from "../../../components/component/AppList/AppList";
import SidebarMenu from "../../../components/component/SidebarMenu/SidebarMenu";
import "./UserDashboard.scss";

function UserDashboard() {
  const name = "Padma";
  return (
    <div className="dashboard">
      <SidebarMenu name={name} />
      <AppList />
    </div>
  );
}

export default UserDashboard;
