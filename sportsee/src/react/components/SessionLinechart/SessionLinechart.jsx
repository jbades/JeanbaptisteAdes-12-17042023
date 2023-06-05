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
                <XAxis dataKey="day" />
                <Tooltip />
                <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" dot={false} strokeWidth={1.5}/>
            </LineChart>
      </ResponsiveContainer>
    );
    }
  
  export default SessionLinechart