import AllCards from "../../components/dashboardOverview/Allcards";
import BottomOverView from "../../components/dashboardOverview/BottomOverView";
import Chart from "../../components/dashboardOverview/Chart";

const DashboardOverview = () => {
  return (
    <div className="p-4 space-y-10">
      <AllCards />
      <Chart />
      <BottomOverView />
    </div>
  );
};

export default DashboardOverview;
