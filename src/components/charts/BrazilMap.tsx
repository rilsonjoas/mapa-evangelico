"use client";

import { useEffect } from "react";
import { Chart } from "react-google-charts";
import { evangelicalStatistics } from "@/data/statistics";

export default function BrazilMap() {
  const data = [
    ["Estado", "Porcentagem de evangélicos"],
    ...evangelicalStatistics.map((item) => [item.state, item.percentage])
  ];

  const options = {
    region: "BR",
    resolution: "provinces",
    backgroundColor: "#f4f5f6",
    numberFormat: "%",
    colorAxis: { colors: ["#7fdbf3", "#023947"] },
    width: "100%",
    height: "100%",
    keepAspectRatio: true,
  };

  return (
    <div className="w-full h-full">
      <Chart
        chartType="GeoChart"
        width="100%"
        height="100%"
        data={data}
        options={options}
      />
    </div>
  );
}