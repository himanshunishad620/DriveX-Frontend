import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import type { ChartOptions } from "chart.js";
import { Pie } from "react-chartjs-2";
import { formatToMBorGBNumber } from "../../../helper/helperMethod";

ChartJS.register(ArcElement, Tooltip, Legend);

const options: ChartOptions<"pie"> = {
  responsive: false,
  plugins: {
    legend: {
      position: "right",
      labels: {
        color: "white",
        font: {
          size: 15,
          weight: "bold",
        },
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
  },
};

export default function PieChart(record: any) {
  const data = {
    labels: ["Documents", "Images", "Medias", "Others"],
    datasets: [
      {
        data: [
          formatToMBorGBNumber(record?.data?.document.spaceTaken),
          formatToMBorGBNumber(record?.data?.image.spaceTaken),
          formatToMBorGBNumber(record?.data?.media.spaceTaken),
          formatToMBorGBNumber(record?.data?.other.spaceTaken),
        ],
        backgroundColor: ["#FF7474", "#3DD9B3", "#F9AB72", "#EEA8FD"],
        borderWidth: 0,
      },
    ],
  };
  return (
    <div className="flex h-full w-full flex-col justify-center">
      <div className="flex h-full w-full items-center justify-center">
        <Pie
          data={data}
          options={options}
          style={{
            width: "90%",
            padding: 0,
            margin: 0,
          }}
        />
      </div>
    </div>
  );
}
