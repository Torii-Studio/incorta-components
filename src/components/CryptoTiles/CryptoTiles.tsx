import React from "react";

import Tile from "./Tile";

interface LocalProps {
  data?: Array<any>;
  maxTiles?: number;
}

const DEFAULT_MAX_TILES = 4;

const CryptoTiles = ({
  data = [],
  maxTiles = DEFAULT_MAX_TILES,
}: LocalProps) => {
  const holdings: { coinId: string; quantity: number }[] = data.map((cell) => ({
    coinId: cell.coinId,
    quantity: cell.quantity,
  }));

  // Render a tile for each row returned, up to the maxTiles setting
  const renderedTiles = holdings
    .slice(0, maxTiles)
    .map((cell) => <Tile key={cell.coinId} coinId={cell.coinId} />);

  return (
    <div>
      <div className="tiles">{renderedTiles}</div>
    </div>
  );
};

export default CryptoTiles;
