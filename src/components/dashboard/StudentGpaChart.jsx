import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import ChartCard from './ChartCard';

const MOCK_DATA = [
    { name: '3.5-4.0', Students: 50 },
    { name: '3.0-3.49', Students: 65 },
    { name: '2.5-2.99', Students: 25 },
    { name: '2.0-2.49', Students: 10 },
];

const StudentGpaChart = () => {
  return (
    <ChartCard title="Student GPA Distribution">
      <div className="flex items-baseline mb-2">
        <p className="text-4xl font-bold">150</p>
        <p className="text-sm font-semibold text-green-600 ml-2">+8%</p>
      </div>
      <p className="text-xs text-slate-400 mb-4">Total Students Analyzed</p>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={MOCK_DATA} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <XAxis type="number" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis type="category" dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} width={80} />
          <Tooltip cursor={{ fill: 'rgba(241, 245, 249, 0.5)' }} contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }} />
          <Bar dataKey="Students" fill="#10b981" radius={[0, 4, 4, 0]} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default StudentGpaChart;