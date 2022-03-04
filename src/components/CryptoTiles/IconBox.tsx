import React from "react";

import { useStyles } from "../../hooks";

import styles from "./CryptoTilesStyles";

interface IconProps {
  symbol: string;
}

// TODO: Relocate the CSS for this component here
const IconBox: React.FC<IconProps> = ({ symbol }) => {
  const classes = useStyles(styles);
  const iconUrl = `https://cryptoicon-api.vercel.app/api/icon/${symbol}`;

  return (
    <div className={classes.iconBox}>
      <img src={iconUrl} alt="Bitcoin icon" />
    </div>
  );
};

// To try the react-crypto-icons library, replace the img element with:
//<Icon name={symbol} size={96} />

export default IconBox;
