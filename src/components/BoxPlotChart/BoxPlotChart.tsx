import React, { useMemo, useRef } from "react";
import isEmpty from "lodash/isEmpty";
import ReactECharts from "echarts-for-react";
import { registerTransform } from "echarts/core";

import { useScript, useFullViewport } from "hooks";
import { BASE_PLOT_CHART_OPTIONS } from "constants/general";

interface LocalProps {
  data?: Array<any>;
}

const BoxPlotChart = ({ data = [] }: LocalProps) => {
  const ref = useRef();
  const {
    rect: { width, height },
  } = useFullViewport(ref);

  const { isReady: isScriptLoaded } = useScript(
    "https://cdn.jsdelivr.net/npm/echarts-simple-transform/dist/ecSimpleTransform.min.js"
  );

  const options = useMemo(() => {
    if (!isScriptLoaded || isEmpty(data)) {
      return {};
    }

    registerTransform(window.ecSimpleTransform.aggregate);

    return {
      ...BASE_PLOT_CHART_OPTIONS,
      dataset: [
        ...BASE_PLOT_CHART_OPTIONS.dataset,
        {
          id: "raw",
          source: data,
        },
      ],
    };
  }, [data, isScriptLoaded]);

  return (
    <div ref={ref}>
      <ReactECharts option={options} style={{ width, height }} />
    </div>
  );
};

export default BoxPlotChart;
