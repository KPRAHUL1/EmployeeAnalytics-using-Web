import React, { useEffect } from "react";
import Chart from "chart.js";

export default function CardLineChart() {
  useEffect(() => {
    const ctx = document.getElementById("employee-analysis-chart").getContext("2d");

    const chartConfig = {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Months
        datasets: [
          {
            label: "Employee Performance (%)",
            data: [78, 82, 80, 85, 88, 90, 92],
            borderColor: "#4CAF50",
            backgroundColor: "rgba(76, 175, 80, 0.2)",
            fill: true,
            lineTension: 0.4,
            pointBackgroundColor: "#4CAF50",
            pointBorderColor: "#fff",
          },
          {
            label: "Attendance Rate (%)",
            data: [95, 92, 96, 93, 94, 97, 98],
            borderColor: "#2196F3",
            backgroundColor: "rgba(33, 150, 243, 0.2)",
            fill: true,
            lineTension: 0.4,
            pointBackgroundColor: "#2196F3",
            pointBorderColor: "#fff",
          },
          {
            label: "Salary Increase (%)",
            data: [5, 6, 7, 6.5, 7, 8, 9],
            borderColor: "#FF9800",
            backgroundColor: "rgba(255, 152, 0, 0.2)",
            fill: true,
            lineTension: 0.4,
            pointBackgroundColor: "#FF9800",
            pointBorderColor: "#fff",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "top",
          labels: {
            fontColor: "#FFFFFF",
            fontSize: 14,
            fontStyle: "bold",
          },
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "#FFFFFF",
              },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#FFFFFF",
              },
              gridLines: {
                color: "rgba(255, 255, 255, 0.1)",
                borderDash: [5, 5],
              },
            },
          ],
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
      },
    };

    const employeeChart = new Chart(ctx, chartConfig);

    // Cleanup on unmount
    return () => {
      employeeChart.destroy();
    };
  }, []);

  return (
    <div className="relative h-full flex flex-col min-w-0 break-words w-full  shadow-lg rounded bg-blueGray-700">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
              Dashboard
            </h6>
            <h2 className="text-white text-xl font-semibold">Employee Analysis</h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        <div className="relative h-full">
          <canvas id="employee-analysis-chart"></canvas>
        </div>
      </div>
    </div>
  );
}
