"use client"

import { Pie, PieChart, Cell } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Define the props interface
interface PieChartProps {
  submitted: number;
  unsubmitted: number;
}

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  submitted: {
    label: "Submitted",
    color: "#FFA500", // Orange color
  },
  unsubmitted: {
    label: "Unsubmitted",
    color: "#00008B", // Dark Blue color
  }
} satisfies ChartConfig

export function PieChartComponent({ submitted, unsubmitted }: PieChartProps) {
  // Dynamic data for the pie chart based on props
  const chartData = [
    { name: "Submitted", value: submitted, fill: "#FFA500" }, // Orange color
    { name: "Unsubmitted", value: unsubmitted, fill: "#00008B" } // Dark Blue color
  ];

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Exam Paper Submission</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex pb-0">
        <div className="flex-1">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={80} // You can adjust the outer radius as needed
                fill="#8884d8" // Default fill color if not specified in data
              >
                {
                  chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))
                }
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>
        <div className="flex flex-col ml-4">
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2" style={{ backgroundColor: "#FFA500" }}></div>
            <span>Submitted</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2" style={{ backgroundColor: "#00008B" }}></div>
            <span>Unsubmitted</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}