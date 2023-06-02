import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

function ScorePiechart ({data}) {
  console.log(data)
    return (
      <div>
        <div>Avant</div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie 
              dataKey="value" 
              data={data} 
              cx={500} 
              cy={200} 
              innerRadius={40} 
              outerRadius={80} 
              fill="#82ca9d" />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
  export default ScorePiechart