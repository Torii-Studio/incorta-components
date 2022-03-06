import React, { useRef } from "react";
import ReactECharts from "echarts-for-react";

import { useFullViewport } from "hooks";
import { getFormattedDate } from "utils/general";
import { BASE_CHART_OPTIONS } from "constants/general";

interface LocalProps {
  data?: Array<any>;
}

const CandlestickChart = ({ data = [] }: LocalProps) => {
  const ref = useRef();

  const {
    rect: { width, height },
  } = useFullViewport(ref);

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
    ...BASE_CHART_OPTIONS,
    xAxis: {
      data: dateData,
    },
    series: [
      {
        type: "candlestick",
        data: seriesData,
      },
    ],
  };

  return (
    <div ref={ref}>
      <ReactECharts option={options} style={{ width, height }} />
    </div>
  );
};

export default CandlestickChart;
