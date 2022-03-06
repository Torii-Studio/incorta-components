import React from "react";
import { object } from "@storybook/addon-knobs";

import { BITCOIN_HISTORICAL } from "constants/sampleData";

import CandlestickChart from "./CandlestickChart";

const Story: any = {
  title: "CandlestickChart",
  component: CandlestickChart,
};

export const Playground = () => {
  const data = object("historical_data", BITCOIN_HISTORICAL);

  return <CandlestickChart data={data} />;
};

export default Story;
