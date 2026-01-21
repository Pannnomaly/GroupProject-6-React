import { ChartAreaInteractive } from "@/components/chart-area-interactive.jsx";
import { useOutletContext } from "react-router-dom"; // เพิ่ม import นี้

export default function AdminDashboard() {
  const { API } = useOutletContext();

  return (
      <div className="m-5 flex flex-col gap-6 w-full md:px-0">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
          <div className="bg-primary-foreground rounded-lg h-fit min-h-32 p-5">
            <ChartAreaInteractive API={API} />
          </div>
      </div>
  );
}
