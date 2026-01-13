"use client"

import React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartTooltip, ChartTooltipContent, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { date: "2024-05-01", checkin: 16},
  { date: "2024-05-02", checkin: 29},
  { date: "2024-05-03", checkin: 24},
  { date: "2024-05-04", checkin: 38},
  { date: "2024-05-05", checkin: 48},
  { date: "2024-05-06", checkin: 49},
  { date: "2024-05-07", checkin: 38},
  { date: "2024-05-08", checkin: 14},
  { date: "2024-05-09", checkin: 22},
  { date: "2024-05-10", checkin: 29},
  { date: "2024-05-11", checkin: 33},
  { date: "2024-05-12", checkin: 19},
  { date: "2024-05-13", checkin: 19},
  { date: "2024-05-14", checkin: 44},
  { date: "2024-05-15", checkin: 47},
  { date: "2024-05-16", checkin: 33},
  { date: "2024-05-17", checkin: 49},
  { date: "2024-05-18", checkin: 31},
  { date: "2024-05-19", checkin: 23},
  { date: "2024-05-20", checkin: 17},
  { date: "2024-05-21", checkin: 8},
  { date: "2024-05-22", checkin: 8},
  { date: "2024-05-23", checkin: 25},
  { date: "2024-05-24", checkin: 29},
  { date: "2024-05-25", checkin: 20},
  { date: "2024-05-26", checkin: 21},
  { date: "2024-05-27", checkin: 42},
  { date: "2024-05-28", checkin: 23},
  { date: "2024-05-29", checkin: 7},
  { date: "2024-05-30", checkin: 34},
  { date: "2024-05-31", checkin: 17},
]

const chartConfig = {
  checkin: {
    label: "Check-in",
    color: "#2563eb",
  },
}

export function ChartComponent() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={32}
          tickFormatter={(value) => {
            const date = new Date(value)
            return date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })
          }}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="checkin" fill="var(--chart-1)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}