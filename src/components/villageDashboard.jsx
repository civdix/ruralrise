// import React, { useState, useEffect } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Table } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
// import { BarChart, LineChart } from "recharts";

// const Dashboard = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch or use static JSON data for village-company negotiations
//     fetch("/api/villageData.json")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
//       {/* Jobs and Revenue Overview */}
//       <Card>
//         <CardContent>
//           <h2 className="text-xl font-bold">Jobs & Revenue</h2>
//           <Table>
//             <thead>
//               <tr>
//                 <th>Village</th>
//                 <th>Jobs Offered</th>
//                 <th>Revenue (₹)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((village) => (
//                 <tr key={village.id}>
//                   <td>{village.basicInfo.villageName}</td>
//                   <td>{village.jobsOffered}</td>
//                   <td>{village.revenue}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </CardContent>
//       </Card>

//       {/* GDP Growth Chart */}
//       <Card>
//         <CardContent>
//           <h2 className="text-xl font-bold">Village GDP Growth</h2>
//           <LineChart
//             width={400}
//             height={300}
//             data={data.flatMap((v) => v.gdpHistory)}
//           >
//             {/* Define chart properties */}
//           </LineChart>
//         </CardContent>
//       </Card>

//       {/* Population Trends */}
//       <Card>
//         <CardContent>
//           <h2 className="text-xl font-bold">Population Analysis</h2>
//           <BarChart
//             width={400}
//             height={300}
//             data={data.flatMap((v) => v.populationTrends)}
//           >
//             {/* Define chart properties */}
//           </BarChart>
//         </CardContent>
//       </Card>

//       {/* New Growth News */}
//       <Card>
//         <CardContent>
//           <h2 className="text-xl font-bold">Growth & Development News</h2>
//           <ul>
//             {data.map((village) => (
//               <li key={village.id}>{village.growthNews}</li>
//             ))}
//           </ul>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Dashboard;

// // Dummy JSON Data (12 months record)
// const dummyData = [
//   {
//     id: 1,
//     basicInfo: {
//       villageName: "Rampur",
//       state: "Uttar Pradesh",
//     },
//     jobsOffered: 120,
//     revenue: 500000,
//     gdpHistory: [
//       { month: "Jan", gdp: 200000 },
//       { month: "Feb", gdp: 210000 },
//       { month: "Mar", gdp: 220000 },
//       { month: "Apr", gdp: 230000 },
//       { month: "May", gdp: 250000 },
//       { month: "Jun", gdp: 270000 },
//       { month: "Jul", gdp: 300000 },
//       { month: "Aug", gdp: 320000 },
//       { month: "Sep", gdp: 340000 },
//       { month: "Oct", gdp: 360000 },
//       { month: "Nov", gdp: 380000 },
//       { month: "Dec", gdp: 400000 },
//     ],
//     populationTrends: [
//       { month: "Jan", population: 5000 },
//       { month: "Feb", population: 5050 },
//       { month: "Mar", population: 5100 },
//       { month: "Apr", population: 5150 },
//       { month: "May", population: 5200 },
//       { month: "Jun", population: 5250 },
//       { month: "Jul", population: 5300 },
//       { month: "Aug", population: 5350 },
//       { month: "Sep", population: 5400 },
//       { month: "Oct", population: 5450 },
//       { month: "Nov", population: 5500 },
//       { month: "Dec", population: 5550 },
//     ],
//     growthNews: "New tech park opened in Rampur creating 100+ jobs.",
//   },
// ];
