// import { ThemeProvider } from "@/components/theme-provider"
import { Bed, NotebookPen, LogOut } from "lucide-react";
import { ChartComponent } from "@/components/chart-bar-interactive.jsx";
import AsideAdmin from "@/pages/AsideAdmin";

export default function AdminDashboard() {
  return (
    <div className="flex">
      <AsideAdmin />
      <div className="m-5 flex flex-col gap-6 w-full md:px-0">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div id="block-1" className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-primary-foreground rounded-lg min-h-32 flex-1 flex justify-between p-10">
            <div>
              <p>Total Booking</p>
              <p>85/120</p>
            </div>
            <Bed color="#5661ff" />
          </div>
          <div className="bg-primary-foreground rounded-lg min-h-32 flex-1 flex justify-between p-10">
            <div>
              <p>Check-in</p>
              <p>23</p>
            </div>
            <NotebookPen color="#56ff5e" />
          </div>
          <div className="bg-primary-foreground rounded-lg min-h-32 flex-1 flex justify-between p-10">
            <div>
              <p>Check-out</p>
              <p>23</p>
            </div>
            <LogOut color="#ff5656" />
          </div>
        </div>
        <div id="block-2" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            id="RA"
            className="bg-primary-foreground rounded-lg h-fit min-h-32 p-5 flex flex-col gap-2"
          >
            <p className="font-bold">Recent Activites</p>
            <div
              id="scrolling-RA"
              className="flex flex-col gap-2 max-h-56 overflow-y-auto pr-2"
            >
              <div className="p-2">
                <p>Activity 1</p>
                <p className="text-sm font-extralight">5 mins ago</p>
              </div>
              <div className="p-2">
                <p>Activity 2</p>
                <p className="text-sm font-extralight">3 hours ago</p>
              </div>
              <div className="p-2">
                <p>Activity 3</p>
                <p className="text-sm font-extralight">4 hours ago</p>
              </div>
              <div className="p-2">
                <p>Activity 4</p>
                <p className="text-sm font-extralight">10 hours ago</p>
              </div>
            </div>
          </div>
          <div
            id="PT"
            className="bg-primary-foreground rounded-lg h-fit min-h-32 p-5 flex flex-col gap-2"
          >
            <p className="font-bold">Pending Tasks</p>
            <div
              id="scrolling-PT"
              className="flex flex-col gap-2 max-h-56 overflow-y-auto pr-2"
            >
              <div className="p-2">
                <p>Task 1</p>
                <p className="text-sm font-extralight">10 secs ago</p>
              </div>
              <div className="p-2">
                <p>Task 2</p>
                <p className="text-sm font-extralight">1 hours ago</p>
              </div>
              <div className="p-2">
                <p>Task 3</p>
                <p className="text-sm font-extralight">10 hours ago</p>
              </div>
              <div className="p-2">
                <p>Task 4</p>
                <p className="text-sm font-extralight">16 hours ago</p>
              </div>
            </div>
          </div>
        </div>
        <div id="block-3" className="w-full">
          <div className="bg-primary-foreground rounded-lg h-fit min-h-32 p-5">
            <p className="font-bold">Total Revenue</p>
            <ChartComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
