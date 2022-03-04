/* eslint-disable import/no-anonymous-default-export */
/**
 * Created by Torii Studio
 */
import { createUseStyles } from "react-jss";
import { useTheme } from "@mui/material/styles";

export default (styles) => styles && createUseStyles(styles(useTheme()))();
