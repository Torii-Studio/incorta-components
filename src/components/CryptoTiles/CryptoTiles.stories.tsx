import { number, object } from "@storybook/addon-knobs";
import { CRYPTO_COINS_DATA } from "../../constants/sampleData";
import CryptoTiles from "./CryptoTiles";

const Story = {
  title: "CryptoTiles",
  component: CryptoTiles,
};

export const Playground = () => {
  const maxTiles = number("maxTiles", 4);
  const data = object("crypto_data", CRYPTO_COINS_DATA);

  return <CryptoTiles data={data} maxTiles={maxTiles} />;
};

export default Story;
