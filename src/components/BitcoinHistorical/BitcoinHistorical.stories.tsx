import { object } from "@storybook/addon-knobs";
import { BITCOIN_HISTORICAL } from "../../constants/sampleData";
import BitcoinHistorical from "./BitcoinHistorical";

const Story = {
  title: "BitcoinHistorical",
  component: BitcoinHistorical,
};

export const Playground = () => {
  const data = object("historical_data", BITCOIN_HISTORICAL);

  return <BitcoinHistorical data={data} />;
};

export default Story;
