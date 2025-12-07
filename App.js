import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function App() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "June",
      "July",
      "Aus",
      "Sep",
      "Oce",
      "Nov",
      "De",
    ],
    datasets: [
      {
        label: "Sales",
        data: [400, 450, 500, 550, 600, 650, 700, 560, 888, 500, 700],
        backgroundColor: [
          "#FF0000", // Red
          "#FF7F00", // Orange
          "#134686", // Yellow
          "#00FF00", // Green
          "#0000FF", // Blue
          "#4B0082", // Indigo
          "#8A2BE2", // Violet
          "#00FFFF", // Cyan
          "#EBD5AB", // Lawn Green
          "#FF6347", // Tomato
          "#FFD700", // Gold
        ],
      },
    ],
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Website แสดงกราฟ</h1>
      <div
        style={{
          background: "#fff",
          padding: 20,
          borderRadius: 10,
          boxShadow: "0 0 10px #ccc",
        }}
      >
        <Bar data={data} />
      </div>
    </div>
  );
}
