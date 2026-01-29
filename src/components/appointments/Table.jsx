import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const appointments = [
  {
    clientName: "Jane.D",
    clientPhone: "01966865765",
    clientEmail: "admin@gmail.com",
    device: "Apple iPhone 13 Pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "09:00",
    detailsLink: "/appointment/1",
  },
  {
    clientName: "Jane.D",
    clientPhone: "01966865765",
    clientEmail: "admin@gmail.com",
    device: "Apple iPhone 13 Pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "10:00",
    detailsLink: "/appointment/2",
  },
  {
    clientName: "Rahim Khan",
    clientPhone: "01712345678",
    clientEmail: "rahim.khan@yahoo.com",
    device: "Samsung Galaxy S23",
    repairType: "Battery",
    date: "02/06/2026",
    slotNo: 2,
    startTime: "10:30",
    detailsLink: "/appointment/3",
  },
  {
    clientName: "Jane.D",
    clientPhone: "01966865765",
    clientEmail: "admin@gmail.com",
    device: "Apple iPhone 13 Pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "11:00",
    detailsLink: "/appointment/4",
  },
  {
    clientName: "Ayesha Akter",
    clientPhone: "01898765432",
    clientEmail: "ayesha.akter@gmail.com",
    device: "Google Pixel 7",
    repairType: "Charging Port",
    date: "02/06/2026",
    slotNo: 3,
    startTime: "11:30",
    detailsLink: "/appointment/5",
  },
  {
    clientName: "Jane.D",
    clientPhone: "01966865765",
    clientEmail: "admin@gmail.com",
    device: "Apple iPhone 13 Pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "12:00",
    detailsLink: "/appointment/6",
  },
  {
    clientName: "Sumon Mia",
    clientPhone: "01655554444",
    clientEmail: "sumon123@hotmail.com",
    device: "Xiaomi Redmi Note 12",
    repairType: "Back Glass",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "13:00",
    detailsLink: "/appointment/7",
  },
  {
    clientName: "Jane.D",
    clientPhone: "01966865765",
    clientEmail: "admin@gmail.com",
    device: "Apple iPhone 13 Pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "14:00",
    detailsLink: "/appointment/8",
  },
  {
    clientName: "Nadia Islam",
    clientPhone: "01911223344",
    clientEmail: "nadia.islam@gmail.com",
    device: "OnePlus 11",
    repairType: "Camera",
    date: "02/06/2026",
    slotNo: 4,
    startTime: "14:30",
    detailsLink: "/appointment/9",
  },
  {
    clientName: "Jane.D",
    clientPhone: "01966865765",
    clientEmail: "admin@gmail.com",
    device: "Apple iPhone 13 Pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "15:00",
    detailsLink: "/appointment/10",
  },
  {
    clientName: "Jane.D",
    clientPhone: "01966865765",
    clientEmail: "admin@gmail.com",
    device: "Apple iPhone 13 Pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "16:00",
    detailsLink: "/appointment/11",
  },
  {
    clientName: "Faruk Hossain",
    clientPhone: "01787654321",
    clientEmail: "faruk.h@gmail.com",
    device: "Apple iPhone 14",
    repairType: "Speaker",
    date: "02/06/2026",
    slotNo: 2,
    startTime: "16:30",
    detailsLink: "/appointment/12",
  },
  {
    clientName: "Jane.D",
    clientPhone: "01966865765",
    clientEmail: "admin@gmail.com",
    device: "Apple iPhone 13 Pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "17:00",
    detailsLink: "/appointment/13",
  },
  {
    clientName: "Sabrina Yeasmin",
    clientPhone: "01844556677",
    clientEmail: "sabrina.y@gmail.com",
    device: "Samsung Galaxy A54",
    repairType: "Display",
    date: "02/06/2026",
    slotNo: 5,
    startTime: "17:30",
    detailsLink: "/appointment/14",
  },
  {
    clientName: "Jane.D",
    clientPhone: "01966865765",
    clientEmail: "admin@gmail.com",
    device: "Apple iPhone 13 Pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "18:00",
    detailsLink: "/appointment/15",
  },
  {
    clientName: "Karim Bhai",
    clientPhone: "01933445566",
    clientEmail: "karim.bhai@outlook.com",
    device: "Oppo Reno 8",
    repairType: "Motherboard",
    date: "02/06/2026",
    slotNo: 3,
    startTime: "09:30",
    detailsLink: "/appointment/16",
  },
  {
    clientName: "Jane.D",
    clientPhone: "01966865765",
    clientEmail: "admin@gmail.com",
    device: "Apple iPhone 13 Pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "10:30",
    detailsLink: "/appointment/17",
  },
  {
    clientName: "Rina Begum",
    clientPhone: "01677778899",
    clientEmail: "rina.begum@yahoo.com",
    device: "Vivo Y78",
    repairType: "Power Button",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "11:30",
    detailsLink: "/appointment/18",
  },
  {
    clientName: "Jane.D",
    clientPhone: "01966865765",
    clientEmail: "admin@gmail.com",
    device: "Apple iPhone 13 Pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "12:30",
    detailsLink: "/appointment/19",
  },
  {
    clientName: "Tanzim Rahman",
    clientPhone: "01799998888",
    clientEmail: "tanzim.rahman@gmail.com",
    device: "Nothing Phone (1)",
    repairType: "Software Issue",
    date: "02/06/2026",
    slotNo: 4,
    startTime: "13:30",
    detailsLink: "/appointment/20",
  },
];

const AppointmentTable = ({ onRowClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(appointments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAppointments = appointments.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="bg-gray-900">
      <div className="card shadow-2xl">
        <div className="card-body p-0">
          {/* Mobile-first scroll */}
          <div className="overflow-x-auto">
            <table className="table table-compact w-full text-sm">
              <thead>
                <tr className="bg-base-200">
                  <th>Client</th>
                  <th className="hidden sm:table-cell">Phone</th>
                  <th className="hidden md:table-cell">Email</th>
                  <th className="hidden lg:table-cell">Device</th>
                  <th>Repair</th>
                  <th className="hidden sm:table-cell">Date</th>
                  <th className="hidden md:table-cell text-center">Slot</th>
                  <th className="text-center">Time</th>
                </tr>
              </thead>

              <tbody>
                {currentAppointments.map((appt, index) => (
                  <tr
                    key={index}
                    className="hover cursor-pointer"
                    onClick={() => onRowClick(appt.detailsLink)}
                  >
                    <td className="font-medium">{appt.clientName}</td>

                    <td className="hidden sm:table-cell">{appt.clientPhone}</td>

                    <td className="hidden md:table-cell text-xs opacity-75">
                      {appt.clientEmail}
                    </td>

                    <td className="hidden lg:table-cell">{appt.device}</td>

                    <td>{appt.repairType}</td>

                    <td className="hidden sm:table-cell">{appt.date}</td>

                    <td className="hidden md:table-cell text-center">
                      {appt.slotNo}
                    </td>

                    <td className="text-center whitespace-nowrap">
                      {appt.startTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* pagination untouched */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 px-4 sm:px-6 py-6 border-t border-slate-800/60 bg-[#0a1229]">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="group flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-400 disabled:opacity-30 transition-all"
            >
              <ChevronLeft size={18} />
              <span>Previous</span>
            </button>

            <div className="flex items-center gap-2 flex-wrap justify-center">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 rounded-lg text-sm font-semibold transition-all
                      ${
                        currentPage === page
                          ? "bg-blue-600 text-white scale-110"
                          : "text-blue-500 hover:bg-blue-500/10"
                      }`}
                  >
                    {page}
                  </button>
                ),
              )}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="group flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400 disabled:opacity-30 transition-all"
            >
              <span>Next</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentTable;
