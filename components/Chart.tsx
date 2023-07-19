import React from 'react'
import { LineChart, Line, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip,LabelList } from 'recharts';
import CustomTooltipContent from './CustomTooltipContent';

export default function Chart(props:any) {
    

    return (
        <ResponsiveContainer width="99%" height={300}>
            <LineChart width={600} height={1000} data={props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={3}  />
                <CartesianGrid stroke="" strokeDasharray="5 5" />
                <XAxis dataKey="name" >
                <LabelList dataKey="uv" position="top" />
                </XAxis>
                <YAxis tickCount={11} minTickGap={1} />
                <Tooltip content={<CustomTooltipContent />} />
            </LineChart>
        </ResponsiveContainer>
    )
}
