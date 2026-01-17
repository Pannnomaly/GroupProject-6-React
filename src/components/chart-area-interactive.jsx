import { useState } from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, Area as RechartsArea, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const chartData = [
  { date: "2024-04-01", booking: 22, revenue:2200},
  { date: "2024-04-02", booking: 97, revenue:3000},
  { date: "2024-04-03", booking: 16, revenue:7200},
  { date: "2024-04-04", booking: 24, revenue:2200},
  { date: "2024-04-05", booking: 37, revenue:3200},
  { date: "2024-04-06", booking: 30, revenue:1200},
  { date: "2024-04-07", booking: 24, revenue:5200},
  { date: "2024-04-08", booking: 40, revenue:9200},
  { date: "2024-04-09", booking: 59, revenue:3000},
  { date: "2024-04-10", booking: 26, revenue:1200},
  { date: "2024-04-11", booking: 32, revenue:7200},
  { date: "2024-04-12", booking: 29, revenue:2200},
  { date: "2024-04-13", booking: 34, revenue:2200},
  { date: "2024-04-14", booking: 13, revenue:7200},
  { date: "2024-04-15", booking: 12, revenue:200},
  { date: "2024-04-16", booking: 13, revenue:8200},
  { date: "2024-04-17", booking: 44, revenue:6200},
  { date: "2024-04-18", booking: 36, revenue:4200},
  { date: "2024-04-19", booking: 24, revenue:3200},
  { date: "2024-04-20", booking: 89, revenue:3000},
  { date: "2024-04-21", booking: 13, revenue:7200},
  { date: "2024-04-22", booking: 22, revenue:4200},
  { date: "2024-04-23", booking: 13, revenue:8200},
  { date: "2024-04-24", booking: 38, revenue:7200},
  { date: "2024-04-25", booking: 21, revenue:5200},
  { date: "2024-04-26", booking: 75, revenue:3000},
  { date: "2024-04-27", booking: 38, revenue:3200},
  { date: "2024-04-28", booking: 12, revenue:2200},
  { date: "2024-04-29", booking: 31, revenue:5200},
  { date: "2024-04-30", booking: 45, revenue:4200},
  { date: "2024-05-01", booking: 16, revenue:5200},
  { date: "2024-05-02", booking: 29, revenue:3200},
  { date: "2024-05-03", booking: 24, revenue:7200},
  { date: "2024-05-04", booking: 38, revenue:5200},
  { date: "2024-05-05", booking: 48, revenue:1200},
  { date: "2024-05-06", booking: 49, revenue:8200},
  { date: "2024-05-07", booking: 38, revenue:8200},
  { date: "2024-05-08", booking: 14, revenue:9200},
  { date: "2024-05-09", booking: 22, revenue:7200},
  { date: "2024-05-10", booking: 29, revenue:3200},
  { date: "2024-05-11", booking: 33, revenue:5200},
  { date: "2024-05-12", booking: 19, revenue:7200},
  { date: "2024-05-13", booking: 19, revenue:7200},
  { date: "2024-05-14", booking: 44, revenue:8200},
  { date: "2024-05-15", booking: 47, revenue:3200},
  { date: "2024-05-16", booking: 33, revenue:8200},
  { date: "2024-05-17", booking: 49, revenue:9200},
  { date: "2024-05-18", booking: 31, revenue:5200},
  { date: "2024-05-19", booking: 23, revenue:5200},
  { date: "2024-05-20", booking: 17, revenue:7200},
  { date: "2024-05-21", booking: 82, revenue:3000},
  { date: "2024-05-22", booking: 81, revenue:3000},
  { date: "2024-05-23", booking: 25, revenue:2200},
  { date: "2024-05-24", booking: 29, revenue:4200},
  { date: "2024-05-25", booking: 20, revenue:1200},
  { date: "2024-05-26", booking: 21, revenue:3200},
  { date: "2024-05-27", booking: 42, revenue:2000},
  { date: "2024-05-28", booking: 23, revenue:3200},
  { date: "2024-05-29", booking: 78, revenue:3000},
  { date: "2024-05-30", booking: 34, revenue:200},
  { date: "2024-05-31", booking: 17, revenue:8200},
  { date: "2024-06-01", booking: 17, revenue:8200},
  { date: "2024-06-02", booking: 47, revenue:2000},
  { date: "2024-06-03", booking: 10, revenue:3200},
  { date: "2024-06-04", booking: 43, revenue:9200},
  { date: "2024-06-05", booking: 88, revenue:3000},
  { date: "2024-06-06", booking: 29, revenue:4200},
  { date: "2024-06-07", booking: 32, revenue:3200},
  { date: "2024-06-08", booking: 38, revenue:5200},
  { date: "2024-06-09", booking: 43, revenue:8200},
  { date: "2024-06-10", booking: 15, revenue:5200},
  { date: "2024-06-11", booking: 92, revenue:3000},
  { date: "2024-06-12", booking: 49, revenue:2200},
  { date: "2024-06-13", booking: 81, revenue:3000},
  { date: "2024-06-14", booking: 42, revenue:6200},
  { date: "2024-06-15", booking: 30, revenue:7200},
  { date: "2024-06-16", booking: 37, revenue:1200},
  { date: "2024-06-17", booking: 47, revenue:5200},
  { date: "2024-06-18", booking: 10, revenue:7200},
  { date: "2024-06-19", booking: 34, revenue:1200},
  { date: "2024-06-20", booking: 40, revenue:8200},
  { date: "2024-06-21", booking: 16, revenue:9200},
  { date: "2024-06-22", booking: 31, revenue:7200},
  { date: "2024-06-23", booking: 48, revenue:2000},
  { date: "2024-06-24", booking: 13, revenue:2200},
  { date: "2024-06-25", booking: 14, revenue:1200},
  { date: "2024-06-26", booking: 43, revenue:4200},
  { date: "2024-06-27", booking: 44, revenue:8200},
  { date: "2024-06-28", booking: 14, revenue:9200},
  { date: "2024-06-29", booking: 10, revenue:3200},
  { date: "2024-06-30", booking: 44, revenue:6200},
]

// การตั้งค่า Config (ตัด satisfies ChartConfig ออก)
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  booking: {
    label: "Booking",
    color: "var(--chart-1)",
  },
  revenue: {
    label: "Revenue",
    color: "var(--chart-2)",
  }
}

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = useState("90d")

  // ส่วนการกรองข้อมูล
  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Total Booking</CardTitle>
          <CardDescription>
            Showing total bookings for the last {timeRange === "90d" ? "3 months" : timeRange === "30d" ? "30 days" : "7 days"}
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillBooking" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-2)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
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
            <YAxis yAxisId="left" hide/>
            <YAxis yAxisId="right" hide/>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <RechartsArea
              yAxisId="right"
              dataKey="revenue"
              type="natural"
              fill="url(#fillRevenue)"
              stroke="var(--chart-2)"
              stackId="a"
            />
            <RechartsArea
              yAxisId="left"
              dataKey="booking"
              type="natural"
              fill="url(#fillBooking)"
              stroke="var(--chart-1)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}