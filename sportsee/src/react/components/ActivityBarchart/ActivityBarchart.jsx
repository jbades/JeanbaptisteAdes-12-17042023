import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function ActivityBarchart ({data, minWeight, maxWeight}) {
        console.log(minWeight, maxWeight)
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid vertical={false} fillOpacity={0.5} />
                <XAxis dataKey="day" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" hide={true} />
                <YAxis yAxisId="right" orientation="right" stroke="#9B9EAC" domain={[minWeight, maxWeight]}/>
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="calories" fill="#000000" legendType="circle" shape=""/>
                <Bar yAxisId="right" dataKey="kilogram" fill="#E60000"  legendType="circle" shape=""/>
            </BarChart>
        </ResponsiveContainer>
    );
}
