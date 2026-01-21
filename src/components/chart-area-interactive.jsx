import { Area, AreaChart, CartesianGrid, XAxis, Area as RechartsArea, YAxis } from "recharts"
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useOutletContext } from "react-router-dom";

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

  const { API } = useOutletContext();
  const [rawBookings, setRawBookings] = useState([]); // State for DB data that we gonna fetch
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const fetchBookings = async () => {
        try {
          // ใช้ axios ดึงข้อมูลตามปกติ
          const response = await axios.get(`${API}/bookings`);

          if (response.data.success) {
            const allData = response.data.data;

            // --- จุดที่แก้ไข: กรองข้อมูล "ทุกตัว" ใน Array ---
            // ตรวจสอบสถานะของแต่ละ item ว่าไม่ใช่ pending และไม่ใช่ cancelled
            const filteredData = allData.filter((item) =>
              item.status !== "pending" && item.status !== "cancelled"
            );

            // นำข้อมูลที่กรองแล้ว (เหลือแค่ตัวที่จ่ายเงินแล้ว/เช็คเอาท์แล้ว) มาคำนวณยอด
            const groupedData = filteredData.reduce((acc, curr) => {
              const date = new Date(curr.checkInDate).toISOString().split('T')[0];
              const revenue = curr.pricing?.totalAmount || 0;

              if (!acc[date]) {
                acc[date] = { date, booking: 0, revenue: 0 };
              }

              acc[date].booking += 1;
              acc[date].revenue += revenue;
              return acc;
            }, {});

            const sortedData = Object.values(groupedData).sort(
              (a, b) => new Date(a.date) - new Date(b.date)
            );

            setRawBookings(sortedData);
          }
        } catch (error) {
          console.error("Error fetching bookings:", error);
        }
      };

      if (API) fetchBookings();
    }, [API]);

  // Filtered by date
  const filteredData = rawBookings.filter((item) => {
    const date = new Date(item.date) // วันที่จากข้อมูล (UTC 00:00)

    const startDate = new Date()

    let daysToSubtract = 90
    if (timeRange === "30d") daysToSubtract = 30
    else if (timeRange === "7d") daysToSubtract = 7

    startDate.setDate(startDate.getDate() - daysToSubtract)
    // ตรวจสอบค่าใน Console ว่า startDate ของแต่ละ Option คือวันไหน?
    // console.log(`Range: ${timeRange}, Start: ${startDate.toDateString()}, Item: ${date.toDateString()}`);

    // ถ้าค่ามากกว่า startDate ที่กำหนดย้อนหลังไป ให้แสดงทั้งหมด
    return date >= startDate
  })




  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Total Booking</CardTitle>
          <CardDescription>
            Showing total booking from the last {timeRange === "90d" ? "3 months" : timeRange === "30d" ? "30 days" : "7 days"} to latest Booking
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-40 rounded-lg sm:ml-auto sm:flex"
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
          className="aspect-auto h-112.5 w-full"
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