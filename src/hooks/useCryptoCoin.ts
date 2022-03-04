import { useState, useEffect } from "react";

import { CoinAPI } from '../api';

const INTERVAL_TIMEOUT_MS = 30000;

interface LocalProps {
  coinId: string;
  currency: string;
}
// See API documentation at https://www.coingecko.com/en/api/documentation
const useCryptoCoin = ({ coinId, currency }: LocalProps) => {
  const [coinData, setCoinData] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [noticeData, setNoticeData] = useState("Loading...");
  const [lastUpdate, setLastUpdate] = useState("");

  const fetchCoinData = async () => {
    try {
      if (!coinId) return

      const response = await CoinAPI.get(coinId, {
        params: {
          localization: false,
          tickers: false,
          market_data: true,
          community_data: false,
          developer_data: false,
        }
      });

      setCoinData(response.data);
      setNoticeData("");

      // This is to force a periodic read of the API
      const timer = setTimeout(() => {
        setLastUpdate(new Date().toUTCString());
      }, INTERVAL_TIMEOUT_MS); // 30 seconds

      // Cleanup timer if component unmounts
      return () => {
        clearTimeout(timer);
      };
    } catch (error: any) {
      setCoinData(null);
      setNoticeData(error?.response?.data?.error);
      console.error("API ERROR", error?.response?.data?.error);
    }
  };

  const fetchChartData = async () => {
    try {
      if (!coinId) return

      const response = await CoinAPI.get(`${coinId}/market_chart`, {
        params: {
          vs_currency: currency,
          days: 1,
          interval: "hourly",
        },
      });
      
      const prices: [] = response.data.prices;
      setChartData(prices.map((data) => data[1]));
  
      // This is to force a periodic read of the API
      const timer = setTimeout(() => {
        setLastUpdate(new Date().toUTCString());
      }, 3600000); // 1 hour
      // Cleanup timer if component unmounts
      return () => {
        clearTimeout(timer);
      };
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch the price data periodically
  useEffect(() => {
    fetchCoinData();
    fetchChartData()
  }, [lastUpdate]);

  return {
    coinData,
    chartData,
    noticeData,
  };
};

export default useCryptoCoin;
