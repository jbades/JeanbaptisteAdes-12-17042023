import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const nodata=[{value: 100}]

function ScorePiechart ({data}) {
    return (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart className='piechart--wrapper'>
            <Pie
              dataKey="value"
              data={nodata}
              outerRadius={70}
              cx="50%" 
              cy="50%" 
              fill="#ffffff"
            />
            <Pie 
              dataKey="value" 
              data={data} 
              cx="50%" 
              cy="50%" 
              innerRadius={70} 
              outerRadius={80} 
            >
              {data.map((entry, index) =>
                index === 0 ? (
                  <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
                ) : (
                  <Cell key={`cell-${entry}`} fill="#FBFBFB" />
                )
              )}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
    );
  }
  
  export default ScorePiechart