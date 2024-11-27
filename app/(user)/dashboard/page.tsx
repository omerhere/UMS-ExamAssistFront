import ConflictAlertTable from "@/components/ui/conflic_alert_table";
import TimeTable from "@/components/ui/timetable";
import { PieChartComponent } from "@/components/ui/piecharts";
import TaskTable from "@/components/ui/TaskTable";

const taskData = [
  { task: "Invigilator Assignment", value: 186 },
  { task: "Hall Allocation", value: 305 },
  { task: "Exam Timetable", value: 237 },
  { task: "Conflict Resolution", value: 73 },
  { task: "Schedule Finalization", value: 209 },
];

const ExamAssistantPage = () => {
  return (
    <div className="m-8 flex flex-col space-y-6 justify-center lato-regular">
      <div className="flex space-x-3 items-center text-xl lato-black">
        🖐 Welcome, Exam Assistant!
      </div>

      <div>
        <div className="flex space-x-3 items-center justify-between m-2">
          <div className="flex space-x-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>
            <p>Time Table</p>
          </div>
          <div className="flex space-x-3 items-center text-blue-500 underline">
            <p>View all</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>

        <div className="m-4">
          <hr className="border border-gray-200" />
          <TimeTable></TimeTable>
        </div>
      </div>

      <div>
        <div className="flex space-x-3 items-center justify-between m-2">
          <div className="flex space-x-3 items-center">
            <svg
              xmlns="http://www.w3 ```javascript
            .org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
            <p>Conflict Alerts</p>
          </div>
          <div className="flex space-x-3 items-center">
            <p className="text-blue-500">View all</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <div className="m-4">
          <hr className="border border-gray-200" />
          <ConflictAlertTable></ConflictAlertTable>
        </div>
      </div>

      
        <div className="h-96 flex">
          {" "}
          {/* Increased height for better visibility */}
          <PieChartComponent submitted={100} unsubmitted={90} />{" "}
          {/* Increase height */}
          <div className="flex-1 ml-8">
            {" "}
            {/* Increased margin to push TaskTable further right */}
            <TaskTable data={taskData} /> {/* Include the TaskTable here */}
          </div>
        </div>

        <section className="col-span-3">
          {/* Additional content can go here if needed */}
        </section>
      
    </div>
  );
};

export default ExamAssistantPage;
