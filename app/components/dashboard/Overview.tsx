import Image from 'next/image';
import { OverviewCard } from './OverviewCard'; // Reusable card component

const overviewItems = [
  {
    title: "Exam Overview",
    buttonText: "Create New Exam",
    features: [
      { text: "Upload Exam File", icon: "/dashboard/logos_overview/exam overview/folder.png" },
      { text: "Set Exam Date and Time", icon: "/dashboard/logos_overview/exam overview/calendar.png" },
      { text: "Set Exam Duration", icon: "/dashboard/logos_overview/exam overview/clock.png" },
      { text: "Set Exam Location", icon: "/dashboard/logos_overview/exam overview/Vector.png" },
    ],
  },
  {
    title: "Pending Grading",
    buttonText: "Start Grading",
    features: [
      { text: "View Uploaded Exams", icon: "/dashboard/logos_overview/pending grading/VUE.png" },
      { text: "Preview Grades", icon: "/dashboard/logos_overview/pending grading/PG.png" },
      { text: "Due Date for Result", icon: "/dashboard/logos_overview/pending grading/calendar.png" },
      { text: "Feedback On Grades", icon: "/dashboard/logos_overview/pending grading/Vector.png" },
    ],
  },
  {
    title: "Upcoming Deadline",
    buttonText: "Set Reminder",
    features: [
      { text: "Approaching Deadlines", icon: "/dashboard/logos_overview/upcoming deadline/AD.png" },
      { text: "Due Dates", icon: "/dashboard/logos_overview/upcoming deadline/calender.png" },
      { text: "Set Reminders", icon: "/dashboard/logos_overview/upcoming deadline/clock.png" },
      { text: "Alert Notifications", icon: "/dashboard/logos_overview/upcoming deadline/notification.png" },
    ],
  },
  {
    title: "Queries",
    buttonText: "View All Queries",
    features: [
      { text: "Queries History", icon: "/dashboard/logos_overview/Queries/task-square.png" },
      { text: "Response Box", icon: "/dashboard/logos_overview/Queries/VUE.png" },
      { text: "2:00 PM - 5:00 PM", icon: "/dashboard/logos_overview/Queries/clock.png" },
      { text: "Query Notifications", icon: "/dashboard/logos_overview/Queries/notification.png" },
    ],
  },
];

const Overview = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="font-medium text-lg">Overview</h2>
        </div>
        <button className="text-[#2F80ED] font-medium text-sm">View all</button>
      </div>
      <div className="w-full bg-[#CED8E5] h-[1px] my-4" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {overviewItems.map((item, index) => (
          <OverviewCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Overview;