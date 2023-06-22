import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function ActivityBarchart ({data, minWeight, maxWeight}) {
    for (let i = 0 ; i < data.length ; i ++)
    {data[i].day = i + 1;}

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                className='activity-barchart__chart'
                width={500}
                height={300}
                data={data}
                barGap={7} 
                barCategoryGap={25}
                margin={{
                    top: 40,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid vertical={false} fillOpacity={0.5} />
                <XAxis dataKey="day" tickLine={false}  />
                <YAxis yAxisId="calories" hide={true} />
                <YAxis yAxisId="kilograms" orientation="right" stroke="#9B9EAC" axisLine={false} tickLine={false} domain={[minWeight, maxWeight]}/>
                <Tooltip />
                <Legend />
                <Bar yAxisId="kilograms" dataKey="kilogram" fill="#000000" legendType="circle" radius={[50, 50, 0, 0]}/>
                <Bar yAxisId="calories" dataKey="calories" fill="#E60000" legendType="circle" radius={[50, 50, 0, 0]}/>
            </BarChart>
        </ResponsiveContainer>
    );
}
