import { LineChart, Line, XAxis, Bar, Tooltip, ResponsiveContainer } from 'recharts';

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
                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" dot={false} strokeWidth={1.5}/>
                <Bar xAxisId="day" dataKey="day" fill="#000000"/>
            </LineChart>
      </ResponsiveContainer>
    );
    }
  
  export default SessionLinechart