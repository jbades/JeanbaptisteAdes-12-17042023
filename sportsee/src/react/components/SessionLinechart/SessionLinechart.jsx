import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function SessionLinechart ({data}) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" />
            </LineChart>
      </ResponsiveContainer>
    );
    }
  
  export default SessionLinechart