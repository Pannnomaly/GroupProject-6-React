import { Bed, NotebookPen, LogOut } from "lucide-react";
import { ChartAreaInteractive } from "@/components/chart-area-interactive.jsx";

export default function AdminDashboard() {
  return (
      <div className="m-5 flex flex-col gap-6 w-full md:px-0">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        {/* <div id="block-2" className="grid grid-cols-1 gap-4">
          <div
            id="RA"
            className="bg-primary-foreground rounded-lg h-fit min-h-32 p-5 flex flex-col gap-2"
          >
            <p className="font-bold">Recent Activites</p>
            <div
              id="scrolling-RA"
              className="flex flex-col gap-2 max-h-100 overflow-y-auto pr-2"
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
              <div className="p-2">
                <p>Activity 4</p>
                <p className="text-sm font-extralight">10 hours ago</p>
              </div>
              <div className="p-2">
                <p>Activity 4</p>
                <p className="text-sm font-extralight">10 hours ago</p>
              </div>
              <div className="p-2">
                <p>Activity 4</p>
                <p className="text-sm font-extralight">10 hours ago</p>
              </div>
              <div className="p-2">
                <p>Activity 4</p>
                <p className="text-sm font-extralight">10 hours ago</p>
              </div>
              <div className="p-2">
                <p>Activity 4</p>
                <p className="text-sm font-extralight">10 hours ago</p>
              </div>
              <div className="p-2">
                <p>Activity 4</p>
                <p className="text-sm font-extralight">10 hours ago</p>
              </div>
              <div className="p-2">
                <p>Activity 4</p>
                <p className="text-sm font-extralight">10 hours ago</p>
              </div>
            </div>
          </div>
        </div> */}
        <div id="block-3" className="w-full">
          <div className="bg-primary-foreground rounded-lg h-fit min-h-32 p-5">
            <ChartAreaInteractive />
          </div>
        </div>
      </div>
  );
}
