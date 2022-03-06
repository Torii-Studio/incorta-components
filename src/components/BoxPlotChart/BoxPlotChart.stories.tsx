import React from "react";
import { object } from "@storybook/addon-knobs";

import { LIFE_EXPECTANCY_DATA } from "constants/sampleData";

import BoxPlotChart from "./BoxPlotChart";

const Story: any = {
  title: "BoxPlotChart",
  component: BoxPlotChart,
};

export const Playground = () => {
  const data = object("life_data", LIFE_EXPECTANCY_DATA);

  return <BoxPlotChart data={data} />;
};

export default Story;
