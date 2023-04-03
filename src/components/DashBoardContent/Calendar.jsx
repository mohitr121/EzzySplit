import React , { useState }from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
const Calendar = (props) => {
  const [value, setValue] = useState(new Date());
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <StaticDatePicker orientation="portrait" 
        openTo='day'
        value={value}
        onChange={(newValue) => setValue(newValue)}
        // value={props.paymentDate}
    
        // onChange={
        //   (e)=>{
        //     const value = e.target.value;
        //     props.cngDate(value);
        //   }
        // }
       
    />
  </LocalizationProvider>
    
  );
}

export default Calendar