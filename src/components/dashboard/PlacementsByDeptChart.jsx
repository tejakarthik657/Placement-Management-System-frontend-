import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import ChartCard from './ChartCard';

// In a real app, this data would be a prop or fetched via a hook
const MOCK_DATA = [
  { name: 'CompSci', Placements: 45 },
  { name: 'Electrical', Placements: 30 },
  { name: 'Mechanical', Placements: 25 },
  { name: 'Civil', Placements: 20 },
];

const PlacementsByDeptChart = () => {
  // const { data, isLoading } = usePlacementsByDept(); // Example of a data fetching hook

  return (
    <ChartCard title="Placements by Department">
      <div className="flex items-baseline mb-2">
        <p className="text-4xl font-bold">120</p>
        <p className="text-sm font-semibold text-green-600 ml-2">+10%</p>
      </div>
      <p className="text-xs text-slate-400 mb-4">2024 Placements</p>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={MOCK_DATA} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip cursor={{ fill: 'rgba(241, 245, 249, 0.5)' }} contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }} />
          <Bar dataKey="Placements" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default PlacementsByDeptChart;