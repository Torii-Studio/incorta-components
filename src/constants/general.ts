export const BASE_PLOT_CHART_OPTIONS = {
  dataset: [
    {
      id: "since_year",
      fromDatasetId: "raw",
      transform: [
        {
          type: "filter",
          config: {
            dimension: "Year",
            gte: 1950,
          },
        },
      ],
    },
    {
      id: "income_aggregate",
      fromDatasetId: "since_year",
      transform: [
        {
          type: "ecSimpleTransform:aggregate",
          config: {
            resultDimensions: [
              { name: "min", from: "Income", method: "min" },
              { name: "Q1", from: "Income", method: "Q1" },
              { name: "median", from: "Income", method: "median" },
              { name: "Q3", from: "Income", method: "Q3" },
              { name: "max", from: "Income", method: "max" },
              { name: "Country", from: "Country" },
            ],
            groupBy: "Country",
          },
        },
        {
          type: "sort",
          config: {
            dimension: "Q3",
            order: "asc",
          },
        },
      ],
    },
  ],
  title: {
    text: "Income since 1950",
  },
  tooltip: {
    trigger: "axis",
    confine: true,
  },
  xAxis: {
    name: "Income",
    nameLocation: "middle",
    nameGap: 30,
    scale: true,
  },
  yAxis: {
    type: "category",
  },
  grid: {
    bottom: 100,
  },
  legend: {
    selected: { detail: false },
  },
  dataZoom: [
    {
      type: "inside",
    },
    {
      type: "slider",
      height: 20,
    },
  ],
  series: [
    {
      name: "boxplot",
      type: "boxplot",
      datasetId: "income_aggregate",
      itemStyle: {
        color: "#b8c5f2",
      },
      encode: {
        x: ["min", "Q1", "median", "Q3", "max"],
        y: "Country",
        itemName: ["Country"],
        tooltip: ["min", "Q1", "median", "Q3", "max"],
      },
    },
    {
      name: "detail",
      type: "scatter",
      datasetId: "since_year",
      symbolSize: 6,
      tooltip: {
        trigger: "item",
      },
      label: {
        show: true,
        position: "top",
        align: "left",
        verticalAlign: "middle",
        rotate: 90,
        fontSize: 12,
      },
      itemStyle: {
        color: "#d00000",
      },
      encode: {
        x: "Income",
        y: "Country",
        label: "Year",
        itemName: "Year",
        tooltip: ["Country", "Year", "Income"],
      },
    },
  ],
}

export const BASE_CHART_OPTIONS = {
  grid: [
    {
      left: '10%',
      right: '8%',
      height: '50%'
    },
    {
      left: '10%',
      right: '8%',
      top: '63%',
      height: '16%'
    }
  ],
  yAxis: [
    {
      scale: true,
      splitArea: {
        show: true
      }
    }
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    },
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    textStyle: {
      color: '#000'
    }
  },
  axisPointer: {
    link: [
      {
        xAxisIndex: 'all'
      }
    ],
    label: {
      backgroundColor: '#777'
    }
  },
  dataZoom: [
    {
      type: 'inside',
      xAxisIndex: [0, 1],
      start: 20,
      end: 100
    }
  ]
};