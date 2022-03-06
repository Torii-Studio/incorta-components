import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

interface CryptoPairProps {
  chartData: Array<any>;
}

// Given a coin identifier (bitcoin, ethereum) and a currency (USD) render a 24H sparkline
const Sparkline: React.FC<CryptoPairProps> = ({ chartData }) => (
  <Sparklines data={chartData} width={100} height={20}>
    <SparklinesLine color="blue" />
  </Sparklines>
);

export default Sparkline;
