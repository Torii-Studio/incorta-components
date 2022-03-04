import ReactECharts from "echarts-for-react";

import { getFormattedDate } from "../../utils/general";

interface LocalProps {
  data?: Array<any>;
}

const IncortaCrypto = ({ data = [] }: LocalProps) => {
  const dateData = data.map((cell) =>
    getFormattedDate(new Date(cell.timestamp))
  );

  const seriesData = data.map((cell) => [
    Number(cell.close),
    Number(cell.open),
    Number(cell.low),
    Number(cell.high),
  ]);

  const options = {
    xAxis: {
      data: dateData,
    },
    yAxis: {},
    series: [
      {
        type: "candlestick",
        data: seriesData,
      },
    ],
  };

  return <ReactECharts option={options} />;
};

export default IncortaCrypto;
