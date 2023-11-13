import React from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import styles from "./Calender.module.css"
function Calender() {
  return (
    <div className={styles.container}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker orientation="landscape" sx={{boxShadow:"4px 5px 4px 0px #5e5e5e"}}/>
      </LocalizationProvider>
    </div>
    )
}
export default Calender;
