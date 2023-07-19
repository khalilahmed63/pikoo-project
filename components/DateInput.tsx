import React, { useState } from 'react'
import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";

export default function DateInput(props: any) {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="relative">
            <Flatpickr
                className='bg-white shadow-lg text-gray-900 sm:text-xs rounded-lg block w-24 p-2'
                // data-enable-time
                value={startDate}
                onChange={([date]) => setStartDate(date)}
                defaultValue={props.defaultValue}
            />
        </div>
    )
}
