import React, { useEffect, useState } from "react";
// import { PieChart, ResponsiveContainer, Pie, Cell } from 'recharts';
import localStor from "../../utils/localStorage";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const lsItems = localStor.getDonation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  function calculateDonationPercentage() {
    if (items.length === 0) {
      return 0;
    }
    return (lsItems.length / items.length) * 100;
  }

  const data = [
    { value: 100 - calculateDonationPercentage() },
    { value: calculateDonationPercentage() },
  ];

  console.log(data);

  return (
    <div>
      <div className="flex h-72 justify-center items-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex my-6 justify-center">
        <div className="md:flex gap-11">
          <div className="flex items-center gap-2">
            <p>Your Donation</p>
            <div className="w-10 h-3 rounded-md bg-[#00C49F]"></div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <p>Total Donation</p>
              <div className="w-10 h-3 rounded-md bg-[#FF444A]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
