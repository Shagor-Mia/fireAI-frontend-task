import CallDetails from "../../components/callList/CallDetails";
import CallList from "../../components/callList/CallList";

const CallLogs = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-5 justify-between">
        <div className="flex-1">
          <CallList />
        </div>
        <div className="flex-1">
          <CallDetails />
        </div>
      </div>
    </div>
  );
};

export default CallLogs;
