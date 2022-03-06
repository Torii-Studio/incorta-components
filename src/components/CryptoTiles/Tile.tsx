import React from "react";
import clsx from "clsx";
import isEmpty from "lodash/isEmpty";

import { useStyles, useCryptoCoin } from "hooks";

import IconBox from "./IconBox";
import Sparkline from "./Sparkline";

import styles from "./CryptoTilesStyles";

interface TileProps {
  coinId: string;
}

// TODO: Need to allow for different currencies and locales
const ISO_4217_CODE = "USD";

// Queries cryptocurreny market data for a given coinID, formats a
// dashboard tile, periodicaly refreshes data.
const Tile: React.FC<TileProps> = ({ coinId }) => {
  const classes = useStyles(styles);

  const { coinData, noticeData, chartData } = useCryptoCoin({
    coinId,
    currency: ISO_4217_CODE,
  });

  // A rather naive number formatter
  // TODO: Refactor into a component
  const formatNumber = (
    parseableString: string,
    digits: number,
    style: string = "decimal",
    currency: string = "USD"
  ) => {
    let number = Number(parseableString);
    const negative = number < 0 ? "red" : "";
    if (style === "percent") number /= 100; // Assume number is already x 100
    return (
      <span className={clsx(negative && classes.red)}>
        {number.toLocaleString("default", {
          maximumSignificantDigits: digits,
          style: style,
          currency: currency,
        })}
      </span>
    );
  };

  // Renders an up or down arrow depending on the sign of the passed value
  // TODO: Rare, but what about an unchanged value?
  // TODO: Refactor into a reusable component
  const renderChangeArrow = (value: number) => {
    if (value < 0) {
      // red down arrow
      return (
        <svg
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 6.77874L0.525443 0.445833H10.4746L5.5 6.77874Z"
            fill="#F5222D"
            fill-opacity="0.5"
            stroke="#F5222D"
            stroke-width="0.891667"
          />
        </svg>
      );
    } else {
      //green up arrow
      return (
        <svg
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 0.581678L10.3631 6.77273L0.636871 6.77273L5.5 0.581678Z"
            fill="#009900"
            stroke="#006600"
          />
        </svg>
      );
    }
  };

  const renderCoinData = () =>
    !isEmpty(coinData) ? (
      <>
        <IconBox symbol={coinData.symbol} />
        <div className={classes.coinName}>{coinData.name}</div>
        <div className={classes.tradingPair}>
          {coinData.symbol.toUpperCase()}
          <span className={classes.lighter}>/{ISO_4217_CODE}</span>
        </div>

        <div className={classes.changeFrame}>
          {renderChangeArrow(
            Number(coinData.market_data.price_change_24h_in_currency.usd)
          )}
          <div>
            {formatNumber(
              coinData.market_data.price_change_percentage_24h,
              4,
              "percent"
            )}
          </div>
          {/* <div>
            {formatNumber(
              coinData.market_data.price_change_24h_in_currency.usd,
              6
            )}
          </div> */}
        </div>

        <div className={classes.price}>
          {formatNumber(
            coinData.market_data.current_price.usd,
            8,
            "currency",
            ISO_4217_CODE
          )}
        </div>
        <div className={classes.sparkline}>
          <Sparkline chartData={chartData} />
        </div>
      </>
    ) : (
      ""
    );

  return (
    <div className={classes.boundingBox}>
      {noticeData ? <p>{noticeData}</p> : renderCoinData()}
    </div>
  );
};

export default Tile;
