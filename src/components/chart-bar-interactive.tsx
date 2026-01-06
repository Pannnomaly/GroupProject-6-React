"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

import {
  ChartContainer,
  type ChartConfig,
} from "@/components/ui/chart"

import React from "react"

const chartData = [
  { date: "2024-04-01", checkin: 22},
  { date: "2024-04-02", checkin: 9},
  { date: "2024-04-03", checkin: 16},
  { date: "2024-04-04", checkin: 24},
  { date: "2024-04-05", checkin: 37},
  { date: "2024-04-06", checkin: 30},
  { date: "2024-04-07", checkin: 24},
  { date: "2024-04-08", checkin: 40},
  { date: "2024-04-09", checkin: 5},
  { date: "2024-04-10", checkin: 26},
  { date: "2024-04-11", checkin: 32},
  { date: "2024-04-12", checkin: 29},
  { date: "2024-04-13", checkin: 34},
  { date: "2024-04-14", checkin: 13},
  { date: "2024-04-15", checkin: 12},
  { date: "2024-04-16", checkin: 13},
  { date: "2024-04-17", checkin: 44},
  { date: "2024-04-18", checkin: 36},
  { date: "2024-04-19", checkin: 24},
  { date: "2024-04-20", checkin: 8},
  { date: "2024-04-21", checkin: 13},
  { date: "2024-04-22", checkin: 22},
  { date: "2024-04-23", checkin: 13},
  { date: "2024-04-24", checkin: 38},
  { date: "2024-04-25", checkin: 21},
  { date: "2024-04-26", checkin: 7},
  { date: "2024-04-27", checkin: 38},
  { date: "2024-04-28", checkin: 12},
  { date: "2024-04-29", checkin: 31},
  { date: "2024-04-30", checkin: 45},
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
  { date: "2024-06-01", checkin: 17},
  { date: "2024-06-02", checkin: 47},
  { date: "2024-06-03", checkin: 10},
  { date: "2024-06-04", checkin: 43},
  { date: "2024-06-05", checkin: 8},
  { date: "2024-06-06", checkin: 29},
  { date: "2024-06-07", checkin: 32},
  { date: "2024-06-08", checkin: 38},
  { date: "2024-06-09", checkin: 43},
  { date: "2024-06-10", checkin: 15},
  { date: "2024-06-11", checkin: 9},
  { date: "2024-06-12", checkin: 49},
  { date: "2024-06-13", checkin: 8},
  { date: "2024-06-14", checkin: 42},
  { date: "2024-06-15", checkin: 30},
  { date: "2024-06-16", checkin: 37},
  { date: "2024-06-17", checkin: 47},
  { date: "2024-06-18", checkin: 10},
  { date: "2024-06-19", checkin: 34},
  { date: "2024-06-20", checkin: 40},
  { date: "2024-06-21", checkin: 16},
  { date: "2024-06-22", checkin: 31},
  { date: "2024-06-23", checkin: 48},
  { date: "2024-06-24", checkin: 13},
  { date: "2024-06-25", checkin: 14},
  { date: "2024-06-26", checkin: 43},
  { date: "2024-06-27", checkin: 44},
  { date: "2024-06-28", checkin: 14},
  { date: "2024-06-29", checkin: 10},
  { date: "2024-06-30", checkin: 44},
]

const chartConfig = {
  checkin: {
    label: "checkin",
    color: "#2563eb",
  },
} satisfies ChartConfig

export function ChartComponent() {
    return (
        <ChartContainer id="chart" config={chartConfig} className="min-h-50 w-full">
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
                <ChartTooltip content={<ChartTooltipContent active={undefined} payload={undefined} className={undefined} label={undefined} labelFormatter={undefined} labelClassName={undefined} formatter={undefined} color={undefined} nameKey={undefined} labelKey={undefined} />} />
                <Bar dataKey="checkin" fill="var(--chart-1)" radius={4} />
            </BarChart>
        </ChartContainer>
    )
}