import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function SkillsRadarchart ({data}) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart 
                cx="50%" 
                cy="50%" 
                outerRadius="60%" 
                data={data}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="kind"/>
                <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    )
}
  
export default SkillsRadarchart
