import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function BarchartTooltip ({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className="barchart-tooltip__wrapper">
          <p className="barchart-tooltip__text">{payload[0].value}kg</p>
          <p className="barchart-tooltip__text">{payload[1].value}Kcal</p>
        </div>
      );
    }
  
    return null;
};
  
const formatYAxisTick = (value) => {
    return Math.round(value);
};

function renderLegend ({ payload }) {
    console.log(payload)
    return (
        <div className="barchart-legend__wrapper">
            {(payload[0].value === "kilogram") && (<div className='barchart-legend__item'>
                <div className='barchart-legend__bullet kg'></div>
                <div className='barchart-legend__text'>Poids (kg)</div>
            </div>)}
            {(payload[1].value === "calories") && (<div className='barchart-legend__item'>
            <div className='barchart-legend__bullet kcal'></div>
                <div className='barchart-legend__text'>Calories (kCal)</div>
            </div>)}
        </div>
    );
}
  
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
                <XAxis dataKey="day" tickLine={false} />
                <YAxis yAxisId="calories" hide={true} />
                <YAxis 
                    yAxisId="kilograms" 
                    orientation="right" 
                    stroke="#9B9EAC" 
                    axisLine={false} 
                    type="number" 
                    tickLine={false} 
                    tickCount="4" 
                    tickFormatter={formatYAxisTick} 
                    domain={[minWeight, maxWeight]}
                />
                <Tooltip content={<BarchartTooltip />} />
                <Legend content={renderLegend}/>
                <Bar yAxisId="kilograms" dataKey="kilogram" fill="#000000" legendType="circle" radius={[50, 50, 0, 0]}/>
                <Bar yAxisId="calories" dataKey="calories" fill="#E60000" legendType="circle" radius={[50, 50, 0, 0]}/>
            </BarChart>
        </ResponsiveContainer>
    );
}
