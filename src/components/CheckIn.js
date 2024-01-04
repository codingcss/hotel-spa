import React, { useState } from "react";

// datepicker
import DatePicker from "react-datepicker";

// datepicker css
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";

// icons
import { BsCalendar } from "react-icons/bs";

const CheckIn = () => {
  const [startDate, setStartDate] = useState(false);

  return (
    <div className="relative h-full ">
      {/* icon */}
      <div className="absolute right-2 top-7 z-10 pr-8 text-center ">
        <div>
          <BsCalendar className=" text-accent text-base  " />
        </div>
      </div>
      <DatePicker
        className="w-full h-full"
        selected={startDate}
        placeholderText="Check In"
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default CheckIn;
