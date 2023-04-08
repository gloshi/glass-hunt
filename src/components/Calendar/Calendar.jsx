import React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";


export default function Calendar({firstValue, setFirstValue,  value, setValue}) {
  const date = new Date();


  const dateFn = (dateSecs) => {
    if (dateSecs < 0) return;
    let day = dateSecs.getDate();
    let month = dateSecs.getMonth() + 1;
    let year = dateSecs.getFullYear();
    let currentDate = `${month}/${day}/${year}`;
    return currentDate;
  };

  // const getDaysBetweenDates = (date1, date2) => {
  //   if (!date1 || !date2) {
  //     console.log("не выбрана дата");
  //   } else {
  //     return (date2.$d.getTime() - date1.$d.getTime()) / (1000 * 60 * 60 * 24);
  //   }
  // };


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          value={firstValue}
          onChange={(newValue) => setFirstValue(newValue)}
          label="Check in"
          defaultValue={dayjs(dateFn(date))}
        />
        <DatePicker
          label="Check out"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
