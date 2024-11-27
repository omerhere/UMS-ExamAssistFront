import React from 'react';

interface Task {
  task: string;
  value: number;
}

interface TaskTableProps {
  data: Task[];
}

const TaskTable: React.FC<TaskTableProps> = ({ data }) => {
  // Calculate the total value for percentage calculation
  const totalValue = data.reduce((acc, task) => acc + task.value, 0);

  return (
    <div className="m-4">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-200 p-2">Tasks</th>
            <th className="border border-gray-200 p-2">Progress Bar</th>
            <th className="border border-gray-200 p-2">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((task, index) => {
            const percentage = ((task.value / totalValue) * 100).toFixed(2); // Calculate percentage
            return (
              <tr key={index}>
                <td className="border border-gray-200 p-2">{task.task}</td>
                <td className="border border-gray-200 p-2">
                  <div className="bg-gray-200 h-4">
                    <div
                      className="h-full"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: '#FF8C00', // Dark orange color
                      }}
                    />
                  </div>
                </td>
                <td className="border border-gray-200 p-2">{percentage}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;