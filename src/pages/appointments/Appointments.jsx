import { useState } from "react";
import CompactStatCards from "../../components/appointments/Cards";
import CopyCard from "../../components/appointments/CopyCard";
import AppointmentTable from "../../components/appointments/Table";

const Appointments = () => {
  const [selectedLink, setSelectedLink] = useState("");
  return (
    <div className="p-4">
      <CompactStatCards />
      <CopyCard bookingLink={selectedLink} />
      <AppointmentTable onRowClick={setSelectedLink} />
    </div>
  );
};

export default Appointments;
