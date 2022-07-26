import React, { Fragment, useState } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

function YearMonthPicker(props) {
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <Fragment>
            <div className="picker">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>

                    <DatePicker
                        views={["year"]}
                        label="Year only"
                        value={selectedDate}
                        maxDate={new Date()}
                        onChange={handleDateChange}
                        animateYearScrolling
                    />
                </MuiPickersUtilsProvider>


            </div>
        </Fragment>
    );
}

export default YearMonthPicker;