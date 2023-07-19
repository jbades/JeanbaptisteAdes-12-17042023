import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

function LinechartTooltip ({ active, payload }) {
    if (active) {
        return (
        <div className="linechart-tooltip__wrapper">
            <p className="linechart-tooltip__text">{payload[0].value} min</p>
        </div>
      );
    }
    return null;
}

export default function SessionLinechart ({data}) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart 
                data={data} 
                onMouseMove={(e) => {
                    console.log(e)
                    if (e.isTooltipActive === true) {
                        let metricsContainer = document.querySelector('.session-linechart__wrapper .recharts-surface').clientWidth
                        let rightSideOfBullet = metricsContainer.clientWidth
                        console.log(rightSideOfBullet)
                    }
                }}
            >
                <XAxis 
                    dataKey="day" 
                    axisLine={false} 
                    tickLine={false} 
                    padding={{right:5, left:5}}
                />
                <Tooltip content={<LinechartTooltip />} />
                <Line 
                    type="monotone" 
                    dataKey="sessionLength" 
                    stroke="rgba(255, 255, 255, 0.6)" 
                    dot={false} strokeWidth={1.5} 
                    activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }} 
                />
            </LineChart>
      </ResponsiveContainer>
    );
    }