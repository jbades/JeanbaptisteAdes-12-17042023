import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function ActivityBarchart ({data}) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                // width={500}
                // height={300}
                data={data}
                margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#9B9EAC" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="calories" fill="#000000" shape=""/>
                <Bar yAxisId="right" dataKey="kilogram" fill="#E60000"  shape=""/>
            </BarChart>
        </ResponsiveContainer>
    );
    }
  
  export default ActivityBarchart


